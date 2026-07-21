/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { UserProgress, RevisionCard, Subject } from "../types";
import { SYLLABUS_DATA } from "../data/syllabus";
import { 
  TrendingUp, 
  Award, 
  Calendar, 
  BookOpen, 
  Clock, 
  AlertCircle,
  ThumbsUp,
  Percent
} from "lucide-react";
import logoPPRS from '../assets/images/logo_pprs.jpg';

interface DashboardProps {
  progress: UserProgress;
  revisions: RevisionCard[];
  onNavigate: (tab: string) => void;
}

export default function Dashboard({ progress, revisions, onNavigate }: DashboardProps) {
  // Calculate statistics
  const totalQuestions = progress.history.length;
  const correctCount = progress.history.filter(h => h.correct).length;
  const wrongCount = totalQuestions - correctCount;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Calculate syllabus progress
  const totalTopics = SYLLABUS_DATA.reduce((acc, sub) => acc + sub.topics.length, 0);
  const completedTopicsCount = Object.keys(progress.completedTopics).filter(k => progress.completedTopics[k]).length;
  const syllabusProgressPercent = totalTopics > 0 ? Math.round((completedTopicsCount / totalTopics) * 100) : 0;

  // Check pending revisions (scheduled for now or in the past)
  const now = new Date();
  const pendingRevisions = revisions.filter(rev => new Date(rev.scheduledFor) <= now);

  // Generate 14-day study activity history
  const getPast14Days = () => {
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const items = progress.history.filter(h => h.timestamp.startsWith(dateStr));
      days.push({
        date: dateStr,
        label: d.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric" }),
        questions: items.length,
        correct: items.filter(it => it.correct).length
      });
    }
    return days;
  };

  const activityDays = getPast14Days();

  // Pareto Priority analysis (Legislação = 37.5% weight, Português = 25%)
  const getParetoAdvice = () => {
    if (pendingRevisions.length > 0) {
      return {
        title: "Revisão Crítica Pendente",
        desc: `Você tem ${pendingRevisions.length} questões no sistema de Repetição Espaçada prontas para revisar hoje. Revise-as para fixar o conteúdo na memória de longo prazo.`,
        action: "Ir para Revisões",
        tab: "revisoes",
        color: "border-red-200 bg-red-50 text-red-800 dark:border-red-950/50 dark:bg-red-950/20 dark:text-red-300"
      };
    }
    
    // Check if legislation is completed
    const legislacao = SYLLABUS_DATA.find(s => s.id === "legislacao");
    const legTopics = legislacao?.topics || [];
    const legCompleted = legTopics.filter(t => progress.completedTopics[t.id]).length;
    
    if (legCompleted < legTopics.length) {
      return {
        title: "Foco no Topo de Pareto: Legislação",
        desc: "A disciplina de Legislação Aplicada/Direito representa 37.5% da nota total da sua prova (30 questões). Estude as leis de Tortura (L. 9455) e Execução Penal (LEP) para obter o máximo de retorno de pontos por hora estudada.",
        action: "Ver Edital de Legislação",
        tab: "edital",
        color: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-950/50 dark:bg-amber-950/20 dark:text-amber-300"
      };
    }

    return {
      title: "Consistência Diária Excelente!",
      desc: "Você está mapeando todo o edital. Continue praticando simulados rápidos diariamente para treinar sua velocidade de resolução por questão.",
      action: "Praticar Questões",
      tab: "questoes",
      color: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-950/50 dark:bg-emerald-950/20 dark:text-emerald-300"
    };
  };

  const advice = getParetoAdvice();

  const getCountdown = () => {
    const examDate = new Date("2026-08-09T00:00:00");
    const diff = examDate.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    return { days, hours };
  };
  const countdown = getCountdown();

  return (
    <div className="space-y-8 animate-fade-in" id="dashboard-view">
      {/* Welcome & Target Banner */}
      <div className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-slate-950 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-800/60">
        {/* Glow effect overlay */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img src={logoPPRS} alt="Polícia Penal RS" className="w-24 h-auto object-contain drop-shadow-2xl" />
            <div className="space-y-3 text-center sm:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 tracking-wider uppercase">
                Concurso Oficial PPRS 2026
              </span>
              <h1 className="text-2xl md:text-3.5xl font-display font-black tracking-tight leading-none text-slate-100" id="dashboard-title">
                Polícia Penal do Rio Grande do Sul
              </h1>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Preparação ativa e inteligente focada no edital oficial. Estudo cirúrgico de legislação, lógica e português estruturado com o Princípio de Pareto.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 shrink-0 self-center md:self-auto">
            <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-xs p-4 rounded-xl border border-slate-800/80 hover:border-slate-700/80 transition-all shadow-md">
              <div className="p-3 bg-red-600/95 text-white rounded-lg shadow-md shadow-red-600/25">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono text-red-300 tracking-tight leading-none">
                  {countdown.days} {countdown.days === 1 ? "Dia" : "Dias"}
                </div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase mt-1 tracking-wider">Até a Prova (09/Ago)</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-xs p-4 rounded-xl border border-slate-800/80 hover:border-slate-700/80 transition-all shadow-md">
              <div className="p-3 bg-indigo-600/95 text-white rounded-lg shadow-md shadow-indigo-600/25">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black font-mono text-indigo-300 tracking-tight leading-none">
                  {progress.streak} {progress.streak === 1 ? "Dia" : "Dias"}
                </div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase mt-1 tracking-wider">Ofensiva Ativa</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Interactive Advice */}
      <div className={`relative overflow-hidden border rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 shadow-xs ${advice.color} border-l-4`}>
        <div className="flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 opacity-90" />
          <div className="space-y-1">
            <h3 className="font-display font-bold text-sm tracking-tight">{advice.title}</h3>
            <p className="text-xs opacity-90 leading-relaxed max-w-3xl">{advice.desc}</p>
          </div>
        </div>
        <button 
          onClick={() => onNavigate(advice.tab)}
          className="text-xs font-bold px-4.5 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-850 shrink-0 text-slate-800 dark:text-slate-100 cursor-pointer transition-all hover:scale-[1.02]"
        >
          {advice.action}
        </button>
      </div>

      {/* Grid: Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="stats-grid">
        {/* Progress Card */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex items-center justify-between hover:-translate-y-1 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/40 transition-all duration-300 group">
          <div className="space-y-1.5">
            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold block">Progresso Edital</span>
            <div className="text-2.5xl font-black font-mono text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-none">{syllabusProgressPercent}%</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{completedTopicsCount} de {totalTopics} tópicos</p>
          </div>
          <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
            {/* SVG Progress Circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="28" cy="28" r="24" stroke="currentColor" className="text-slate-100 dark:text-slate-800" strokeWidth="4.5" fill="transparent" />
              <circle cx="28" cy="28" r="24" stroke="#3b82f6" strokeWidth="4.5" fill="transparent" 
                strokeDasharray={150.7}
                strokeDashoffset={150.7 - (150.7 * syllabusProgressPercent) / 100}
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />
            </svg>
            <BookOpen className="w-4 h-4 text-blue-500 absolute group-hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Total Questions Practiced */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex items-center justify-between hover:-translate-y-1 hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-900/40 transition-all duration-300 group">
          <div className="space-y-1.5">
            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold block">Total Respondido</span>
            <div className="text-2.5xl font-black font-mono text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-none">{totalQuestions}</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{correctCount} acertos | {wrongCount} erros</p>
          </div>
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform shadow-xs">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        {/* Accuracy Rate */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex items-center justify-between hover:-translate-y-1 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900/40 transition-all duration-300 group">
          <div className="space-y-1.5">
            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold block">Taxa de Acertos</span>
            <div className="text-2.5xl font-black font-mono text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-none">{accuracy}%</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Recomendado: 75%+</p>
          </div>
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform shadow-xs">
            <Percent className="w-6 h-6" />
          </div>
        </div>

        {/* Repetition System Cards */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs flex items-center justify-between hover:-translate-y-1 hover:shadow-md hover:border-red-200 dark:hover:border-red-900/40 transition-all duration-300 group">
          <div className="space-y-1.5">
            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold block">Repetição Espaçada</span>
            <div className="text-2.5xl font-black font-mono text-slate-800 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-none">{revisions.length}</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{pendingRevisions.length} pendentes hoje</p>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl text-red-600 dark:text-red-400 group-hover:scale-105 transition-transform shadow-xs">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Col: Study consistency and activity chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm sm:text-base tracking-tight">
              <Calendar className="w-5 h-5 text-slate-500 shrink-0" />
              Consistência de Estudos (Últimos 14 Dias)
            </h3>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wider uppercase">Foco e Prática</span>
          </div>

          {/* Graphical Representation (Slick Github-like grid matrix with neat interaction details) */}
          <div className="grid grid-cols-7 sm:grid-cols-14 gap-2.5">
            {activityDays.map((day, idx) => {
              let bgColor = "bg-slate-50 dark:bg-slate-900/60 text-slate-400 dark:text-slate-500";
              let borderColor = "border-slate-200/60 dark:border-slate-800/60";
              
              if (day.questions > 0) {
                if (day.correct === day.questions) {
                  bgColor = "bg-emerald-500 text-white shadow-xs shadow-emerald-500/10";
                  borderColor = "border-emerald-600 dark:border-emerald-500";
                } else if (day.correct > day.questions / 2) {
                  bgColor = "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300";
                  borderColor = "border-emerald-300 dark:border-emerald-800/80";
                } else {
                  bgColor = "bg-amber-100 dark:bg-amber-955/80 text-amber-800 dark:text-amber-300";
                  borderColor = "border-amber-200 dark:border-amber-800/80";
                }
              }

              return (
                <div 
                  key={day.date} 
                  className={`flex flex-col items-center justify-between py-3 rounded-lg border text-center transition-all duration-200 hover:scale-108 hover:shadow-xs cursor-default ${bgColor} ${borderColor}`}
                  title={`${day.date}: ${day.questions} questões respondidas (${day.correct} acertos)`}
                >
                  <span className="text-[9px] font-bold uppercase opacity-80 block mb-1">{day.label.split(" ")[0]}</span>
                  <span className="text-xs font-black font-mono">{day.label.match(/\d+/)?.[0] || idx + 1}</span>
                  <span className="text-[9px] mt-1.5 px-1 py-0.5 rounded-sm bg-black/5 dark:bg-white/5 font-mono opacity-90 font-semibold">
                    {day.questions > 0 ? `${day.correct}/${day.questions}` : "-"}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-emerald-500 inline-block border border-emerald-600"></span> 
              <span>100% Acerto</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-emerald-100 dark:bg-emerald-900 inline-block border border-emerald-300 dark:border-emerald-800"></span> 
              <span>Desempenho Bom</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-amber-100 dark:bg-amber-900 inline-block border border-amber-200 dark:border-amber-800"></span> 
              <span>Erros no Histórico</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-slate-50 dark:bg-slate-800 inline-block border border-slate-200 dark:border-slate-750"></span> 
              <span>Sem Atividade</span>
            </span>
          </div>
        </div>

        {/* Right Col: Priority weight lists */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800/80 shadow-xs p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="font-display font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 text-sm sm:text-base tracking-tight">
              <ThumbsUp className="w-5 h-5 text-slate-500" />
              Pesos por Relevância (Pareto)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              As provas da Fundatec tendem a focar em Legislação e Gramática. Veja a distribuição do peso das questões na sua prova do edital:
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/85">
            {SYLLABUS_DATA.map(subject => {
              const weightPercent = Math.round((subject.questionsCount / 80) * 100);
              let barColor = "bg-blue-500";
              if (subject.id === "legislacao") barColor = "bg-red-500 shadow-xs shadow-red-500/25";
              if (subject.id === "portuguese") barColor = "bg-indigo-600 shadow-xs shadow-indigo-600/25";
              if (subject.id === "informatica") barColor = "bg-emerald-500 shadow-xs shadow-emerald-500/25";
              if (subject.id === "raciocinio_logico") barColor = "bg-amber-500 shadow-xs shadow-amber-500/25";
              if (subject.id === "conhecimentos_gerais") barColor = "bg-slate-500 shadow-xs shadow-slate-500/25";

              return (
                <div key={subject.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{subject.shortTitle}</span>
                    <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">{subject.questionsCount} qst. ({weightPercent}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${barColor} rounded-full transition-all duration-500`} style={{ width: `${weightPercent}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Start Buttons */}
      <div className="relative overflow-hidden bg-linear-to-r from-slate-100 to-indigo-50/50 dark:from-slate-900/60 dark:to-indigo-950/20 border border-slate-200/60 dark:border-indigo-950/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-2xl"></div>
        <div className="space-y-1 text-center md:text-left relative z-10">
          <h4 className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100">Pronto para acelerar os estudos de hoje?</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Escolha uma aba de estudo acima ou clique nos atalhos rápidos para treinar questões ou revisar macetes.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
          <button 
            onClick={() => onNavigate("questoes")}
            className="text-xs font-bold px-4.5 py-3 rounded-lg bg-indigo-600 text-white shadow-xs hover:shadow-md hover:bg-indigo-700 cursor-pointer transition-all hover:scale-[1.02]"
          >
            Treinar Questões por Artigo
          </button>
          <button 
            onClick={() => onNavigate("macetes")}
            className="text-xs font-bold px-4.5 py-3 rounded-lg bg-white dark:bg-slate-850 border border-indigo-200/80 dark:border-indigo-900/40 text-indigo-700 dark:text-indigo-400 shadow-sm hover:shadow-md hover:bg-indigo-50/40 dark:hover:bg-indigo-950/40 cursor-pointer transition-all hover:scale-[1.02]"
          >
            Ler Macetes & Teoria
          </button>
        </div>
      </div>
    </div>
  );
}
