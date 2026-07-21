/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { SubjectId, UserProgress, RevisionCard, StudyHistoryEntry } from "./types";
import { SYLLABUS_DATA } from "./data/syllabus";
import { QUESTIONS_DATA } from "./data/questions";
import Dashboard from "./components/Dashboard";
import SyllabusTree from "./components/SyllabusTree";
import QuestionSimulator from "./components/QuestionSimulator";
import MnemonicMacetes from "./components/MnemonicMacetes";
import RevisionManager from "./components/RevisionManager";
import AuthManager from "./components/AuthManager";
import logo from '../assets/logo.png';
import { auth, db, handleFirestoreError, OperationType } from "./lib/firebase";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { 
  FileText, 
  Cpu, 
  Monitor, 
  Shield, 
  Lock, 
  BookOpen, 
  Clock, 
  Award, 
  CheckCircle2, 
  Menu, 
  X,
  User,
  Heart,
  HelpCircle,
  Cloud,
  RefreshCw,
  Sun,
  Moon
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("pprs_dark_mode") === "true";
  });

  // Toggle .dark class on html root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("pprs_dark_mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("pprs_dark_mode", "false");
    }
  }, [isDarkMode]);

  // Filter keys for practicing questions
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [singleRevisionQuestion, setSingleRevisionQuestion] = useState<string | null>(null);

  // Core state persisted to localStorage
  const [progress, setProgress] = useState<UserProgress>({
    answeredQuestions: {},
    completedTopics: {},
    hiddenQuestionIds: {},
    streak: 0,
    history: []
  });

  const [revisions, setRevisions] = useState<RevisionCard[]>([]);
  
  // Firebase Auth and Sync States
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("pprs_study_progress");
    const savedRevisions = localStorage.getItem("pprs_study_revisions");
    
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setProgress(parsed);
        if (parsed.lastSelectedSubjectId !== undefined) {
          setSelectedSubjectId(parsed.lastSelectedSubjectId);
        }
        if (parsed.lastSelectedTopicId !== undefined) {
          setSelectedTopicId(parsed.lastSelectedTopicId);
        }
        if (parsed.lastActiveTab !== undefined) {
          setActiveTab(parsed.lastActiveTab);
        }
        if (parsed.lastSingleRevisionQuestionId !== undefined) {
          setSingleRevisionQuestion(parsed.lastSingleRevisionQuestionId);
        }
      } catch (e) {
        console.error("Error loading progress:", e);
      }
    } else {
      // Bootstrap with 1 day streak for new users to feel welcomed
      setProgress({
        answeredQuestions: {},
        completedTopics: {},
        hiddenQuestionIds: {},
        streak: 1,
        history: []
      });
    }

    if (savedRevisions) {
      try {
        setRevisions(JSON.parse(savedRevisions));
      } catch (e) {
        console.error("Error loading revisions:", e);
      }
    }
  }, []);

  // Sync helpers to Firestore
  const syncToFirestore = async (userId: string, p: UserProgress, r: RevisionCard[]) => {
    try {
      try {
        await setDoc(doc(db, "user_progress", userId), {
          answeredQuestions: p.answeredQuestions || {},
          completedTopics: p.completedTopics || {},
          hiddenQuestionIds: p.hiddenQuestionIds || {},
          pdf1Topics: p.pdf1Topics || {},
          pdf2Topics: p.pdf2Topics || {},
          r1Topics: p.r1Topics || {},
          r2Topics: p.r2Topics || {},
          r3Topics: p.r3Topics || {},
          controleTopics: p.controleTopics || {},
          streak: p.streak || 0,
          lastActiveDate: p.lastActiveDate || "",
          history: p.history || [],
          lastActiveQuestionId: p.lastActiveQuestionId || null,
          lastSelectedSubjectId: p.lastSelectedSubjectId || null,
          lastSelectedTopicId: p.lastSelectedTopicId || null,
          lastActiveTab: p.lastActiveTab || null,
          lastSingleRevisionQuestionId: p.lastSingleRevisionQuestionId || null,
          updatedAt: serverTimestamp()
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, `user_progress/${userId}`);
      }

      try {
        await setDoc(doc(db, "user_revisions", userId), {
          revisions: r || [],
          updatedAt: serverTimestamp()
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, `user_revisions/${userId}`);
      }
    } catch (err) {
      console.error("Error syncing to Firestore:", err);
    }
  };

  // Helper to merge local state and remote progress state
  const mergeProgressStates = (local: UserProgress, remote: UserProgress | null): UserProgress => {
    if (!remote) return local;

    const mergeMap = (m1: Record<string, any> = {}, m2: Record<string, any> = {}) => {
      return { ...m1, ...m2 };
    };

    // Merge history array (deduping by entry id)
    const historyMap = new Map<string, StudyHistoryEntry>();
    (local.history || []).forEach(item => historyMap.set(item.id, item));
    (remote.history || []).forEach(item => historyMap.set(item.id, item));
    const mergedHistory = Array.from(historyMap.values()).sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return {
      answeredQuestions: mergeMap(local.answeredQuestions, remote.answeredQuestions) as Record<string, boolean>,
      completedTopics: mergeMap(local.completedTopics, remote.completedTopics) as Record<string, boolean>,
      hiddenQuestionIds: mergeMap(local.hiddenQuestionIds, remote.hiddenQuestionIds) as Record<string, boolean>,
      pdf1Topics: mergeMap(local.pdf1Topics, remote.pdf1Topics) as Record<string, boolean>,
      pdf2Topics: mergeMap(local.pdf2Topics, remote.pdf2Topics) as Record<string, boolean>,
      r1Topics: mergeMap(local.r1Topics, remote.r1Topics) as Record<string, boolean>,
      r2Topics: mergeMap(local.r2Topics, remote.r2Topics) as Record<string, boolean>,
      r3Topics: mergeMap(local.r3Topics, remote.r3Topics) as Record<string, boolean>,
      controleTopics: mergeMap(local.controleTopics, remote.controleTopics) as Record<string, boolean>,
      streak: Math.max(local.streak || 0, remote.streak || 0),
      lastActiveDate: (local.lastActiveDate && remote.lastActiveDate) 
        ? (new Date(local.lastActiveDate) > new Date(remote.lastActiveDate) ? local.lastActiveDate : remote.lastActiveDate)
        : (local.lastActiveDate || remote.lastActiveDate || ""),
      history: mergedHistory,
      lastActiveQuestionId: remote?.lastActiveQuestionId !== undefined ? remote.lastActiveQuestionId : local.lastActiveQuestionId || null,
      lastSelectedSubjectId: remote?.lastSelectedSubjectId !== undefined ? remote.lastSelectedSubjectId : local.lastSelectedSubjectId || null,
      lastSelectedTopicId: remote?.lastSelectedTopicId !== undefined ? remote.lastSelectedTopicId : local.lastSelectedTopicId || null,
      lastActiveTab: remote?.lastActiveTab !== undefined ? remote.lastActiveTab : local.lastActiveTab || null,
      lastSingleRevisionQuestionId: remote?.lastSingleRevisionQuestionId !== undefined ? remote.lastSingleRevisionQuestionId : local.lastSingleRevisionQuestionId || null
    };
  };

  const mergeRevisionsStates = (local: RevisionCard[], remote: RevisionCard[] | null): RevisionCard[] => {
    if (!remote) return local;

    const revisionMap = new Map<string, RevisionCard>();
    local.forEach(card => {
      revisionMap.set(card.questionId, card);
    });
    remote.forEach(card => {
      const existing = revisionMap.get(card.questionId);
      if (!existing || card.intervalHours > existing.intervalHours) {
        revisionMap.set(card.questionId, card);
      }
    });

    return Array.from(revisionMap.values());
  };

  // Auth State Listener & Real-time Cloud Sync
  useEffect(() => {
    let unsubscribeProgress: (() => void) | null = null;
    let unsubscribeRevisions: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (fUser) => {
      setFirebaseUser(fUser);
      
      // Clear previous real-time listeners if user changes or logs out
      if (unsubscribeProgress) {
        unsubscribeProgress();
        unsubscribeProgress = null;
      }
      if (unsubscribeRevisions) {
        unsubscribeRevisions();
        unsubscribeRevisions = null;
      }

      if (fUser) {
        setIsSyncing(true);
        try {
          // 1. Setup real-time listener for user_progress
          unsubscribeProgress = onSnapshot(doc(db, "user_progress", fUser.uid), (docSnap) => {
            if (docSnap.exists()) {
              const cloudData = docSnap.data();
              const finalProgress: UserProgress = {
                answeredQuestions: cloudData.answeredQuestions || {},
                completedTopics: cloudData.completedTopics || {},
                hiddenQuestionIds: cloudData.hiddenQuestionIds || {},
                pdf1Topics: cloudData.pdf1Topics || {},
                pdf2Topics: cloudData.pdf2Topics || {},
                r1Topics: cloudData.r1Topics || {},
                r2Topics: cloudData.r2Topics || {},
                r3Topics: cloudData.r3Topics || {},
                controleTopics: cloudData.controleTopics || {},
                streak: cloudData.streak || 0,
                lastActiveDate: cloudData.lastActiveDate || "",
                history: cloudData.history || [],
                lastActiveQuestionId: cloudData.lastActiveQuestionId || null,
                lastSelectedSubjectId: cloudData.lastSelectedSubjectId || null,
                lastSelectedTopicId: cloudData.lastSelectedTopicId || null,
                lastActiveTab: cloudData.lastActiveTab || null,
                lastSingleRevisionQuestionId: cloudData.lastSingleRevisionQuestionId || null
              };

              setProgress(finalProgress);
              localStorage.setItem("pprs_study_progress", JSON.stringify(finalProgress));

              if (finalProgress.lastSelectedSubjectId !== undefined && finalProgress.lastSelectedSubjectId !== null) {
                setSelectedSubjectId(finalProgress.lastSelectedSubjectId);
              }
              if (finalProgress.lastSelectedTopicId !== undefined && finalProgress.lastSelectedTopicId !== null) {
                setSelectedTopicId(finalProgress.lastSelectedTopicId);
              }
            } else {
              // First time logging in with an empty cloud profile:
              // Migrate current local progress to the cloud so they don't lose anything!
              const localProgressStr = localStorage.getItem("pprs_study_progress");
              const localRevisionsStr = localStorage.getItem("pprs_study_revisions");

              const finalProgress = localProgressStr 
                ? JSON.parse(localProgressStr) 
                : { answeredQuestions: {}, completedTopics: {}, hiddenQuestionIds: {}, streak: 1, history: [] };
              
              const finalRevisions = localRevisionsStr 
                ? JSON.parse(localRevisionsStr) 
                : [];

              syncToFirestore(fUser.uid, finalProgress, finalRevisions);
            }
            setIsSyncing(false);
          }, (err) => {
            handleFirestoreError(err, OperationType.GET, `user_progress/${fUser.uid}`);
            setIsSyncing(false);
          });

          // 2. Setup real-time listener for user_revisions
          unsubscribeRevisions = onSnapshot(doc(db, "user_revisions", fUser.uid), (docSnap) => {
            if (docSnap.exists()) {
              const rData = docSnap.data();
              const finalRevisions = rData.revisions || [];
              setRevisions(finalRevisions);
              localStorage.setItem("pprs_study_revisions", JSON.stringify(finalRevisions));
            } else {
              setRevisions([]);
            }
          }, (err) => {
            handleFirestoreError(err, OperationType.GET, `user_revisions/${fUser.uid}`);
          });

        } catch (e) {
          console.error("Error setting up real-time sync listeners:", e);
          setIsSyncing(false);
        }
      } else {
        // Logged out
        setIsSyncing(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeProgress) unsubscribeProgress();
      if (unsubscribeRevisions) unsubscribeRevisions();
    };
  }, []);

  // Handler to force merge local progress into cloud (called by AuthManager on successful login/sign up)
  const handleMergeProgressOnLogin = async () => {
    // Avoid double-running merge to prevent race conditions; onAuthStateChanged is the single source of truth.
    console.log("Merge requested; handled securely by unified auth state listener");
  };

  // Sync state values to LocalStorage and Firestore helper in a unified atomic way
  const saveProgressAndRevisions = (newProgress: UserProgress, newRevisions: RevisionCard[]) => {
    setProgress(newProgress);
    setRevisions(newRevisions);
    localStorage.setItem("pprs_study_progress", JSON.stringify(newProgress));
    localStorage.setItem("pprs_study_revisions", JSON.stringify(newRevisions));
    if (auth.currentUser) {
      syncToFirestore(auth.currentUser.uid, newProgress, newRevisions);
    }
  };

  const saveProgress = (newProgress: UserProgress) => {
    saveProgressAndRevisions(newProgress, revisions);
  };

  const saveRevisions = (newRevisions: RevisionCard[]) => {
    saveProgressAndRevisions(progress, newRevisions);
  };

  // Toggle topic completed/studied directly from the questions or selection UI
  const handleToggleTopicCompleted = (topicId: string) => {
    const isCompleted = !!progress.completedTopics[topicId];
    const updatedCompleted = {
      ...progress.completedTopics,
      [topicId]: !isCompleted
    };
    
    // Also toggle controleTopics to sync back with SyllabusTree's verticalized columns
    const updatedControle = {
      ...(progress.controleTopics || {}),
      [topicId]: !isCompleted
    };

    saveProgress({
      ...progress,
      completedTopics: updatedCompleted,
      controleTopics: updatedControle
    });
  };

  // Restart / Reset all questions solved back to zero
  const handleResetAllQuestions = () => {
    const confirmReset = window.confirm("Deseja realmente recomeçar a resolver as questões do zero? Isso limpará todas as questões resolvidas de seu histórico e progresso.");
    if (!confirmReset) return;

    const updatedProgress: UserProgress = {
      ...progress,
      answeredQuestions: {},
      history: []
    };
    saveProgressAndRevisions(updatedProgress, []);
    alert("Progresso reiniciado com sucesso! Agora você pode resolver todas as questões novamente.");
  };

  const handleToggleTopicComplete = (topicId: string) => {
    const currentCompleted = progress.completedTopics || {};
    const isChecked = !!currentCompleted[topicId];
    
    saveProgress({
      ...progress,
      completedTopics: {
        ...currentCompleted,
        [topicId]: !isChecked
      }
    });
  };

  const handleHideQuestionForMe = (questionId: string) => {
    const question = QUESTIONS_DATA.find(q => q.id === questionId);
    const confirmHide = window.confirm(
      question
        ? `Tem certeza que deseja excluir esta pergunta da sua conta?\n\n${question.statement.slice(0, 140)}${question.statement.length > 140 ? "..." : ""}`
        : "Tem certeza que deseja excluir esta pergunta da sua conta?"
    );

    if (!confirmHide) return;

    saveProgress({
      ...progress,
      hiddenQuestionIds: {
        ...(progress.hiddenQuestionIds || {}),
        [questionId]: true
      }
    });
  };

  // Handle answering question in the simulator
  const handleAnswerQuestion = (questionId: string, correct: boolean) => {
    const timestamp = new Date().toISOString();
    
    // Log history entry
    const newEntry: StudyHistoryEntry = {
      id: `hist-${Math.random().toString(36).substr(2, 9)}`,
      questionId,
      subjectId: QUESTIONS_DATA.find(q => q.id === questionId)?.subjectId || SubjectId.LEGISLACAO,
      articleOrSubtopic: QUESTIONS_DATA.find(q => q.id === questionId)?.articleOrSubtopic || "",
      correct,
      timestamp
    };

    // Calculate streak
    let currentStreak = progress.streak === 0 ? 1 : progress.streak;
    const todayStr = timestamp.split("T")[0];
    if (progress.lastActiveDate && progress.lastActiveDate !== todayStr) {
      const lastDate = new Date(progress.lastActiveDate);
      const diffTime = Math.abs(new Date(todayStr).getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        currentStreak += 1;
      } else if (diffDays > 1) {
        currentStreak = 1;
      }
    } else if (!progress.lastActiveDate) {
      currentStreak = 1;
    }

    const updatedProgress: UserProgress = {
      ...progress,
      answeredQuestions: {
        ...progress.answeredQuestions,
        [questionId]: correct
      },
      streak: currentStreak,
      lastActiveDate: todayStr,
      history: [newEntry, ...progress.history]
    };

    // Spaced Repetition System logic
    const existingCardIdx = revisions.findIndex(r => r.questionId === questionId);
    let updatedRevisions = [...revisions];

    if (correct) {
      if (existingCardIdx !== -1) {
        // Answered correct during active revision. Graduate card!
        const card = revisions[existingCardIdx];
        if (card.intervalHours >= 360) {
          // Mastered fully (graduated past 15 days). Remove card
          updatedRevisions.splice(existingCardIdx, 1);
        } else {
          // Progress interval: 24h -> 168h (7 days) -> 360h (15 days)
          const nextInterval = card.intervalHours === 24 ? 168 : 360;
          const nextScheduledDate = new Date();
          nextScheduledDate.setHours(nextScheduledDate.getHours() + nextInterval);
          
          updatedRevisions[existingCardIdx] = {
            ...card,
            intervalHours: nextInterval,
            scheduledFor: nextScheduledDate.toISOString(),
            lastAttempted: timestamp
          };
        }
      }
    } else {
      // Incorrect answer. Add card or reset
      if (existingCardIdx !== -1) {
        // Reset card to first stage (24h)
        const nextScheduledDate = new Date();
        nextScheduledDate.setHours(nextScheduledDate.getHours() + 24);
        updatedRevisions[existingCardIdx] = {
          ...revisions[existingCardIdx],
          intervalHours: 24,
          scheduledFor: nextScheduledDate.toISOString(),
          lastAttempted: timestamp
        };
      } else {
        // Create new Spaced Repetition Card (initial due: 24h)
        const nextScheduledDate = new Date();
        nextScheduledDate.setHours(nextScheduledDate.getHours() + 24);
        
        const newCard: RevisionCard = {
          id: `rev-${Math.random().toString(36).substr(2, 9)}`,
          questionId,
          intervalHours: 24,
          scheduledFor: nextScheduledDate.toISOString(),
          createdAt: timestamp,
          lastAttempted: timestamp
        };
        updatedRevisions.unshift(newCard);
      }
    }
    
    // Save both atomically to prevent stale race conditions!
    saveProgressAndRevisions(updatedProgress, updatedRevisions);
  };

  // Force schedule a question to future revisions (manual bookmarking)
  const handleForceScheduleRevision = (questionId: string) => {
    const existingCardIdx = revisions.findIndex(r => r.questionId === questionId);
    let updatedRevisions = [...revisions];
    const timestamp = new Date().toISOString();
    const nextScheduledDate = new Date();
    // Default initial due is 24 hours from now
    nextScheduledDate.setHours(nextScheduledDate.getHours() + 24);

    if (existingCardIdx !== -1) {
      // Already scheduled, reset to 24h as a quick refresher
      const existingCard = revisions[existingCardIdx];
      updatedRevisions[existingCardIdx] = {
        ...existingCard,
        intervalHours: 24,
        scheduledFor: nextScheduledDate.toISOString(),
        lastAttempted: timestamp
      };
    } else {
      // Create a brand new Spaced Repetition Card (initial due 24h)
      const newCard: RevisionCard = {
        id: `rev-${Math.random().toString(36).substr(2, 9)}`,
        questionId,
        intervalHours: 24,
        scheduledFor: nextScheduledDate.toISOString(),
        createdAt: timestamp,
        lastAttempted: timestamp
      };
      updatedRevisions.unshift(newCard);
    }
    saveProgressAndRevisions(progress, updatedRevisions);
  };

  // Remove card from error list manually
  const handleRemoveRevision = (cardId: string) => {
    const updated = revisions.filter(r => r.id !== cardId);
    saveRevisions(updated);
  };

  // Force expire card to instantly trigger review status for simulation
  const handleForceExpiry = (cardId: string) => {
    const updated = revisions.map(r => {
      if (r.id === cardId) {
        // Set schedule to 1 hour in the past so it becomes due now
        const pastDate = new Date();
        pastDate.setHours(pastDate.getHours() - 1);
        return {
          ...r,
          scheduledFor: pastDate.toISOString()
        };
      }
      return r;
    });
    saveRevisions(updated);
  };

  // Wrapper for state persistence
  const changeSelectedSubject = (subjectId: SubjectId | null) => {
    setSelectedSubjectId(subjectId);
    saveProgress({
      ...progress,
      lastSelectedSubjectId: subjectId
    });
  };

  const changeSelectedTopic = (topicId: string | null) => {
    setSelectedTopicId(topicId);
    saveProgress({
      ...progress,
      lastSelectedTopicId: topicId
    });
  };

  const handleActiveQuestionChange = (questionId: string) => {
    if (progress.lastActiveQuestionId === questionId) return;
    saveProgress({
      ...progress,
      lastActiveQuestionId: questionId
    });
  };

  // Direct practicing shortcut from edital list or cards
  const handleSelectTopicForPractice = (subjectId: string, topicId: string) => {
    setSelectedSubjectId(subjectId as SubjectId);
    setSelectedTopicId(topicId);
    setSingleRevisionQuestion(null);
    setActiveTab("questoes");
    saveProgress({
      ...progress,
      lastSelectedSubjectId: subjectId as SubjectId,
      lastSelectedTopicId: topicId,
      lastActiveQuestionId: null,
      lastActiveTab: "questoes",
      lastSingleRevisionQuestionId: null
    });
  };

  // Spaced Repetition Direct Retry
  const handleRetryQuestion = (questionId: string) => {
    setSingleRevisionQuestion(questionId);
    setSelectedSubjectId(null);
    setSelectedTopicId(null);
    setActiveTab("questoes");
    saveProgress({
      ...progress,
      lastSelectedSubjectId: null,
      lastSelectedTopicId: null,
      lastActiveQuestionId: questionId,
      lastActiveTab: "questoes",
      lastSingleRevisionQuestionId: questionId
    });
  };

  const handleClearPracticeFilters = () => {
    setSelectedSubjectId(null);
    setSelectedTopicId(null);
    setSingleRevisionQuestion(null);
    saveProgress({
      ...progress,
      lastSelectedSubjectId: null,
      lastSelectedTopicId: null,
      lastActiveQuestionId: null,
      lastSingleRevisionQuestionId: null
    });
  };

  // Navigating links helper
  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
    saveProgress({
      ...progress,
      lastActiveTab: tab
    });
  };

  // Sidebar Menu Items
  const menuItems = [
    { id: "dashboard", label: "Dashboard Inicial", icon: Award },
    { id: "edital", label: "Edital Verticalizado", icon: BookOpen },
    { id: "questoes", label: "Praticar Questões", icon: HelpCircle },
    { id: "revisoes", label: "Caderno de Erros", icon: Clock, count: revisions.filter(r => new Date(r.scheduledFor) <= new Date()).length },
    { id: "macetes", label: "Conteúdo & Macetes", icon: FileText },
    { id: "sincronizar", label: "Sincronizar Nuvem", icon: Cloud }
  ];

  // Dynamically filter questions array if single question retry is active
  const activeQuestionsList = singleRevisionQuestion 
    ? QUESTIONS_DATA.filter(q => q.id === singleRevisionQuestion)
    : QUESTIONS_DATA;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-250" id="app-root">
      
      {/* Off-canvas sidebar for Mobile view */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden" id="mobile-sidebar-overlay">
          <div 
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 transition-opacity"
          ></div>
          
          <div className="relative flex flex-col w-72 max-w-xs bg-slate-900 text-white p-6 space-y-6">
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
              <img src={logo} alt="PPRS" className="w-8 h-8 object-contain shrink-0 rounded-sm" />
              <div>
                <span className="font-black text-sm tracking-tight text-white block">PPRS PREP</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Polícia Penal RS</span>
              </div>
            </div>

            <nav className="flex-1 space-y-1">
              {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      isActive 
                        ? "bg-indigo-600 text-white" 
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="w-4 h-4 shrink-0" />
                      {item.label}
                    </span>
                    {!!item.count && item.count > 0 && (
                      <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0">
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <button 
              onClick={() => handleNavigate("sincronizar")}
              className="border-t border-slate-800 pt-4 flex items-center gap-3 w-full text-left hover:opacity-90 cursor-pointer transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-sm text-indigo-300">
                {firebaseUser?.email ? firebaseUser.email.charAt(0).toUpperCase() : "PPRS"}
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-xs block text-slate-200 truncate">
                  {firebaseUser ? firebaseUser.email : "Gabaritando Concurso"}
                </span>
                <span className="text-[10px] text-slate-500 block truncate">
                  {firebaseUser ? "Sincronizado" : "Rian Phillippe"}
                </span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Persistent Sidebar for Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-slate-900 text-white p-6 shrink-0 border-r border-slate-800 justify-between">
        <div className="space-y-6">
          {/* Brand header */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
            <img src={logo} alt="PPRS" className="w-8 h-8 object-contain shrink-0 rounded-sm" />
            <div>
              <span className="font-black text-sm tracking-tight text-white block">PPRS PREP</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Polícia Penal RS</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {menuItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    isActive 
                      ? "bg-indigo-600 text-white shadow-sm" 
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </span>
                  {!!item.count && item.count > 0 && (
                    <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card info */}
        <button 
          onClick={() => handleNavigate("sincronizar")}
          className="border-t border-slate-800 pt-4 flex items-center gap-3 w-full text-left hover:opacity-90 cursor-pointer transition-opacity"
        >
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-sm text-indigo-300">
            {firebaseUser?.email ? firebaseUser.email.charAt(0).toUpperCase() : "PPRS"}
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-bold text-xs block text-slate-200 truncate">
              {firebaseUser ? firebaseUser.email : "Gabaritando Concurso"}
            </span>
            <span className="text-[10px] text-slate-500 block truncate">
              {firebaseUser ? "Sincronizado" : "Rian Phillippe"}
            </span>
          </div>
        </button>
      </aside>

      {/* Main Content Workspace Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 transition-colors">
        
        {/* Top Header bar with status indicators */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-10 shrink-0 transition-colors">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200 capitalize">
              {activeTab === "dashboard" ? "Painel de Controle" :
               activeTab === "edital" ? "Edital Verticalizado" :
               activeTab === "questoes" ? "Resolução de Questões por Artigo" :
               activeTab === "revisoes" ? "Caderno de Erros (Repetição Espaçada)" :
               activeTab === "sincronizar" ? "Sincronização em Nuvem" :
               "Conteúdo de Apoio & Macetes"}
            </h2>
          </div>

          {/* Quick Metrics Indicators */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isSyncing && (
              <div className="flex items-center gap-1 text-[10px] text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded-md font-medium animate-pulse">
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span className="hidden sm:inline">Sincronizando...</span>
              </div>
            )}

            {/* Beautiful Dark Mode Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 sm:p-2 rounded-full border border-slate-200 dark:border-slate-750 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer flex items-center justify-center shrink-0"
              title={isDarkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
              id="dark-mode-toggle"
            >
              {isDarkMode ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500" />
              )}
            </button>
            
            <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 px-2.5 py-1.5 sm:px-3 rounded-full border border-emerald-100 dark:border-emerald-900/40 shrink-0">
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{progress.streak} {progress.streak === 1 ? "Dia" : "Dias"}</span>
            </div>

            <button 
              onClick={() => handleNavigate("sincronizar")}
              className={`flex items-center gap-1.5 text-[11px] sm:text-xs px-2.5 py-1.5 sm:px-3 rounded-full border transition-all cursor-pointer shrink-0 ${
                firebaseUser 
                  ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100/70 font-semibold"
                  : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 font-semibold"
              }`}
            >
              {firebaseUser ? (
                <>
                  <Cloud className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-500 shrink-0" />
                  <span className="font-semibold truncate max-w-[80px] sm:max-w-[120px]">{firebaseUser.email}</span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                  <span className="hidden sm:inline font-semibold">Sincronizar</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Tab view area */}
        <main className="flex-1 overflow-y-auto p-6 max-w-7xl w-full mx-auto">
          {activeTab === "dashboard" && (
            <Dashboard 
              progress={progress}
              revisions={revisions}
              onNavigate={handleNavigate}
            />
          )}

          {activeTab === "edital" && (
            <SyllabusTree 
              progress={progress}
              onToggleTopicComplete={handleToggleTopicComplete}
              onSelectTopicForPractice={handleSelectTopicForPractice}
            />
          )}

          {activeTab === "questoes" && (
            <QuestionSimulator 
              selectedSubjectId={selectedSubjectId}
              selectedTopicId={selectedTopicId}
              singleRevisionQuestion={singleRevisionQuestion}
              onChangeSubject={changeSelectedSubject}
              onChangeTopic={changeSelectedTopic}
              progress={progress}
              onAnswer={handleAnswerQuestion}
              onClearFilter={handleClearPracticeFilters}
              revisions={revisions}
              onForceScheduleRevision={handleForceScheduleRevision}
              onActiveQuestionChange={handleActiveQuestionChange}
              onToggleTopicCompleted={handleToggleTopicCompleted}
              onHideQuestionForMe={handleHideQuestionForMe}
              onResetAllQuestions={handleResetAllQuestions}
            />
          )}

          {activeTab === "revisoes" && (
            <RevisionManager 
              revisions={revisions}
              onRetryQuestion={handleRetryQuestion}
              onRemoveRevision={handleRemoveRevision}
              onForceExpiry={handleForceExpiry}
              progress={progress}
            />
          )}

          {activeTab === "macetes" && (
            <MnemonicMacetes />
          )}

          {activeTab === "sincronizar" && (
            <AuthManager 
              user={firebaseUser}
              onMergeProgress={handleMergeProgressOnLogin}
              isLoading={isSyncing}
              progress={progress}
              revisions={revisions}
              onImportData={(p, r) => {
                saveProgress(p);
                saveRevisions(r);
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}
