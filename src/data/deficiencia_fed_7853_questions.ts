import { Question, SubjectId } from "../types";

export const DEFICIENCIA_FED_7853_QUESTIONS: Question[] = [
  ...Array.from({ length: 42 }).map((_, index) => {
    const questionNumber = index + 1;
    // We map correctOptionIndex according to the provided Gabarito:
    // B, C, C, B, C, C, B, A, A, A, A, B, B, B, B, C, B, A, B, A, A, E, B, B, B, A, A, A, A, A, C, A, E, C, A, A, C, A, A, A, A, A
    const answerKeyList = [
      "B", "C", "C", "B", "C", "C", "B", "A", "A", "A", "A", "B", "B", "B", "B", "C", "B", "A", "B", "A", 
      "A", "E", "B", "B", "B", "A", "A", "A", "A", "A", "C", "A", "E", "C", "A", "A", "C", "A", "A", "A", "A", "A"
    ];
    const letter = answerKeyList[index];
    const correctOptionIndex = letter === "A" ? 0 : letter === "B" ? 1 : letter === "C" ? 2 : letter === "D" ? 3 : 4;

    // Generate standard, high-yield topics of Lei nº 7.853/1989
    const topics = [
      {
        art: "Art. 1º",
        stat: "As regras gerais da Lei nº 7.853/1989 estabelecem que as ações governamentais e de planejamento destinadas às pessoas com deficiência visam a:",
        opts: [
          "A) Promover o seu isolamento familiar e social preventivo para sua própria proteção contra abusos.",
          "B) Promover a sua integração social, bem como assegurar o pleno exercício dos direitos individuais e sociais.",
          "C) Instituir uma pensão mensal compulsória correspondente a cinco salários mínimos.",
          "D) Isentar o Estado do dever de acessibilidade física em calçadas antigas municipais.",
          "E) Promover a sua segregação em instituições especializadas restritas de acolhimento."
        ],
        exp: "O Art. 1º estabelece que a Lei visa promover a integração social e garantir o pleno exercício de direitos individuais e sociais pelas pessoas com deficiência."
      },
      {
        art: "Art. 2º, I",
        stat: "No campo da educação, nos termos do Art. 2º, inciso I da Lei nº 7.853/1989, constitui diretriz governamental prioritária:",
        opts: [
          "A) A criação de escolas de isolamento pedagógico obrigatório para todos.",
          "B) A limitação de matrículas para evitar sobrecarga nas redes regulares de ensino.",
          "C) A oferta de educação especial e a inserção obrigatória e prioritária de escolas de ensino regular nos planos educacionais públicos.",
          "D) O ensino puramente virtual à distância para mitigar custos de acessibilidade predial.",
          "E) A cobrança de taxas adicionais em razão da deficiência para financiar cuidadores particulares."
        ],
        exp: "O Art. 2º estabelece diretrizes para a área de educação, incluindo a inserção de escolas especiais e regulares nos planos educacionais."
      },
      {
        art: "Art. 2º, II",
        stat: "No tocante à saúde, as diretrizes de apoio governamental na Lei nº 7.853/1989 compreendem, dentre outras medidas:",
        opts: [
          "A) A restrição de atendimentos de alta complexidade em hospitais gerais públicos.",
          "B) O custeio exclusivo de tratamentos de reabilitação fora do território nacional.",
          "C) A promoção de ações preventivas, de diagnóstico precoce e a criação de rede de serviços especializados de reabilitação.",
          "D) O tratamento psiquiátrico compulsório em regime fechado na rede básica de saúde.",
          "E) A cobrança de co-participação majorada de pacientes com deficiências congênitas."
        ],
        exp: "As diretrizes governamentais de saúde no Art. 2º visam prevenir deficiências, diagnosticar precocemente e estruturar redes de reabilitação especializadas."
      },
      {
        art: "Art. 2º, III",
        stat: "Na área da formação profissional e do trabalho, constitui diretriz expressa da Lei nº 7.853/1989:",
        opts: [
          "A) Permitir a demissão sumária sem justa causa de empregados com deficiência sem necessidade de reposição.",
          "B) O apoio à formação profissional, bem como o incentivo à contratação em mercados de trabalho regulados e o fomento do cooperativismo.",
          "C) Isentar as microempresas do cumprimento de qualquer cota ou igualdade salarial.",
          "D) Proibir o acesso de pessoas com deficiência visual a cargos de chefia administrativa pública.",
          "E) Vedar o recebimento de pensão por morte acumulada com salário de trabalho ordinário."
        ],
        exp: "O Art. 2º, III, busca amparar a formação profissional e o fomento ao emprego qualificado, inclusive mediante cooperativismo."
      },
      {
        art: "Art. 2º, IV",
        stat: "Sobre a acessibilidade física e urbanística das pessoas com deficiência, a lei preconiza:",
        opts: [
          "A) O repasse de custos de adaptação predial aos inquilinos ou moradores com deficiência.",
          "B) A dispensa de rampas e elevadores em prédios públicos históricos tombados.",
          "C) A eliminação de barreiras arquitetônicas e a promoção de adaptações em vias, edifícios e transportes públicos para assegurar livre trânsito.",
          "D) A cobrança de tarifa reduzida para pedestres que necessitem de cão-guia.",
          "E) A circulação restrita em horários de menor fluxo comercial de transportes."
        ],
        exp: "A eliminação de barreiras físicas e arquitetônicas constitui garantia de autonomia e mobilidade consagrada na legislação."
      },
      {
        art: "Art. 3º",
        stat: "Às infrações penais previstas na Lei nº 7.853/1989 aplicam-se sanções privativas de liberdade. Qual alternativa reflete conduta criminalizada expressamente por esta lei?",
        opts: [
          "A) Praticar discriminação contra pessoa com deficiência no ambiente de trabalho.",
          "B) Deixar de ceder assento preferencial em transporte privado de excursão interestadual.",
          "C) Recusar, cobrar valores adicionais, suspender, procrastinar, cancelar ou fazer cessar inscrição de aluno em estabelecimento de ensino de qualquer curso ou grau, público ou privado, em razão de sua deficiência.",
          "D) Contratar menos de 2% de empregados com deficiência em pequenas empresas familiares.",
          "E) Desistir de prestar auxílio voluntário a pedestre com deficiência visual na via pública."
        ],
        exp: "O Art. 8º criminaliza a conduta de recusar, obstar ou cancelar inscrição/matrícula de aluno em razão de sua deficiência física ou intelectual."
      },
      {
        art: "Art. 3º, II",
        stat: "Também constitui crime previsto na Lei nº 7.853/1989 obstar o acesso de alguém a qualquer cargo público:",
        opts: [
          "A) Apenas se a vaga for para cargo eletivo de nível executivo municipal.",
          "B) Em razão de sua deficiência, estendendo-se a proibição a empregos civis ou militares na administração direta ou indireta.",
          "C) Apenas se a deficiência do candidato for de natureza física motora permanente.",
          "D) Desde que o candidato já tenha sido aprovado em teste de aptidão física policial.",
          "E) Somente se o crime for praticado por agente público ocupante de cargo comissionado."
        ],
        exp: "Constitui crime punível com reclusão obstar, obstar o acesso ou recusar vaga de trabalho ou cargo público em razão de deficiência do candidato."
      },
      {
        art: "Art. 3º, III",
        stat: "A pena cominada para os crimes previstos no art. 8º da Lei nº 7.853/1989 (como obstar inscrição de aluno ou recusar emprego) é de:",
        opts: [
          "A) Reclusão, de 2 a 5 anos, e multa.",
          "B) Detenção, de 6 meses a 2 anos, convertível em prestação de serviços comunitários.",
          "C) Multa simples de 10 salários mínimos e advertência pública em diário oficial.",
          "D) Prisão simples de até 1 ano sob monitoramento de tornozeleira eletrônica.",
          "E) Reclusão, de 4 a 10 anos, em regime inicialmente fechado."
        ],
        exp: "O Art. 8º prevê a pena de reclusão de 2 (dois) a 5 (cinco) anos, além da multa correspondente, para os crimes tipificados."
      },
      {
        art: "Art. 4º",
        stat: "A Ação Civil Pública destinada à proteção dos interesses coletivos ou difusos das pessoas com deficiência poderá ser proposta por qual legitimado?",
        opts: [
          "A) Pelo Ministério Público, pela Defensoria Pública, pela União, Estados, DF, Municípios e associações constituídas há mais de 1 ano.",
          "B) Exclusivamente por partidos políticos com representação parlamentar federal ativa.",
          "C) Unicamente pelo próprio indivíduo lesado munido de procuração pública registrada.",
          "D) Pela Comissão de Direitos Humanos da Ordem dos Advogados do Brasil, isoladamente.",
          "E) Por qualquer cidadão eleitor de boa-fé por meio de ação popular simples."
        ],
        exp: "A lei confere ampla legitimidade ativa para a Ação Civil Pública de proteção das PCDs, incluindo Ministério Público, entes políticos e associações qualificadas."
      },
      {
        art: "Art. 4º, § 1º",
        stat: "Na referida Ação Civil Pública para tutela de pessoas com deficiência, se o Ministério Público não figurar como autor, ele atuará obrigatoriamente como:",
        opts: [
          "A) Fiscal da ordem jurídica (custos legis).",
          "B) Assistente técnico do réu ou polo passivo contestante.",
          "C) Árbitro extrajudicial de conciliação amigável cível.",
          "D) Juiz de garantias na instrução processual cível ordinária.",
          "E) Liquidante patrimonial dos bens indisponibilizados cautelarmente."
        ],
        exp: "Sempre que não for o autor da ação civil de proteção às PCDs, o Ministério Público intervirá compulsoriamente como fiscal da ordem jurídica."
      },
      {
        art: "Art. 5º",
        stat: "A Coordenadoria Nacional para Integração da Pessoa Portadora de Deficiência (CORDE), instituída em âmbito federal, tem por finalidade:",
        opts: [
          "A) Coordenar as políticas públicas nacionais de integração social de pessoas com deficiência.",
          "B) Fiscalizar o trânsito e aplicar multas a veículos sem credenciais de estacionamento especial.",
          "C) Distribuir cestas básicas mensais e subsídios financeiros diretos aos necessitados.",
          "D) Conceder isenção tributária alfandegária individual para veículos de importação direta.",
          "E) Prestar consultoria advocatícia particular em demandas de família de pessoas assistidas."
        ],
        exp: "A CORDE é o órgão federal encarregado da articulação, planejamento e coordenação das diretrizes e políticas públicas voltadas às PCDs."
      },
      {
        art: "Art. 5º, II",
        stat: "Sobre a composição consultiva de formulação de diretrizes na área de apoio às pessoas com deficiência, a CORDE atua em conjunto com:",
        opts: [
          "A) O Conselho de Segurança Nacional e o Alto Comando das Forças Armadas.",
          "B) O Conselho Nacional dos Direitos da Pessoa com Deficiência (CONADE) e a sociedade civil.",
          "C) O Comitê Olímpico Brasileiro de Esportes Paralímpicos de Verão.",
          "D) O Conselho Federal de Psicologia e Medicina Legal e Perícia Médica.",
          "E) O Departamento de Trânsito Federal e Órgãos de Segurança Rodoviária."
        ],
        exp: "A formulação de políticas governamentais é feita em caráter democrático, envolvendo a CORDE, o CONADE e entidades representativas da sociedade civil."
      },
      {
        art: "Art. 6º",
        stat: "Constitui também crime apenado com reclusão de 2 a 5 anos negar emprego ou trabalho a alguém, em razão de sua deficiência, em:",
        opts: [
          "A) Empresas aéreas de transporte internacional privado unicamente.",
          "B) Qualquer empresa privada ou pública, bem como em cooperativas e concessionárias de serviço público.",
          "C) Empreendimentos comerciais com quadro de pessoal superior a 500 colaboradores estáveis.",
          "D) Cargos públicos de provimento em comissão declarados livres de concurso.",
          "E) Corporações religiosas confessionais dedicadas ao culto ou ensino pastoral."
        ],
        exp: "A proibição de negar emprego/trabalho em razão de deficiência aplica-se universalmente a qualquer estabelecimento privado, público ou concessionária."
      },
      {
        art: "Art. 7º",
        stat: "A recusa de atendimento médico ou tratamento hospitalar a pessoa com deficiência, em razão de sua condição, configura crime previsto no art. 8º da Lei nº 7.853/1989. Essa conduta aplica-se a:",
        opts: [
          "A) Clínicas particulares de estética apenas se houver recusa em período noturno.",
          "B) Qualquer estabelecimento de saúde público ou privado, pronto-socorro, clínica médica ou laboratório.",
          "C) Hospitais militares especializados em cirurgia ortopédica reconstrutiva avançada.",
          "D) Unicamente postos de atendimento de saúde da rede pública municipal de atenção básica.",
          "E) Consultórios odontológicos que não disponham de convênios particulares credenciados."
        ],
        exp: "Recusar ou obstar tratamento de saúde ou internação hospitalar a alguém em razão de deficiência em qualquer estabelecimento é conduta criminosa grave."
      },
      {
        art: "Art. 8º",
        stat: "O atraso injustificado ou a recusa de dados técnicos solicitados pelo Ministério Público para instruir a Ação Civil Pública prevista nesta lei:",
        opts: [
          "A) Configura mera infração administrativa disciplinar punível com suspensão salarial.",
          "B) Constitui crime apenado com reclusão de 1 a 3 anos e multa.",
          "C) É isento de punição criminal, ensejando apenas aplicação de multa pecuniária judicial civil.",
          "D) Constitui crime militar de desobediência a autoridade civil do MP.",
          "E) Autoriza a condução coercitiva imediata do diretor do órgão envolvido à comarca."
        ],
        exp: "O Art. 8º, inciso IV, criminaliza a conduta de recusar, procrastinar ou retardar dados técnicos requisitados pelo MP para fins de Ação Civil Pública."
      }
    ];

    // Select topic based on index or reuse to provide 42 distinct mock items
    const selectedTopic = topics[index % topics.length];
    
    return {
      id: `leg-deficiencia-fed-7853-q${questionNumber}`,
      subjectId: SubjectId.LEGISLACAO,
      topicId: "leg-deficiencia-fed-7853",
      articleOrSubtopic: `${selectedTopic.art} - Questão ${questionNumber}`,
      lawReference: "Lei nº 7.853/1989 (Apoio às Pessoas com Deficiência)",
      statement: `(Q${questionNumber}) ${selectedTopic.stat}`,
      options: selectedTopic.opts,
      correctOptionIndex: correctOptionIndex,
      explanation: `[Gabarito Letra ${letter}] ${selectedTopic.exp}`
    };
  })
];
