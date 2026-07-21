import { Question, SubjectId } from "../types";

export const CRIMES_HEDIONDOS_QUESTIONS: Question[] = [
  {
    id: "leg-crimes-hediondos-q1",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, Caput",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O rol de crimes hediondos previstos na Lei nº 8.072/1990 tem natureza:",
    options: [
      "A) Exemplificativa (numerus apertus), podendo o juiz declarar hediondo qualquer crime de extrema gravidade no caso concreto.",
      "B) Taxativa (numerus clausus), de forma que apenas os crimes expressamente elencados no texto da lei são considerados hediondos.",
      "C) Discricionária, dependendo de prévia representação do Ministério Público na denúncia.",
      "D) Mista, admitindo analogia in malam partem para incluir crimes hediondos estaduais.",
      "E) Temporária, perdendo a hediondez decorridos 5 anos da condenação definitiva."
    ],
    correctOptionIndex: 1, // B
    explanation: "O rol da Lei nº 8.072/1990 é estritamente taxativo (princípio da legalidade). Apenas as condutas tipificadas expressamente na referida lei possuem natureza hedionda."
  },
  {
    id: "leg-crimes-hediondos-q2",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, I",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "Segundo a Lei nº 8.072/1990, o crime de homicídio simples (Art. 121, caput, do Código Penal) será considerado hediondo:",
    options: [
      "A) Em qualquer circunstância, por se tratar de ofensa ao bem jurídico vida.",
      "B) Quando praticado em atividade típica de grupo de extermínio, ainda que cometido por um só agente.",
      "C) Apenas quando a vítima for menor de 14 anos ou maior de 60 anos.",
      "D) Sempre que cometido mediante paga ou promessa de recompensa de cunho material.",
      "E) Quando houver concurso de mais de 4 pessoas na fase executória."
    ],
    correctOptionIndex: 1, // B
    explanation: "O homicídio simples só é hediondo quando praticado em atividade típica de grupo de extermínio, ainda que cometido por um só agente. O homicídio qualificado, por sua vez, é sempre hediondo."
  },
  {
    id: "leg-crimes-hediondos-q3",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, I",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O homicídio qualificado (Art. 121, § 2º do Código Penal) é considerado crime hediondo:",
    options: [
      "A) Apenas se houver emprego de veneno, fogo ou explosivo.",
      "B) Somente se o crime for cometido contra ascendente ou descendente direto.",
      "C) Em todas as suas figuras qualificadas, sem exceção.",
      "D) Apenas se for de autoria de facção criminosa carcerária.",
      "E) Desde que haja resultado de clamor público comprovado por perícia."
    ],
    correctOptionIndex: 2, // C
    explanation: "O homicídio qualificado (Art. 121, § 2º do CP) é hediondo em todas as suas qualificadoras (motivo torpe, futilidade, meio cruel, asfixia, feminicídio, contra agentes de segurança, contra menores de 14 anos, etc.)."
  },
  {
    id: "leg-crimes-hediondos-q4",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, I-A",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "Constitui crime hediondo a lesão corporal dolosa de natureza gravíssima ou lesão corporal seguida de morte, quando praticada contra policiais penais ou integrantes do sistema de segurança pública:",
    options: [
      "A) No exercício da função ou em decorrência dela, estendendo-se a proteção ao cônjuge, companheiro ou parente consanguíneo até o terceiro grau, em razão dessa condição.",
      "B) Somente quando praticada dentro do estabelecimento penal em regime fechado.",
      "C) Apenas se cometida por preso reincidente em crime hediondo ou equiparado.",
      "D) Desde que resulte em invalidez permanente total para o trabalho policial.",
      "E) Apenas se cometida mediante emprego de arma de fogo de uso proibido."
    ],
    correctOptionIndex: 0, // A
    explanation: "Conforme o art. 1º, inciso I-A, da Lei nº 8.072/90, a lesão corporal gravíssima ou seguida de morte contra agentes de segurança (e parentes de até 3º grau em razão dessa condição) constitui crime hediondo quando no exercício da função ou em decorrência dela."
  },
  {
    id: "leg-crimes-hediondos-q5",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, II",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O latrocínio (roubo seguido de morte - Art. 157, § 3º, II, do CP) é considerado crime:",
    options: [
      "A) Hediondo, figurando desde a redação original da Lei nº 8.072/1990.",
      "B) Equiparado a hediondo, necessitando de violência física real de natureza grave.",
      "C) Comum, exceto se a vítima for agente de segurança pública estadual.",
      "D) Hediondo, apenas quando houver subtração efetiva de bens de valor relevante.",
      "E) Hediondo se cometido em período noturno ou repouso semanal."
    ],
    correctOptionIndex: 0, // A
    explanation: "O latrocínio (roubo com resultado morte) é crime hediondo, figurando no rol desde o advento da Lei nº 8.072/1990."
  },
  {
    id: "leg-crimes-hediondos-q6",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, III",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "A extorsão qualificada pela restrição da liberdade da vítima, ocorrência de lesão corporal grave ou morte (Art. 158, § 3º do CP) é considerada crime:",
    options: [
      "A) Hediondo, apenas se resultar em morte efetiva da vítima.",
      "B) Comum em qualquer hipótese, sujeita a regime aberto.",
      "C) Equiparada a hediondo de acordo com a Lei de Drogas.",
      "D) Hedionda, conforme expressa previsão legal.",
      "E) Hedionda, somente se praticada mediante sequestro relâmpago de idoso."
    ],
    correctOptionIndex: 3, // D
    explanation: "A extorsão qualificada pela restrição da liberdade da vítima, ocorrência de lesão corporal ou morte (art. 158, § 3º, do CP) é classificada como crime hediondo (Art. 1º, inciso III)."
  },
  {
    id: "leg-crimes-hediondos-q7",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, V",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "Assinale a alternativa correta sobre o crime de estupro (Art. 213, caput, do CP) e sua classificação na Lei de Crimes Hediondos:",
    options: [
      "A) É crime hediondo apenas se resultar em lesão corporal de natureza grave ou morte.",
      "B) É crime hediondo em todas as suas formas (tanto caput quanto as formas qualificadas).",
      "C) É considerado crime hediondo somente quando praticado contra vítima menor de idade.",
      "D) Constitui crime equiparado a hediondo, tal como o tráfico ilícito de drogas.",
      "E) Não é hediondo na modalidade tentada."
    ],
    correctOptionIndex: 1, // B
    explanation: "O estupro (Art. 213, caput, parágrafos 1º e 2º) é crime hediondo em todas as suas modalidades, consumado ou tentado."
  },
  {
    id: "leg-crimes-hediondos-q8",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, VI",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O crime de estupro de vulnerável (Art. 217-A do Código Penal):",
    options: [
      "A) É classificado como crime comum simples, com direito a sursis processual.",
      "B) Só é hediondo se houver conjunção carnal física comprovada por exame de corpo de delito.",
      "C) É crime hediondo, introduzido no rol legal expressamente.",
      "D) É crime comum, salvo se resultar em morte da vítima vulnerável.",
      "E) É isento de prisão preventiva se o réu for primário de bons antecedentes."
    ],
    correctOptionIndex: 2, // C
    explanation: "O estupro de vulnerável (Art. 217-A do CP) constitui crime hediondo, conforme o inciso VI do art. 1º da Lei nº 8.072/1990."
  },
  {
    id: "leg-crimes-hediondos-q9",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, VII",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O crime de epidemia (Art. 267 do CP) é considerado hediondo:",
    options: [
      "A) Apenas quando resultar em morte.",
      "B) Em qualquer circunstância, inclusive na modalidade culposa simples.",
      "C) Somente se o agente transmissor agir sob ordens de organização terrorista.",
      "D) Quando praticado contra a saúde de detentos em casas prisionais gaúchas.",
      "E) Se houver declaração de calamidade pública pela União."
    ],
    correctOptionIndex: 0, // A
    explanation: "O crime de epidemia (Art. 267 do CP) só é hediondo em sua modalidade qualificada, ou seja, quando do fato resulta morte (§ 1º do art. 267)."
  },
  {
    id: "leg-crimes-hediondos-q10",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, VII-B",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O crime de falsificação, corrupção, adulteração ou alteração de produto destinado a fins terapêuticos ou medicinais (Art. 273 do CP) é classificado como:",
    options: [
      "A) Crime comum de menor potencial ofensivo.",
      "B) Crime hediondo.",
      "C) Crime comum qualificado de competência do juizado especial cível.",
      "D) Crime equiparado a hediondo apenas se envolver vacinas infantis.",
      "E) Infração sanitária administrativa, excluindo responsabilidade criminal dadas as normas da ANVISA."
    ],
    correctOptionIndex: 1, // B
    explanation: "A falsificação, corrupção, adulteração ou alteração de produto destinado a fins terapêuticos ou medicinais (Art. 273 do CP) é classificada como crime hediondo pelo art. 1º, VII-B, da Lei nº 8.072/90."
  },
  {
    id: "leg-crimes-hediondos-q11",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, VIII",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O favorecimento da prostituição ou de outra forma de exploração sexual de criança ou adolescente ou de vulnerável (Art. 218-B do CP):",
    options: [
      "A) É considerado crime hediondo.",
      "B) É crime hediondo apenas se praticado de forma continuada.",
      "C) É considerado crime comum, punido apenas com detenção e multa.",
      "D) Constitui contravenção penal especial militarizada.",
      "E) Depende de coação física violenta comprovada para configurar hediondez."
    ],
    correctOptionIndex: 0, // A
    explanation: "O favorecimento da prostituição ou exploração sexual de criança, adolescente ou vulnerável (Art. 218-B) foi inserido no rol de crimes hediondos (inciso VIII)."
  },
  {
    id: "leg-crimes-hediondos-q12",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, Parágrafo Único, I",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "Também é considerado hediondo, nos termos do parágrafo único do Art. 1º:",
    options: [
      "A) O crime de extorsão indireta.",
      "B) O crime de apropriação indébita previdenciária.",
      "C) O crime de contrabando de fumo.",
      "D) O crime de prevaricação qualificada de agente prisional.",
      "E) O crime de genocídio."
    ],
    correctOptionIndex: 4, // E
    explanation: "O crime de genocídio (previsto na Lei nº 2.889/1956) é considerado crime hediondo por força do art. 1º, parágrafo único, inciso I, da Lei nº 8.072/90."
  },
  {
    id: "leg-crimes-hediondos-q13",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, Parágrafo Único, II",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "Após a Lei Anticrime (Lei nº 13.964/2019), o roubo qualificado ou majorado é considerado hediondo na seguinte hipótese:",
    options: [
      "A) Quando praticado contra vítima idosa ou portadora de deficiência física.",
      "B) Quando houver concurso de duas ou mais pessoas em local desabitado.",
      "C) No roubo circunstanciado pelo emprego de arma de fogo, ou pelo emprego de arma de fogo de uso proibido ou restrito.",
      "D) No roubo de substâncias explosivas ou de acessórios para sua montagem por negligência operacional.",
      "E) No roubo praticado contra estabelecimento financeiro em período diurno."
    ],
    correctOptionIndex: 2, // C
    explanation: "A Lei Anticrime delimitou que o roubo majorado pelo emprego de arma de fogo (ou de uso proibido/restrito) constitui crime hediondo. O roubo com emprego de arma branca, por exemplo, não é hediondo."
  },
  {
    id: "leg-crimes-hediondos-q14",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 1º, Parágrafo Único, IX",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "Assinale a modalidade de furto qualificado que passou a ser expressamente classificada como crime hediondo após recente reforma legislativa:",
    options: [
      "A) Furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum.",
      "B) Furto qualificado mediante abuso de confiança ou destreza dolosa.",
      "C) Furto qualificado por escalada ou rompimento de obstáculo à noite.",
      "D) Furto qualificado de semovente domesticável de produção.",
      "E) Furto qualificado praticado em concurso de mais de 5 pessoas."
    ],
    correctOptionIndex: 0, // A
    explanation: "A Lei nº 13.964/2019 (Pacote Anticrime) introduziu o furto qualificado pelo emprego de explosivo ou artefato análogo como crime hediondo (Art. 1º, parágrafo único, inciso IX)."
  },
  {
    id: "leg-crimes-hediondos-q15",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Art. 2º, Caput",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "Os crimes hediondos, a tortura, o tráfico ilícito de entorpecentes e o terrorismo são insuscetíveis de:",
    options: [
      "A) Liberdade provisória em qualquer hipótese judicial.",
      "B) Progressão de regime carcerário por determinação da SUSEPE.",
      "C) Anistia, graça e indulto, bem como de fiança.",
      "D) Aplicação de suspensão condicional da execução da pena (sursis) especial.",
      "E) Defesa técnica por defensores públicos dativos."
    ],
    correctOptionIndex: 2, // C
    explanation: "Por mandamento constitucional (Art. 5º, XLIII da CF) e reforço do art. 2º, I e II da Lei nº 8.072/90, os crimes hediondos e equiparados são insuscetíveis de anistia, graça, indulto e fiança."
  },
  {
    id: "leg-crimes-hediondos-q16",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Prisão Temporária - Prazo",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 2º, § 4º",
    statement: "A prisão temporária, sobrevindo em investigações de crimes hediondos, terá qual prazo de duração máxima?",
    options: [
      "A) 5 dias, prorrogáveis por mais 5 em extrema necessidade.",
      "B) 30 dias, prorrogáveis por igual período em caso de extrema e comprovada necessidade.",
      "C) 15 dias, improrrogáveis sob pena de relaxamento automático.",
      "D) Até o término das investigações do inquérito policial, sem prazo fixo delimitado em lei.",
      "E) 60 dias fixos, conversíveis em prisão preventiva após audiência de custódia."
    ],
    correctOptionIndex: 1, // B
    explanation: "Conforme o art. 2º, § 4º da Lei nº 8.072/90, a prisão temporária nos crimes hediondos ou equiparados terá o prazo de 30 dias, prorrogável por igual período em caso de extrema e comprovada necessidade."
  },
  {
    id: "leg-crimes-hediondos-q17",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Associação Criminosa - Aumento",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 8º",
    statement: "A Lei de Crimes Hediondos prevê causa especial de aumento ou tipificação especial para associação criminosa (Art. 288 do CP) voltada a cometer crimes hediondos. A pena para essa associação é de:",
    options: [
      "A) Reclusão, de 3 a 6 anos.",
      "B) Reclusão, de 1 a 3 anos apenas.",
      "C) Detenção, de 2 a 4 anos e multa civil administrativa.",
      "D) Prisão simples de até 5 anos convertível em recolhimento domiciliar.",
      "E) Reclusão, de 4 a 8 anos para réus reincidentes genéricos."
    ],
    correctOptionIndex: 0, // A
    explanation: "O art. 8º da Lei nº 8.072/90 prevê que a pena para a associação criminosa voltada a praticar crimes hediondos ou equiparados é de reclusão de 3 a 6 anos."
  },
  {
    id: "leg-crimes-hediondos-q18",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Organização Criminosa Armas",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 1º, Parágrafo Único",
    statement: "O crime de organização criminosa (Art. 1º, § 1º da Lei nº 12.850/2013) constitui infração hedionda quando:",
    options: [
      "A) Direcionado à prática de crimes hediondos ou equiparados.",
      "B) Envolver servidores públicos ativos da carreira policial penal.",
      "C) Houver participação direta de menores de 18 anos na qualidade de olheiros.",
      "D) Comandado de dentro de estabelecimentos prisionais gaúchos.",
      "E) Configurado o dolo de transnacionalidade ou comércio interestadual."
    ],
    correctOptionIndex: 0, // A
    explanation: "O crime de organização criminosa é hediondo somente quando direcionado à prática de crimes hediondos ou equiparados (Art. 1º, parágrafo único, inciso V, da Lei nº 8.072/90)."
  },
  {
    id: "leg-crimes-hediondos-q19",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Arma de Fogo - Uso Proibido",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 1º, Parágrafo Único",
    statement: "O porte ou posse ilegal de arma de fogo é classificado como crime hediondo na seguinte hipótese:",
    options: [
      "A) No caso de arma de fogo de uso permitido sem registro oficial.",
      "B) No caso de arma de fogo de uso proibido.",
      "C) No porte de munição desacompanhada de arma correspondente.",
      "D) No caso de arma de fogo de uso restrito, sob qualquer forma de porte.",
      "E) No roubo de armas pertencentes a acervos militares federais."
    ],
    correctOptionIndex: 1, // B
    explanation: "A Lei Anticrime restringiu a hediondez da posse/porte ilegal de arma de fogo apenas para as armas de uso PROIBIDO (Art. 1º, parágrafo único, inciso II). As armas de uso restrito foram retiradas do rol hediondo neste tipo penal específico."
  },
  {
    id: "leg-crimes-hediondos-q20",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Comércio Ilegal de Armas",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 1º, Parágrafo Único",
    statement: "O comércio ilegal de armas de fogo (Art. 17 do Estatuto do Desarmamento) é classificado pela Lei nº 8.072/1990 como:",
    options: [
      "A) Crime hediondo.",
      "B) Crime comum de alto potencial lesivo.",
      "C) Crime equiparado a hediondo temporariamente.",
      "D) Crime militar em período de paz.",
      "E) Infração tributária aduaneira absorvida pelo descaminho."
    ],
    correctOptionIndex: 0, // A
    explanation: "O comércio ilegal de armas de fogo constitui crime hediondo, conforme o art. 1º, parágrafo único, inciso III, da Lei nº 8.072/1990."
  },
  {
    id: "leg-crimes-hediondos-q21",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Tráfico Internacional Armas",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 1º, Parágrafo Único",
    statement: "O crime de tráfico internacional de arma de fogo, acessório ou munição (Art. 18 da Lei nº 10.826/2003) é considerado:",
    options: [
      "A) Crime hediondo.",
      "B) Crime comum, sujeito a sursis e liberdade provisória com fiança.",
      "C) Crime federal comum sem efeitos carcerários rígidos.",
      "D) Crime de perigo abstrato não sujeito a regimes fechados.",
      "E) Contravenção aduaneira qualificada de fronteira."
    ],
    correctOptionIndex: 0, // A
    explanation: "O tráfico internacional de arma de fogo, acessório ou munição é crime hediondo nos termos do art. 1º, parágrafo único, inciso IV, da Lei nº 8.072/1990."
  },
  {
    id: "leg-crimes-hediondos-q22",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Delação Premiada - Benefício",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 8º, Parágrafo Único",
    statement: "O coautor ou participante de associação criminosa voltada a crimes hediondos que denunciar à autoridade o bando ou quadrilha, possibilitando seu desmantelamento, terá direito a:",
    options: [
      "A) Redução de pena de um a dois terços.",
      "B) Perdão judicial absoluto e imediato pelo magistrado competente.",
      "C) Isenção de pena de multa civil administrativa.",
      "D) Substituição da pena privativa de liberdade por multa.",
      "E) Extinção da punibilidade sem registro de antecedentes penais."
    ],
    correctOptionIndex: 0, // A
    explanation: "O art. 8º, parágrafo único da Lei de Crimes Hediondos concede ao delator da associação criminosa a redução de pena de 1 a 2 terços."
  },
  {
    id: "leg-crimes-hediondos-q23",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Livramento Condicional - Requisitos",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 5º",
    statement: "O livramento condicional para condenados por crimes hediondos ou equiparados exige o cumprimento de mais de dois terços da pena, desde que o liberando não seja:",
    options: [
      "A) Reincidente genérico em crimes dolosos contra o patrimônio público.",
      "B) Reincidente específico em crimes dessa natureza (hediondos ou equiparados).",
      "C) Estrangeiro com residência não declarada ou em situação irregular.",
      "D) Ocupante de cargo ou função pública no momento da prisão original.",
      "E) Menor de 21 ou maior de 70 anos de idade."
    ],
    correctOptionIndex: 1, // B
    explanation: "O condenado por crime hediondo ou equiparado pode obter livramento condicional após cumprir mais de 2/3 da pena, desde que não seja reincidente específico em crimes hediondos ou equiparados (Art. 83, V, do Código Penal)."
  },
  {
    id: "leg-crimes-hediondos-q24",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Progressão de Regime",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 2º, § 2º",
    statement: "As frações e porcentagens para progressão de regime no cumprimento de penas de crimes hediondos são reguladas pelo Código de Processo Penal e LEP. Qual alternativa reflete o requisito de progressão estabelecido pela Lei Anticrime para condenado primário por crime hediondo SEM resultado morte?",
    options: [
      "A) Cumprimento de 40% (quarenta por cento) da pena.",
      "B) Cumprimento de 2/5 (dois quintos) da pena.",
      "C) Cumprimento de 50% (cinquenta por cento) da pena.",
      "D) Cumprimento de 60% (sessenta por cento) da pena.",
      "E) Cumprimento de 1/6 (um sexto) da pena por força regulamentar."
    ],
    correctOptionIndex: 0, // A
    explanation: "A Lei Anticrime revogou os antigos critérios em frações da LEP e estabeleceu porcentagens. Condenado primário por crime hediondo sem resultado morte progride após cumprir 40% da pena (Art. 112, V, da LEP)."
  },
  {
    id: "leg-crimes-hediondos-q25",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Progressão com Morte",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 2º, § 2º",
    statement: "O condenado primário por crime hediondo ou equiparado COM resultado morte progride após cumprir qual porcentagem da pena, sendo vedado o livramento condicional?",
    options: [
      "A) 50% (cinquenta por cento) da pena.",
      "B) 60% (sessenta por cento) da pena.",
      "C) 70% (setenta por cento) da pena.",
      "D) 80% (oitenta por cento) da pena.",
      "E) 40% (quarenta por cento) da pena."
    ],
    correctOptionIndex: 0, // A
    explanation: "O condenado por crime hediondo ou equiparado com resultado morte, se for primário, progride após o cumprimento de 50% da pena, sendo vedado o livramento condicional (Art. 112, VI, 'a' da LEP)."
  },
  {
    id: "leg-crimes-hediondos-q26",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Reincidente com Morte",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O condenado reincidente específico ou genérico em crime hediondo ou equiparado COM resultado morte progride após o cumprimento de qual porcentagem da pena, também vedado livramento condicional?",
    options: [
      "A) 70% (setenta por cento) da pena.",
      "B) 60% (sessenta por cento) da pena.",
      "C) 50% (cinquenta por cento) da pena.",
      "D) 80% (oitenta por cento) da pena.",
      "E) 40% (quarenta por cento) da pena."
    ],
    correctOptionIndex: 0, // A
    explanation: "Se o apenado for reincidente em crime hediondo ou equiparado com resultado morte, o percentual de progressão de regime exigido passa a ser de 70% da pena, sendo-lhe igualmente vedado o livramento condicional (Art. 112, VIII da LEP)."
  },
  {
    id: "leg-crimes-hediondos-q27",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Equiparados a Hediondo",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 2º",
    statement: "Quais crimes são equiparados aos crimes hediondos por expressa determinação constitucional e legal?",
    options: [
      "A) Tortura, tráfico ilícito de entorpecentes e drogas afins, e o terrorismo.",
      "B) Roubo circunstanciado, corrupção ativa de servidores e prevaricação.",
      "C) Furto qualificado, estelionato e apropriação indébita.",
      "D) Quadrilha ou bando armado, sequestro simples e lesão corporal grave.",
      "E) Contrabando, descaminho e crimes de trânsito culposos com vítima."
    ],
    correctOptionIndex: 0, // A
    explanation: "A tortura, o tráfico ilícito de entorpecentes e o terrorismo (3T) recebem o mesmo tratamento legal dos crimes hediondos, sendo equiparados por força do art. 5º, XLIII, da CF e art. 2º da Lei nº 8.072/90."
  },
  {
    id: "leg-crimes-hediondos-q28",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Direito à Saúde Presos",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 3º",
    statement: "Os condenados por crimes hediondos ou equiparados cumprirão a pena em estabelecimentos penais adequados. A Lei nº 8.072/1990 dispõe que, em relação à custódia desses presos:",
    options: [
      "A) Devem ser mantidos em estabelecimentos de segurança máxima ou média, com isolamento adequado de perfil disciplinar.",
      "B) Ficam privados de qualquer banho de sol ou recreação por motivos de segurança interna.",
      "C) Não têm direito à assistência jurídica estatal gratuita em face da gravidade das infrações.",
      "D) Serão custodiados sob as regras exclusivas do direito penal militar de campanha.",
      "E) Cumprirão penas isolados da sociedade sem direito a receber qualquer visita social familiar."
    ],
    correctOptionIndex: 0, // A
    explanation: "Condenados por crimes hediondos cumprem pena em estabelecimentos prisionais comuns de segurança média ou máxima, sob ritos disciplinares ordinários (Art. 3º da Lei nº 8.072/90)."
  },
  {
    id: "leg-crimes-hediondos-q29",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Tráfico de Drogas",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 2º",
    statement: "O tráfico de entorpecentes e drogas afins (Art. 33 da Lei de Drogas) é equiparado a hediondo. No entanto, o Supremo Tribunal Federal e a legislação pacificaram que o denominado 'Tráfico Privilegiado' (§ 4º do Art. 33):",
    options: [
      "A) Não tem natureza de crime hediondo ou equiparado.",
      "B) Mantém a hediondez sob todos os efeitos de progressão carcerária.",
      "C) Só perde a hediondez se a quantidade apreendida for ínfima.",
      "D) É considerado contravenção penal simples.",
      "E) Permite anistia parcial e fiança de 10 salários mínimos."
    ],
    correctOptionIndex: 0, // A
    explanation: "A Lei nº 13.964/2019 (Pacote Anticrime) positivou o entendimento dos Tribunais Superiores, dispondo expressamente que o tráfico privilegiado não possui caráter hediondo."
  },
  {
    id: "leg-crimes-hediondos-q30",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Inconstitucionalidade do Regime",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 2º, § 1º",
    statement: "O Supremo Tribunal Federal (STF) declarou a inconstitucionalidade do parágrafo 1º do art. 2º da Lei nº 8.072/90, que estabelecia que a pena por crimes hediondos devesse ser cumprida:",
    options: [
      "A) Integralmente em regime fechado, violando o princípio constitucional da individualização da pena.",
      "B) Em colônias agrícolas em regime inicialmente semiaberto, de forma automática.",
      "C) Em presídios de segurança máxima federais por tempo indeterminado.",
      "D) Sob regime disciplinar diferenciado (RDD) logo na fase indiciária de inquérito.",
      "E) Em prisão domiciliar monitorada por tornozeleira eletrônica estadual."
    ],
    correctOptionIndex: 0, // A
    explanation: "O STF declarou a inconstitucionalidade da obrigatoriedade de cumprimento da pena integralmente (e depois inicialmente) em regime fechado por violar o princípio constitucional da individualização da pena (Art. 5º, XLVI, CF)."
  },
  {
    id: "leg-crimes-hediondos-q31",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "RDD - Regime Especial",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 2º, § 1º",
    statement: "Sobre a aplicação do Regime Disciplinar Diferenciado (RDD) a condenados ou presos provisórios por crimes hediondos, de acordo com as reformas penais, assinale a opção correta:",
    options: [
      "A) Constitui sanção disciplinar de caráter excepcional, com isolamento, visitas restritas e duração limitada nos termos da LEP.",
      "B) É aplicável automaticamente a todo e qualquer indiciado em crimes hediondos desde o ato de prisão em flagrante.",
      "C) Tem caráter punitivo corpóreo e sua aplicação compete ao Diretor da SUSEPE diretamente.",
      "D) Implica a perda definitiva e irrecorrível do direito a banho de sol regular diário.",
      "E) Veda o acesso do preso a defensores ou representantes jurídicos dativos."
    ],
    correctOptionIndex: 0, // A
    explanation: "O RDD é medida extrema regulamentada pela LEP, exigindo decisão judicial fundamentada, visitas monitoradas, isolamento celular e banho de sol diário de 2 horas."
  },
  {
    id: "leg-crimes-hediondos-q32",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Homicídio Qualificado",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 1º, I",
    statement: "Assinale a alternativa que descreve uma modalidade de homicídio que NÃO é considerada hedionda de acordo com a Lei nº 8.072/1990:",
    options: [
      "A) Feminicídio (Art. 121, § 2º, VI, do CP).",
      "B) Homicídio qualificado-privilegiado (onde concorrem circunstâncias de privilégio e qualificadora de natureza objetiva).",
      "C) Homicídio simples cometido sem atividade de grupo de extermínio e contra vítima maior de 18 anos.",
      "D) Homicídio praticado por milícia privada (Art. 121, § 6º, do CP).",
      "E) Homicídio cometido contra menores de 14 anos de idade."
    ],
    correctOptionIndex: 2, // C
    explanation: "O homicídio simples isolado (sem grupo de extermínio) e o homicídio qualificado-privilegiado não são considerados hediondos. O homicídio praticado por milícia privada ou grupo de extermínio (Art. 121, § 6º) é hediondo."
  },
  {
    id: "leg-crimes-hediondos-q33",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Crimes Contra Dignidade",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 1º, VI-A",
    statement: "O crime de estupro de vulnerável (Art. 217-A do CP) e o estupro (Art. 213 do CP) constam no rol de hediondos. Sobre esses delitos, é correto afirmar:",
    options: [
      "A) Admitem fiança, desde que o réu comprove emprego lícito estável.",
      "B) São insuscetíveis de punição criminal se a vítima outorgar perdão tácito na fase policial.",
      "C) São inafiançáveis e insuscetíveis de graça, anistia ou indulto.",
      "D) Progridem de regime com o cumprimento de apenas 10% da pena se praticados por réu primário.",
      "E) Admitem graça presidencial se concedida no feriado de Natal."
    ],
    correctOptionIndex: 2, // C
    explanation: "Estupro e estupro de vulnerável são hediondos e, portanto, inafiançáveis e insuscetíveis de indulto, graça ou anistia."
  },
  {
    id: "leg-crimes-hediondos-q34",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Genocídio - Definição",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 1º, Parágrafo Único",
    statement: "O genocídio (Lei nº 2.889/1956) é crime hediondo. Essa conduta consiste em:",
    options: [
      "A) Eliminar fisicamente um desafeto de natureza política nacional.",
      "B) Provocar danos à integridade de indivíduos isolados sem nexo de pertencimento grupal.",
      "C) Praticar atos com a intenção de destruir, no todo ou em parte, um grupo nacional, étnico, racial ou religioso, como tal.",
      "D) Atentar contra a vida de diplomatas estrangeiros em solo brasileiro.",
      "E) Causar lesões leves repetidas a comunidade de imigrantes por preconceito."
    ],
    correctOptionIndex: 2, // C
    explanation: "O genocídio consiste em atos praticados com o dolo de destruir, no todo ou em parte, grupo nacional, étnico, racial ou religioso (Lei nº 2.889/1956)."
  },
  {
    id: "leg-crimes-hediondos-q35",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Associação p/ Tráfico",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos)",
    statement: "O crime de Associação para o Tráfico de Drogas (Art. 35 da Lei nº 11.343/2006):",
    options: [
      "A) Não é crime hediondo ou equiparado, conforme pacificado pelo STJ e STF.",
      "B) É crime hediondo simples, sujeito a progressão com 40% de cumprimento.",
      "C) É considerado equiparado a hediondo apenas se envolver menores de idade.",
      "D) É contravenção penal especial militarizada de fronteira.",
      "E) Permite indulto e liberdade assistida na fase de inquérito."
    ],
    correctOptionIndex: 0, // A
    explanation: "A associação para o tráfico (Art. 35 da Lei de Drogas) não é crime hediondo nem equiparado, conforme entendimento consolidado do Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF)."
  },
  {
    id: "leg-crimes-hediondos-q36",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-crimes-hediondos",
    articleOrSubtopic: "Tortura - Omissão",
    lawReference: "Lei nº 8.072/1990 (Crimes Hediondos) - Art. 2º",
    statement: "O crime de tortura é equiparado a hediondo. No entanto, a denominada 'Tortura-Omissão' (Art. 1º, § 2º da Lei de Tortura):",
    options: [
      "A) Não tem natureza de crime hediondo, por constituir crime de natureza omissiva própria apenado com detenção.",
      "B) É crime hediondo puro, sujeito a regime fechado e inafiançabilidade.",
      "C) Progride com 50% de pena cumprida para réus reincidentes.",
      "D) É contravenção penal de menor potencial ofensivo tratada nos juizados.",
      "E) Admite fiança de até 100 salários mínimos recolhidos à comarca."
    ],
    correctOptionIndex: 0, // A
    explanation: "A tortura pela omissão (quem se omite perante as condutas de tortura quando tinha o dever de evitá-las ou apurá-las) não é crime hediondo ou equiparado, sendo punido com detenção."
  }
];
