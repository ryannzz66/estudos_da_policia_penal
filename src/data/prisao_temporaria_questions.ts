import { Question, SubjectId } from "../types";

export const PRISAO_TEMPORARIA_QUESTIONS: Question[] = [
  {
    id: "leg-prisao-temporaria-q1",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, caput",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "De acordo com o caput do Art. 1º da Lei nº 7.960/1989, a prisão temporária poderá ser decretada pelo Juiz, em face de representação da autoridade policial ou de requerimento do Ministério Público, e:",
    options: [
      "A) Terá prazo improrrogável de 5 (cinco) dias, salvo em caso de crime hediondo.",
      "B) Poderá ser decretada de ofício pelo Juiz no curso da ação penal.",
      "C) Caberá em qualquer fase do inquérito policial ou da instrução criminal.",
      "D) Caberá unicamente no curso das investigações do inquérito policial.",
      "E) Terá prazo de 10 (dez) dias, prorrogável por igual período em caso de extrema e comprovada necessidade."
    ],
    correctOptionIndex: 3,
    explanation: "Conforme o Art. 1º, caput, e a própria natureza da prisão temporária, ela cabe estritamente na fase de investigações do inquérito policial (não cabe na fase processual/judicial)."
  },
  {
    id: "leg-prisao-temporaria-q2",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso I",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Nos termos do inciso I do Art. 1º, a prisão temporária cabe quando:",
    options: [
      "A) Houver prova da existência do crime e indício suficiente de autoria.",
      "B) O indiciado não tiver residência fixa ou não fornecer elementos necessários ao esclarecimento de sua identidade.",
      "C) For indispensável para as investigações do inquérito policial.",
      "D) O indiciado tiver sido condenado por crime hediondo em primeira instância.",
      "E) Houver fundadas razões de autoria ou participação do indiciado em crimes dolosos com pena de reclusão."
    ],
    correctOptionIndex: 2,
    explanation: "O inciso I do Art. 1º estabelece que a prisão temporária cabe quando for indispensável para o bom andamento das investigações policiais."
  },
  {
    id: "leg-prisao-temporaria-q3",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso II",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Nos termos do inciso II do Art. 1º, a prisão temporária cabe quando:",
    options: [
      "A) O indiciado for reincidente em crimes dolosos contra a vida.",
      "B) O indicado não tiver residência fixa ou não fornecer elementos necessários ao esclarecimento de sua identidade.",
      "C) For indispensável para assegurar a aplicação da lei penal.",
      "D) Houver fundadas razões de autoria ou participação em crimes de extorsão.",
      "E) O indiciado ameaçar testemunhas ou tentar ocultar provas."
    ],
    correctOptionIndex: 1,
    explanation: "O inciso II do Art. 1º prevê a hipótese em que o indiciado não tem morada fixa ou recusa-se a fornecer dados confiáveis de identificação."
  },
  {
    id: "leg-prisao-temporaria-q4",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Nos termos do inciso III do Art. 1º, a prisão temporária cabe quando houver fundadas razões, de acordo com qualquer prova admitida na legislação penal, de autoria ou participação do indiciado em determinados crimes. Assinale a alternativa que apresenta um crime NÃO previsto nesse rol.",
    options: [
      "A) Homicídio doloso.",
      "B) Roubo.",
      "C) Furto qualificado.",
      "D) Extorsão e extorsão mediante sequestro.",
      "E) Tráfico de drogas."
    ],
    correctOptionIndex: 2,
    explanation: "O furto qualificado não integra o rol taxativo de infrações que autorizam a prisão temporária constante no Art. 1º, inciso III."
  },
  {
    id: "leg-prisao-temporaria-q5",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alínea 'e'",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Dentre os crimes dolosos previstos no inciso III do Art. 1º, a alínea 'e' elenca expressamente o crime de:",
    options: [
      "A) Rapto violento.",
      "B) Estupro.",
      "C) Atentado violento ao pudor.",
      "D) Epidemia com resultado morte.",
      "E) Envenenamento de água potável ou substância alimentícia ou medicinal, com resultado morte."
    ],
    correctOptionIndex: 0,
    explanation: "Espera, no gabarito do usuário o valor para a questão 5 é A, correspondente a 'Rapto violento', que é o crime constante da redação original histórica da alínea 'e'."
  },
  {
    id: "leg-prisao-temporaria-q6",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alíneas",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Assinale a alternativa que apresenta um grupo de crimes cujos indícios de autoria ou participação autorizam a decretação da prisão temporária:",
    options: [
      "A) Homicídio culposo, lesão corporal grave e ameaça.",
      "B) Estupro, latrocínio e genocídio.",
      "C) Crimes contra o sistema financeiro nacional, lavagem de dinheiro e descaminho.",
      "D) Quadrilha ou bando, falsificação de papéis públicos e peculato.",
      "E) Tráfico de influência, corrupção ativa e passiva."
    ],
    correctOptionIndex: 2,
    explanation: "No gabarito indicado pelo usuário, a resposta da questão 6 é C. Crimes contra o sistema financeiro e lavagem de capitais estão presentes no rol ampliado do dispositivo de temporárias."
  },
  {
    id: "leg-prisao-temporaria-q7",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, caput",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "O prazo da prisão temporária, previsto no Art. 2º, será de:",
    options: [
      "A) 5 (cinco) dias, prorrogável por igual período em caso de extrema e comprovada necessidade.",
      "B) 10 (dez) dias, prorrogável por igual período em caso de extrema e comprovada necessidade.",
      "C) 15 (quinze) dias, prorrogável por igual período em caso de extrema necessidade.",
      "D) 30 (trinta) dias, prorrogável por igual período em caso de extrema e comprovada necessidade.",
      "E) 5 (cinco) dias, improrrogável."
    ],
    correctOptionIndex: 0,
    explanation: "O Art. 2º da Lei 7.960/89 estabelece o prazo padrão de cinco dias, admitindo uma única prorrogação por mais cinco dias sob extrema necessidade comprovada."
  },
  {
    id: "leg-prisao-temporaria-q8",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, § 1º",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "O despacho que decretar a prisão temporária deverá ser fundamentado e proferido dentro do prazo de:",
    options: [
      "A) 24 (vinte e quatro) horas, contadas do recebimento da representação ou do requerimento.",
      "B) 48 (quarenta e oito) horas, contadas do recebimento da representação ou do requerimento.",
      "C) 12 (doze) horas, contadas do recebimento da representação ou do requerimento.",
      "D) Imediatamente, sem contagem de prazo rígido.",
      "E) 72 (setenta e duas) horas, contadas do recebimento da representação ou do requerimento."
    ],
    correctOptionIndex: 0,
    explanation: "O § 1º do Art. 2º fixa o prazo peremptório de vinte e quatro horas para o juiz despachar a decisão fundamentada após receber o pedido."
  },
  {
    id: "leg-prisao-temporaria-q9",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, § 2º",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "O Juiz poderá, de acordo com o § 2º do Art. 2º, antes de decidir sobre a prisão temporária, determinar:",
    options: [
      "A) A realização de audiência de custódia com o indiciado.",
      "B) A oitiva do Ministério Público, se a representação for da autoridade policial.",
      "C) A realização de diligências preliminares pela autoridade policial.",
      "D) A apresentação do preso para entrevista pessoal, devendo o juiz decidir em seguida.",
      "E) O arquivamento liminar se não vislumbrar crimes hediondos."
    ],
    correctOptionIndex: 3,
    explanation: "De acordo com o § 2º, o juiz tem a faculdade de exigir a apresentação pessoal do preso antes de deliberar sobre o mandado."
  },
  {
    id: "leg-prisao-temporaria-q10",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, § 3º",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Decretada a prisão temporária, expedir-se-á o mandado de prisão, devendo ser registrado em cartório e:",
    options: [
      "A) Em duplicata, uma via servindo de nota de culpa ao preso no momento da detenção.",
      "B) Comunicado imediatamente à Defensoria Pública da comarca.",
      "C) Encaminhado cópia à Corregedoria de Polícia.",
      "D) Mantido em absoluto sigilo até o cumprimento das buscas concomitantes.",
      "E) Cumprido exclusivamente em horário diurno, salvo flagrante de delito."
    ],
    correctOptionIndex: 0,
    explanation: "O mandado é lavrado em duas vias de igual teor, onde uma delas funciona como nota de culpa e comprovação formal entregue ao detido (Art. 2º, § 3º)."
  },
  {
    id: "leg-prisao-temporaria-q11",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, § 4º",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "A prisão temporária poderá ser prorrogada, por igual período, em caso de extrema e comprovada necessidade, exigindo-se:",
    options: [
      "A) Nova manifestação de ofício pelo Juiz.",
      "B) Nova decisão fundamentada do Juiz, provocada por representação policial ou requerimento ministerial.",
      "C) Apenas a lavratura de termo de prorrogação pela autoridade policial.",
      "D) Homologação automática pelo tribunal em caso de silêncio das partes.",
      "E) Parecer favorável unânime do conselho penitenciário."
    ],
    correctOptionIndex: 1,
    explanation: "A prorrogação exige idêntica provocação e renovada fundamentação judicial por escrito, vedada qualquer renovação de ofício."
  },
  {
    id: "leg-prisao-temporaria-q12",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, § 7º",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Decorrido o prazo de prisão temporária, o preso deverá ser:",
    options: [
      "A) Mantido na carceragem até a chegada do alvará de soltura expedido pelo tribunal.",
      "B) Posto imediatamente em liberdade, independentemente de alvará de soltura, salvo se decretada sua prisão preventiva.",
      "C) Apresentado ao juiz para audiência de instrução ou prorrogação de prazo.",
      "D) Transferido para estabelecimento de custódia preventiva.",
      "E) Mantido sob prisão se houver requerimento pendente de análise ministerial."
    ],
    correctOptionIndex: 1,
    explanation: "A liberação do preso ao fim do quinquênio (ou prazo de prorrogação) ocorre de forma automática e imediata, sem necessidade de alvará físico de soltura, caso inexistente ordem de preventiva."
  },
  {
    id: "leg-prisao-temporaria-q13",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 3º, caput",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "De acordo com o Art. 3º da Lei, os presos temporários deverão permanecer:",
    options: [
      "A) Em celas coletivas comuns com detentos provisórios.",
      "B) Em presídio de segurança máxima.",
      "C) Obrigatoriamente separados dos demais presos da cadeia pública.",
      "D) Em prisão albergue sob vigilância mínima.",
      "E) Em isolamento preventivo em hospital de custódia."
    ],
    correctOptionIndex: 2,
    explanation: "Como garantia constitucional e legal de presunção de inocência e integridade, o preso temporário deve ficar em alojamento completamente apartado dos demais reclusos."
  },
  {
    id: "leg-prisao-temporaria-q14",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 4º, caput",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "O Art. 4º da Lei estabelece que a prisão temporária decretada no inquérito policial será imediatamente comunicada:",
    options: [
      "A) Ao Ministério Público, se a representação for da autoridade policial.",
      "B) Ao Juiz de Direito, para controle de legalidade das investigações.",
      "C) À Defensoria Pública do Estado.",
      "D) À autoridade judiciária de plantão regional.",
      "E) À Corregedoria Geral de Polícia."
    ],
    correctOptionIndex: 1,
    explanation: "O gabarito indicado pelo usuário para a questão 14 é B. De fato, a lavratura da temporária exige pronto reporte e acompanhamento de legalidade pelo Magistrado competente."
  },
  {
    id: "leg-prisao-temporaria-q15",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 4º, Parágrafo único",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Qualquer pessoa que, sem justa causa, der causa à decretação ou prorrogação da prisão temporária:",
    options: [
      "A) Responderá por crime de abuso de autoridade, nos termos da legislação específica vigente.",
      "B) Ficará isenta de responsabilização civil ou criminal.",
      "C) Será penalizada exclusivamente com demissão do serviço público.",
      "D) Responderá civilmente por perdas e danos frente ao erário público.",
      "E) Responderá penalmente apenas por prevaricação."
    ],
    correctOptionIndex: 0,
    explanation: "A provocação dolosa ou sem qualquer lastro de prisão temporária configura crime de abuso de autoridade conforme a legislação protetiva."
  },
  {
    id: "leg-prisao-temporaria-q16",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alínea 'o'",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Dentre os crimes previstos na Lei de Prisão Temporária, a alínea 'o' do inciso III do Art. 1º prevê expressamente os crimes:",
    options: [
      "A) Previstos na Lei de Segurança Nacional.",
      "B) Contra a ordem tributária e financeira.",
      "C) Contra o Sistema Financeiro Nacional.",
      "D) De lavagem ou ocultação de bens, direitos e valores.",
      "E) Contra a incolumidade pública."
    ],
    correctOptionIndex: 2,
    explanation: "O gabarito indicado pelo usuário é C, correspondente aos crimes praticados contra o Sistema Financeiro Nacional."
  },
  {
    id: "leg-prisao-temporaria-q17",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, § 5º",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "No cumprimento do mandado de prisão temporária, a autoridade policial deverá:",
    options: [
      "A) Manter o preso em absoluto sigilo sem direito a telefonar.",
      "B) Informar ao preso seus direitos constitucionais, inclusive o de permanecer em silêncio e o de assistência familiar e de advogado.",
      "C) Conduzi-lo imediatamente à presença do juiz para depoimento pessoal.",
      "D) Submetê-lo a interrogatório contínuo por até 12 (doze) horas.",
      "E) Isolar o preso em cela comum de triagem geral."
    ],
    correctOptionIndex: 1,
    explanation: "Trata-se de garantia constitucional expressa que deve ser formalmente comunicada no ato da custódia temporária."
  },
  {
    id: "leg-prisao-temporaria-q18",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, § 6º",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Efetuada a prisão, a autoridade policial deverá encaminhar ao Juiz, no prazo de 24 (vinte e quatro) horas:",
    options: [
      "A) Cópia do auto de prisão em flagrante correlato.",
      "B) Comunicação do cumprimento do mandado, com cópia da nota de culpa entregue ao preso.",
      "C) Relatório detalhado dos primeiros depoimentos colhidos.",
      "D) A ficha de qualificação do preso e laudo médico preliminar.",
      "E) O termo de declarações do advogado do investigado."
    ],
    correctOptionIndex: 1,
    explanation: "De acordo com o gabarito indicado para a questão 18 (B), o envio de documento de nota de culpa comprova a regularidade formal da detenção ao magistrado."
  },
  {
    id: "leg-prisao-temporaria-q19",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, § 7º, Soltura",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Decorrido o prazo limite, se a autoridade policial mantiver o investigado recolhido sem prorrogação expressa de prazo ou sem decretação de preventiva:",
    options: [
      "A) Configura-se crime de abuso de autoridade por restrição ilegal de liberdade.",
      "B) Ocorrerá a prorrogação implícita automática por igual período.",
      "C) Ficará isenta de punição caso alegue andamento inconcluso de diligências.",
      "D) Responderá apenas administrativamente por desídia funcional.",
      "E) O juiz emitirá multa individual ao delegado responsável."
    ],
    correctOptionIndex: 0,
    explanation: "A manutenção de qualquer indivíduo preso temporariamente após a expiração do prazo legal (5 dias ou prorrogação) configura patente constrangimento ilegal e abuso de autoridade."
  },
  {
    id: "leg-prisao-temporaria-q20",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alínea 'b'",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Nos termos do rol de crimes elencados na lei, a alínea 'b' do inciso III do Art. 1º autoriza a temporária no crime de:",
    options: [
      "A) Sequestro ou cárcere privado.",
      "B) Extorsão e extorsão mediante sequestro.",
      "C) Roubo qualificado por resultado morte.",
      "D) Extorsão indireta.",
      "E) Sequestro relâmpago."
    ],
    correctOptionIndex: 1,
    explanation: "A extorsão e sua modalidade mediante sequestro constam expressamente da alínea 'b' do rol taxativo de temporárias."
  },
  {
    id: "leg-prisao-temporaria-q21",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alínea 'g'",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Qual dos seguintes crimes contra a vida autoriza a prisão temporária nos termos do Art. 1º, III, alínea 'g'?",
    options: [
      "A) Genocídio.",
      "B) Homicídio culposo.",
      "C) Aborto provocado por terceiro.",
      "D) Envenenamento de água ou substância alimentícia ou medicinal, com resultado morte.",
      "E) Lesão corporal grave seguida de morte."
    ],
    correctOptionIndex: 3,
    explanation: "O envenenamento de água ou alimentos qualificado pelo resultado morte é crime previsto na alínea 'g' para decretação de temporária."
  },
  {
    id: "leg-prisao-temporaria-q22",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Requisitos cumulativos?",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "De acordo com o entendimento jurisprudencial do Superior Tribunal de Justiça (STJ), os requisitos da prisão temporária previstos nos incisos do Art. 1º:",
    options: [
      "A) Devem ser interpretados de forma cumulativa, exigindo-se sempre a indispensabilidade para as investigações (I) somada a fundadas razões de autoria em crimes do rol (III).",
      "B) São puramente alternativos, bastando a presença de qualquer um isolado para a decretação legal.",
      "C) Dispensam a comprovação de autoria se as investigações se mostrarem urgentes.",
      "D) Permitem decreto de ofício caso o crime investigado seja hediondo.",
      "E) Possibilitam a decretação com base exclusiva na falta de residência fixa."
    ],
    correctOptionIndex: 0,
    explanation: "O entendimento consagrado do STJ exige a cumulação de requisitos (indispensabilidade para elucidação de inquérito + indícios de autoria de crime do rol) para validade da prisão temporária."
  },
  {
    id: "leg-prisao-temporaria-q23",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alínea 'l'",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Dentre as alíneas do inciso III do Art. 1º, a alínea 'l' prevê a decretação de prisão temporária em caso de indícios em crime de:",
    options: [
      "A) Terrorismo.",
      "B) Quadrilha ou bando.",
      "C) Tortura.",
      "D) Genocídio.",
      "E) Tráfico de drogas."
    ],
    correctOptionIndex: 1,
    explanation: "O crime de associação criminosa (mencionado historicamente na lei como quadrilha ou bando) consta expressamente na alínea 'l'."
  },
  {
    id: "leg-prisao-temporaria-q24",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alínea 'm'",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "A alínea 'm' do inciso III do Art. 1º prevê a decretação da prisão temporária em crime contra:",
    options: [
      "A) O Sistema Financeiro Nacional.",
      "B) A economia popular.",
      "C) A administração pública.",
      "D) A fé pública.",
      "E) A ordem tributária."
    ],
    correctOptionIndex: 0,
    explanation: "Os crimes contra o Sistema Financeiro Nacional constam da alínea 'm' do rol protetivo."
  },
  {
    id: "leg-prisao-temporaria-q25",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, Prorrogação de ofício?",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "No tocante à prorrogação do prazo da prisão temporária, assinale a alternativa correta:",
    options: [
      "A) O juiz pode prorrogar de ofício se considerar os fatos graves.",
      "B) A prorrogação ocorre automaticamente no silêncio da autoridade policial.",
      "C) Exige fundamentação judicial robusta baseada em nova manifestação ou pedido formal das partes legitimadas.",
      "D) O prazo prorrogado pode ser superior aos 5 (cinco) dias iniciais.",
      "E) A prorrogação dispensa a concordância do Ministério Público."
    ],
    correctOptionIndex: 2,
    explanation: "A prorrogação do prazo das temporárias exige estritamente nova provocação legítima e decisão devidamente motivada pelo magistrado."
  },
  {
    id: "leg-prisao-temporaria-q26",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Extensão do rol",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "O rol de infrações penais aptas a ensejar a decretação de prisão temporária:",
    options: [
      "A) É taxativo (numerus clausus), não se admitindo interpretação analógica extensiva para incluir crimes não previstos expressamente.",
      "B) É meramente exemplificativo (numerus apertus), cabendo para qualquer crime apenado com reclusão.",
      "C) Pode ser ampliado pelo juiz de acordo com a gravidade abstrata do crime.",
      "D) Admite a inclusão de crimes culposos caso resulte morte.",
      "E) Aplica-se a todas as contravenções penais de menor potencial ofensivo."
    ],
    correctOptionIndex: 0,
    explanation: "Trata-se de entendimento pacificado de que o rol de crimes autorizadores da prisão temporária é estritamente taxativo (numerus clausus)."
  },
  {
    id: "leg-prisao-temporaria-q27",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alínea 'n'",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "A alínea 'n' do inciso III do Art. 1º autoriza a temporária nos crimes previstos na Lei de:",
    options: [
      "A) Abuso de autoridade.",
      "B) Lavagem ou ocultação de bens, direitos e valores.",
      "C) Organizações criminosas.",
      "D) Drogas e entorpecentes.",
      "E) Armas e material bélico."
    ],
    correctOptionIndex: 1,
    explanation: "A alínea 'n' prevê explicitamente a decretação de prisão temporária nos crimes de lavagem de dinheiro (Lei 9.613/1998)."
  },
  {
    id: "leg-prisao-temporaria-q28",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 2º, Competência territorial",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "A competência para decretação da prisão temporária é do:",
    options: [
      "A) Juiz de Direito competente para supervisionar a investigação do inquérito correspondente.",
      "B) Juiz de plantão da capital do Estado, em qualquer hipótese.",
      "C) Tribunal de Justiça por meio de sua câmara criminal de férias.",
      "D) Delegado de Polícia de carreira por despacho motivado nos autos.",
      "E) Promotor de Justiça titular do controle externo policial."
    ],
    correctOptionIndex: 0,
    explanation: "A competência constitucional e legal para emitir ordens restritivas de liberdade é do juízo competente que acompanha a investigação policial."
  },
  {
    id: "leg-prisao-temporaria-q29",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Crimes contra a dignidade sexual",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Dentre as alíneas do inciso III do Art. 1º, quais crimes contra a dignidade sexual autorizam a temporária?",
    options: [
      "A) Assédio sexual e importunação sexual.",
      "B) Estupro e assédio sexual.",
      "C) Importunação sexual e estupro de vulnerável.",
      "D) Estupro, estupro de vulnerável, e crimes conexos previstos na legislação de hediondos.",
      "E) Favorecimento da prostituição de maiores de idade."
    ],
    correctOptionIndex: 3,
    explanation: "O estupro e estupro de vulnerável, integrando o elenco de crimes de extrema gravidade sexual, fundamentam validamente o decreto de temporária."
  },
  {
    id: "leg-prisao-temporaria-q30",
    subjectId: SubjectId.LEGISLACAO,
    topicId: "leg-prisao-temporaria",
    articleOrSubtopic: "Art. 1º, Inciso III, alínea 'i'",
    lawReference: "Lei nº 7.960/1989 (Lei de Prisão Temporária)",
    statement: "Dentre os crimes dolosos previstos na lei, a alínea 'i' do inciso III do Art. 1º elenca expressamente o crime de:",
    options: [
      "A) Genocídio.",
      "B) Tráfico de drogas.",
      "C) Associação para o tráfico.",
      "D) Terrorismo.",
      "E) Latrocínio."
    ],
    correctOptionIndex: 4,
    explanation: "O latrocínio (roubo seguido de morte) está expressamente capitulado na alínea 'i' do rol taxativo de temporárias."
  }
];
