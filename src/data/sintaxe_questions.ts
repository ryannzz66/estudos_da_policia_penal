/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, SubjectId } from "../types";

export const SINTAXE_QUESTIONS: Question[] = [
  // ==========================================
  // SIMULADO FUNDATEC – POLÍCIA PENAL (SINTAXE TOTAL)
  // ==========================================
  {
    id: "lp-sint-1",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Período Simples (AA vs CN)",
    statement: "A Fundatec exige a distinção clássica entre Adjunto Adnominal e Complemento Nominal. Assinale a alternativa em que o termo sublinhado (em destaque) exerce a função sintática de Complemento Nominal.",
    options: [
      "A) O choro da criança comoveu o policial.",
      "B) A resposta do delegado foi imediata.",
      "C) O medo da violência altera a rotina da cidade.",
      "D) A casa de madeira foi periciada.",
      "E) A descoberta do perito mudou o rumo da investigação."
    ],
    correctOptionIndex: 2,
    explanation: "\"Medo\" é substantivo abstrato. A preposição \"de\" + \"violência\" indica quem sofre o medo (sentido passivo, a violência é temida). Logo, é Complemento Nominal. Nas alternativas A, B, D e E, os termos sublinhados praticam a ação (a criança chora, o delegado responde, a casa é feita de madeira [qualidade/origem], o perito descobre), sendo, portanto, Adjuntos Adnominais."
  },
  {
    id: "lp-sint-2",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Período Simples: Pontuação do Adjunto Adverbial",
    statement: "A Fundatec cobra a regra de pontuação do adjunto adverbial deslocado. Assinale a alternativa em que o uso da vírgula está INCORRETO.",
    options: [
      "A) Durante a madrugada fria de domingo, os agentes realizaram a transferência.",
      "B) Hoje, teremos uma reunião importante no batalhão.",
      "C) Os policiais chegaram cedo, naquela manhã chuvosa.",
      "D) Naquela tarde os presos do pavilhão B, iniciaram um princípio de motim.",
      "E) Silenciosamente, o suspeito confessou a autoria do crime."
    ],
    correctOptionIndex: 3,
    explanation: "Em \"Naquela tarde os presos do pavilhão B, iniciaram um princípio de motim\", há uma vírgula separando o Sujeito (\"os presos do pavilhão B\") do seu Verbo (\"iniciaram\"), o que é incorreto na gramática normativa. Além disso, o adjunto adverbial deslocado longo (\"Naquela tarde\") deveria ter vírgula após ele, e não após o sujeito."
  },
  {
    id: "lp-sint-3",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Período Composto: Orações Adjetivas",
    statement: "Considere o seguinte período: “Os policiais penais, que realizaram o curso de intervenção, receberão progressão de carreira.”\n\nSobre o trecho sublinhado, é correto afirmar que:",
    options: [
      "A) Trata-se de uma oração subordinada adjetiva restritiva, indicando que apenas alguns policiais receberão a progressão.",
      "B) A retirada das vírgulas causaria erro gramatical, pois o pronome relativo \"que\" exige pontuação.",
      "C) A retirada das vírgulas mantém a correção gramatical do período, porém altera o seu sentido original, passando a restringir o benefício.",
      "D) Exerce a função sintática de objeto direto em relação à oração principal.",
      "E) Trata-se de uma oração subordinada adverbial causal."
    ],
    correctOptionIndex: 2,
    explanation: "Questão clássica Fundatec! Com vírgulas = Adjetiva Explicativa (refere-se ao TODO, todos os policiais realizaram o curso). Sem vírgulas = Adjetiva Restritiva (refere-se a UMA PARTE, só alguns realizaram o curso). Retirar as vírgulas altera o sentido, mas a gramática continua perfeita."
  },
  {
    id: "lp-sint-4",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Período Composto: Valor Semântico",
    statement: "No trecho: “O suspeito negou a autoria do crime, embora as imagens das câmeras de segurança fossem contundentes”, a conjunção destacada introduz uma oração subordinada adverbial com valor semântico de:",
    options: [
      "A) Causa.",
      "B) Concessão.",
      "C) Consequência.",
      "D) Condição.",
      "E) Conformidade."
    ],
    correctOptionIndex: 1,
    explanation: "As conjunções \"embora\", \"conquanto\", \"ainda que\" introduzem oração subordinada adverbial Concessiva (uma oposição que não impede a realização do fato principal; quebra de expectativa)."
  },
  {
    id: "lp-sint-5",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Colocação Pronominal: Bechara e Cegalla",
    statement: "Segundo as gramáticas de Evanildo Bechara e Domingos Paschoal Cegalla, assinale a alternativa que apresenta ERRO de colocação pronominal.",
    options: [
      "A) Jamais me disseram a verdade sobre o ocorrido na penitenciária.",
      "B) O diretor do presídio saiu, deixando-nos responsáveis pelo plantão.",
      "C) Me entregaram as chaves do pavilhão logo pela manhã.",
      "D) Em se tratando de segurança pública, a disciplina é fundamental.",
      "E) Alguém o avisou sobre a revista nas celas."
    ],
    correctOptionIndex: 2,
    explanation: "Para Cegalla e Bechara, NUNCA se inicia uma frase com pronome oblíquo átono na norma culta. O correto seria \"Entregaram-me...\" (ênclise)."
  },
  {
    id: "lp-sint-6",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Colocação Pronominal: Infinitivo",
    statement: "A Fundatec adora cobrar a regra do Infinitivo. Considere as frases abaixo:\n\nI. Para não magoá-lo, o agente omitiu parte da história.\nII. Para não o magoar, o agente omitiu parte da história.\n\nDe acordo com Cegalla e Bechara, é correto afirmar que:",
    options: [
      "A) Apenas a frase I está correta, pois o advérbio \"não\" atrai o pronome, mas o infinitivo anula isso.",
      "B) Apenas a frase II está correta, pois a palavra negativa \"não\" exige próclise obrigatória.",
      "C) Ambas estão incorretas, o certo seria \"Para o não magoar\".",
      "D) Ambas estão corretas, pois com verbo no infinitivo impessoal, a ênclise é sempre lícita, mesmo havendo palavra atrativa.",
      "E) A frase I está correta, mas a ênclise só é aceita porque não há preposição antes do verbo."
    ],
    correctOptionIndex: 3,
    explanation: "Bizu de Ouro! Quando o verbo está no infinitivo (terminado em R), a ênclise (\"magoá-lo\") é SEMPRE PERMITIDA por Bechara e Cegalla, mesmo que exista a palavra negativa \"não\" que normalmente exigiria próclise (\"não o magoar\"). Ambas as opções são perfeitamente gramaticais!"
  },
  {
    id: "lp-sint-7",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Regência Verbal: Celso Pedro Luft",
    statement: "O Dicionário Prático de Regência Verbal de Celso Pedro Luft é uma das bases das bancas. Assinale a frase que está CORRETA quanto à regência.",
    options: [
      "A) A failure na segurança do pavilhão implicou em exoneração do chefe de equipe.",
      "B) O candidato aspirava o cargo de diretor da penitenciária desde jovem.",
      "C) O atraso da viatura implicou graves consequências para a operação.",
      "D) Prefiro muito mais o plantão noturno do que o trabalho administrativo.",
      "E) Nós assistimos o monitoramento das câmeras de segurança."
    ],
    correctOptionIndex: 2,
    explanation: "Segundo Luft, o verbo Implicar (no sentido de acarretar/trazer como consequência) é Transitivo Direto, logo, NÃO aceita a preposição \"em\" (erro da A). A letra B erra porque \"aspirar\" no sentido de desejar exige \"a\" (\"aspirava ao cargo\"). A letra D erra porque \"preferir\" rege \"a\" (\"prefiro o plantão ao trabalho\", sem \"mais\" ou \"do que\"). A letra E erra porque \"assistir\" no sentido de ver exige \"a\" (\"assistimos ao monitoramento\"). O gabarito é C."
  },
  {
    id: "lp-sint-8",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Regência Verbal e Nominal",
    statement: "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do período a seguir:\n\nO policial não se esqueceu ______ arma; chegou ______ delegacia e pagou a dívida ______ colega.",
    options: [
      "A) a - na - do",
      "B) da - à - ao",
      "C) da - na - ao",
      "D) a - à - do",
      "E) a - a - ao"
    ],
    correctOptionIndex: 1,
    explanation: "- Quem se esquece, se esquece DE (da arma).\n- Quem chega, chega A algum lugar (à delegacia, exigindo fusão com o artigo feminino).\n- E quem paga uma dívida, paga algo A alguém (ao colega)."
  },
  {
    id: "lp-sint-9",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Uso da Crase: Proibições",
    statement: "De acordo com Celso Cunha e Lindley Cintra, em qual das alternativas abaixo o uso da crase é PROIBIDO?",
    options: [
      "A) O comboio retornou à base policial.",
      "B) O delegado dirigiu-se àquela testemunha.",
      "C) O preso foi encaminhado à serviço médico.",
      "D) A viatura chegou às pressas.",
      "E) A medida atende às exigências da lei."
    ],
    correctOptionIndex: 2,
    explanation: "A palavra \"serviço\" é masculina. Nunca ocorre crase antes de palavras masculinas, conforme prescreve a gramática de Cunha e Cintra."
  },
  {
    id: "lp-sint-10",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Uso da Crase: Casos Facultativos",
    statement: "Para a Fundatec, conhecer os casos facultativos de crase é essencial. Assinale a alternativa em que o uso do acento grave é opcional.",
    options: [
      "A) Os agentes ficaram frente a frente com os rebelados.",
      "B) Entreguei o relatório à chefe de plantão.",
      "C) Referiu-se à Maria com muito respeito durante o depoimento.",
      "D) Fomos à casa de parentes após o expediente.",
      "E) Devido à forte chuva, a operation foi cancelada."
    ],
    correctOptionIndex: 2,
    explanation: "Antes de nomes próprios femininos (Maria, Joana), o uso do artigo é opcional (indica grau de intimidade). Logo, a crase é facultativa. Os outros casos clássicos são: antes de pronome possessivo feminino singular (\"minha\", \"sua\") e após a preposição \"até\"."
  },
  {
    id: "lp-sint-11",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Concordância Verbal: Verbos Impessoais",
    statement: "Considerando as regras de concordância verbal (Bechara e Cegalla), assinale a alternativa em que haja ERRO.",
    options: [
      "A) Fazia cinco anos que ele não visitava o irmão no presídio.",
      "B) Devem haver novas regras para o ingresso de visitantes.",
      "C) Há muitos casos sem solução nesta delegacia.",
      "D) Vai fazer dois meses que solicitamos novos coletes.",
      "E) Havia diversos policiais no pátio da corregedoria."
    ],
    correctOptionIndex: 1,
    explanation: "O verbo \"haver\" no sentido de existir é impessoal (não possui sujeito e fica no singular). Quando forma locução verbal (\"devem haver\"), ele transmite essa impessoalidade para o verbo auxiliar (\"devem\"). Portanto, o correto e obrigatório de acordo com a norma-padrão é: \"Deve haver novas regras\"."
  },
  {
    id: "lp-sint-12",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Concordância Verbal: Partícula SE",
    statement: "Sobre a concordância com a partícula \"se\", analise as sentenças:\n\nI. Aluga-se apartamentos próximos à penitenciária.\nII. Precisa-se de agentes prisionais qualificados.\nIII. Consertam-se viaturas danificadas.\n\nEstão CORRETAS de acordo com a norma-padrão:",
    options: [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas D) Apenas II e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 3,
    explanation: "- A frase I está errada: \"Alugar\" é VTD, logo o \"se\" funciona como partícula apassivadora, exigindo que o verbo concorde com o sujeito paciente plural (\"apartamentos\"). O correto seria: \"Alugam-se apartamentos\".\n- A frase II está correta: \"Precisar\" é VTI (exige de), o \"se\" é índice de indeterminação do sujeito, mantendo o verbo obrigatoriamente no singular.\n- A frase III está correta: \"Consertar\" é VTD, o \"se\" é partícula apassivadora e o verbo concorda com \"viaturas\" (plural)."
  },
  {
    id: "lp-sint-13",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Concordância Nominal",
    statement: "Assinale a alternativa que apresenta ERRO de concordância nominal.",
    options: [
      "A) As planilhas do plantão seguem anexas ao e-mail.",
      "B) Muito obrigadas, disseram as policiais após a homenagem.",
      "C) É proibido a entrada de pessoas não autorizadas na sala de armas.",
      "D) A porta da carceragem estava meio aberta.",
      "E) Elas mesmas preencheram o boletim de ocorrência."
    ],
    correctOptionIndex: 2,
    explanation: "A regra do \"É proibido\": se a expressão vier acompanhada de determinante/artigo (\"a entrada\"), ela deve concordar com ele: \"É proibida a entrada\". Se não tivesse o \"a\" (\"É proibido entrada\"), estaria correta. Nas outras alternativas:\n- \"anexas\" concorda com planilhas.\n- \"meio\" (um pouco, advérbio) não varia.\n- \"mesmas/obrigadas\" concordam com as pessoas femininas/plurais."
  },
  {
    id: "lp-sint-14",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Concordância: Bastante e Só",
    statement: "No que tange à concordância das palavras \"bastante\" e \"só\", assinale a frase CORRETA.",
    options: [
      "A) Os presos estavam bastantes revoltados com a comida.",
      "B) Só as mulheres puderam entrar, as crianças ficaram sós aguardando.",
      "C) Havia bastante viaturas no estacionamento hoje.",
      "D) A testemunha e a vítima estavam só na sala de espera.",
      "E) Eles treinaram bastantes para o teste de aptidão física."
    ],
    correctOptionIndex: 1,
    explanation: "A letra B está correta:\n- \"Só\" (somente, advérbio) é invariável: \"Só as mulheres...\".\n- \"sós\" (sozinhas, adjetivo) é variável: \"ficaram sós\".\n\nErros das outras:\n- A: \"revoltados\" é adjetivo, \"bastante\" é advérbio e deve ficar invariável.\n- C: \"viaturas\" é substantivo, \"bastantes\" (muitas) funciona como adjetivo e deve variar.\n- D: \"testemunha e vítima estavam sós\" (sozinhas), no plural.\n- E: \"treinaram bastante\" (advérbio ligado ao verbo treinar, invariável)."
  },
  {
    id: "lp-sint-15",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Concordância: Sujeito Composto Posposto",
    statement: "A respeito do Sujeito Composto Posposto ao verbo, segundo Bechara e Cegalla, qual alternativa está de acordo com a norma culta?",
    options: [
      "A) Faltou ao plantão o agente Silva e o escrivão Marcos. (Apenas essa concordância atrativa é admitida).",
      "B) Faltaram ao plantão o agente Silva e o escrivão Marcos. (Apenas essa concordância gramatical é admitida).",
      "C) Tanto \"Faltou ao plantão o agente Silva e o escrivão Marcos\" quanto \"Faltaram ao plantão o agente Silva e o escrivão Marcos\" são gramaticals e corretas.",
      "D) O verbo, obrigatoriamente, deve ir para o plural, não sendo aceita a atração.",
      "E) O verbo deve concordar obrigatoriamente no singular, por estar posicionado antes do sujeito composto."
    ],
    correctOptionIndex: 2,
    explanation: "Quando o sujeito composto vem posposto ao verbo (depois do verbo), as gramáticas normativas de Cegalla e Bechara admitem tanto a concordância atrativa (concordando com o núcleo mais próximo: \"Faltou o agente...\") quanto a concordância gramatical/lógica (indo para o plural concordando com a soma: \"Faltaram o agente e o escrivão\"). Ambas estão corretas!"
  },

  // ==========================================
  // SIMULADO FUNDATEC - POLÍCIA PENAL (SINTAXE GERAL)
  // ==========================================
  {
    id: "lp-sint-16",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Funções Sintáticas no Período Simples",
    statement: "No trecho: \"O juiz considerou o detento culpado, mas a invenção do álibi não convenceu os jurados\", assinale a alternativa que classifica, correta e respectivamente, as funções sintáticas dos termos em destaque: \"culpado\" e \"do álibi\".",
    options: [
      "A) Predicativo do sujeito – Adjunto adnominal.",
      "B) Objeto direto – Complemento nominal.",
      "C) Predicativo do objeto – Complemento nominal.",
      "D) Adjunto adverbial – Adjunto adnominal.",
      "E) Predicativo do objeto – Sujeito."
    ],
    correctOptionIndex: 2,
    explanation: "- \"culpado\" é Predicativo do Objeto. O verbo considerar é transitivo direto (\"considerou o detento\" [Objeto Direto]). A palavra \"culpado\" é uma característica temporária atribuída a esse objeto pelo sujeito.\n- \"do álibi\" é Complemento Nominal, pois se liga ao substantivo abstrato \"invenção\" com sentido passivo (o álibi foi inventado)."
  },
  {
    id: "lp-sint-17",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Orações Adjetivas e Sentido",
    statement: "Considere o seguinte trecho: \"Os policiais penais, que participaram do curso de intervenção tática, foram convocados para a missão.\"\n\nSobre a oração sublinhada, analise as assertivas abaixo:\n\nI. Trata-se de uma oração subordinada adjetiva explicativa.\nII. A retirada das vírgulas que isolam a oração alteraria o sentido original do texto, passando a restringir o grupo de policiais.\nIII. A retirada das vírgulas provocaria erro gramatical grave, ferindo a norma-padrão.\n\nQuais estão corretas?",
    options: [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e II.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 2,
    explanation: "- I está correta: Com vírgulas, é Adjetiva Explicativa (refere-se ao todo, todos participaram).\n- II está correta: Retirar as vírgulas muda o sentido para Restritiva (apenas alguns participaram).\n- III está errada: A retirada das vírgulas não gera erro gramatical, apenas muda a semântica do período."
  },
  {
    id: "lp-sint-18",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Colocação Pronominal: Norma Culta",
    statement: "Com base nas regras de colocação pronominal defendidas por Evanildo Bechara e Domingos Paschoal Cegalla, assinale a alternativa totalmente CORRETA.",
    options: [
      "A) Me disseram que o concurso da Polícia Penal será muito concorrido este ano.",
      "B) Em tratando-se de segurança pública, a disciplina é o pilar fundamental.",
      "C) O diretor pediu aos agentes para não o acordarem durante a madrugada.",
      "D) O diretor pediu aos agentes para não acordá-lo durante a madrugada.",
      "E) Jamais importunarei-te durante o seu horário de descanso no presídio."
    ],
    correctOptionIndex: 3,
    explanation: "Essa é a Regra de Ouro de Bechara e Cegalla! Com verbo no Infinitivo (acordar), a ênclise (\"acordá-lo\") é lícita mesmo na presença de palavra atrativa (\"não\"). Portanto, \"não acordá-lo\" está perfeito.\n\nErros das outras:\n- A: Inicia oração com pronome átono.\n- B: Exige próclise obrigatória com \"Em + gerúndio\" (\"Em se tratando\").\n- E: Palavra negativa/atrativa (\"Jamais\") exige próclise (\"Jamais te importunarei\")."
  },
  {
    id: "lp-sint-19",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Regência Verbal: Erros Comuns",
    statement: "Considerando a regência verbal prescrita por Celso Pedro Luft e muito cobrada pela Fundatec, assinale a alternativa que apresenta ERRO de regência.",
    options: [
      "A) O novo agente aspirava ao cargo de chefe de equipe.",
      "B) Durante a sindicância, o erro do servidor implicou em demissão imediata.",
      "C) Nas horas vagas, o inspetor preferia o plantão noturno ao diurno.",
      "D) O médico do presídio assistiu o apenado que passava mal.",
      "E) Chegamos à penitenciária antes do amanhecer para a revista geral."
    ],
    correctOptionIndex: 1,
    explanation: "O verbo \"Implicar\" no sentido de acarretar/causar é Transitivo Direto, logo, não exige preposição \"em\". O correto seria: \"implicou demissão imediata\"."
  },
  {
    id: "lp-sint-20",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Crase: Casos Facultativos",
    statement: "A Fundatec exige o conhecimento das regras de crase. Assinale a alternativa em que o uso do acento indicativo de crase é FACULTATIVO (opcional) em todas as ocorrências.",
    options: [
      "A) O advogado dirigiu-se àquela delegacia e falou à escrivã.",
      "B) Os agentes ficaram frente a frente com o perigo à noite.",
      "C) O relatório foi entregue à minha supervisora, que o levou até à diretoria.",
      "D) O comboio começou a andar em direção à base.",
      "E) Referiu-se a mulheres que estavam à espera de atendimento."
    ],
    correctOptionIndex: 2,
    explanation: "Na opção C, ambas as ocorrências de crase são facultativas:\n- \"à minha supervisora\" (antes de pronome possessivo feminino singular, a crase é facultativa).\n- \"até à diretoria\" (depois da preposição 'até', a crase também é opcional/facultativa)."
  },
  {
    id: "lp-sint-21",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Concordância: Contagem de Palavras que Flexionam",
    statement: "Considere o trecho a seguir:\n\n\"A viatura nova, designada para a escolta, chegou rapidamente ao local.\"\n\nSe a palavra \"viatura\" fosse flexionada no plural, quantas outras palavras do trecho precisariam obrigatoriamente ser alteradas para manter a correta concordância nominal e verbal?",
    options: [
      "A) 2",
      "B) 3",
      "C) 4",
      "D) 5",
      "E) 6"
    ],
    correctOptionIndex: 2,
    explanation: "Se flexionarmos \"viatura\" para \"viaturas\", as palavras que mudam obrigatoriamente são:\n1) \"A\" -> \"As\"\n2) \"nova\" -> \"novas\"\n3) \"designada\" -> \"designadas\"\n4) \"chegou\" -> \"chegaram\"\n\nAs outras palavras (\"para\", \"a\", \"escolta\", \"rapidamente\", \"ao\", \"local\") mantêm-se invariáveis. Total = 4 palavras."
  },
  {
    id: "lp-sint-22",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-sintaxe",
    articleOrSubtopic: "Concordância Verbal e Nominal (Revisão)",
    statement: "Preencha as lacunas das frases abaixo de acordo com a norma-padrão (Bechara, Cegalla, Cunha & Cintra):\n\n- Hoje _________ (Faz / Fazem) dez anos que ele entrou na corporação.\n- Naquela ala do presídio, _________ (havia / haviam) muitos problemas estruturais.\n- As portas da guarita ficaram ________ (meio / meias) abertas durante a noite.\n- Os agentes treinaram ________ (bastante / bastantes) para o teste físico.\n\nA sequência que preenche corretamente as lacunas é:",
    options: [
      "A) Faz – havia – meia – bastantes.",
      "B) Fazem – haviam – meio – bastante.",
      "C) Faz – havia – meio – bastante.",
      "D) Fazem – havia – meias – bastantes.",
      "E) Faz – haviam – meio – bastante."
    ],
    correctOptionIndex: 2,
    explanation: "- \"Fazer\" indicando tempo decorrido é impessoal (fica no singular): \"Faz dez anos\".\n- \"Haver\" no sentido de existir é impessoal (fica no singular): \"Havia muitos problemas\".\n- \"Meio\" no sentido de \"um pouco\" é advérbio, logo invariável: \"meio abertas\".\n- \"Bastante\" modificando verbo (\"treinaram\") é advérbio, logo invariável: \"treinaram bastante\".\n\nPortanto, a sequência correta é: Faz – havia – meio – bastante."
  }
];
