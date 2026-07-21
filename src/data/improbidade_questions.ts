import { Question, SubjectId } from "../types";

export const IMPROBIDADE_QUESTIONS: Question[] = [
  {
    id: "leg-improbidade-q1",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Dolo Específico",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 1º",
    statement: "De acordo com as profundas alterações trazidas pela Lei nº 14.230/2021 à Lei de Improbidade Administrativa (Lei nº 8.429/1992), o elemento subjetivo indispensável para a configuração de qualquer ato de improbidade é:",
    options: [
      "A) A culpa simples, bastando a negligência no trato dos bens públicos.",
      "B) O dolo específico, caracterizado pela vontade livre e consciente de alcançar o resultado ilícito tipificado em lei.",
      "C) A culpa grave ou dolo genérico, independentemente do fim especial do agente público.",
      "D) A responsabilidade objetiva do agente público, dispensando dolo ou culpa se houver dano prático.",
      "E) A mera irregularidade formal que fira as diretrizes orçamentárias."
    ],
    correctOptionIndex: 1,
    explanation: "O art. 1º, § 1º, da LIA (com a redação da Lei 14.230/21) exige o dolo específico, definido como a vontade livre e consciente de alcançar o resultado ilícito tipificado nas hipóteses da lei, não bastando a simples voluntariedade ou dolo genérico."
  },
  {
    id: "leg-improbidade-q2",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Enriquecimento Ilícito",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 9º",
    statement: "Constitui ato de improbidade administrativa importando enriquecimento ilícito auferir qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, mandato, função ou emprego. À luz do Art. 9º, assinale a conduta que exemplifica esse ato:",
    options: [
      "A) Perder patrimônio público por pura negligência funcional ou omissão involuntária.",
      "B) Facilitar a aquisição de bens por valor superior ao preço de mercado de forma culposa.",
      "C) Receber vantagem econômica de qualquer natureza para tolerar a prática de usura ou qualquer atividade ilícita.",
      "D) Celebrar parcerias públicas sem observar as formalidades regulamentares estritas por equívoco administrativo.",
      "E) Negar publicidade aos atos oficiais legítimos por inépcia administrativa."
    ],
    correctOptionIndex: 2,
    explanation: "Receber vantagem econômica para tolerar atividade ilícita é uma das hipóteses expressas de enriquecimento ilícito do art. 9º, inciso VII, da Lei de Improbidade Administrativa."
  },
  {
    id: "leg-improbidade-q3",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Prejuízo ao Erário",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 10",
    statement: "Os atos de improbidade administrativa que causam lesão ao erário são descritos no Art. 10. Qual alternativa descreve uma característica atual desse tipo de ato de improbidade?",
    options: [
      "A) Admitem tanto a modalidade dolosa quanto a culposa de prejuízo patrimonial.",
      "B) São punidos de forma objetiva, bastando a existência de prejuízo financeiro presumido.",
      "C) Exigem necessariamente dolo para sua configuração, não existindo mais a figura da improbidade culposa por lesão ao erário.",
      "D) Prescrevem em apenas 3 anos contados da data da ocorrência do fato danoso.",
      "E) Aplicam-se unicamente aos prefeitos municipais e secretários de Estado."
    ],
    correctOptionIndex: 2,
    explanation: "A Lei 14.230/2021 revogou expressamente a modalidade culposa que existia no art. 10 (lesão ao erário). Agora, todo e qualquer ato de improbidade administrativa exige dolo."
  },
  {
    id: "leg-improbidade-q4",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Atos Contra Princípios",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 11",
    statement: "No que diz respeito aos atos de improbidade administrativa que atentam contra os princípios da administração pública (Art. 11), a nova regulamentação prevê que:",
    options: [
      "A) O rol de condutas descritas no Art. 11 é meramente exemplificativo (numerus apertus).",
      "B) O rol de condutas descritas no Art. 11 passou a ser taxativo (numerus clausus), dependendo de enquadramento estrito nas hipóteses descritas.",
      "C) Dispensam qualquer comprovação de dolo genérico ou específico para punição criminal.",
      "D) Permitem a suspensão dos direitos políticos do infrator pelo prazo de até 20 anos.",
      "E) Não admitem aplicação de multa civil como sanção aplicável."
    ],
    correctOptionIndex: 1,
    explanation: "Após a reforma da Lei 14.230/2021, o rol do art. 11 da LIA (atos contra os princípios) passou a ter caráter taxativo. Ou seja, apenas as condutas expressamente descritas nos incisos do artigo configuram ato de improbidade."
  },
  {
    id: "leg-improbidade-q5",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Sujeito Passivo da LIA",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 1º",
    statement: "Estão sujeitos às sanções da Lei de Improbidade Administrativa os atos praticados contra o patrimônio de quais entidades?",
    options: [
      "A) Exclusivamente órgãos da administração pública direta federal.",
      "B) Apenas entidades públicas que recebam mais de 90% de subsídio anual da União.",
      "C) Qualquer órgão ou entidade da administração pública direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios.",
      "D) Apenas partidos políticos e sindicatos patronais registrados.",
      "E) Somente empresas estatais federais de capital aberto com atuação internacional."
    ],
    correctOptionIndex: 2,
    explanation: "A LIA aplica-se a atos contra o patrimônio de qualquer entidade da administração direta, indireta ou fundacional de qualquer dos Poderes de todos os entes federativos (art. 1º, caput)."
  },
  {
    id: "leg-improbidade-q6",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Sanções Aplicáveis",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 12",
    statement: "Sobre a sanção de suspensão dos direitos políticos aplicada ao agente que comete ato de improbidade que importa enriquecimento ilícito (Art. 9º), assinale o prazo máximo previsto em lei:",
    options: [
      "A) Até 5 anos.",
      "B) Até 8 anos.",
      "C) Até 10 anos.",
      "D) Até 14 anos.",
      "E) Até 20 anos."
    ],
    correctOptionIndex: 3,
    explanation: "Conforme o art. 12, inciso I, da LIA, o prazo de suspensão dos direitos políticos na hipótese de enriquecimento ilícito é de até 14 anos."
  },
  {
    id: "leg-improbidade-q7",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Prescrição da Ação",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 23",
    statement: "A ação para a aplicação das sanções previstas na Lei de Improbidade Administrativa prescreve em quanto tempo?",
    options: [
      "A) Em 8 anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que tiver cessado a permanência.",
      "B) Em 5 anos, contados da data de exoneração do cargo em comissão.",
      "C) Em 10 anos, de acordo com as regras gerais do Código Civil.",
      "D) Em 4 anos, contados do término do mandato eletivo municipal correspondente.",
      "E) É imprescritível para qualquer ato de improbidade, por força constitucional."
    ],
    correctOptionIndex: 0,
    explanation: "A Lei 14.230/21 unificou o prazo de prescrição no art. 23, estabelecendo que a ação prescreve em 8 anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessa a permanência."
  },
  {
    id: "leg-improbidade-q8",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Sujeito Ativo da LIA",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 2º",
    statement: "Para os efeitos da LIA, considera-se agente público:",
    options: [
      "A) Apenas os servidores ocupantes de cargos efetivos civis da administração direta.",
      "B) Todo aquele que exerce, ainda que transitoriamente ou sem remuneração, por eleição, nomeação, designação, contratação ou qualquer outra forma de investidura ou vínculo, mandato, cargo, emprego ou função nas entidades públicas.",
      "C) Apenas os agentes políticos com mandato eletivo nacional ou estadual.",
      "D) Servidores públicos estatutários estáveis, com exclusão expressa dos terceirizados e temporários.",
      "E) Somente os militares em serviço ativo e agentes com poder de polícia ostensiva."
    ],
    correctOptionIndex: 1,
    explanation: "O conceito de agente público da LIA (art. 2º) é extremamente amplo, abrangendo qualquer pessoa que exerça mandato, cargo, emprego ou função, de forma permanente ou transiente, remunerada ou gratuita."
  },
  {
    id: "leg-improbidade-q9",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Terceiro Beneficiário",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 3º",
    statement: "As disposições da LIA são aplicáveis, no que couber, ao terceiro que, mesmo não sendo agente público, induza ou concorra para a prática do ato de improbidade. Segundo a redação atual, assinale a opção correta sobre o terceiro:",
    options: [
      "A) Responde de forma objetiva, mesmo se não agiu com dolo, caso tenha auferido benefício direto.",
      "B) Só responde se tiver instigado o agente público por escrito ou registrado em cartório.",
      "C) Os sócios e diretores de pessoa jurídica respondem pelos atos de improbidade de forma automática e ilimitada.",
      "D) O terceiro só responde se agir com dolo, aplicando-se regras de desconsideração da personalidade jurídica para atingir sócios apenas se houver abuso de direito e dolo específico.",
      "E) O terceiro não está sujeito a ressarcimento ao erário, respondendo apenas com multa civil simbólica."
    ],
    correctOptionIndex: 3,
    explanation: "Nos termos do art. 3º, o terceiro (não agente) só responde em caso de dolo. E seus sócios, diretores e colaboradores não respondem individualmente pelas sanções, a menos que concorram dolosamente para a prática do ilícito com benefício pessoal."
  },
  {
    id: "leg-improbidade-q10",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Acordo de Não Persecução",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 17-B",
    statement: "Com a nova sistemática da LIA, passou a ser permitida a celebração de um importante instrumento consensual denominado:",
    options: [
      "A) Acordo de Não Persecução Cível (ANPC), que pode ser celebrado pelo Ministério Público mediante ressarcimento integral do dano e outras condições.",
      "B) Acordo de Leniência Administrativa Bilateral, firmado unicamente pelo Chefe do Poder Executivo estadual.",
      "C) Transação Penal Coletiva, para isenção total e definitiva de crimes ambientais e funcionais conexos.",
      "D) Contrato de Ajuste de Conduta Individual de caráter privado e sigiloso permanente.",
      "E) Termo de Perdão Judicial Especial deferido pela Defensoria Pública do Estado."
    ],
    correctOptionIndex: 0,
    explanation: "O art. 17-B da LIA autoriza o Ministério Público a celebrar o Acordo de Não Persecução Cível (ANPC), exigindo a oitiva do ente público lesado, ressarcimento integral e reversão da vantagem indevida obtida."
  },
  {
    id: "leg-improbidade-q11",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Nepotismo",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 11, XI",
    statement: "Sob a nova redação do Art. 11, constitui ato de improbidade que atenta contra os princípios da administração pública nomear cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até qual grau, para cargos de confiança ou de comissão?",
    options: [
      "A) Até o segundo grau.",
      "B) Até o terceiro grau.",
      "C) Até o quarto grau.",
      "D) Até o quinto grau.",
      "E) Sem limite de parentesco, atingindo toda a árvore genealógica do nomeante."
    ],
    correctOptionIndex: 1,
    explanation: "O art. 11, inciso XI, da LIA tipifica expressamente a prática do nepotismo como improbidade contra princípios, abrangendo cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau."
  },
  {
    id: "leg-improbidade-q12",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Representação de Improbidade",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 14",
    statement: "Qualquer pessoa poderá representar à autoridade administrativa competente para que seja instaurada investigação destinada a apurar a prática de ato de improbidade. Sobre essa representação, assinale a opção correta:",
    options: [
      "A) Pode ser feita por telefonema anônimo sem necessidade de qualquer identificação pessoal.",
      "B) A representação, que deve ser escrita ou reduzida a termo e assinada, conterá a qualificação do representante, as informações sobre o fato e a autoria e a indicação das provas.",
      "C) Deve ser formulada por advogado devidamente constituído com procuração pública com selo notarial.",
      "D) O representante é civilmente responsável pelas custas da investigação mesmo em caso de boa-fé absoluta.",
      "E) Só pode ser apresentada por outro servidor do mesmo órgão administrativo."
    ],
    correctOptionIndex: 1,
    explanation: "Conforme o art. 14, caput e § 1º da LIA, a representação deve ser escrita ou a termo, assinada, contendo qualificação, descrição dos fatos, autoria e provas conhecidas, sob pena de rejeição."
  },
  {
    id: "leg-improbidade-q13",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Multa Civil",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 12",
    statement: "Para os atos de improbidade que causam lesão ao erário (Art. 10), além do ressarcimento integral, o infrator está sujeito ao pagamento de multa civil de valor equivalente a até:",
    options: [
      "A) Até o valor do dano patrimonial causado.",
      "B) Até o dobro do valor do enriquecimento ilícito.",
      "C) Até cem vezes o valor da última remuneração recebida pelo agente público.",
      "D) Até o triplo do prejuízo efetivamente apurado.",
      "E) Até o limite correspondente a R$ 10.000,00 fixos e sem correção cambial."
    ],
    correctOptionIndex: 0,
    explanation: "No art. 12, inciso II (lesão ao erário), a multa civil máxima aplicável é de valor equivalente ao valor do dano provocado."
  },
  {
    id: "leg-improbidade-q14",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Transmissão da Obrigação",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 8º",
    statement: "O sucessor ou o herdeiro daquele que causar lesão ao erário ou se enriquecer ilicitamente estão sujeitos à obrigação de repará-lo. Essa obrigação de ressarcimento é transmitida aos sucessores e:",
    options: [
      "A) Será integral e ilimitada, recaindo sobre os bens pessoais dos herdeiros sem restrição de herança.",
      "B) Subsiste até o limite do valor da herança ou do patrimônio transferido pelo de cujus.",
      "C) Fica extinta com a morte do causador do dano, em decorrência do princípio da pessoalidade da pena.",
      "D) Exige a concordância expressa e voluntária de todos os sucessores testamentários legítimos.",
      "E) Aplica-se apenas se os herdeiros tiverem concorrido dolosamente para a prática ilícita."
    ],
    correctOptionIndex: 1,
    explanation: "Segundo o art. 8º da LIA, a obrigação de reparar o dano estende-se aos sucessores do falecido e contra eles será executada, até o limite do valor da herança ou do patrimônio por ele transferido."
  },
  {
    id: "leg-improbidade-q15",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Legitimidade Ativa da Ação",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 17",
    statement: "Quem possui legitimidade ativa exclusiva para propor a ação judicial de improbidade administrativa sob a égide da nova redação da LIA?",
    options: [
      "A) O Ministério Público tão somente.",
      "B) Qualquer partido político com representação no Congresso Nacional.",
      "C) A Advocacia Pública do respectivo ente federado lesado.",
      "D) O Ministério Público e as pessoas jurídicas interessadas (entes lesados), concorrentemente.",
      "E) Qualquer cidadão eleitor de boa-fé em pleno exercício de seus direitos políticos."
    ],
    correctOptionIndex: 0,
    explanation: "Após as reformas da Lei 14.230/2021 e deliberação do STF nas ADIs correspondentes, consolidou-se que o Ministério Público detém legitimidade ativa, mas em caráter concorrente com a pessoa jurídica interessada (Advocacia Pública dos entes federados) para propor a ação civil de improbidade."
  },
  {
    id: "leg-improbidade-q16",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Medidas Cautelares",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 16",
    statement: "Na ação de improbidade, o juiz poderá deferir liminarmente a indisponibilidade de bens do réu. Essa medida cautelar exige a demonstração de:",
    options: [
      "A) Presunção absoluta de perigo de dilapidação dos bens pelo réu (periculum in mora presumido).",
      "B) Perigo de dano irreparável ou de difícil reparação consistente na demonstração de atos do réu voltados à dilapidação patrimonial.",
      "C) Pedido escrito assinado por pelo menos três testemunhas idôneas extrajudiciais.",
      "D) Declaração de revelia prévia do réu e trânsito em julgado da fase de saneamento processual.",
      "E) Depósito prévio em juízo de fiança bancária caução pela Defensoria ou MP."
    ],
    correctOptionIndex: 1,
    explanation: "De acordo com o art. 16, § 3º, da LIA, o pedido de indisponibilidade de bens depende da demonstração no caso concreto de perigo de dano irreparável ou de difícil reparação, vedada a mera presunção de dilapidação."
  },
  {
    id: "leg-improbidade-q17",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Trabalho Voluntário e Improbidade",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 2º",
    statement: "Considere que um cidadão colabore voluntariamente de forma gratuita com a SUSEPE/RS na organização de uma biblioteca prisional sem vínculo estatutário. No tocante à LIA, esse colaborador:",
    options: [
      "A) Está excluído do conceito de agente público, pois não recebe qualquer remuneração oficial do erário.",
      "B) É equiparado a agente público para fins de improbidade administrativa, estando plenamente sujeito aos ditames da LIA.",
      "C) Só pode responder civilmente se houver dano moral de natureza coletiva.",
      "D) Responde conforme as normas privadas das fundações confessionais de apoio carcerário.",
      "E) Depende de decreto de nomeação com selo oficial do Governador para ser considerado sujeito ativo."
    ],
    correctOptionIndex: 1,
    explanation: "O art. 2º define agente público de forma extensiva, de modo que o exercício transiente e não remunerado de qualquer função pública enquadra o indivíduo como agente para efeitos de improbidade."
  },
  {
    id: "leg-improbidade-q18",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Improbidade Contra Princípios - Limites",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 12, III",
    statement: "Na condenação por ato de improbidade que atenta contra os princípios da administração (Art. 11), quais são as sanções aplicáveis de acordo com a LIA?",
    options: [
      "A) Perda da função pública, suspensão de direitos políticos e multa civil.",
      "B) Multa civil de até 24 vezes o valor do último subsídio e proibição de contratar com o Poder Público por até 4 anos.",
      "C) Suspensão perpétua de cargos na área de segurança pública e multa de até 100 salários mínimos.",
      "D) Apenas advertência verbal reservada e obrigação de retratação oficial pública.",
      "E) Prisão temporária conversível em serviços comunitários de reflorestamento."
    ],
    correctOptionIndex: 1,
    explanation: "Nos termos do art. 12, inciso III, da LIA, para atos contra princípios, as sanções incluem o pagamento de multa civil de até 24 vezes o valor da remuneração percebida e a proibição de contratar com o Poder Público por prazo não superior a 4 anos. Não há previsão de suspensão de direitos políticos nesta modalidade."
  },
  {
    id: "leg-improbidade-q19",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Divergência Interpretativa",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 1º",
    statement: "Suponha que um gestor público da segurança do RS adote uma interpretação jurídica plausível de uma portaria administrativa, mas essa interpretação venha a ser posteriormente rejeitada pelos órgãos de controle. Segundo a LIA:",
    options: [
      "A) O gestor responderá obrigatoriamente por ato de improbidade devido ao prejuízo orçamentário decorrente.",
      "B) Não configura improbidade a divergência interpretativa da lei, baseada em jurisprudência ou em doutrina, ainda que não pacificada.",
      "C) Configura improbidade na modalidade culposa simples por negligência exegética.",
      "D) O ato será nulo de pleno direito e o dolo específico será presumido jure et de jure.",
      "E) A ação será encaminhada ao juiz do júri popular de Porto Alegre por envolver interesse público coletivo."
    ],
    correctOptionIndex: 1,
    explanation: "O art. 1º, § 8º, da LIA dispõe que não configura improbidade a divergência interpretativa da lei, baseada em jurisprudência ou doutrina, mesmo que não pacificada, afastando-se o risco de punição ao administrador diligente."
  },
  {
    id: "leg-improbidade-q20",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Declaração de Bens",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 13",
    statement: "A posse e o exercício de agente público ficam condicionados à apresentação de declaração de bens e valores de seu patrimônio privado. Qual a consequência legal prevista na LIA para o agente que se recusar a prestar tal declaração?",
    options: [
      "A) Advertência escrita reservada com prazo de 90 dias para regularização.",
      "B) Demissão a bem do serviço público ou sanção equivalente, sem prejuízo de outras medidas cabíveis.",
      "C) Retenção provisória de 10% dos vencimentos mensais brutos em conta judicial vinculada.",
      "D) Apenas a vedação de participar de concursos públicos adicionais no mesmo ente federativo.",
      "E) Nenhuma punição direta, pois vigora a garantia de proteção constitucional à privacidade de bens."
    ],
    correctOptionIndex: 1,
    explanation: "O art. 13, § 3º, da LIA determina que será punido com a pena de demissão a bem do serviço público, ou sanção equivalente, o agente que se recusar a prestar a declaração de bens dentro do prazo ou que a prestar falsa."
  },
  {
    id: "leg-improbidade-q21",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Enriquecimento Ilícito - Multa",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 12, I",
    statement: "Na hipótese de condenação por enriquecimento ilícito (Art. 9º), a multa civil pode atingir qual patamar máximo conforme o estatuto vigente?",
    options: [
      "A) Valor equivalente ao acréscimo patrimonial indevido.",
      "B) Até o dobro do valor do enriquecimento ilícito obtido pelo infrator.",
      "C) Até cem vezes a última remuneração básica recebida em atividade oficial.",
      "D) Até o triplo do acréscimo patrimonial indevido obtido pelo infrator.",
      "E) Não há multa prevista, pois as penas são de cunho puramente político e administrativo."
    ],
    correctOptionIndex: 0,
    explanation: "Conforme o art. 12, inciso I, da LIA, o sancionamento por ato de enriquecimento ilícito inclui o pagamento de multa civil equivalente ao valor do acréscimo patrimonial indevido."
  },
  {
    id: "leg-improbidade-q22",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Perda da Função Pública",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 12, § 1º",
    statement: "De acordo com as regras atuais sobre a perda da função pública aplicada em ações de improbidade, é correto afirmar que:",
    options: [
      "A) Atinge imediatamente todo e qualquer cargo ou função que o réu ocupe na data do trânsito em julgado da sentença, de forma absoluta.",
      "B) Atinge, em regra, apenas o vínculo de mesma qualidade e natureza que o agente público mantinha com o poder público na época do cometimento da infração.",
      "C) É de aplicação imediata provisória, suspendendo-se o salário do servidor já na fase de denúncia inicial do MP.",
      "D) Não pode ser decretada judicialmente, constituindo competência exclusiva e discricionária da chefia do Executivo.",
      "E) Aplica-se unicamente aos agentes em regime temporário ou de livre nomeação e exoneração."
    ],
    correctOptionIndex: 1,
    explanation: "O art. 12, § 1º, prevê que a perda da função pública atinge apenas o vínculo de mesma qualidade que o agente mantinha com o poder público na época da infração, embora o juiz possa, em caráter excepcional, estendê-la a outros vínculos se as circunstâncias justificarem."
  },
  {
    id: "leg-improbidade-q23",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-improbidade",
    articleOrSubtopic: "Indisponibilidade de Salários",
    lawReference: "Lei nº 8.429/1992 (LIA) - Art. 16, § 13",
    statement: "A medida de indisponibilidade de bens não poderá recair sobre determinados recursos do investigado. De acordo com a LIA, assinale a hipótese de impenhorabilidade expressa:",
    options: [
      "A) Quantia de até 40 salários mínimos depositada em caderneta de poupança ou em outras aplicações financeiras.",
      "B) Todo e qualquer bem imóvel residencial pertencente ao núcleo familiar do agente público.",
      "C) Carros ou veículos utilitários avaliados em quantia inferior a R$ 150.000,00.",
      "D) Saldos em contas correntes comerciais cujos CNPJs possuam contratos com entes públicos gaúchos.",
      "E) Obras de arte, joias ou acervos bibliográficos privados herdados de ascendentes diretos."
    ],
    correctOptionIndex: 0,
    explanation: "O art. 16, § 13 da LIA dispõe que a indisponibilidade de bens não incidirá sobre valores de até 40 salários mínimos depositados em caderneta de poupança, outras aplicações financeiras ou conta corrente, em harmonia com as proteções do Código de Processo Civil."
  }
];
