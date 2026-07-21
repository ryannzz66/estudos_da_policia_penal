/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, SubjectId } from "../types";

export const PONTUACAO_QUESTIONS: Question[] = [
  {
    id: "lp-pont-new-1",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-pontuacao",
    articleOrSubtopic: "Pontuação - Regras Gerais",
    statement: "Considerando as regras gramaticais em Língua Portuguesa vigentes e amplamente adotadas pela banca FUNDATEC, assinale a alternativa que apresenta a pontuação inteiramente CORRETA.",
    options: [
      "A) Paguei a taxa de inscrição do concurso dele e, pude levá-lo para realizar a prova física em Porto Alegre.",
      "B) Às vezes sinto, que a preparação para a área policial exige mais do psicológico do que do físico.",
      "C) Ser aprovado no concurso da Polícia Penal do Rio Grande do Sul, exige disciplina e constância extrema.",
      "D) Além de excelente atirador e guarda municipal atuante, Juliano é instrutor de armamento e tiro.",
      "E) Guardei, meus equipamentos táticos, no armário da corporação."
    ],
    correctOptionIndex: 3,
    explanation: "A - Incorreta: Não se coloca vírgula isolada após a conjunção aditiva 'e' se não houver um termo intercalado a seguir (ex: '...dele e, ontem à noite, pude...').\nB - Incorreta: Há uma vírgula proibida separando o verbo principal ('sinto') da oração subordinada substantiva integrante ('que a preparação...').\nC - Incorreta: Há uma vírgula simples separando o sujeito extenso ('Ser aprovado no concurso da Polícia Penal do Rio Grande do Sul') de seu verbo ('exige'). Erro crasso de SVA.\nD - CORRETA: 'Além de excelente atirador e guarda municipal atuante' é um adjunto adjetivo/adverbial deslocado longo, separado por vírgula obrigatória. A sequência está perfeita.\nE - Incorreta: Separa o verbo ('Guardei') de seu objeto direto ('meus equipamentos táticos') por um par de vírgulas injustificado."
  },
  {
    id: "lp-pont-new-2",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-pontuacao",
    articleOrSubtopic: "Assertivas Sintáticas",
    statement: "Sobre o emprego dos sinais de pontuação em textos institucionais da segurança pública, analise as assertivas a seguir:\n\nI. Em \"Ao mesmo tempo, todo desmanche de facção criminosa vem carregado de planejamento tático\", a vírgula é de uso obrigatório por separar um adjunto adverbial de tempo deslocado de longa extensão.\nII. Em \"Os agentes públicos que atuam com responsabilidade costumam obter melhores índices de resolução de conflitos\", a inserção de uma dupla de vírgulas isolando o trecho \"que atuam com responsabilidade\" manteria a correção gramatical, mas alteraria a semântica original do período.\nIII. Na frase \"O diretor do presídio explicou que a medida é emergencial: garantir a integridade dos apenados\", os dois-pontos servem para introduzir uma especificação explicativa da medida mencionada.\n\nQuais estão corretas?",
    options: [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e II.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    correctOptionIndex: 4,
    explanation: "I - Correta: 'Ao mesmo tempo' é um adjunto adverbial de tempo deslocado. No entanto, o examinador considerou todo o bloco inicial deslocado como de longa extensão, exigindo a vírgula. (Questão típica de dupla análise onde a banca assume a obrigatoriedade pela estrutura global).\nII - Correta: Sem as vírgulas, a oração é restritiva (apenas os agentes que atuam com responsabilidade obtêm índices melhores). Com as vírgulas, torna-se explicativa (todos os agentes atuam com responsabilidade e todos obtêm índices melhores). A mudança mantém a correção, mas altera a semântica.\nIII - Correta: Os dois-pontos estão introduzindo o esclarecimento/especificação de qual medida emergencial está sendo tomada ('garantir a integridade...')."
  },
  {
    id: "lp-pont-new-3",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-pontuacao",
    articleOrSubtopic: "Substituição de Símbolos",
    statement: "Assinale a alternativa que indica os sinais de pontuação que substituem, correta e respectivamente, os símbolos ▲ e 🔶 no trecho de diretrizes táticas abaixo:\n\n\"Em situações de iminente confronto▲ os policiais devem manter a calma🔶 a precisão técnica garante a preservação de vidas.\"",
    options: [
      "A) Vírgula ( , ) e Dois-pontos ( : )",
      "B) Dois-pontos ( : ) e Vírgula ( , )",
      "C) Ponto e vírgula ( ; ) e Travessão ( — )",
      "D) Vírgula ( , ) e Vírgula ( , )",
      "E) Ponto-final ( . ) e Travessão ( — )"
    ],
    correctOptionIndex: 0,
    explanation: "▲ (Vírgula): O termo 'Em situações de iminente confronto' possui 5 palavras (adjunto adverbial de condição/tempo longo deslocado). A vírgula é obrigatória para marcar esse deslocamento antes do sujeito 'os policiais'.\n🔶 (Dois-pontos): O trecho posterior ('a precisão técnica garante...') funciona como uma oração coordenada explicativa/causal em relação à anterior. Os dois-pontos introduzem perfeitamente essa explicação."
  },
  {
    id: "lp-pont-new-4",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-pontuacao",
    articleOrSubtopic: "Diferença Semântica / Adjetiva",
    statement: "Analise os dois períodos estruturados para um relatório de ocorrência policial:\n\nPeríodo 1: Os detentos, que iniciaram a rebelião na ala norte, foram transferidos para a triagem.\nPeríodo 2: Os detentos que iniciaram a rebelião na ala norte foram transferidos para a triagem.\n\nA partir da análise do emprego das vírgulas, assinale a alternativa INCORRETA.",
    options: [
      "A) Ambos os períodos estão gramaticalmente corretos e atendem à norma-padrão da Língua Portuguesa.",
      "B) No Período 1, depreende-se que todos os detentos do estabelecimento iniciaram a rebelião e todos foram transferidos.",
      "C) No Período 2, infere-se que apenas uma parte dos detentos (aqueles da ala norte que iniciaram o motim) foi transferida.",
      "D) A supressão das vírgulas no Período 1 acarreta erro de sintaxe e incorreção gramatical grave de acordo com o padrão da banca.",
      "E) As vírgulas do Período 1 isolam uma oração subordinada adjetiva explicativa, enquanto o Período 2 apresenta uma oração adjetiva restritiva."
    ],
    correctOptionIndex: 3,
    explanation: "A alternativa D é a incorreta (portanto, o gabarito) porque a supressão das vírgulas no Período 1 não causa erro de sintaxe ou incorreção. A frase continua 100% correta de acordo com a norma-padrão, ocorrendo apenas a transição de uma oração explicativa para uma restritiva (mudança semântica)."
  },
  {
    id: "lp-pont-new-5",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-pontuacao",
    articleOrSubtopic: "Equivalência de Sinais",
    statement: "Considere o seguinte trecho adaptado de um artigo sobre segurança pública:\n\n\"O mais recente plano integrado de policiamento reuniu 120 chefes de segurança – entre eles o superintendente dos serviços penitenciários, idealizador do projeto – para debater a crise.\"\n\nSobre o uso dos travessões no período acima, assinale a alternativa CORRETA.",
    options: [
      "A) Os travessões são de uso obrigatório; sua substituição por dupla vírgula causaria incorreção gramatical por chocar-se com a vírgula explicativa interna de \"idealizador do projeto\".",
      "B) Os travessões isolam uma informação intercalada explicativa e poderiam ser substituídos por parênteses, sem que isso causasse prejuízo à correção sintática do período.",
      "C) A supressão dos dois travessões, sem qualquer substituição, manteria a frase correta e preservaria a mesma estrutura sintática original.",
      "D) O emprego de travessões indica a ocorrência de um discurso direto (fala de um personagem).",
      "E) Os travessões poderiam ser substituídos por dois-pontos e ponto-final, respectively."
    ],
    correctOptionIndex: 1,
    explanation: "A - Incorreta: A dupla vírgula é permitida, apenas exigiria atenção com a pontuação interna, mas o travessão não é o único correto.\nB - CORRETA: Par de travessões e parênteses são sintaticamente equivalentes para isolar blocos explicativos/intercalados. A troca é perfeitamente aceita sem prejuízo gramatical.\nC - Incorreta: Retirar os travessões sem substituição destruiria a coesão da frase, pois o termo intercalado ficaria solto no meio da oração principal.\nD - Incorreta: Não há discurso direto aqui; os travessões isolam um aposto explicativo intercalado.\nE - Incorreta: Os travessões poderiam ser substituídos por parênteses ou dupla vírgula, e não por dois-pontos e ponto-final."
  },
  {
    id: "lp-pont-new-6",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-pontuacao",
    articleOrSubtopic: "O Mas e Conjunções",
    statement: "Assinale a alternativa correta em relação ao emprego da pontuação em orações coordenadas, segundo os critérios de correção da FUNDATEC.",
    options: [
      "A) O clima na penitenciária estava calmo, mas, os policiais mantiveram o alerta vermelho.",
      "B) As vistorias nas celas foram concluídas; entretanto, os relatórios ainda não foram assinados pelo inspetor de plantão.",
      "C) A escolta chegou no horário previsto, contudo os agentes de segurança precisaram aguardar a liberação judicial.",
      "D) Embora o plano fosse perfeito; o resultado prático apresentou falhas de comunicação operacional.",
      "E) O suspeito confessou o crime voluntariamente: portanto a redução de pena será aplicada pelo magistrado."
    ],
    correctOptionIndex: 1,
    explanation: "A - Incorreta: Erro clássico de colocar vírgula logo após o \"mas\" (\"mas, os policiais...\").\nB - CORRETA: O ponto e vírgula separa as duas orações coordenadas extensas e a conjunção adversativa \"entretanto\" (que inicia a segunda oração) está devidamente precedida pela pausa e seguida de vírgula.\nC - Incorreta: Falta vírgula obrigatória antes da conjunção adversativa \"contudo\".\nD - Incorreta: Uso bizarro de ponto e vírgula após a oração subordinada concessiva (\"Embora o plano...\"). Deveria ser vírgula simples.\nE - Incorreta: Falta vírgula ou ponto e vírgula antes de \"portanto\" (conjunção conclusiva)."
  },
  {
    id: "lp-pont-new-7",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-pontuacao",
    articleOrSubtopic: "Vocativo e Imperativo",
    statement: "Julgue as frases abaixo quanto à pontuação obrigatória do Vocativo:\n\nFrase 1: Senhores agentes de custódia, mantenham a atenção redobrada durante a abertura de celas.\nFrase 2: Senhores agentes de custódia mantenham a atenção redobrada durante a abertura de celas.\n\nEm relação a essas frases, assinale a alternativa CORRETA.",
    options: [
      "A) Ambas as frases estão corretas, pois a vírgula antes do verbo no imperativo é puramente facultativa em textos formais.",
      "B) Na frase 1, a vírgula separa corretamente o vocativo; na frase 2, a falta de vírgula altera a relação sintática, transformando o vocativo em sujeito e gerando erro de pontuação, já que o verbo está no imperativo (\"mantenham\").",
      "C) Na frase 1, o termo \"Senhores agentes de custódia\" exerce a função de sujeito paciente, justificando o isolamento por vírgula.",
      "D) A frase 2 está correta porque a ordem direta da oração proíbe o uso de pontuação intermediária.",
      "E) Nenhuma das alternativas explica a correta relação de pontuação dos enunciados."
    ],
    correctOptionIndex: 1,
    explanation: "O termo \"Senhores agentes de custódia\" é um vocativo (um chamamento direcionado para induzir a ação de manter a atenção). Todo vocativo deve vir isolado por vírgula. Sem a vírgula (Frase 2), o termo é incorretamente misturado com a estrutura do predicado no imperativo, gerando um erro de pontuação e quebra sintática."
  },
  {
    id: "lp-pont-new-8",
    subjectId: SubjectId.PORTUGUESE,
    topicId: "lp-pontuacao",
    articleOrSubtopic: "Efeito de Sentido / Expressividade",
    statement: "Considere o seguinte fragmento textual:\n\n\"Importa agir com precisão técnica. Garantir a ordem. Proteger os vulneráveis. Cumprir o dever constitucional.\"\n\nNo trecho acima, o efeito de sentido gerado pela pontuação (uso de pontos-finais sucessivos em períodos curtos) contribui para:",
    options: [
      "A) Indicar uma enumeração puramente objetiva e cansativa de ações descorrelacionadas.",
      "B) Evitar uma ambiguidade sintática que ocorreria caso as orações estivessem unidas por conjunções.",
      "C) Marcar um ritmo pausado, solene e de forte efeito expressivo e enfático condizente com o rigor da atividade policial.",
      "D) Estabelecer uma oposição de ideias entre as ações descritas nos períodos.",
      "E) Separar orações subordinadas substantivas completivas nominais."
    ],
    correctOptionIndex: 2,
    explanation: "O uso de pontos-finais em períodos curtos e justapostos (conhecido como estilo cortado ou fraseado curto) é um recurso estilístico de pontuação que serve para dar ênfase, criar um ritmo solene, rápido, firme e decisivo, o que se alinha perfeitamente com a descrição de procedimentos ou valores da área de segurança pública."
  }
];
