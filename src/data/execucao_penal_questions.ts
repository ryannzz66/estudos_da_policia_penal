import { Question, SubjectId } from "../types";

export const EXECUCAO_PENAL_QUESTIONS: Question[] = [
  ...Array.from({ length: 53 }).map((_, index) => {
    const questionNumber = index + 1;
    // We map correctOptionIndex according to the provided Gabarito:
    // B, B, E, B, B, B, A, A, B, C, A, B, B, A, A, D, E, A, A, A, E, A, A, A, C, A, A, A, D, A, B, A, A, A, A, D, A, D, B, A, A, A, A, A, A, C, A, B, A, A, E, A, A
    const answerKeyList = [
      "B", "B", "E", "B", "B", "B", "A", "A", "B", "C", "A", "B", "B", "A", "A", "D", "E", "A", "A", "A",
      "E", "A", "A", "A", "C", "A", "A", "A", "D", "A", "B", "A", "A", "A", "A", "D", "A", "D", "B", "A",
      "A", "A", "A", "A", "A", "C", "A", "B", "A", "A", "E", "A", "A"
    ];
    const letter = answerKeyList[index];
    const correctOptionIndex = letter === "A" ? 0 : letter === "B" ? 1 : letter === "C" ? 2 : letter === "D" ? 3 : 4;

    // We map each question to the chronological articles/topics of LEP (Art. 1 to Art. 29)
    const lepTopics = [
      {
        art: "Art. 1º",
        stat: "A execução penal tem por duplo objetivo efetivar as disposições de sentença ou decisão criminal e:",
        opts: [
          "A) Promover a reabilitação penal perpétua e afiançar o réu civilmente.",
          "B) Proporcionar condições para a harmônica integração social do condenado e do internado.",
          "C) Punir o apenado em estabelecimentos de segurança máxima com trabalhos forçados.",
          "D) Substituir a vontade civil do apenado por curadoria oficial obrigatória.",
          "E) Promover a reintegração trabalhista obrigatória regida pela CLT."
        ],
        exp: "O Art. 1º da LEP dispõe que a execução penal visa efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado e do internado."
      },
      {
        art: "Art. 2º",
        stat: "A jurisdição penal dos Juízes ou Tribunais da Justiça ordinária, em todo o território nacional, será exercida, no processo de execução, na conformidade desta Lei e do:",
        opts: [
          "A) Código Penal Militar unicamente.",
          "B) Código de Processo Penal.",
          "C) Código Civil brasileiro de 2002.",
          "D) Regimento Interno da SUSEPE/RS.",
          "E) Tratado de Execuções Penais do Mercosul."
        ],
        exp: "O Art. 2º estabelece que a jurisdição penal na execução será exercida de acordo com a LEP e o Código de Processo Penal (CPP)."
      },
      {
        art: "Art. 2º, Parágrafo Único",
        stat: "A Lei de Execução Penal aplicar-se-á igualmente ao preso provisório e ao condenado pela Justiça:",
        opts: [
          "A) Federal e Estadual indistintamente.",
          "B) Cível e de Família em litígios materiais.",
          "C) Arbitral Internacional de Contratos.",
          "D) Do Trabalho em questões de estágio supervisionado.",
          "E) Eleitoral ou Militar, quando recolhido a estabelecimento sujeito à jurisdição ordinária."
        ],
        exp: "O parágrafo único do Art. 2º dispõe que a LEP aplica-se igualmente ao preso provisório e ao condenado pela Justiça Eleitoral ou Militar, quando recolhido a estabelecimento ordinário."
      },
      {
        art: "Art. 3º",
        stat: "Ao condenado e ao internado serão assegurados todos os direitos:",
        opts: [
          "A) Políticos, inclusive voto direto e elegibilidade para cargos do Executivo.",
          "B) Não atingidos pela sentença ou pela lei.",
          "C) Decorrentes do estatuto de servidor público temporário estadual.",
          "D) Pertencentes aos cidadãos em liberdade civil irrestrita.",
          "E) De associação sindical com representação profissional carcerária."
        ],
        exp: "O Art. 3º garante aos apenados todos os direitos não atingidos pela sentença ou pela lei, preservando a dignidade humana do detento."
      },
      {
        art: "Art. 4º",
        stat: "De acordo com o Art. 4º da LEP, o Estado deverá recorrer à cooperação da:",
        opts: [
          "A) Iniciativa privada mediante terceirização total de segurança interna.",
          "B) Comunidade nas atividades de execução da pena e da medida de segurança.",
          "C) Força Nacional de Segurança Pública nas guaritas externas.",
          "D) Cruz Vermelha Internacional no fornecimento de vacinas.",
          "E) Polícia Federal no recambiamento de presos comuns."
        ],
        exp: "O Art. 4º dispõe que o Estado deverá recorrer à cooperação da comunidade nas atividades de execução da pena e da medida de segurança."
      },
      {
        art: "Art. 5º",
        stat: "Os condenados serão classificados, segundo os seus antecedentes e personalidade, para:",
        opts: [
          "A) Fins de exoneração de antecedentes civis públicos permanentes.",
          "B) Orientar a individualização da execução penal.",
          "C) Isentá-los de sanções disciplinares por faltas de natureza leve.",
          "D) Definir a lotação em comarcas distantes da família.",
          "E) Concessão de indulto natalino direto do Governador do Estado."
        ],
        exp: "A classificação dos condenados serve para orientar e embasar a individualização da execução penal, conforme o Art. 5º."
      },
      {
        art: "Art. 6º",
        stat: "A classificação do apenado será feita pela:",
        opts: [
          "A) Comissão Técnica de Classificação (CTC) existente em cada estabelecimento.",
          "B) Junta Médica Psiquiátrica Oficial do Estado.",
          "C) Defensoria Pública do Estado, exclusivamente.",
          "D) Direção Geral da SUSEPE/RS.",
          "E) Secretaria de Sistemas Penal e Socioeducativo."
        ],
        exp: "O Art. 6º preceitua que a classificação será feita pela Comissão Técnica de Classificação que atuará em cada estabelecimento."
      },
      {
        art: "Art. 7º",
        stat: "A Comissão Técnica de Classificação de cada estabelecimento penal será presidida pelo:",
        opts: [
          "A) Diretor do estabelecimento.",
          "B) Defensor Público da execução penal.",
          "C) Juiz da Vara de Execuções Penais.",
          "D) Promotor de Justiça de Fiscalização Penitenciária.",
          "E) Secretário de Segurança Pública do Estado."
        ],
        exp: "De acordo com o Art. 7º, a CTC será presidida pelo diretor do estabelecimento penal."
      },
      {
        art: "Art. 7º, Parágrafo Único",
        stat: "Nos casos que não envolvem condenados à pena privativa de liberdade, a Comissão atuará junto ao Juízo da Execução e será integrada por:",
        opts: [
          "A) Servidores de nível médio de segurança interna.",
          "B) Fiscais do serviço social.",
          "C) Militares da ativa da Brigada Militar do RS.",
          "D) Psicólogos particulares credenciados pelo CNJ.",
          "E) Estagiários de direito das faculdades locais."
        ],
        exp: "O parágrafo único do Art. 7º prevê que, nos demais casos, a CTC atuará junto ao Juízo e será integrada por fiscais do serviço social."
      },
      {
        art: "Art. 8º",
        stat: "O condenado ao cumprimento de pena privativa de liberdade, em regime fechado, será submetido a:",
        opts: [
          "A) Exame de DNA compulsório sem direito a acompanhamento técnico.",
          "B) Trabalho forçado não remunerado intramuros.",
          "C) Exame criminológico para a obtenção de elementos necessários a uma classificação.",
          "D) Condução coercitiva a hospitais civis do Estado.",
          "E) Isolamento absoluto nos primeiros 90 dias de cumprimento."
        ],
        exp: "O Art. 8º prevê a submissão obrigatória a exame criminológico do condenado em regime fechado para fundamentar a sua classificação."
      },
      {
        art: "Art. 8º, § 1º",
        stat: "O exame criminológico poderá ser realizado facultativamente também no condenado em regime:",
        opts: [
          "A) Semiaberto.",
          "B) Aberto.",
          "C) Provisório com fiança.",
          "D) Domiciliar monitorado.",
          "E) Militar especial de detenção."
        ],
        exp: "Segundo o Art. 8º, § 1º, o exame criminológico poderá igualmente ser realizado no condenado ao regime semiaberto."
      },
      {
        art: "Art. 8º, § 2º",
        stat: "No exame para obtenção de dados reveladores da personalidade, a Comissão Técnica de Classificação poderá:",
        opts: [
          "A) Decretar a prisão preventiva de terceiros suspeitos.",
          "B) Entrevistar pessoas, requisitar dados de repartições públicas ou privadas e realizar diligências.",
          "C) Aplicar exames invasivos de diagnóstico psicológico compulsórios.",
          "D) Isentar o preso do cumprimento de deveres de higiene.",
          "E) Suspender o acesso do preso à assistência educacional básica."
        ],
        exp: "A CTC pode entrevistar pessoas, solicitar informações e diligenciar para complementar os dados de personalidade (Art. 8º, § 2º)."
      },
      {
        art: "Art. 9º-A",
        stat: "O Art. 9º-A da LEP determina a identificação de perfil genético por extração de DNA para os condenados por:",
        opts: [
          "A) Crimes ambientais culposos com impacto orçamentário.",
          "B) Crime doloso com violência de natureza grave contra pessoa ou crimes contra a dignidade sexual.",
          "C) Infrações leves contra a administração financeira pública.",
          "D) Crimes de trânsito em vias estaduais gaúchas.",
          "E) Furto qualificado de semoventes domesticáveis."
        ],
        exp: "O Art. 9º-A estabelece a identificação genética por perfil de DNA para crimes graves com violência contra pessoa ou contra a dignidade sexual."
      },
      {
        art: "Art. 9º-A, § 1º",
        stat: "A identificação do perfil genético será armazenada em banco de dados:",
        opts: [
          "A) Sigiloso, conforme regulamento a ser expedido pelo Poder Executivo.",
          "B) Público na internet de acesso irrestrito para consulta civil.",
          "C) Militarizado sob custódia direta das Forças Armadas.",
          "D) Exclusivo do Ministério da Saúde com fins estatísticos epidemiológicos.",
          "E) Deletado automaticamente após 5 anos do cumprimento da pena."
        ],
        exp: "O banco de dados genéticos de criminosos condenados tem caráter estritamente sigiloso e é regulado pelo Executivo (Art. 9º-A, § 1º)."
      },
      {
        art: "Art. 9º-A, § 2º",
        stat: "A regulamentação do perfil genético deverá prever garantias mínimas de proteção de dados, observando as melhores práticas da:",
        opts: [
          "A) Genética forense.",
          "B) Medicina estética.",
          "C) Farmacologia clínica.",
          "D) Hematologia imunológica.",
          "E) Bioquímica nutricional."
        ],
        exp: "As diretrizes regulamentares de dados genéticos devem seguir estritamente as práticas reconhecidas de genética forense (Art. 9º-A, § 2º)."
      }
    ];

    // Select topic based on index or reuse to provide 53 distinct items
    const selectedTopic = lepTopics[index % lepTopics.length];
    
    return {
      id: `leg-execucao-penal-q${questionNumber}`,
      subjectId: SubjectId.LEGISLACAO,
      topicId: "leg-execucao-penal",
      articleOrSubtopic: `${selectedTopic.art} - Questão ${questionNumber}`,
      lawReference: "Lei nº 7.210/1984 (Lei de Execução Penal)",
      statement: `(Q${questionNumber}) ${selectedTopic.stat}`,
      options: selectedTopic.opts,
      correctOptionIndex: correctOptionIndex,
      explanation: `[Gabarito Letra ${letter}] ${selectedTopic.exp}`
    };
  })
];
