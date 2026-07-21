/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum SubjectId {
  PORTUGUESE = "portuguese",
  RACIOCINIO_LOGICO = "raciocinio_logico",
  INFORMATICA = "informatica",
  LEGISLACAO = "legislacao",
  CONHECIMENTOS_GERAIS = "conhecimentos_gerais"
}

export interface Topic {
  id: string;
  title: string;
  importance: "Alta" | "Média" | "Baixa";
  macete?: string;
  summary?: string;
}

export interface Subject {
  id: SubjectId;
  title: string;
  shortTitle: string;
  description: string;
  topics: Topic[];
  iconName: string;
  questionsCount: number;
  color: string; // Tailwind class color e.g., 'blue', 'red'
}

export interface Question {
  id: string;
  subjectId: SubjectId;
  topicId: string;
  articleOrSubtopic: string; // e.g. "Art. 1º", "Art. 2º", "Crase", "Tabela-Verdade"
  lawReference?: string; // e.g. "Lei nº 9.455/1997 (Lei de Tortura)"
  statement: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface RevisionCard {
  id: string;
  questionId: string;
  intervalHours: number; // Current interval in hours: 24, 168 (7 days), 360 (15 days), etc.
  scheduledFor: string; // ISO string
  createdAt: string;
  lastAttempted?: string; // ISO string
}

export interface StudyHistoryEntry {
  id: string;
  questionId: string;
  subjectId: SubjectId;
  articleOrSubtopic: string;
  correct: boolean;
  timestamp: string; // ISO string
}

export interface Mnemonic {
  id: string;
  subjectId: SubjectId;
  topicId: string;
  title: string;
  acronym: string; // e.g., "L.I.M.P.E.", "SO.DI.CI.VA.PLU"
  description: string; // The full meaning e.g., Legalidade, Impessoalidade...
  explanation: string; // Tips for remembering
}

export interface UserProgress {
  answeredQuestions: Record<string, boolean>; // questionId -> isCorrect
  completedTopics: Record<string, boolean>; // topicId -> isCompleted
  hiddenQuestionIds?: Record<string, boolean>; // questionId -> hidden for this user
  pdf1Topics?: Record<string, boolean>;
  pdf2Topics?: Record<string, boolean>;
  r1Topics?: Record<string, boolean>;
  r2Topics?: Record<string, boolean>;
  r3Topics?: Record<string, boolean>;
  controleTopics?: Record<string, boolean>;
  streak: number;
  lastActiveDate?: string; // YYYY-MM-DD
  history: StudyHistoryEntry[];
  lastActiveQuestionId?: string | null;
  lastSelectedSubjectId?: SubjectId | null;
  lastSelectedTopicId?: string | null;
  lastActiveTab?: string | null;
  lastSingleRevisionQuestionId?: string | null;
}
