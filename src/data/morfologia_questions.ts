/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, SubjectId } from "../types";

export const MORFOLOGIA_QUESTIONS: Question[] = [
  {
    id: "lp-morf-1",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Vozes Verbais (Conversão)",
    statement: "Considere a frase retirada de um texto: “O juiz analisara todas as provas do inquérito policial.”\n\nAssinale a alternativa que apresenta a correta conversão da frase acima para a voz passiva analítica, mantendo o tempo, o modo verbal e o sentido original.",
    options: [
      "A) Todas as provas do inquérito policial foram analisadas pelo juiz.",
      "B) Todas as provas do inquérito policial eram analisadas pelo juiz.",
      "C) Todas as provas do inquérito policial seriam analisadas pelo juiz.",
      "D) Todas as provas do inquérito policial fora analisadas pelo juiz.",
      "E) Todas as provas do inquérito policial foram sendo analisadas pelo juiz."
    ],
    correctOptionIndex: 3,
    explanation: "A regra matriz da Fundatec para voz passiva é: olhe o tempo do verbo principal. O verbo \"analisara\" está no Pretérito Mais-Que-Perfeito do Indicativo. A voz passiva precisa ter o verbo \"SER\" no mesmo tempo (fora) + o particípio do principal (analisadas) + a concordância com o novo sujeito paciente (Todas as provas... foram/fora). Como \"provas\" é plural, a conjugação de \"ser\" no Mais-Que-Perfeito para a 3ª pessoa do plural é \"foram\" (eles foram), MAS atenção! O mais-que-perfeito clássico de SER é \"fora\" (ele) e \"foram\" (eles). Como não há \"foram analisadas\" com sentido de mais-que-perfeito (a letra A é Pretérito Perfeito: \"analisou -> foram analisadas\"), o plural clássico de fora é \"foram\", que confunde com o perfeito.\n\nVamos detalhar:\n- Ativa: analisou (Perfeito) -> Passiva: foram analisadas (Letra A).\n- Ativa: analisava (Imperfeito) -> Passiva: eram analisadas (Letra B).\n- Ativa: analisaria (Futuro do Pretérito) -> Passiva: seriam analisadas (Letra C).\n- Ativa: analisara (Mais-que-perfeito) -> Passiva: foram (fora) analisadas."
  },
  {
    id: "lp-morf-2",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Vozes Verbais (Restrições)",
    statement: "A respeito das vozes verbais, analise as frases abaixo:\n\nI. Assistiu-se a um documentário sobre o sistema prisional.\nII. Acredita-se em dias melhores para a segurança pública.\nIII. Os detentos feriram-se durante o banho de sol.\n\nSe tentássemos passar as frases I e II para a voz passiva analítica, qual seria o resultado de acordo com a norma-padrão defendida por Cegalla e Bechara?",
    options: [
      "A) \"Um documentário sobre o sistema prisional foi assistido\" e \"Dias melhores para a segurança pública são acreditados\".",
      "B) \"Um documentário sobre o sistema prisional era assistido\" e \"Em dias melhores foi acreditado\".",
      "C) Nenhuma das duas pode ser convertida para a voz passiva, pois os verbos são transitivos indiretos.",
      "D) Apenas a I pode ser convertida, resultando em \"A um documentário foi assistido\".",
      "E) Ambas aceitam a conversão desde que se retirem as preposições."
    ],
    correctOptionIndex: 2,
    explanation: "Alerta máximo! Somente verbos Transitivos Diretos (VTD) ou Diretos e Indiretos (VTDI) aceitam voz passiva. Na frase I, \"Assistir\" no sentido de ver é VTI (exige \"a\"). Na frase II, \"Acreditar\" é VTI (exige \"em\"). Se o verbo é VTI, aquele \"se\" NÃO é partícula apassivadora, é Índice de Indeterminação do Sujeito. Logo, a oração não tem sujeito paciente para ir para a voz passiva."
  },
  {
    id: "lp-morf-3",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Formação de Palavras",
    statement: "Analise as palavras sublinhadas nas frases abaixo e a classificação de seu processo de formação de palavras entre parênteses:\n\nI. O combate ao crime organizado exige inteligência. (Derivação Regressiva).\nII. O planalto central concentra as decisões do país. (Composição por Aglutinação).\nIII. O policial viu o suspeito entardecer na esquina. (Derivação Parassintética).\nIV. A testemunha ficou boquiaberta com a cena. (Composição por Justaposição).\n\nQuais estão corretas?",
    options: [
      "A) Apenas I e II.",
      "B) Apenas I, II e III.",
      "C) Apenas II e IV.",
      "D) Apenas III e IV.",
      "E) I, II, III e IV."
    ],
    correctOptionIndex: 1,
    explanation: "I. Certa. Combater (verbo) -> O combate (substantivo). Derivação Regressiva (Deverbal).\nII. Certa. Plano + Alto = Planalto (perdeu o 'o', houve fusão, então é Aglutinação).\nIII. Certa. En + tarde + cer. Se tirar o 'en-' ou o '-cer', a palavra deixa de existir. Parassintética!\nIV. ERRADA. Boquiaberta vem de Boca + Aberta. Houve perda/alteração de letras (c virou qu, perdeu o 'a'). Portanto, é Composição por Aglutinação, e não Justaposição."
  },
  {
    id: "lp-morf-4",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Formação de Palavras (Derivação Imprópria)",
    statement: "A derivação imprópria ocorre quando uma palavra muda de classe gramatical sem sofrer alteração em sua forma. Em qual das alternativas abaixo ocorre esse fenômeno?",
    options: [
      "A) O desespero tomou conta do refém.",
      "B) O policial civil agiu rapidamente.",
      "C) O bom da profissão é ajudar a sociedade.",
      "D) Infelizmente, os índices criminais subiram.",
      "E) Aquele guarda-chuva quebrou na tempestade."
    ],
    correctOptionIndex: 2,
    explanation: "Derivação imprópria é quando a palavra muda de classe no contexto. \"Bom\" normalmente é adjetivo (um homem bom). Na letra C, o artigo \"O\" substantivou a palavra \"bom\" (O bom da profissão).\n\nDica: Na letra A, \"desespero\" vem de desesperar (Regressiva). Na letra B, \"rapidamente\" é Sufixal."
  },
  {
    id: "lp-morf-5",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Plural dos Compostos",
    statement: "De acordo com a norma-padrão de Celso Cunha e Cegalla sobre a flexão de número dos substantivos compostos, assinale a alternativa em que todas as palavras estão no plural corretamente:",
    options: [
      "A) cachorros-quentes – guardas-civis – beija-flores.",
      "B) cachorro-quentes – guarda-civis – beijas-flores.",
      "C) cachorros-quentes – guardas-civil – beijas-flor.",
      "D) cachorros-quente – guarda-civis – beija-flores.",
      "E) cachorro-quentes – guardas-civis – beijas-flores."
    ],
    correctOptionIndex: 0,
    explanation: "Regra de Cegalla para plurais compostos:\n- Substantivo + Adjetivo = Os dois vão para o plural. (cachorro = subst, quente = adjetivo -> cachorros-quentes).\n- Substantivo + Adjetivo = (guarda/policial = subst, civil = adj -> guardas-civis).\n- Verbo + Substantivo = SÓ o substantivo vai para o plural. O verbo fica invariável. (beija = verbo, flor = substantivo -> beija-flores)."
  },
  {
    id: "lp-morf-6",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Adjetivo (Mudança de Sentido)",
    statement: "A posição do adjetivo em relação ao substantivo pode, em alguns casos, alterar completamente o sentido da expressão. Assinale a alternativa em que a inversão da ordem altera o sentido original.",
    options: [
      "A) Viatura nova / Nova viatura.",
      "B) Mulher inteligente / Inteligente mulher.",
      "C) Alto funcionário / Funcionário alto.",
      "D) Prova difícil / Difícil prova.",
      "E) Policial corajoso / Corajoso policial."
    ],
    correctOptionIndex: 2,
    explanation: "A Fundatec adora isso.\n- \"Funcionário alto\" = Estatura, tamanho físico.\n- \"Alto funcionário\" = Cargo elevado, hierarquia (ex: alto escalão). O sentido muda completamente.\n\nNas outras alternativas, \"mulher inteligente\" e \"inteligente mulher\", \"prova difícil\" e \"difícil prova\" não sofrem mudança semântica (apenas ênfase)."
  },
  {
    id: "lp-morf-7",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Emprego dos Pronomes Relativos",
    statement: "O uso dos pronomes relativos é rigoroso na norma-padrão. Considerando o que prescrevem Cegalla e Bechara, assinale a alternativa que apresenta erro no uso do pronome relativo.",
    options: [
      "A) A penitenciária onde os presos se rebelaram foi interditada.",
      "B) O policial cuja arma foi roubada prestou depoimento.",
      "C) A época onde a criminalidade era menor deixou saudades.",
      "D) O inquérito a que o juiz se referiu está em sigilo.",
      "E) O cargo ao qual o candidato aspira é muito concorrido."
    ],
    correctOptionIndex: 2,
    explanation: "Regra rigorosa de Bechara: ONDE só pode ser usado para LUGAR FÍSICO. \"Época\" é TEMPO, não é lugar físico. O correto seria: \"A época em que a criminalidade era menor...\"\n\n(A letra B está corretíssima, \"cuja\" não aceita artigo depois)."
  },
  {
    id: "lp-morf-8",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Pronomes Demonstrativos (Coesão)",
    statement: "No trecho: “O porte de armas para a população e o aumento do efetivo policial são temas polêmicos. ______ é defendido pelo governo; ______ é exigido pela sociedade civil.”\n\nPara preencher as lacunas recuperando corretamente os termos sublinhados, deve-se usar, respectivamente:",
    options: [
      "A) Esse – Este.",
      "B) Este – Aquele.",
      "C) Aquele – Este.",
      "D) Isso – Aquilo.",
      "E) Esse – Aquela."
    ],
    correctOptionIndex: 1,
    explanation: "Regra clássica de retomada (Anafórica) com pronomes:\nQuando você cita DOIS termos (\"O porte de armas...\" e \"o aumento do efetivo...\"), para retomá-los de forma cruzada, você usa:\n- ESTE: Retoma o mais PRÓXIMO (o último que foi dito: \"o aumento do efetivo policial\").\n- AQUELE: Retoma o mais DISTANTE (o primeiro que foi dito: \"O porte de armas\")."
  },
  {
    id: "lp-morf-9",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Pronomes Pessoais e Substituição",
    statement: "Analise o trecho: \"Os agentes penitenciários revistaram as celas e entregaram os relatórios ao diretor.\"\n\nAssinale a alternativa que substitui corretamente, e na ordem, os termos sublinhados por pronomes oblíquos átonos.",
    options: [
      "A) revistaram-nas / entregaram-los / entregaram-lhe.",
      "B) revistaram-lhes / entregaram-nos / entregaram-o.",
      "C) revistaram-as / entregaram-nos / entregaram-lo.",
      "D) revistaram-nas / entregaram-nos / entregaram-lhe.",
      "E) revistaram-as / entregaram-os / entregaram-a."
    ],
    correctOptionIndex: 3,
    explanation: "- \"revistaram as celas\": Verbo terminado em som nasal (M). O pronome 'as' vira 'nas'. -> revistaram-nas.\n- \"entregaram os relatórios\": Verbo terminado em som nasal (M). O pronome 'os' vira 'nos'. -> entregaram-nos.\n- \"entregaram ao diretor\": \"ao diretor\" é Objeto Indireto (pessoa). Objeto indireto é substituído por lhe / lhes. -> entregaram-lhe."
  },
  {
    id: "lp-morf-10",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-morfologia-classes",
    articleOrSubtopic: "Valores das Conjunções e Advérbios",
    statement: "Analise as assertivas abaixo sobre o valor semântico das palavras e conjunções destacadas:\n\nI. Em \"Posto que o suspeito tenha confessado, não há provas materiais\", a locução sublinhada tem valor Concessivo, podendo ser substituída por \"Embora\".\nII. Em \"Como as viaturas estavam estragadas, o patrulhamento foi cancelado\", a palavra \"como\" introduz uma oração Causal, equivalendo a \"Já que\".\nIII. Na frase \"Eles agiram frios e calculistas\", as palavras destacadas exercem a função de advérbios, pois indicam o modo como eles agiram, devendo ficar invariáveis.\n\nQuais estão corretas?",
    options: [
      "A) Apenas I.",
      "B) Apenas I e II.",
      "C) Apenas II e III.",
      "D) Apenas I e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 1,
    explanation: "I. Correta. \"Posto que\" é uma pegadinha mortal. Muita gente acha que é explicativa, mas para a gramática normativa é Concessiva (sinônimo de Embora).\nII. Correta. \"Como\" no início da frase introduzindo o motivo de algo é Causal.\nIII. ERRADA. Na frase \"Eles agiram frios e calculistas\", \"frios e calculistas\" são Adjetivos que funcionam como Predicativo do Sujeito (eles estavam frios e calculistas ao agir). Por serem adjetivos, eles variam (estão no plural concordando com \"Eles\"). Para ser advérbio, teria que ser \"agiram friamente\"."
  }
];
