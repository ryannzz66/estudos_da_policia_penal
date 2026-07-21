import React, { useState } from "react";
import { Subject, Topic, UserProgress } from "../types";
import { SYLLABUS_DATA } from "../data/syllabus";
import { QUESTIONS_DATA } from "../data/questions";
import { 
  CheckCircle2, 
  Circle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  PlayCircle, 
  Check, 
  FileCheck, 
  BookOpenCheck, 
  RefreshCw,
  HelpCircle as InfoIcon
} from "lucide-react";

interface SyllabusTreeProps {
  progress: UserProgress;
  onToggleTopicComplete: (topicId: string) => void;
  onSelectTopicForPractice: (subjectId: string, topicId: string) => void;
}

export default function SyllabusTree({ progress, onToggleTopicComplete, onSelectTopicForPractice }: SyllabusTreeProps) {
  const [expandedSubject, setExpandedSubject] = useState<string | null>("legislacao"); 
  const [showMacetes, setShowMacetes] = useState<Record<string, boolean>>({});

  const getQuestionCountForTopic = (topicId: string) => {
    return QUESTIONS_DATA.filter(q => q.topicId === topicId).length;
  };

  const getSubjectProgress = (subject: Subject) => {
    const totalTopics = subject.topics.length;
    if (totalTopics === 0) return { total: 0, completed: 0, percent: 0 };

    let completedTopicsCount = 0;
    subject.topics.forEach(t => {
      if (progress.completedTopics?.[t.id]) completedTopicsCount++;
    });

    const percent = Math.round((completedTopicsCount / totalTopics) * 100);

    return {
      total: totalTopics,
      completed: completedTopicsCount,
      percent
    };
  };

  const toggleExpand = (id: string) => {
    setExpandedSubject(expandedSubject === id ? null : id);
  };

  const toggleMacete = (topicId: string) => {
    setShowMacetes(prev => ({ ...prev, [topicId]: !prev[topicId] }));
  };

  return (
    <div className="space-y-6 animate-fade-in" id="syllabus-view">
      {/* Tab Header Info */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md space-y-4">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-450 rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-display font-black tracking-tight text-slate-800 dark:text-slate-100">
            Edital Verticalizado
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-4xl font-medium">
          Monitore o avanço do seu edital. Quando finalizar o estudo de um tópico (teoria e questões), marque a caixa correspondente para atualizar seu progresso geral.
        </p>
      </div>

      {/* Subjects Tree Accordion */}
      <div className="space-y-4" id="syllabus-accordion">
        {SYLLABUS_DATA.map(subject => {
          const { total, completed, percent } = getSubjectProgress(subject);
          const isExpanded = expandedSubject === subject.id;

          let accentColor = "border-l-blue-500 text-blue-600 dark:text-blue-400 bg-linear-to-r from-blue-50/50 to-transparent dark:from-blue-950/20";
          let progressBg = "bg-blue-600 shadow-xs shadow-blue-500/20";
          
          if (subject.id === "legislacao") {
            accentColor = "border-l-red-500 text-red-600 dark:text-red-400 bg-linear-to-r from-red-50/50 to-transparent dark:from-red-950/20";
            progressBg = "bg-red-600 shadow-xs shadow-red-500/20";
          } else if (subject.id === "raciocinio_logico") {
            accentColor = "border-l-amber-500 text-amber-600 dark:text-amber-400 bg-linear-to-r from-amber-50/50 to-transparent dark:from-amber-950/20";
            progressBg = "bg-amber-500 shadow-xs shadow-amber-500/20";
          } else if (subject.id === "informatica") {
            accentColor = "border-l-emerald-500 text-emerald-600 dark:text-emerald-400 bg-linear-to-r from-emerald-50/50 to-transparent dark:from-emerald-950/20";
            progressBg = "bg-emerald-500 shadow-xs shadow-emerald-500/20";
          } else if (subject.id === "conhecimentos_gerais") {
            accentColor = "border-l-slate-500 text-slate-700 dark:text-slate-300 bg-linear-to-r from-slate-100/40 to-transparent dark:from-slate-800/20";
            progressBg = "bg-slate-700 shadow-xs shadow-slate-500/20";
          }

          return (
            <div key={subject.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
              <div 
                onClick={() => toggleExpand(subject.id)}
                className={`p-4.5 border-l-5 ${accentColor} flex items-center justify-between cursor-pointer hover:bg-slate-50/60 dark:hover:bg-slate-850/40 transition-colors select-none`}
              >
                <div className="flex items-center gap-3">
                  <div className="space-y-0.5">
                    <h3 className="font-display font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 flex flex-wrap items-center gap-2">
                      {subject.title}
                      {percent === 100 && (
                        <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
                          GABARITADO!
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold">{subject.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${progressBg} rounded-full`} style={{ width: `${percent}%` }}></div>
                    </div>
                    <span className="text-xs font-mono font-black text-slate-600 dark:text-slate-400">
                      Progresso: {percent}%
                    </span>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {isExpanded && (
                <div className="border-t border-slate-100 dark:border-slate-800/80">
                  <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-slate-50/50 dark:bg-slate-850/40 border-b border-slate-150/40 dark:border-slate-800/50 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest items-center">
                    <div className="col-span-8">Tópico / Conteúdo do Edital</div>
                    <div className="col-span-2 text-center border-l border-slate-200/50 dark:border-slate-800/40">Concluído</div>
                    <div className="col-span-2 text-center border-l border-slate-200/50 dark:border-slate-800/40">Exercícios</div>
                  </div>

                  <div className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-950">
                    {subject.topics.map(topic => {
                      const qCount = getQuestionCountForTopic(topic.id);
                      const isCompleted = !!progress.completedTopics?.[topic.id];
                      const isMaceteActive = showMacetes[topic.id];

                      return (
                        <div key={topic.id} className="hover:bg-slate-50/20 dark:hover:bg-slate-900/10 transition-colors">
                          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-4 items-center">
                            
                            {/* Col 1: Topic details (8 columns) */}
                            <div className="col-span-8 space-y-2 pr-4">
                              <div className="flex items-start gap-2.5">
                                <span className="font-bold text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-snug">
                                  {topic.title}
                                </span>
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full shrink-0 tracking-wider ${
                                  topic.importance === "Alta" ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/15" :
                                  topic.importance === "Média" ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/15" :
                                  "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700/40"
                                }`}>
                                  {topic.importance === "Alta" ? "Prioritário" : `Relevância ${topic.importance}`}
                                </span>
                              </div>

                              {topic.summary && (
                                <p className="text-xs text-slate-450 dark:text-slate-500 font-medium leading-relaxed">
                                  {topic.summary}
                                </p>
                              )}

                              {topic.macete && (
                                <div className="space-y-1.5 pt-0.5">
                                  <button 
                                    onClick={() => toggleMacete(topic.id)}
                                    className="text-[10px] text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-bold flex items-center gap-1 cursor-pointer"
                                  >
                                    <span className="underline">
                                      {isMaceteActive ? "Ocultar macete e mnemônico" : "Ver macete e mnemônico de estudo"}
                                    </span>
                                  </button>

                                  {isMaceteActive && (
                                    <div className="border-l-3 border-indigo-500/60 pl-3.5 py-2 bg-indigo-50/10 dark:bg-indigo-950/10 rounded-r-xl max-w-xl animate-fade-in border-t border-r border-b border-indigo-500/5 dark:border-indigo-500/2">
                                      <span className="text-[9px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-1">Mnemônico de Memorização:</span>
                                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic font-medium">"{topic.macete}"</p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Col 2: Checkbox (2 columns) */}
                            <div className="col-span-2 flex justify-center border-l border-slate-100 dark:border-slate-800/60 h-full py-1 items-center">
                              <button
                                onClick={() => onToggleTopicComplete(topic.id)}
                                className={`w-8 h-8 rounded-md border-2 transition-all cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 ${
                                  isCompleted 
                                    ? "bg-emerald-500 border-emerald-500 text-white shadow-xs shadow-emerald-500/20" 
                                    : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 hover:border-emerald-400"
                                }`}
                                title="Marcar como concluído"
                              >
                                {isCompleted && <Check className="w-5 h-5 font-bold" />}
                              </button>
                            </div>

                            {/* Col 3: Practice (2 columns) */}
                            <div className="col-span-2 flex flex-col items-center gap-1.5 border-l border-slate-100 dark:border-slate-800/60 h-full py-1 justify-center">
                              {qCount > 0 ? (
                                <button
                                  onClick={() => onSelectTopicForPractice(subject.id, topic.id)}
                                  className="text-[10px] font-black text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 cursor-pointer bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 px-3 py-1.5 rounded-lg transition-colors"
                                  title={`Praticar ${qCount} questões`}
                                >
                                  <PlayCircle className="w-4 h-4 text-indigo-550 shrink-0" />
                                  <span>Treinar ({qCount})</span>
                                </button>
                              ) : (
                                <span className="text-[10px] text-slate-400 dark:text-slate-550 italic font-semibold">Sem simulado</span>
                              )}
                            </div>
                          </div>

                          {/* Mobile Layout */}
                          <div className="md:hidden p-4.5 space-y-4 bg-white dark:bg-slate-950">
                            <div className="space-y-1">
                              <div className="flex flex-wrap items-start gap-1.5 justify-between">
                                <span className="font-bold text-xs text-slate-800 dark:text-slate-200 leading-snug pr-2">
                                  {topic.title}
                                </span>
                                <button
                                  onClick={() => onToggleTopicComplete(topic.id)}
                                  className={`w-7 h-7 rounded-md border-2 shrink-0 transition-all cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 ${
                                    isCompleted 
                                      ? "bg-emerald-500 border-emerald-500 text-white shadow-xs" 
                                      : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
                                  }`}
                                >
                                  {isCompleted && <Check className="w-4 h-4 font-bold" />}
                                </button>
                              </div>
                              {topic.summary && (
                                <p className="text-[11px] text-slate-450 dark:text-slate-500 leading-relaxed font-semibold">
                                  {topic.summary}
                                </p>
                              )}
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-slate-100/60 dark:border-slate-800/60">
                              {topic.macete ? (
                                <button
                                  onClick={() => toggleMacete(topic.id)}
                                  className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1"
                                >
                                  <span>{isMaceteActive ? "Ocultar mnemônico" : "Ver mnemônico"}</span>
                                </button>
                              ) : <div/>}

                              {qCount > 0 ? (
                                <button
                                  onClick={() => onSelectTopicForPractice(subject.id, topic.id)}
                                  className="py-1 px-3 rounded-lg text-[10px] font-black bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-150 dark:border-indigo-900 text-indigo-700 dark:text-indigo-400 flex items-center gap-1 cursor-pointer"
                                >
                                  <PlayCircle className="w-3.5 h-3.5 shrink-0" />
                                  <span>Treinar ({qCount})</span>
                                </button>
                              ) : (
                                <span className="text-[10px] text-slate-400 dark:text-slate-550 italic font-bold">Sem simulado</span>
                              )}
                            </div>
                            
                            {isMaceteActive && topic.macete && (
                              <div className="mt-2 border-l-3 border-indigo-400 pl-3 py-1.5 bg-indigo-50/10 dark:bg-indigo-950/10 rounded-r-xl text-[11px] text-slate-600 dark:text-slate-350 italic font-semibold leading-relaxed">
                                "{topic.macete}"
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
