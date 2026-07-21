/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, SubjectId } from "../types";

export const FONOLOGIA_QUESTIONS: Question[] = [
  // ==========================================
  // CADERNO DE QUESTÕES: FONOLOGIA ESTILO FUNDATEC
  // ==========================================
  {
    id: "lp-fono-1",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Relação Letras vs. Fonemas",
    statement: "Considerando a relação entre letras e fonemas defendida por Cegalla e Bechara, assinale a alternativa que apresenta, correta e respectivamente, uma palavra com menos fonemas do que letras, seguida de uma palavra com mais fonemas do que letras.",
    options: [
      "A) Chuva – Hoje.",
      "B) Nascido – Assado.",
      "C) Tóxico – Canto.",
      "D) Queijo – Táxi.",
      "E) Falam – Fixo."
    ],
    correctOptionIndex: 3,
    explanation: "A Fundatec ama cobrar a diferença da contagem:\n- Queijo: Tem 6 letras (Q-U-E-I-J-O). O \"QU\" é dígrafo (tem som de K), logo, tem apenas 5 fonemas. (Menos fonemas que letras).\n- Táxi: Tem 4 letras (T-Á-X-I). O \"X\" é dífono (tem som de KS), então contamos 5 fonemas (/t/ /a/ /k/ /s/ /i/). (Mais fonemas que letras).\n\nErro da A: \"Hoje\" tem 4 letras e 3 fonemas (H é etimológico, não tem som). A questão pedia primeiro uma de menos fonemas, e depois uma com mais."
  },
  {
    id: "lp-fono-2",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Dígrafos e Encontros Consonantais",
    statement: "A banca Fundatec exige atenção redobrada à classificação fonética de algumas estruturas. Analise as palavras a seguir:\n\nQUEIJO\nAQUÁRIO\nCAMPO\nPACTO\n\nÉ correto afirmar que:",
    options: [
      "A) Todas as palavras acima apresentam dígrafos consonantais.",
      "B) \"QUEIJO\" apresenta dígrafo consonantal, enquanto em \"AQUÁRIO\" a estrutura \"QU\" não forma dígrafo, pois o 'u' é pronunciado.",
      "C) \"CAMPO\" apresenta um encontro consonantal imperfeito entre as consoantes \"M\" e \"P\".",
      "D) Em \"PACTO\", o encontro \"CT\" forma um dígrafo consonantal.",
      "E) Em \"AQUÁRIO\" há dígrafo vocálico, uma vez que a vogal \"A\" está nasalizada."
    ],
    correctOptionIndex: 1,
    explanation: "Regra clássica de Cegalla:\n- Em QUEIJO, o \"U\" não é pronunciado (está antes de E/I), formando o dígrafo \"QU\" (1 fonema).\n- Em AQUÁRIO, o \"U\" é pronunciado, portanto NÃO HÁ DÍGRAFO, e sim um ditongo crescente (u+a).\n\nErro da C: \"Campo\" não tem encontro consonantal! O \"M\" não tem som de consoante, ele é apenas uma marca de nasalidade para a vogal \"A\" (Dígrafo vocálico)."
  },
  {
    id: "lp-fono-3",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Separação Silábica: Regra dos Prefixos",
    statement: "O processo de separação silábica na língua portuguesa possui regras rígidas, especialmente no que tange aos prefixos, conforme as gramáticas de Cegalla e Bechara. Analise a separação das palavras abaixo:\n\nI. Suboficial: Sub-o-fi-ci-al\nII. Transatlântico: Tran-sa-tlân-ti-co\nIII. Desarmar: De-sar-mar\nIV. Submarino: Su-bma-ri-no\n\nQuais estão separadas CORRETAMENTE?",
    options: [
      "A) Apenas I e II.",
      "B) Apenas II e III.",
      "C) Apenas III e IV.",
      "D) Apenas I, II e IV.",
      "E) I, II, III e IV."
    ],
    correctOptionIndex: 1,
    explanation: "A famosa \"Pegadinha dos Prefixos\" da Fundatec:\n- I está INCORRETA. Se o prefixo (sub) for seguido de VOGAL (o), a última letra do prefixo gruda na vogal: Su-bo-fi-ci-al.\n- II está CORRETA. Prefixo (trans) + vogal (a) = a letra S vai pra próxima sílaba: Tran-sa-tlân-ti-co.\n- III está CORRETA. Prefixo (des) + vogal (a) = De-sar-mar.\n- IV está INCORRETA. Se o prefixo for seguido de CONSOANTE (m), ele fica sozinho: Sub-ma-ri-no. (Gabarito: Apenas II e III)."
  },
  {
    id: "lp-fono-4",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Vogais, Semivogais e Ditongos Nasais",
    statement: "Tendo em vista a regra de que \"não existe sílaba sem vogal, e nunca há mais de uma vogal na mesma sílaba\", analise a estrutura fonológica das palavras \"CADEIRA\" e \"TAMBÉM\" e assinale a alternativa correta.",
    options: [
      "A) Em \"CADEIRA\", há duas vogais formadoras de núcleo na sílaba \"DEI\".",
      "B) Em \"TAMBÉM\", não há ditongo, pois a palavra termina categoricamente com a consoante \"M\".",
      "C) Em \"CADEIRA\", o \"E\" é vogal e o \"I\" é semivogal, formando, portanto, um ditongo decrescente.",
      "D) Ambas as palavras apresentam, em suas estruturas, o fenômeno fonético do hiato.",
      "E) Em \"TAMBÉM\", o \"M\" final funciona como consoante, caracterizando um encontro consonantal imperfeito no fim da palavra."
    ],
    correctOptionIndex: 2,
    explanation: "Regra básica da sílaba. Em \"CADEIRA\" (CA-DEI-RA), a sílaba \"DEI\" possui apenas UMA vogal (a mais forte, o \"E\"). O \"I\" é semivogal. O som vai do forte pro fraco (Ditongo Decrescente).\n\nPor que a B e a E estão erradas? Porque para Cegalla/Bechara, as terminações -EM, -AM (como em TAMBÉM e FALAM) são Ditongos Nasais. O \"M\" não é consoante ali, ele tem som de semivogal \"I\" (Fica com som de tambẽi)."
  },
  {
    id: "lp-fono-5",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Encontros Vocálicos",
    statement: "Na Língua Portuguesa, o encontro de vogais e semivogais gera diferentes fenômenos fonéticos. Assinale a alternativa que apresenta, correta e respectivamente, palavras formadas por Hiato, Tritongo e Ditongo Crescente.",
    options: [
      "A) Saúde – Paraguai – Quase.",
      "B) Saara – Muito – Série.",
      "C) Rainha – Saguão – Mau.",
      "D) Coelho – Uruguai – Pai.",
      "E) Voo – Tambão – Gênio."
    ],
    correctOptionIndex: 0,
    explanation: "- Hiato: Vogal + Vogal que se separam. Sa-ú-de (A = vogal, U = vogal. Ficam em sílabas diferentes).\n- Tritongo: Semivogal + Vogal + Semivogal. Pa-ra-guai (u = semi, a = vogal, i = semi).\n- Ditongo Crescente: Semivogal + Vogal (do fraco pro forte). Qua-se (u = semi, a = vogal)."
  },
  {
    id: "lp-fono-6",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Contagem de Letras e Fonemas",
    statement: "As palavras na língua portuguesa costumam apresentar assimetria entre sua grafia (letras) e sua pronúncia (fonemas). Assinale a alternativa em que a palavra destacada possui EXATAMENTE 6 letras e 5 fonemas.",
    options: [
      "A) O passarinho cantou pela manhã.",
      "B) Ele comprou a guitarra ontem.",
      "C) Aquele homem chegou atrasado.",
      "D) O sol vai nascer agora.",
      "E) Ele tomou todo o sangue."
    ],
    correctOptionIndex: 3,
    explanation: "Vamos contar as letras e os fonemas da palavra NASCER:\n- Possui 6 letras (N-A-S-C-E-R).\n- Possui o dígrafo \"SC\", que emite um único som (som de \"S\").\n- Fonemas: /n/ /a/ /s/ /e/ /r/ = 5 fonemas. Exatamente o que a questão pediu.\n\nAnálise das outras:\n- A) passarinho: 10 letras, 8 fonemas (SS e NH são dígrafos).\n- B) guitarra: 8 letras, 6 fonemas (GU e RR são dígrafos).\n- C) homem: 5 letras, 4 fonemas (H mudo. O 'em' é ditongo nasal).\n- E) sangue: 6 letras, 4 fonemas (AN é dígrafo vocálico, GU é dígrafo consonantal)."
  },

  // ==========================================
  // SIMULADO FUNDATEC: FONOLOGIA TOTAL
  // ==========================================
  {
    id: "lp-fono-7",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Letras e Fonemas (Complexo)",
    statement: "Assinale a alternativa que indica, correta e respectivamente, o número de letras e fonemas das palavras: TÁXICO, HABILIDADE e CHAMPS.",
    options: [
      "A) 6 letras e 7 fonemas; 10 letras e 10 fonemas; 6 letras e 6 fonemas.",
      "B) 6 letras e 7 fonemas; 10 letras e 9 fonemas; 6 letras e 4 fonemas.",
      "C) 6 letras e 6 fonemas; 10 letras e 9 fonemas; 6 letras e 5 fonemas.",
      "D) 6 letras e 5 fonemas; 10 letras e 8 fonemas; 6 letras e 4 fonemas.",
      "E) 7 letras e 6 fonemas; 10 letras e 9 fonemas; 6 letras e 5 fonemas."
    ],
    correctOptionIndex: 1,
    explanation: "- TÁXICO: 6 letras. Tem o \"X\" com som de \"KS\" (dífono). Logo, 7 fonemas (T-A-K-S-I-K-O).\n- HABILIDADE: 10 letras. O \"H\" inicial é letra etimológica (não tem som). Logo, 9 fonemas.\n- CHAMPS: 6 letras. O \"CH\" é um dígrafo consonantal (som de X) e o \"AM\" é um dígrafo vocálico (som de Ã). Fonemas: X-Ã-P-S (4 fonemas)."
  },
  {
    id: "lp-fono-8",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Sílaba e Encontros Vocálicos",
    statement: "Considerando a palavra \"LOUCURA\" e a regra de ouro de Cegalla (\"Não existe sílaba sem vogal\"), analise as assertivas abaixo:\n\nI. Na sílaba \"LOU\", o \"O\" funciona como vogal (som forte) e o \"U\" como semivogal (som fraco), formando um ditongo decrescente.\nII. A palavra apresenta um hiato, visto que as letras \"O\" e \"U\" são vogais e devem se separar obrigatoriamente.\nIII. A palavra possui exatamente três vogais e uma semivogal em toda a sua estrutura.\n\nQuais estão corretas?",
    options: [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas III.",
      "D) Apenas I e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 3,
    explanation: "- A assertiva I está correta. Na sílaba LOU, o \"O\" é a vogal e o \"U\" é a semivogal (ditongo decrescente).\n- A assertiva II está errada. Ditongos NUNCA se separam (LOU-CU-RA).\n- A assertiva III está correta. A palavra tem 3 vogais (O, U, A) e 1 semivogal (U da primeira sílaba)."
  },
  {
    id: "lp-fono-9",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Dígrafos vs. Encontros Consonantais",
    statement: "Para Bechara e Cegalla, a identificação de dígrafos exige atenção ao som. Assinale a alternativa em que TODAS as palavras apresentam pelo menos um dígrafo (consonantal ou vocálico).",
    options: [
      "A) Aquário, Planta, Ninho.",
      "B) Queijo, Tempo, Passos.",
      "C) Pneu, Glicose, Advogado.",
      "D) Linguiça, Escola, Prato.",
      "E) Água, Excesso, Cacto."
    ],
    correctOptionIndex: 1,
    explanation: "A banca quer palavras onde haja apenas dígrafos.\n- Queijo: \"QU\" antes de \"E\" sem pronunciar o \"U\" é dígrafo (som de K).\n- Tempo: \"EM\" é dígrafo vocálico (som de E com til).\n- Passos: \"SS\" é dígrafo consonantal (um som de S).\n\nPor que as outras estão erradas? \"Aquário\" e \"Água\" (o 'U' é pronunciado, não é dígrafo). \"Pneu\" e \"Advogado\" (são encontros consonantais)."
  },
  {
    id: "lp-fono-10",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Ditongos Nasais",
    statement: "Sobre as palavras \"TAMBÉM\" e \"FALAM\", analise as assertivas a seguir, tendo em vista os conceitos de fonologia de Domingos Paschoal Cegalla:\n\nI. Em \"TAMBÉM\", o \"M\" final não é uma consoante fonética, mas sim uma marcação de semivogal (com som de \"i\"), formando um ditongo nasal decrescente.\nII. Em \"FALAM\", o \"M\" final funciona como semivogal (com som de \"u\"), formando um ditongo nasal.\nIII. Em ambas as palavras, a primeira sílaba (TAM- e FA-) apresenta um dígrafo vocálico (ou consonantal nasal).\n\nQuais estão corretas, segundo os gramáticos?",
    options: [
      "A) Apenas I.",
      "B) Apenas I e II.",
      "C) Apenas II e III.",
      "D) Apenas I e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 1,
    explanation: "Isso despenca na Fundatec!\n- A assertiva I está correta. Em \"Também\", lê-se Tambẽi. O \"M\" tem som de \"I\".\n- A assertiva II está correta. Em \"Falam\", lê-se Falãu. O \"M\" tem som de \"U\".\n- A assertiva III está ERRADA. \"TAM\" (Tã) tem dígrafo vocálico. Mas \"FA\" não tem dígrafo! É apenas consoante + vogal."
  },
  {
    id: "lp-fono-11",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Separação Silábica: Armadilha dos Prefixos",
    statement: "A Fundatec costuma cobrar a regra de separação silábica envolvendo prefixos (sub, des, trans, etc.). Com base nas lições de Celso Cunha e Cegalla, assinale a alternativa em que TODAS as palavras estão separadas CORRETAMENTE.",
    options: [
      "A) Sub-ma-ri-no / de-sar-mar / trans-a-tlân-ti-co.",
      "B) Su-bo-fi-ci-al / de-sen-vol-ver / tran-sa-tlân-ti-co.",
      "C) Sub-o-fi-ci-al / des-ar-mar / tran-sa-tlân-ti-co.",
      "D) Su-bli-nhar / de-sar-mar / trans-a-tlân-ti-co.",
      "E) Su-bo-fi-ci-al / des-en-vol-ver / tran-sa-tlân-ti-co."
    ],
    correctOptionIndex: 1,
    explanation: "Essa é a regra de Cegalla que mais derruba candidato!\n- Prefixo + consoante = Separa (Sub-ma-ri-no).\n- Prefixo + vogal = GRUDA na vogal (Su-bo-fi-ci-al / de-sen-vol-ver / tran-sa-tlân-ti-co)."
  },
  {
    id: "lp-fono-12",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-fonologia",
    articleOrSubtopic: "Separação Silábica: Regras Gerais",
    statement: "Sobre a separação silábica, avalie as palavras a seguir:\n\nPássaro\nSaara\nAbdicar\nChuva\n\nA separação silábica correta de todas as palavras, respectivamente, é:",
    options: [
      "A) Pás-sa-ro / Saa-ra / A-bdi-car / C-hu-va.",
      "B) Pá-ssa-ro / Sa-a-ra / Ab-di-car / Chu-va.",
      "C) Pás-sa-ro / Sa-a-ra / Ab-di-car / Chu-va.",
      "D) Pás-sa-ro / Sa-a-ra / A-bdi-car / Chu-va.",
      "E) Pás-sa-ro / Saa-ra / Ab-di-car / Chu-va."
    ],
    correctOptionIndex: 2,
    explanation: "- Dígrafos SS, RR, SC, XC se separam: PÁS-SA-RO.\n- Hiatos (vogais idênticas ou não) se separam: SA-A-RA.\n- Encontros consonantais mudos (não começam com R/L) ficam na sílaba anterior: AB-DI-CAR.\n- Dígrafos CH, LH, NH NUNCA se separam: CHU-VA."
  }
];
