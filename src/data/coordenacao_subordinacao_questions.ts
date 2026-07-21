/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, SubjectId } from "../types";

export const COORDENACAO_SUBORDINACAO_QUESTIONS: Question[] = [
  // ==========================================
  // CONJUNÇÕES (6 QUESTÕES)
  // ==========================================
  {
    id: "lp-conj-1",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Conjunção Concessiva",
    statement: "No período: \"Embora os índices de criminalidade urbana tenham apresentado redução no último semestre, os agentes da segurança pública mantêm o estado de alerta máximo.\", a conjunção sublinhada pode ser substituída, mantendo a correção gramatical e o sentido original do período, por:",
    options: [
      "A) Porquanto.",
      "B) Contudo.",
      "C) Conquanto.",
      "D) Consoante.",
      "E) Segundo."
    ],
    correctOptionIndex: 2,
    explanation: "\"Embora\" é conjunção subordinativa concessiva. Seu sinônimo perfeito e direto que mantém o verbo no mesmo tempo (\"tenham apresentado\" - subjuntivo) é \"Conquanto\" (também concessiva). \"Porquanto\" é causal/explicativa; \"Contudo\" é adversativa (coordenada, não aceita a mesma estrutura sintática sem reescrita total); \"Consoante\" e \"Segundo\" são conformativas."
  },
  {
    id: "lp-conj-2",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Análise de Assertivas",
    statement: "Considere o seguinte período retirado de um relatório policial:\n\n\"O suspeito não ofereceu resistência física no momento da abordagem, uma vez que o contingente de viaturas no local inviabilizava qualquer tentativa de fuga.\"\n\nSobre o período acima, analise as seguintes assertivas:\n\nI. A locução conjuntiva \"uma vez que\" introduz uma oração com valor semântico de causa em relação à primeira.\nII. A locução \"uma vez que\" poderia ser substituída por \"porquanto\" ou \"já que\", sem prejuízo para a correção sintática e o sentido original do texto.\nIII. O período em questão é classificado como composto por coordenação, sendo a segunda oração uma coordenada explicativa.\n\nQuais estão corretas?",
    options: [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e II.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 2,
    explanation: "Assertiva I (CORRETA): 'Uma vez que' é de fato uma locução conjuntiva subordinativa causal (apresenta a causa da não resistência do suspeito).\nAssertiva II (CORRETA): 'Porquanto' e 'já que' são conjunções de valor causal/explicativo compatíveis, mantendo o sentido de motivo.\nAssertiva III (INCORRETA): O período é composto por subordinação (oração subordinada adverbial causal), e não por coordenação."
  },
  {
    id: "lp-conj-3",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Preenchimento de Lacunas",
    statement: "Assinale a alternativa que preenche correta e respectivamente as lacunas do trecho abaixo:\n\n\"O plano de patrulhamento preventivo da Polícia Penal foi reestruturado de forma urgente; __________ os resultados práticos só serão sentidos a médio prazo, __________ a logística operacional depende do envio de novas viaturas pelo Estado, as quais, __________ a secretaria informou, estão em processo final de licitação.\"",
    options: [
      "A) mas — embora — conforme",
      "B) contudo — porquanto — consoante",
      "C) portanto — visto que — à medida que",
      "D) no entanto — conquanto — segundo",
      "E) todavia — que — conquanto"
    ],
    correctOptionIndex: 1,
    explanation: "Primeira lacuna pede conectivo de oposição (o plano mudou, mas/contudo os resultados demoram). Elimina-se a C (\"portanto\" é conclusivo).\nSegunda lacuna apresenta a causa do atraso dos resultados (a logística depende do envio). Exige conectivo causal: \"porquanto\" (porque). Elimina-se a D (\"conquanto\" é concessivo) e a A (\"embora\" é concessiva).\nTerceira lacuna exige conformidade (de acordo com o que a secretaria informou): \"consoante\" ou \"segundo\". A alternativa B fecha perfeitamente a sequência."
  },
  {
    id: "lp-conj-4",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Funções da Palavra Como",
    statement: "Assinale a alternativa em que a palavra \"como\" exerce a função de conjunção subordinativa causal.",
    options: [
      "A) Os agentes agiram como determina o protocolo de segurança.",
      "B) O treinamento físico dos policiais é tão intenso como o das forças especiais.",
      "C) Como o alvará de soltura apresentava rasuras, o diretor do presídio suspendeu o procedimento.",
      "D) O preso agia Como se não soubesse o motivo de sua detenção.",
      "E) Identificaram-se substâncias ilícitas como cocaína e crack na cela."
    ],
    correctOptionIndex: 2,
    explanation: "Na alternativa C, a palavra \"Como\" está no início do período e equivale a \"Já que / Visto que o alvará apresentava rasuras...\" (Introduz a causa da suspensão do procedimento).\nEm A, \"como\" é conformativa (conforme determina).\nEm B, \"como\" é comparativa (tão intenso quanto/como).\nEm D, faz parte de locução hipotética.\nEm E, funciona como elemento exemplificativo/prepositivo."
  },
  {
    id: "lp-conj-5",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Semântica de Locuções Conjuntivas",
    statement: "Considere a frase: \"As câmeras de monitoramento da penitenciária foram posicionadas estrategicamente, de modo que nenhum ponto cego restasse nos corredores principais.\"\n\nA locução conjuntiva sublinhada estabelece, no período em que ocorre, relação de:",
    options: [
      "A) Proporcionalidade.",
      "B) Finalidade.",
      "C) Consequência (Consecutiva).",
      "D) Tempo.",
      "E) Concessão."
    ],
    correctOptionIndex: 2,
    explanation: "A locução \"de modo que\", \"de sorte que\", \"de forma que\" introduz uma oração subordinada adverbial consecutiva (representa a consequência do posicionamento estratégico das câmeras). É uma oposição clássica cobrada pela FUNDATEC para diferenciar finalidade (intensão) de consequência (fato gerado)."
  },
  {
    id: "lp-conj-6",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Relações Concessivas e Reescrita",
    statement: "Considere a frase:\n\n\"Apesar de as negociações salariais estarem paralisadas, a categoria decidiu não deflagrar greve imediata.\"\n\nAssinale a alternativa que apresenta uma reescrita do período anterior gramaticalmente correta e que mantém o mesmo sentido concessivo.",
    options: [
      "A) Conquanto as negociações salariais estejam paralisadas, a categoria decidiu não deflagrar greve imediata.",
      "B) As negociações salariais estão paralisadas, contudo a categoria decidiu não deflagrar greve imediata.",
      "C) Caso as negociações salariais estivessem paralisadas, a categoria decidiria não deflagrar greve imediata.",
      "D) À medida que as negociações salariais estão paralisadas, a categoria decidiu não deflagrar greve imediata.",
      "E) Posto que as negociações salariais estão paralisadas, a categoria decidiria não deflagrar greve imediata."
    ],
    correctOptionIndex: 0,
    explanation: "A alternativa A é perfeita: substitui a locução prepositiva concessiva \"Apesar de\" por \"Conquanto\" (concessiva) e faz a devida alteração do verbo para o modo subjuntivo (\"estejam\"), mantendo a correção.\n\nA alternativa B muda a classificação sintática para período composto por coordenação adversativa (\"contudo\"), embora o sentido seja similar, o comando pediu a manutenção do valor concessivo (subordinado).\nA alternativa C vira condicional (\"caso\").\nA alternativa D vira proporcional (\"à medida que\")."
  },

  // ==========================================
  // PRONOMES RELATIVOS (10 QUESTÕES)
  // ==========================================
  {
    id: "lp-rel-1",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "O 'QUE' (Relativo vs. Conjunção Integrante)",
    statement: "Assinale a alternativa na qual a palavra “que” tenha sido empregada como pronome relativo.",
    options: [
      "A) O delegado do plantão avisou que o suspeito já foi interrogado.",
      "B) É fundamental que a equipe mantenha o foco durante a operação.",
      "C) A viatura que estava no conserto foi liberada para a ronda de hoje.",
      "D) Tenho a impressão de que a situação está sob controle.",
      "E) Prometa-me que não tomará nenhuma atitude precipitada."
    ],
    correctOptionIndex: 2,
    explanation: "A alternativa C é a correta. O macete é trocar por 'o qual/a qual': 'A viatura a qual estava no conserto...'. Retoma o substantivo 'viatura' e aceita a substituição, logo é Pronome Relativo.\nNas demais alternativas, a palavra 'que' é conjunção integrante:\nA) avisou (isso) - Conjunção integrante.\nB) fundamental (isso) - Conjunção integrante.\nD) impressão de (isso) - Conjunção integrante.\nE) Prometa-me (isso) - Conjunção integrante."
  },
  {
    id: "lp-rel-2",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Análise de Ocorrências do 'QUE'",
    statement: "Analise as ocorrências da palavra \"que\" nas frases abaixo:\n\nI. O relatório policial que o inspetor elaborou estava incompleto.\nII. Acreditamos que a verdade sobre o caso aparecerá em breve.\nIII. Os agentes de segurança que realizaram a apreensão foram condecorados.\n\nA palavra \"que\" funciona como pronome relativo apenas em:",
    options: [
      "A) I.",
      "B) II.",
      "C) I e III.",
      "D) II e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 2,
    explanation: "I. O relatório policial o qual o inspetor elaborou... (Pronome relativo, retoma 'relatório').\nII. Acreditamos nisso. (Conjunção integrante).\nIII. Os agentes de segurança os quais realizaram... (Pronome relativo, retoma 'agentes').\nPortanto, funciona como pronome relativo apenas em I e III."
  },
  {
    id: "lp-rel-3",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "O Pronome 'CUJO'",
    statement: "Em relação ao uso do pronome relativo \"cujo\", assinale a alternativa inteiramente correta segundo a norma-padrão e os manuais de gramática.",
    options: [
      "A) A penitenciária, cuja a reforma terminou ontem, receberá novos detentos.",
      "B) O preso cujo o advogado não compareceu terá sua audiência remarcada.",
      "C) O inquérito cujo os resultados foram inconclusivos foi rapidamente arquivado.",
      "D) A testemunha cujo depoimento foi fundamental entrou no programa de proteção.",
      "E) O policial com cuja a arma o disparo foi efetuado prestará depoimento."
    ],
    correctOptionIndex: 3,
    explanation: "Regra FATAL para a FUNDATEC: É proibido usar artigo após o pronome \"cujo\". As alternativas A (\"cuja a\"), B (\"cujo o\"), C (\"cujo os\") e E (\"cuja a\") estão cometendo esse erro crasso. A única que respeita a regra é a D (\"cujo depoimento\"). O \"cujo\" concorda em gênero e número com \"depoimento\" e não leva artigo."
  },
  {
    id: "lp-rel-4",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Preenchimento com 'CUJO'",
    statement: "Assinale a alternativa que preenche, correta e respectivamente, as lacunas das frases abaixo.\n\nO agente, ______ arma falhou, precisou de reforço imediato.\nA senhora ______ bolsa foi furtada fez o boletim de ocorrência.\nOs suspeitos ______ documentos foram apreendidos negaram o crime.",
    options: [
      "A) cuja a – de quem – cujos",
      "B) cuja – cuja – cujos",
      "C) cuja – cuja a – cujos os",
      "D) cujo – cuja a – com cujos",
      "E) cuja – cuja – cujo os"
    ],
    correctOptionIndex: 1,
    explanation: "- O agente, cuja arma (concorda com arma, sem artigo).\n- A senhora cuja bolsa (concorda com bolsa, sem artigo).\n- Os suspeitos cujos documentos (concorda com documentos, sem artigo).\nResultado: Cuja - Cuja - Cujos."
  },
  {
    id: "lp-rel-5",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Regência com Pronomes Relativos",
    statement: "Considere as regras de regência associadas aos pronomes relativos e assinale a alternativa correta:",
    options: [
      "A) O cargo que o candidato aspira exige dedicação exclusiva.",
      "B) Este é o regulamento que todos os servidores devem obedecer.",
      "C) As provas que o promotor se baseou são consideradas muito frágeis.",
      "D) A colega com quem trabalho está lotada na corregedoria.",
      "E) O manual que eu mais gosto sumiu da gaveta."
    ],
    correctOptionIndex: 3,
    explanation: "A FUNDATEC verifica se você percebe a preposição exigida pelo verbo sendo jogada para antes do pronome relativo:\n\nA) Errado. Quem aspira (no sentido de pretender), aspira A. O certo é \"cargo a que o candidato aspira\".\nB) Errado. Quem obedece, obedece A. O certo é \"regulamento a que todos os servidores devem obedecer\".\nC) Errado. Quem se baseia, baseia-se EM. O certo é \"provas em que o promotor se baseou\".\nD) Correto. Quem trabalha, trabalha COM. Logo: \"colega com quem trabalho\".\nE) Errado. Quem gosta, gosta DE. O certo é \"manual de que eu mais gosto\"."
  },
  {
    id: "lp-rel-6",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Regência e Preposição Anteposta",
    statement: "Assinale a alternativa que preenche corretamente a lacuna do trecho a seguir:\n\n\"A viatura _________ precisamos para realizar a ronda noturna está no pátio.\""
    ,options: [
      "A) que",
      "B) a qual",
      "C) de que",
      "D) em que",
      "E) com a qual"
    ],
    correctOptionIndex: 2,
    explanation: "Ache o verbo da oração do pronome relativo: \"precisamos\". Quem precisa, precisa DE alguma coisa. Essa preposição DE tem que ser colocada antes do pronome relativo. Logo: \"A viatura de que (ou da qual) precisamos\"."
  },
  {
    id: "lp-rel-7",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Uso de 'ONDE' e 'AONDE'",
    statement: "Analise as assertivas abaixo sobre o uso dos pronomes relativos de lugar:\n\nI. Em \"O presídio aonde os detentos foram transferidos é de segurança máxima\", o uso de \"aonde\" está correto, pois o verbo \"transferir\" (para algum lugar) indica destino.\nII. Em \"A situação onde a corporação se encontra é delicada\", o uso do \"onde\" está perfeitamente correto.\nIII. O pronome \"onde\", no trecho \"A delegacia onde ocorreu a reunião\", pode ser substituído por \"na qual\" sem causar incorreção gramatical.\n\nQuais estão corretas?",
    options: [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 2,
    explanation: "I - CORRETO. O verbo \"transferir\" exige preposição A indicando destino (fui transferido a algum lugar). Portanto, \"aonde\" está correto.\nII - ERRADO. \"Onde\" só serve para indicar lugar físico. \"Situação\" é um contexto abstrato/figurado. O correto seria \"A situação em que se encontra\" ou \"na qual se encontra\".\nIII - CORRETO. \"Onde\" sempre equivale a \"Em que\" ou \"No qual / Na qual\" quando retoma lugar físico."
  },
  {
    id: "lp-rel-8",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Substituições Equivalentes",
    statement: "No trecho \"As armas de que os policiais precisam já foram solicitadas\", a expressão em destaque pode ser substituída, mantendo-se a correção gramatical e o sentido original, por:",
    options: [
      "A) a qual",
      "B) as quais",
      "C) na qual",
      "D) das quais",
      "E) cujas"
    ],
    correctOptionIndex: 3,
    explanation: "O pronome \"que\" retoma \"armas\" (feminino, plural). Se quisermos trocar \"que\" pela variação do \"qual\", temos que usar \"as quais\". Como temos a preposição \"de\" na frente exigida por \"precisam\" (quem precisa, precisa de), fazemos a contração: de + as quais = das quais."
  },
  {
    id: "lp-rel-9",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Função Sintática de Relativo",
    statement: "De acordo com Cegalla e Bechara, os pronomes relativos exercem função sintática na oração em que se encontram. No período \"O bandido que fugiu ontem foi recapturado pela manhã\", o pronome relativo em destaque exerce a função sintática de:",
    options: [
      "A) Objeto direto.",
      "B) Sujeito.",
      "C) Predicativo do sujeito.",
      "D) Adjunto adnominal.",
      "E) Objeto indireto."
    ],
    correctOptionIndex: 1,
    explanation: "Passo a passo:\n1. Isole a oração adjetiva: [que fugiu ontem]\n2. Troque o \"que\" pelo antecedente (\"O bandido\"): [O bandido fugiu ontem]\n3. Analise sintaticamente: Quem fugiu ontem? O bandido (Sujeito).\nComo \"O bandido\" funciona como sujeito nessa oração, o pronome relativo \"que\" (que o substitui) exerce a função de Sujeito."
  },
  {
    id: "lp-rel-10",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-coordenacao-subordinacao",
    articleOrSubtopic: "Análise de Função Sintática",
    statement: "Analise a função sintática dos pronomes relativos destacados nas frases abaixo:\n\nI. O manual processual [que] eu li no curso de formação é muito complexo.\nII. O perito criminal [que] assinou o laudo é altamente experiente.\n\nA função sintática do \"que\" em I e II é, correta e respectivamente:",
    options: [
      "A) Sujeito e Sujeito.",
      "B) Objeto direto e Sujeito.",
      "C) Sujeito e Objeto direto.",
      "D) Objeto indireto e Objeto direto.",
      "E) Adjunto adverbial e Sujeito."
    ],
    correctOptionIndex: 1,
    explanation: "Análise de I: [que eu li...] -> O antecedente é \"manual\". Trocando: [Eu li o manual]. 'Eu' é Sujeito; 'li' é Verbo transitivo direto; 'o manual' é Objeto direto. Portanto, o \"que\" é Objeto Direto.\nAnálise de II: [que assinou o laudo] -> O antecedente é \"perito\". Trocando: [O perito assinou o laudo]. 'O perito' é Sujeito; 'assinou' é Verbo; 'o laudo' é Objeto direto. Portanto, o \"que\" é Sujeito.\nResultado: Objeto direto e Sujeito."
  }
];
