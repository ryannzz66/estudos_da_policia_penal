import { Question, SubjectId } from "../types";

export const DEFICIENCIA_QUESTIONS: Question[] = [
  {
    id: "leg-deficiencia-q1",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-deficiencia",
    articleOrSubtopic: "Tomada de Decisão Apoiada",
    lawReference: "Lei Federal nº 13.146/2015 (Estatuto da Pessoa com Deficiência)",
    statement: "A tomada de decisão apoiada é o processo pelo qual a pessoa com deficiência elege pelo menos 2 (duas) pessoas idôneas, com as quais mantenha vínculos e que gozem de sua confiança, para:",
    options: [
      "A) Prestar-lhe apoio na tomada de decisão sobre atos da vida civil, fornecendo-lhes os elementos e informações necessários para que possa exercer sua capacidade.",
      "B) Decidir em seu lugar sobre atos da vida civil, quando não puder manifestar sua vontade.",
      "C) Auxiliar na administração de seus bens, com poderes para praticar atos de gestão.",
      "D) Representá-la judicialmente, em todos os atos processuais.",
      "E) Prestar-lhe apoio na tomada de decisão, com poderes para substituir sua vontade."
    ],
    correctOptionIndex: 0,
    explanation: "Conforme o art. 1.783-A do Código Civil (incluído pelo Estatuto da Pessoa com Deficiência - Lei nº 13.146/2015), a tomada de decisão apoiada é o processo pelo qual a pessoa com deficiência elege pelo menos 2 pessoas idôneas de sua confiança para prestar-lhe apoio na tomada de decisão sobre atos da vida civil, fornecendo-lhes os elementos e informações necessários para que possa exercer sua capacidade (e não para substituir sua vontade)."
  }
];
