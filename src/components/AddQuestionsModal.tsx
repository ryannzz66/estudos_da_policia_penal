import React, { useState } from "react";
import { X, Sparkles, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { SubjectId } from "../types";
import { SYLLABUS_DATA } from "../data/syllabus";
import { auth, db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface AddQuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddQuestionsModal({ isOpen, onClose }: AddQuestionsModalProps) {
  const [rawText, setRawText] = useState("");
  const [subjectId, setSubjectId] = useState<SubjectId>(SubjectId.LEGISLACAO);
  const [topicId, setTopicId] = useState<string>("");
  const [lawReference, setLawReference] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const currentSubject = SYLLABUS_DATA.find(s => s.id === subjectId);

  const handleSubmit = async () => {
    if (!rawText.trim()) {
      setError("Insira o texto das questões.");
      return;
    }
    
    setIsProcessing(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/parse-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rawText,
          subjectId,
          topicId,
          lawReference
        })
      });

      if (!response.ok) {
        throw new Error("Falha ao processar as questões.");
      }

      const data = await response.json();
      
      if (!data.questions || data.questions.length === 0) {
        throw new Error("Nenhuma questão identificada.");
      }

      // Save to Firestore
      for (const question of data.questions) {
        await addDoc(collection(db, "custom_questions"), question);
      }

      setSuccess(true);
      setRawText("");
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Ocorreu um erro ao processar.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]">
        
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200">
              Adicionar Questões com IA
            </h3>
          </div>
          <button onClick={onClose} className="p-2 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Cole o texto bruto das suas questões (PDF, Word, sites). A Inteligência Artificial irá identificar automaticamente o enunciado, as alternativas, e o gabarito. As questões serão salvas no banco de dados e ficarão disponíveis para você praticar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Disciplina</label>
              <select 
                value={subjectId} 
                onChange={(e) => setSubjectId(e.target.value as SubjectId)}
                className="w-full text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg p-2.5 text-slate-700 dark:text-slate-300 outline-none focus:border-indigo-500"
              >
                {SYLLABUS_DATA.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Tópico</label>
              <select 
                value={topicId} 
                onChange={(e) => setTopicId(e.target.value)}
                className="w-full text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg p-2.5 text-slate-700 dark:text-slate-300 outline-none focus:border-indigo-500"
              >
                <option value="">(Identificação Automática se vazio)</option>
                {currentSubject?.topics.map(t => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Referência / Lei (Opcional)</label>
            <input 
              type="text" 
              value={lawReference} 
              onChange={e => setLawReference(e.target.value)}
              placeholder="Ex: Lei nº 7.210/1984"
              className="w-full text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg p-2.5 text-slate-700 dark:text-slate-300 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Texto das Questões</label>
            <textarea 
              value={rawText} 
              onChange={e => setRawText(e.target.value)}
              rows={8}
              placeholder="Cole aqui o texto..."
              className="w-full text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg p-3 text-slate-700 dark:text-slate-300 outline-none focus:border-indigo-500 resize-none font-mono"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-900/50">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="text-sm">Questões processadas e salvas com sucesso!</span>
            </div>
          )}

        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            disabled={isProcessing}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
          >
            Cancelar
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isProcessing || !rawText.trim()}
            className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processando...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Processar e Salvar</span>
              </>
            )}
          </button>
        </div>
        
      </div>
    </div>
  );
}
