/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { RevisionCard, Question, UserProgress } from "../types";
import { QUESTIONS_DATA } from "../data/questions";
import { SYLLABUS_DATA } from "../data/syllabus";
import { 
  Clock, 
  PlayCircle, 
  Trash2, 
  CheckCircle2, 
  HelpCircle,
  AlertCircle,
  TrendingUp,
  FastForward,
  BookOpen,
  Calendar,
  Eye,
  EyeOff
} from "lucide-react";

interface RevisionManagerProps {
  revisions: RevisionCard[];
  onRetryQuestion: (questionId: string) => void;
  onRemoveRevision: (cardId: string) => void;
  onForceExpiry: (cardId: string) => void;
  progress?: UserProgress;
}

export default function RevisionManager({ 
  revisions, 
  onRetryQuestion, 
  onRemoveRevision, 
  onForceExpiry,
  progress
}: RevisionManagerProps) {
  
  const [activeTab, setActiveTab] = useState<"pending" | "scheduled" | "all-errors">("pending");
  const [expandedExplanation, setExpandedExplanation] = useState<Record<string, boolean>>({});

  const getQuestionInfo = (questionId: string): Question | undefined => {
    return QUESTIONS_DATA.find(q => q.id === questionId);
  };

  const getSubjectColor = (subjectId?: string) => {
    if (subjectId === "legislacao") return "bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-400 border-red-200 dark:border-red-900/40";
    if (subjectId === "portuguese") return "bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400 border-blue-200 dark:border-blue-900/40";
    if (subjectId === "raciocinio_logico") return "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-900/40";
    if (subjectId === "informatica") return "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/40";
    return "bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700";
  };

  const now = new Date();

  // Split revisions into pending (ready to practice) and future scheduled revisions
  const pendingRevisions = revisions.filter(rev => new Date(rev.scheduledFor) <= now);
  const scheduledRevisions = revisions.filter(rev => new Date(rev.scheduledFor) > now);

  // Extract total errors from history
  const historyErrors = progress?.history?.filter(h => !h.correct) || [];
  const uniqueErrorQuestionIds = Array.from(new Set(historyErrors.map(h => h.questionId)));

  const displayList = activeTab === "pending" ? pendingRevisions : scheduledRevisions;

  const getIntervalLabel = (hours: number) => {
    if (hours <= 24) return "Etapa 1 (24h)";
    if (hours <= 168) return "Etapa 2 (7 Dias)";
    if (hours <= 360) return "Etapa 3 (15 Dias)";
    return `Etapa Avançada (${Math.round(hours / 24)} Dias)`;
  };

  const toggleExplanation = (questionId: string) => {
    setExpandedExplanation(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in" id="revisions-view">
      {/* Informative Header card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <Clock className="w-5.5 h-5.5 text-indigo-500" />
          Sistema de Repetição Espaçada & Caderno de Erros
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
          Toda vez que você erra uma questão, a plataforma armazena o item aqui de forma inteligente. Ao refazer e acertar a questão na data programada, ela avança nas etapas de memorização (24h → 7 dias → 15 dias). Se você errar, o ciclo recomeça, assegurando a fixação definitiva do artigo ou regra.
        </p>
      </div>

      {/* Tabs list (Pending vs Scheduled vs All Errors) */}
      <div className="flex flex-wrap border-b border-slate-100 dark:border-slate-800 gap-1 sm:gap-0">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "pending" 
              ? "border-indigo-600 text-indigo-600 dark:text-indigo-400" 
              : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          Prontas para Revisão
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            pendingRevisions.length > 0 ? "bg-red-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-450"
          }`}>
            {pendingRevisions.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("scheduled")}
          className={`px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "scheduled" 
              ? "border-indigo-600 text-indigo-600 dark:text-indigo-400" 
              : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          Revisões Futuras Agendadas
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-450">
            {scheduledRevisions.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("all-errors")}
          className={`px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "all-errors" 
              ? "border-indigo-600 text-indigo-600 dark:text-indigo-400" 
              : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          Caderno Geral de Erros
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            uniqueErrorQuestionIds.length > 0 ? "bg-red-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-450"
          }`}>
            {uniqueErrorQuestionIds.length}
          </span>
        </button>
      </div>

      {/* Main revisions displaying container */}
      <div className="space-y-4" id="revisions-list-container">
        {activeTab !== "all-errors" ? (
          displayList.map(card => {
            const qInfo = getQuestionInfo(card.questionId);
            if (!qInfo) return null;
            
            const subjectInfo = SYLLABUS_DATA.find(s => s.id === qInfo.subjectId);
            const isPending = new Date(card.scheduledFor) <= now;
            const timeLeftHours = Math.max(0, Math.round((new Date(card.scheduledFor).getTime() - now.getTime()) / (1000 * 60 * 60)));

            return (
              <div key={card.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Question metadata on the left */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border ${getSubjectColor(qInfo.subjectId)}`}>
                      {subjectInfo?.shortTitle}
                    </span>
                    <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-sm">
                      {qInfo.articleOrSubtopic}
                    </span>
                    <span className="text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-400 px-2 py-0.5 rounded-sm flex items-center gap-1 border border-indigo-100 dark:border-indigo-900/40">
                      <Clock className="w-3 h-3" />
                      {getIntervalLabel(card.intervalHours)}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm line-clamp-2">
                      {qInfo.statement}
                    </h4>
                    {qInfo.lawReference && (
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Referência Legal: {qInfo.lawReference}</p>
                    )}
                  </div>
                </div>

                {/* Action controls on the right */}
                <div className="flex flex-wrap items-center md:flex-col md:items-end justify-between md:justify-center gap-2 shrink-0 border-t md:border-t-0 dark:border-slate-800 pt-3 md:pt-0 self-stretch md:self-auto">
                  <div className="text-right">
                    {isPending ? (
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">Disponível!</span>
                    ) : (
                      <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 block">
                        Disponível em ~{timeLeftHours}h
                      </span>
                    )}
                    <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono block">
                      Agendada: {new Date(card.scheduledFor).toLocaleDateString("pt-BR")} às {new Date(card.scheduledFor).toLocaleTimeString("pt-BR", {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    {/* Simulate Time Expiry Button for scheduled future reviews */}
                    {!isPending && (
                      <button
                        onClick={() => onForceExpiry(card.id)}
                        className="p-1.5 rounded hover:bg-amber-100 dark:hover:bg-amber-950/45 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 cursor-pointer transition-colors"
                        title="Simular passagem de tempo (Forçar vencimento imediato para testar)"
                      >
                        <FastForward className="w-4 h-4" />
                      </button>
                    )}

                    {isPending ? (
                      <button
                        onClick={() => onRetryQuestion(card.questionId)}
                        className="text-xs font-bold px-3 py-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-1 cursor-pointer transition-all shadow-xs"
                      >
                        <PlayCircle className="w-3.5 h-3.5" />
                        Refazer
                      </button>
                    ) : (
                      <span className="text-xs font-bold px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed">
                        Aguardando
                      </span>
                    )}

                    <button
                      onClick={() => onRemoveRevision(card.id)}
                      className="p-1.5 rounded border border-slate-200 dark:border-slate-800 hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-200 dark:hover:border-red-900 text-slate-400 dark:text-slate-500 hover:text-red-500 cursor-pointer transition-colors"
                      title="Excluir do Caderno de Erros"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })
        ) : (
          uniqueErrorQuestionIds.map(questionId => {
            const qInfo = getQuestionInfo(questionId);
            if (!qInfo) return null;

            const subjectInfo = SYLLABUS_DATA.find(s => s.id === qInfo.subjectId);
            const errorAttempts = historyErrors.filter(h => h.questionId === questionId);
            const totalFails = errorAttempts.length;
            const lastFail = errorAttempts[0]; // history is unshifted, so first is newest

            return (
              <div key={questionId} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-5 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-50 dark:border-slate-800 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border ${getSubjectColor(qInfo.subjectId)}`}>
                      {subjectInfo?.shortTitle}
                    </span>
                    <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-sm">
                      {qInfo.articleOrSubtopic}
                    </span>
                    <span className="text-[10px] font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-450 border border-rose-100 dark:border-rose-900/40 px-2 py-0.5 rounded-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Erros: {totalFails}x
                    </span>
                  </div>
                  
                  {lastFail && (
                    <span className="text-[9.5px] font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Último erro: {new Date(lastFail.timestamp).toLocaleDateString("pt-BR")} às {new Date(lastFail.timestamp).toLocaleTimeString("pt-BR", {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                    {qInfo.statement}
                  </h4>
                  {qInfo.lawReference && (
                    <p className="text-[10.5px] text-slate-400 dark:text-slate-500 font-semibold">Referência Legal: {qInfo.lawReference}</p>
                  )}
                </div>

                {/* Expanded explanation study drawer */}
                {expandedExplanation[questionId] && (
                  <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-lg border border-slate-100 dark:border-slate-800 space-y-2 text-xs sm:text-sm animate-slide-up">
                    <div className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 border-b border-slate-200/60 dark:border-slate-800 pb-1.5">
                      <BookOpen className="w-4 h-4 text-indigo-500" />
                      Artigo & Comentário Pedagógico
                    </div>
                    <div className="text-slate-600 dark:text-slate-350 font-medium whitespace-pre-wrap leading-relaxed">
                      {qInfo.explanation}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-50 dark:border-slate-800">
                  <button
                    onClick={() => toggleExplanation(questionId)}
                    className="text-xs font-semibold px-3 py-1.5 rounded border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1 cursor-pointer transition-all"
                  >
                    {expandedExplanation[questionId] ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        Ocultar Gabarito
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        Ver Gabarito
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onRetryQuestion(questionId)}
                    className="text-xs font-bold px-4 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1 cursor-pointer transition-all shadow-xs"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    Refazer Questão
                  </button>
                </div>
              </div>
            );
          })
        )}

        {/* Empty status states */}
        {activeTab !== "all-errors" && displayList.length === 0 && (
          <div className="bg-white dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800 rounded-xl text-center space-y-2">
            <CheckCircle2 className="w-10 h-12 text-emerald-500 mx-auto" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">Tudo em dia!</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto leading-relaxed">
              {activeTab === "pending" 
                ? "Excelente! Você não tem nenhuma revisão acumulada pendente de prática para hoje." 
                : "Você não possui revisões agendadas no futuro próximo. Comece a praticar questões para alimentar o Caderno de Erros."}
            </p>
          </div>
        )}

        {activeTab === "all-errors" && uniqueErrorQuestionIds.length === 0 && (
          <div className="bg-white dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800 rounded-xl text-center space-y-2">
            <CheckCircle2 className="w-10 h-12 text-emerald-500 mx-auto" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">Nenhum erro registrado!</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto leading-relaxed">
              Incrível! Você ainda não errou nenhuma questão no sistema. Continue praticando para fixar seu rendimento de estudos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
