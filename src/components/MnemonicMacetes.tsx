/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SubjectId, Mnemonic } from "../types";
import { SYLLABUS_DATA } from "../data/syllabus";
import { 
  Compass, 
  Search, 
  BookOpen, 
  Cpu, 
  FileText, 
  Monitor, 
  Lock, 
  Shield, 
  Award,
  Bookmark
} from "lucide-react";

export const MNEMONICS_LIST: Mnemonic[] = [
  // ==========================================
  // LEGISLAÇÃO E DIREITO CONSTITUCIONAL
  // ==========================================
  {
    id: "mne-cf-1",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-cf-principios",
    title: "Fundamentos da República (Art. 1º da CF)",
    acronym: "SO.DI.CI.VA.PLU",
    description: "SOberania, Dignidade da pessoa humana, CIdadania, Valores sociais do trabalho e da livre iniciativa, PLUralismo político.",
    explanation: "Se a banca perguntar sobre 'fundamentos', decore este acrônimo. Não confunda com os 'objetivos' da República que iniciam por verbo no infinitivo."
  },
  {
    id: "mne-cf-3",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-cf-principios",
    title: "Objetivos Fundamentais da República (Art. 3º)",
    acronym: "CON.ER.GO.PRO",
    description: "CONstruir uma sociedade livre, justa e solidária; ERradicar a pobreza e a marginalização; GArantir o desenvolvimento nacional; PROmover o bem de todos, sem preconceitos.",
    explanation: "Os objetivos sempre começam com verbos no infinitivo (ações futuras que a República almeja alcançar). Muito comum cair em pegadinhas mesclando com fundamentos."
  },
  {
    id: "mne-cf-4",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-cf-principios",
    title: "Relações Internacionais (Art. 4º da CF)",
    acronym: "A.I.D.E.S. C.O.C.O. P.R.E.",
    description: "Autodeterminação dos povos, Igualdade entre os Estados, Defesa da paz, Extraterritorialidade/Solução pacífica de conflitos, Cooperação entre os povos, Concessão de asilo político, Prevalência dos Direitos Humanos, Repúdio ao terrorismo/racismo, Não-intervenção.",
    explanation: "Regula como o Brasil age externamente. Lembre-se que 'Prevalência dos Direitos Humanos' é princípio de relação externa, enquanto 'Dignidade da Pessoa Humana' é fundamento interno!"
  },
  {
    id: "mne-adm",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-cf-adm",
    title: "Princípios Expressos da Administração Pública",
    acronym: "L.I.M.P.E.",
    description: "Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência (Art. 37, Caput da CF).",
    explanation: "A base de todo ato administrativo no Brasil. A Eficiência foi inserida pela EC 19/98 (não constava no texto original)."
  },
  {
    id: "mne-cf-inviolabilidade",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-cf-art5",
    title: "Inviolabilidade Domiciliar (Art. 5º, XI)",
    acronym: "F.D.S. (Livre) | D.J. (Dia)",
    description: "Flagrante delito, Desastre ou prestar Socorro autorizam entrada SEM consentimento a qualquer hora (dia ou noite). Determinação Judicial (D.J.) autoriza entrada SEM consentimento APENAS DURANTE O DIA.",
    explanation: "Sempre cai na prova afirmando que mandado judicial de busca e apreensão pode ser executado à noite. Errado! Mandado judicial é somente por dia. Flagrante, desastre e socorro são livres a qualquer momento."
  },
  {
    id: "mne-tortura-penas",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-tortura",
    title: "Pena de Tortura Omissiva (Art. 1º, § 2º)",
    acronym: "OMISSÃO DETÉM",
    description: "Omissão perante tortura = DETENÇÃO de 1 a 4 anos. Torturas ativas = RECLUSÃO de 2 a 8 anos.",
    explanation: "Bancas adoram dizer que a tortura por omissão (de quem tinha o dever de evitar ou apurar) é punida com reclusão de 2 a 8 anos. Pegadinha! O omisso detém pena mais branda, de detenção."
  },
  {
    id: "mne-tortura-aumento",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-tortura",
    title: "Causas de Aumento na Lei de Tortura (Art. 1º, § 4º)",
    acronym: "P.U.S.",
    description: "Praticada por agente Púbico; Praticada contra Único/vulnerável (gestante, idoso, criança, adolescente, deficiente); cometida mediante Sequestro.",
    explanation: "Aumenta a pena de 1/6 a 1/3. Memorize P.U.S. para gabaritar quais circunstâncias majoram a tortura."
  },
  {
    id: "mne-mariap",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-mariadapenha",
    title: "Formas de Violência na Lei Maria da Penha",
    acronym: "FÍ.PSI.SE.PA.MO",
    description: "FÍsica, PSÍquica (Psicológica), SE_xual, PAtromonial, MOral.",
    explanation: "A Lei Maria da Penha elenca essas 5 formas de violência. Bancas adoram simular casos concretos de destruição de celular (Violência Patrimonial) ou injúria (Violência Moral) perguntando se configura violência doméstica."
  },
  {
    id: "mne-improbidade-dolosa",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    title: "Modalidades de Improbidade Administrativa",
    acronym: "E.P.A. (Dolo de Praticar)",
    description: "Enriquecimento ilícito (Art. 9º), Prejuízo ao erário (Art. 10), Atentado contra os princípios da administração (Art. 11).",
    explanation: "Toda improbidade agora exige DOLO direto e inequívoco. Não existe mais improbidade na modalidade culposa de nenhuma espécie após as reformas da Lei de 2021!"
  },
  {
    id: "mne-estatuto-rs-penas",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-estatuto-servidor-rs",
    title: "Penalidades Disciplinares do Servidor RS (LC 10.098)",
    acronym: "A.S.D.C.M.D",
    description: "Advertência, Suspensão, Demissão, Cassação de aposentadoria/disponibilidade, Multa, Destituição de cargo em comissão.",
    explanation: "A suspensão administrativa no serviço público do RS não pode ultrapassar o período de 90 dias úteis/corridos."
  },

  // ==========================================
  // SISTEMA PRISIONAL E LEP
  // ==========================================
  {
    id: "mne-prisional-trabalho",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "prisional-lep-direitos",
    title: "Obrigatoriedade do Trabalho (LEP)",
    acronym: "DEF-SIM / PROV-NÃO",
    description: "Preso Definitivo = OBRIGADO a trabalhar. Preso Provisório = NÃO obrigado (Trabalho Facultativo).",
    explanation: "Pegadinha extremamente comum nas provas para Policial Penal. Para o preso definitivo, a recusa injustificada do trabalho configura Falta Grave."
  },
  {
    id: "mne-lep-assistencias",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "prisional-lep-direitos",
    title: "Assistências da Execução Penal (Art. 11 da LEP)",
    acronym: "MA.SA.JU.ED.SO.RE",
    description: "MAterial, SAlúde, JÚridica, EDucacional, SOcial, REligiosa.",
    explanation: "Decore a sílaba de cada assistência. É muito comum a banca inventar 'Assistência Financeira' ou 'Assistência Psicológica isolada' para confundir o candidato."
  },
  {
    id: "mne-lep-regimes",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "prisional-regimes",
    title: "Locais de Execução de Pena por Regime (LEP)",
    acronym: "PE-FE | CO-SE | AB-CA",
    description: "Penitenciária = Regime FEchado | Colônia agrícola/industrial = Regime SEmiaberto | Casa do Albergado = Regime ABerto.",
    explanation: "Associa as iniciais para guardar a destinação física das celas de cada regime prisional."
  },

  // ==========================================
  // RACIOCÍNIO LÓGICO
  // ==========================================
  {
    id: "mne-rl-negar",
    subjectId: SubjectId.RACIOCINIO_LOGICO,
    topicId: "rl-equivalencias",
    title: "Negação do Condicional (Se p então q)",
    acronym: "MANÉ",
    description: "MAntém a primeira proposição E (∧) NEga a segunda proposição (p ∧ ~q).",
    explanation: "Para negar 'Se chover, então eu levo guarda-chuva', você diz: 'Chove E eu não levo guarda-chuva'. Nunca use outro 'Se' para negar um 'Se'."
  },
  {
    id: "mne-rl-equiv",
    subjectId: SubjectId.RACIOCINIO_LOGICO,
    topicId: "rl-equivalencias",
    title: "Equivalência do Condicional (Se p então q)",
    acronym: "NEYMAR",
    description: "NEga a primeira proposição OU (∨) MAR (Mantém a segunda proposição) (~p ∨ q).",
    explanation: "Para reescrever de forma equivalente 'Se estudo, passo': nega a primeira ('Não estudo'), coloca o conectivo OU ('ou'), e mantém a segunda ('passo') = 'Não estudo ou passo'."
  },

  // ==========================================
  // INFORMÁTICA E SEGURANÇA
  // ==========================================
  {
    id: "mne-inf-worm",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-seguranca",
    title: "Worm (Verme) vs Vírus",
    acronym: "AUTO-WORM (REDE)",
    description: "Worm se propaga sozinho, não precisa de arquivo hospedeiro, infecta explorando falhas diretamente nas redes.",
    explanation: "O Vírus precisa que o usuário execute um programa infectado (precisa de hospedeiro). O Worm entra e se espalha de forma autônoma de máquina para máquina deixando a rede lenta."
  },
  {
    id: "mne-inf-cida",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-seguranca",
    title: "Princípios da Segurança da Informação",
    acronym: "C.I.D.A.",
    description: "Confidencialidade, Integridade, Disponibilidade, Autenticidade.",
    explanation: "Os quatro pilares primordiais da segurança tecnológica. Guarde o nome feminino C.I.D.A. para responder qualquer questão conceitual de segurança."
  }
];

export default function MnemonicMacetes() {
  const [activeSubject, setActiveSubject] = useState<SubjectId | "all">("legislacao"); // Focus legislation by default as requested
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMnemonics = MNEMONICS_LIST.filter(mne => {
    const matchesSubject = activeSubject === "all" || mne.subjectId === activeSubject;
    const matchesSearch = 
      mne.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mne.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mne.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const filterButtons = [
    { id: "all", label: "Todos os Macetes", icon: Compass },
    { id: SubjectId.LEGISLACAO, label: "Legislação & Direito", icon: Shield },
    { id: SubjectId.PORTUGUESE, label: "Português", icon: FileText },
    { id: SubjectId.RACIOCINIO_LOGICO, label: "Raciocínio Lógico", icon: Cpu },
    { id: SubjectId.INFORMATICA, label: "Informática", icon: Monitor },
    { id: SubjectId.CONHECIMENTOS_GERAIS, label: "Sistema Prisional & LEP", icon: Lock }
  ];

  return (
    <div className="space-y-6 animate-fade-in" id="mnemonics-view">
      {/* Intro info box */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xs space-y-2">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <Award className="w-5.5 h-5.5 text-indigo-500" />
          Macetes e Técnicas de Memorização Ativa (PPRS 100%)
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
          Aprenda os mnemônicos e regras de atalho consolidados para os concursos da Fundatec. Use este banco completo para revisar os pontos de maior recorrência estatística.
        </p>
      </div>

      {/* Filter Horizontal bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="subject-filter-bar">
        {filterButtons.map(btn => {
          const Icon = btn.icon;
          const isActive = activeSubject === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => setActiveSubject(btn.id as any)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-colors ${
                isActive 
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm" 
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Search Input bar */}
      <div className="bg-white dark:bg-slate-900 px-4 py-3.5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xs flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <input 
          type="text"
          placeholder="Pesquisar mnemônico ou termo (ex: NEYMAR, Maria da Penha...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none bg-transparent font-medium"
        />
      </div>

      {/* Mnemonics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="mnemonics-grid">
        {filteredMnemonics.map(mne => {
          const subjectInfo = SYLLABUS_DATA.find(s => s.id === mne.subjectId);
          let badgeColor = "bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/40";
          if (mne.subjectId === "legislacao") badgeColor = "bg-red-100 text-red-800 border border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/40";
          if (mne.subjectId === "raciocinio_logico") badgeColor = "bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/40";
          if (mne.subjectId === "informatica") badgeColor = "bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/40";
          if (mne.subjectId === "conhecimentos_gerais") badgeColor = "bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";

          return (
            <div key={mne.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xs overflow-hidden flex flex-col justify-between">
              <div className="p-5 space-y-4">
                {/* Header title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${badgeColor}`}>
                      {subjectInfo?.shortTitle || "Geral"}
                    </span>
                    <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 pt-1.5">{mne.title}</h3>
                  </div>
                  <Bookmark className="w-4 h-4 text-indigo-500 shrink-0 mt-1.5 fill-indigo-50/20" />
                </div>

                {/* Acronym / Phrase Callout */}
                <div className="p-4 bg-indigo-50/40 dark:bg-indigo-950/20 rounded-xl border border-indigo-50/85 dark:border-indigo-900/30 flex flex-col items-center text-center justify-center space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-indigo-600 dark:text-indigo-400">Mnemônico Chave</span>
                  <span className="text-lg sm:text-xl font-black text-indigo-900 dark:text-indigo-200 tracking-wider font-mono">{mne.acronym}</span>
                </div>

                {/* Deciphered list */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Significado / Tradução:</span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                    {mne.description}
                  </p>
                </div>
              </div>

              {/* Explanatory notes */}
              <div className="bg-slate-50/80 dark:bg-slate-850/50 p-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">Como cai em prova:</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic font-medium">
                  "{mne.explanation}"
                </p>
              </div>
            </div>
          );
        })}

        {filteredMnemonics.length === 0 && (
          <div className="col-span-full bg-white dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800 rounded-xl text-center text-slate-500 dark:text-slate-400 text-xs font-medium">
            Nenhum mnemônico cadastrado coincide com sua busca neste filtro.
          </div>
        )}
      </div>

      {/* Bonus Study Tips Section */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xs p-6 space-y-4">
        <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-slate-500" />
          Dica Otimizada de Pareto (Foco de Engenharia de Aprovação)
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
          A banca Fundatec valoriza a literalidade da lei e atalhos de concordância. Dedique os últimos 15 dias para ler e re-ler a Lei de Tortura (apenas 4 artigos principais) e as Faltas Graves da LEP (Art. 50), pois estes dois tópicos juntos dão retorno de até 15% das questões totais da prova com apenas 30 minutos diários de estudo.
        </p>
      </div>
    </div>
  );
}
