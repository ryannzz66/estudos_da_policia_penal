/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Question, SubjectId, UserProgress, RevisionCard } from "../types";
import { QUESTIONS_DATA } from "../data/questions";
import { SYLLABUS_DATA } from "../data/syllabus";
import { auth, db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import AddQuestionsModal from "./AddQuestionsModal";
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  BookOpen, 
  HelpCircle, 
  RotateCcw,
  Clock,
  Sparkles,
  Filter,
  CheckCircle2,
  BookmarkCheck,
  Percent,
  CalendarClock,
  AlertTriangle,
  Check,
  RefreshCw,
  ChevronDown,
  Plus,
  Trash2
} from "lucide-react";

interface QuestionSimulatorProps {
  selectedSubjectId?: SubjectId | null;
  selectedTopicId?: string | null;
  singleRevisionQuestion?: string | null;
  onChangeSubject?: (subjectId: SubjectId | null) => void;
  onChangeTopic?: (topicId: string | null) => void;
  progress: UserProgress;
  onAnswer: (questionId: string, correct: boolean) => void;
  onClearFilter: () => void;
  revisions: RevisionCard[];
  onForceScheduleRevision: (questionId: string) => void;
  onActiveQuestionChange?: (questionId: string) => void;
  onToggleTopicCompleted: (topicId: string) => void;
  onHideQuestionForMe: (questionId: string) => void;
  onResetAllQuestions: () => void;
}

export default function QuestionSimulator({ 
  selectedSubjectId, 
  selectedTopicId, 
  singleRevisionQuestion,
  onChangeSubject,
  onChangeTopic,
  progress, 
  onAnswer, 
  onClearFilter,
  revisions,
  onForceScheduleRevision,
  onActiveQuestionChange,
  onToggleTopicCompleted,
  onHideQuestionForMe,
  onResetAllQuestions
}: QuestionSimulatorProps) {
  
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [forceShowExplanation, setForceShowExplanation] = useState<boolean>(false);
  const autoNextTimerRef = useRef<number | null>(null);
  const lastActiveQuestionIdRef = useRef<string | null | undefined>(progress.lastActiveQuestionId);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [customQuestions, setCustomQuestions] = useState<Question[]>([]);
  const allQuestions = useMemo(() => [...QUESTIONS_DATA, ...customQuestions], [customQuestions]);
  const visibleQuestions = useMemo(
    () => allQuestions.filter(q => !progress.hiddenQuestionIds?.[q.id]),
    [allQuestions, progress.hiddenQuestionIds]
  );

  const fetchCustomQuestions = async () => {
    try {
      const qs = await getDocs(collection(db, "custom_questions"));
      const loaded: Question[] = [];
      qs.forEach(doc => {
        loaded.push({ id: doc.id, ...doc.data() } as Question);
      });
      setCustomQuestions(loaded);
    } catch (e) {
      console.error("Error fetching custom questions", e);
    }
  };

  useEffect(() => {
    fetchCustomQuestions();
  }, []);

  useEffect(() => {
    lastActiveQuestionIdRef.current = progress.lastActiveQuestionId;
  }, [progress.lastActiveQuestionId]);

  useEffect(() => {
    return () => {
      if (autoNextTimerRef.current !== null) {
        window.clearTimeout(autoNextTimerRef.current);
      }
    };
  }, []);

  // Sync and filter logic
  useEffect(() => {
    let list = [...visibleQuestions];
    if (singleRevisionQuestion) {
      list = list.filter(q => q.id === singleRevisionQuestion);
    } else {
      if (selectedSubjectId) {
        list = list.filter(q => q.subjectId === selectedSubjectId);
      }
      if (selectedTopicId) {
        list = list.filter(q => q.topicId === selectedTopicId);
      }
    }
    
    setFilteredQuestions(list);
    
    let initialIdx = 0;
    if (lastActiveQuestionIdRef.current) {
      const savedIdx = list.findIndex(q => q.id === lastActiveQuestionIdRef.current);
      if (savedIdx !== -1) {
        initialIdx = savedIdx;
      }
    }
    
    const newCurrentQuestion = list[initialIdx];
    const prevCurrentId = currentQuestion ? currentQuestion.id : null;

    setCurrentIdx(initialIdx);

    // If the active question did not change, avoid resetting answer state
    if (prevCurrentId !== newCurrentQuestion?.id) {
      setSelectedOption(null);
      setIsAnswered(false);
      setForceShowExplanation(false);
    }
  }, [selectedSubjectId, selectedTopicId, singleRevisionQuestion, visibleQuestions]);

  const currentQuestion = filteredQuestions[currentIdx];

  // Notify parent of active question change
  useEffect(() => {
    if (currentQuestion && onActiveQuestionChange) {
      onActiveQuestionChange(currentQuestion.id);
    }
  }, [currentIdx, filteredQuestions, onActiveQuestionChange]);

  // Calculate local user stats for current selection
  const currentSelectionQuestions = visibleQuestions.filter(q => {
    if (selectedSubjectId && q.subjectId !== selectedSubjectId) return false;
    if (selectedTopicId && q.topicId !== selectedTopicId) return false;
    return true;
  });

  const currentTotalCount = currentSelectionQuestions.length;
  const solvedInSelection = currentSelectionQuestions.filter(q => progress.answeredQuestions[q.id] !== undefined);
  const correctInSelection = currentSelectionQuestions.filter(q => progress.answeredQuestions[q.id] === true);
  const selectionAccuracy = solvedInSelection.length > 0 
    ? Math.round((correctInSelection.length / solvedInSelection.length) * 100) 
    : 0;

  const handleOptionClick = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const playCorrectSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sine';
      // Satisfying ping/chime sound
      oscillator.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      oscillator.frequency.exponentialRampToValueAtTime(880.00, audioCtx.currentTime + 0.1); // A5
      
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      // Ignore audio errors if browser blocks it
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return;
    
    const isCorrect = selectedOption === currentQuestion.correctOptionIndex;
    setIsAnswered(true);
    setForceShowExplanation(true);
    if (isCorrect) {
      playCorrectSound();
    }
    onAnswer(currentQuestion.id, isCorrect);

    if (autoNextTimerRef.current !== null) {
      window.clearTimeout(autoNextTimerRef.current);
    }

    autoNextTimerRef.current = window.setTimeout(() => {
      handleNext();
    }, 1500);
  };

  const handleNext = () => {
    if (autoNextTimerRef.current !== null) {
      window.clearTimeout(autoNextTimerRef.current);
      autoNextTimerRef.current = null;
    }

    setSelectedOption(null);
    setIsAnswered(false);
    setForceShowExplanation(false);
    if (currentIdx + 1 < filteredQuestions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Loop back to start
      setCurrentIdx(0);
    }
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value === "all" ? null : e.target.value as SubjectId;
    if (onChangeSubject) {
      onChangeSubject(val);
    }
    if (onChangeTopic) {
      onChangeTopic(null); // Reset topic when subject changes
    }
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value === "all" ? null : e.target.value;
    if (onChangeTopic) {
      onChangeTopic(val);
    }
  };

  // Get active topic list for current subject selection
  const availableTopics = selectedSubjectId 
    ? SYLLABUS_DATA.find(s => s.id === selectedSubjectId)?.topics || []
    : [];

  const renderFilterPanel = () => {
    return (
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 p-6 md:p-7 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md space-y-5">
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-slate-850 dark:text-slate-100 font-display font-black text-sm uppercase tracking-wide">
            <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
              <Filter className="w-4 h-4" />
            </div>
            Filtrar Questões por Tópico ou Lei do Edital
          </div>
          <div className="flex flex-wrap items-center gap-3 justify-end sm:justify-start">
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-white dark:hover:text-white hover:bg-indigo-500 hover:border-indigo-600 dark:hover:bg-indigo-900/40 transition-all flex items-center gap-1.5 cursor-pointer bg-indigo-50/50 dark:bg-indigo-950/10 px-3 py-2 rounded-xl border border-indigo-150/45 dark:border-indigo-900/30"
            >
              <Plus className="w-3.5 h-3.5" /> Importar Questões (IA)
            </button>
            {(selectedSubjectId || selectedTopicId) && (
              <button 
                onClick={onClearFilter}
                className="text-xs font-bold text-slate-450 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> Limpar Filtro
              </button>
            )}
            <button 
              onClick={onResetAllQuestions}
              className="text-xs font-bold text-red-650 dark:text-red-400 hover:text-white dark:hover:text-white hover:bg-red-500 hover:border-red-600 dark:hover:bg-red-900/40 transition-all flex items-center gap-1.5 cursor-pointer bg-red-50/50 dark:bg-red-950/10 px-3 py-2 rounded-xl border border-red-150/45 dark:border-red-900/30"
              title="Apagar todas as respostas e começar do zero"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Recomeçar do Zero
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-4 space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Matéria do Edital</label>
            <div className="relative">
              <select 
                value={selectedSubjectId || "all"} 
                onChange={handleSubjectChange}
                className="w-full text-xs font-semibold p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/60 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all cursor-pointer appearance-none"
              >
                <option value="all">Todas as Matérias</option>
                {SYLLABUS_DATA.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-1.5">
            <label className="text-[10px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-widest block">Lei / Tópico Específico</label>
            <div className="relative">
              <select 
                value={selectedTopicId || "all"} 
                onChange={handleTopicChange}
                disabled={!selectedSubjectId}
                className="w-full text-xs font-semibold p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/60 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
              >
                <option value="all">Todos os Tópicos</option>
                {availableTopics.map(t => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick filter statistics display */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-3 border-t sm:border-t-0 sm:border-l border-slate-150 dark:border-slate-800 pt-3 sm:pt-0 sm:pl-5">
            <div className="flex flex-col justify-center space-y-0.5">
              <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Filtrado</span>
              <span className="text-sm font-black text-slate-850 dark:text-slate-100 font-mono tracking-tight">{currentTotalCount} qst.</span>
            </div>
            <div className="flex flex-col justify-center space-y-0.5">
              <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Feitas</span>
              <span className="text-sm font-black text-slate-850 dark:text-slate-100 font-mono tracking-tight">{solvedInSelection.length} <span className="text-xs text-slate-400">/ {currentSelectionQuestions.length}</span></span>
            </div>
            <div className="flex flex-col justify-center space-y-0.5">
              <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block font-sans">Aproveitamento</span>
              <span className="text-sm font-black text-indigo-600 dark:text-indigo-400 font-mono flex items-center gap-0.5">
                {selectionAccuracy}% <Percent className="w-3.5 h-3.5 text-indigo-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render option helper
  const cleanOptionText = (opt: string) => {
    if (opt.startsWith("A) ") || opt.startsWith("B) ") || opt.startsWith("C) ") || opt.startsWith("D) ") || opt.startsWith("E) ")) {
      return opt.slice(3);
    }
    return opt;
  };

  const totalCount = filteredQuestions.length;

  if (filteredQuestions.length === 0) {
    return (
      <div className="space-y-6 animate-fade-in" id="questions-tab-empty">
        {renderFilterPanel()}

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-8 text-center space-y-4 shadow-xs" id="questions-empty">
          <HelpCircle className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base">Nenhuma questão disponível</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed font-medium">
            Não encontramos questões que correspondam a esse filtro específico atualmente. Escolha outro tópico ou limpe os filtros para treinar com o banco completo.
          </p>
          <button 
            onClick={onClearFilter}
            className="text-xs font-bold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer transition-colors"
          >
            Ver Todo o Banco de Questões
          </button>
        </div>
      </div>
    );
  }

  const isScheduled = currentQuestion ? revisions.some(r => r.questionId === currentQuestion.id) : false;
  const activeSubject = SYLLABUS_DATA.find(s => s.id === currentQuestion.subjectId);

  return (
    <div className="space-y-6 animate-fade-in font-sans" id="question-simulator">
      {/* 1. Integrated Dropdown Filter Panel */}
      {renderFilterPanel()}

      {/* 2. Side-by-Side Edital Selection & Questions Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Interactive Left Checklist Panel */}
        <div className="lg:col-span-1 space-y-4">
          {selectedSubjectId ? (
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Leis & Tópicos ({availableTopics.length})
                </span>
                <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                  {availableTopics.filter(t => !!progress.completedTopics[t.id]).length} Concluídos
                </span>
              </div>
              
              <div className="space-y-1.5 max-h-[480px] overflow-y-auto pr-1">
                {availableTopics.map(t => {
                  const isTopicCompleted = !!progress.completedTopics[t.id];
                  const isSelected = selectedTopicId === t.id;
                  return (
                    <div 
                      key={t.id}
                      className={`group flex items-start gap-2.5 p-2 rounded-lg border transition-all text-left ${
                        isSelected 
                          ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200" 
                          : "border-slate-100/70 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {/* Square check box to mark studied/completed (O quadrado solicitado pelo usuário) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleTopicCompleted(t.id);
                        }}
                        className={`mt-0.5 w-4.5 h-4.5 rounded border flex items-center justify-center cursor-pointer shrink-0 transition-all ${
                          isTopicCompleted 
                            ? "border-emerald-500 bg-emerald-500 text-white" 
                            : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-indigo-500"
                        }`}
                        title={isTopicCompleted ? "Marcar lei como não concluída" : "Marcar lei como concluída/estudada!"}
                      >
                        {isTopicCompleted && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                      
                      {/* Topic selection click trigger */}
                      <button
                        type="button"
                        onClick={() => onChangeTopic && onChangeTopic(isSelected ? null : t.id)}
                        className={`flex-1 text-[11px] font-semibold leading-relaxed text-left cursor-pointer select-none hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                          isTopicCompleted ? "text-slate-400 line-through font-normal" : "text-slate-700 dark:text-slate-300"
                        }`}
                        title="Clique para praticar questões deste assunto"
                      >
                        {t.title}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs text-center space-y-3">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/50 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-5 h-5 text-indigo-500" />
              </div>
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Checklist Rápido do Edital</h4>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed">
                Selecione uma Matéria no filtro acima para carregar o checklist com as leis e matérias específicas! Você poderá marcar seu progresso em quadrados diretamente aqui enquanto resolve as questões.
              </p>
            </div>
          )}
        </div>

        {/* 3. Main Question Container Card */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs overflow-hidden">
            {/* Card Header metadata */}
            <div className="bg-slate-50/80 dark:bg-slate-850/80 px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide font-mono bg-slate-200/50 dark:bg-slate-800 px-2.5 py-1 rounded-sm">
                  Questão {currentIdx + 1} de {totalCount}
                </span>
                {currentQuestion.lawReference && (
                  <span className="text-xs font-bold bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-900/40 px-2 py-0.5 rounded-sm">
                    {currentQuestion.lawReference}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 flex-wrap">
                {/* Manual scheduling button for future revisions */}
                {isScheduled ? (
                  <span className="text-[10px] sm:text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 animate-fade-in">
                    <CalendarClock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    Direcionada para Revisões Futuras! 🚀
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => onForceScheduleRevision(currentQuestion.id)}
                    className="text-[10px] sm:text-[11px] font-bold text-amber-800 dark:text-amber-300 hover:text-white bg-amber-50 dark:bg-amber-950/20 hover:bg-amber-500 dark:hover:bg-amber-600 border border-amber-200 dark:border-amber-900/40 px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:scale-[1.01] active:scale-95 duration-100"
                    title="Acha que pode errar esta questão na prova? Direcione automaticamente para suas revisões futuras agendadas!"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Acho que posso errar na prova! Agendar Revisão</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => onHideQuestionForMe(currentQuestion.id)}
                  className="text-[10px] sm:text-[11px] font-bold text-red-700 dark:text-red-300 hover:text-white bg-red-50 dark:bg-red-950/20 hover:bg-red-500 dark:hover:bg-red-600 border border-red-200 dark:border-red-900/40 px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:scale-[1.01] active:scale-95 duration-100"
                  title="Excluir esta pergunta apenas da sua conta"
                >
                  <Trash2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>Excluir para mim</span>
                </button>

                <span className="text-xs font-bold font-mono text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 px-2.5 py-1 rounded-md">
                  Tópico: {currentQuestion.articleOrSubtopic}
                </span>
              </div>
            </div>

            {/* Statement */}
            <div className="p-6 space-y-6">
              <div className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed font-sans whitespace-pre-wrap">
                {currentQuestion.statement}
              </div>

              {/* Options */}
              <div className="space-y-3" id="options-container">
                {currentQuestion.options.map((option, idx) => {
                  let optionStyle = "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-900 hover:bg-slate-50/50 dark:hover:bg-slate-850 hover:shadow-sm hover:scale-[1.005] active:scale-[0.995]";
                  let badgeStyle = "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700";
                  
                  if (selectedOption === idx) {
                    optionStyle = "border-indigo-600 dark:border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-900 dark:text-indigo-200 font-bold shadow-md shadow-indigo-500/5 hover:scale-[1.005] active:scale-[0.995]";
                    badgeStyle = "bg-indigo-600 text-white border-indigo-700";
                  }

                  if (isAnswered) {
                    // Highlight correct and wrong options
                    if (idx === currentQuestion.correctOptionIndex) {
                      optionStyle = "border-emerald-500 dark:border-emerald-500 bg-emerald-500/10 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-250 font-bold shadow-sm shadow-emerald-500/5 opacity-100";
                      badgeStyle = "bg-emerald-500 text-white border-emerald-600";
                    } else if (selectedOption === idx) {
                      optionStyle = "border-red-500 dark:border-red-500 bg-red-500/10 dark:bg-red-950/30 text-red-900 dark:text-red-250 shadow-sm shadow-red-500/5 opacity-100";
                      badgeStyle = "bg-red-500 text-white border-red-600";
                    } else {
                      optionStyle = "border-slate-150 dark:border-slate-850/80 bg-slate-50/50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-550 opacity-50 cursor-not-allowed";
                      badgeStyle = "bg-slate-100 dark:bg-slate-850 text-slate-400 dark:text-slate-500 border-slate-200/50 dark:border-slate-800/40";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border flex items-start gap-3.5 transition-all duration-200 cursor-pointer ${optionStyle}`}
                    >
                      <span className={`w-6.5 h-6.5 shrink-0 rounded-full flex items-center justify-center text-xs font-black font-mono shadow-xs transition-all ${badgeStyle}`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-xs sm:text-sm pt-0.5 leading-relaxed font-semibold">{cleanOptionText(option)}</span>
                    </button>
                  );
                })}
              </div>

              {/* Submit/Next Control bar */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-5">
                <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {(isAnswered || forceShowExplanation) ? "Estude a justificativa fundamentada do artigo abaixo." : "Selecione uma alternativa acima para responder."}
                </div>

                {(isAnswered || forceShowExplanation) ? (
                  <button
                    onClick={handleNext}
                    className="text-xs font-bold px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 flex items-center gap-1.5 cursor-pointer transition-colors"
                    id="next-question-btn"
                  >
                    Próxima Questão
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                    className={`text-xs font-bold px-6 py-2.5 rounded-lg transition-all flex items-center gap-1.5 ${
                      selectedOption !== null 
                        ? "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer" 
                        : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                    }`}
                    id="submit-answer-btn"
                  >
                    Confirmar Resposta
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 3. Detailed Explanation Panel */}
          {(isAnswered || forceShowExplanation) && (
            <div className="space-y-4 animate-slide-up">
              {/* Active Error repetition trigger explanation */}
              {selectedOption !== currentQuestion.correctOptionIndex ? (
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-xl p-4 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-red-800 dark:text-red-300 uppercase tracking-wider">Adicionado ao Caderno de Erros!</h4>
                    <p className="text-xs text-red-700 dark:text-red-400 leading-relaxed font-medium">
                      Como você errou, o sistema agendou esta questão na sua <strong>Repetição Espaçada (Revisão ativa em 24h)</strong>. Estude os detalhes do artigo/justificativa abaixo para fixar o assunto!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">Gabaritou! Parabéns!</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed font-medium">
                      Você dominou os requisitos teóricos exigidos pela banca. Leia a fundamentação abaixo para certificar e solidificar sua linha de raciocínio.
                    </p>
                  </div>
                </div>
              )}

              {/* Pedagogy explanation */}
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 space-y-3 shadow-xs">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  Justificativa de Artigo & Comentário Pedagógico
                </h4>
                
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-2 whitespace-pre-wrap font-medium">
                  {currentQuestion.explanation}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      <AddQuestionsModal 
        isOpen={isAddModalOpen} 
        onClose={() => {
          setIsAddModalOpen(false);
          fetchCustomQuestions();
        }} 
      />
    </div>
  );
}
