/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, SubjectId } from "../types";

export const ESTATUTO_PPRS_QUESTIONS: Question[] = [
  {
    id: "cg-estatuto-pprs-q1",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "cg-normas-rs-1",
    articleOrSubtopic: "Arts. 1º ao 27",
    lawReference: "Lei Complementar nº 16.449/2025 (Estatuto da PPRS)",
    statement: "De acordo com o texto do Estatuto da Polícia Penal, assinale a ÚNICA alternativa CORRETA:",
    options: [
      "A) A Polícia Penal é instituição essencial à segurança pública e à execução penal, vinculada diretamente ao Poder Judiciário. Tem como princípios básicos a proteção da dignidade humana, a hierarquia e a disciplina, e o uso proporcional da força visando exclusivamente à punição disciplinar do preso.",
      "B) A estrutura organizacional abrange Administração Superior, Gestão, Ensino, Órgãos Auxiliares, entre outros. Devido à sua natureza estratégica e à necessidade de integração, a titularidade do Departamento de Inteligência e do Grupo de Ações Especiais pode ser exercida por oficiais da Polícia Militar ou delegados cedidos ao sistema.",
      "C) O Superintendente da Polícia Penal é nomeado pelo Governador do Estado, devendo a escolha recair obrigatoriamente dentre os integrantes ativos da carreira. A ele compete administrar, dirigir, coordenar, orientar e controlar as atividades, sendo taxativo o regramento de que a titularidade de todos os órgãos da estrutura deve ser exercida por servidores ativos efetivos da Polícia Penal.",
      "D) A Corregedoria-Geral possui requisitos rigorosos para os seus integrantes. Para exercer os cargos de Corregedor-Geral, Corregedor Adjunto ou Corregedor, o servidor deverá, obrigatoriamente, ser diplomado no curso superior de Direito e possuir experiência mínima de 10 (dez) anos de atuação no sistema penal.",
      "E) Um dos requisitos disciplinares para que o servidor possa compor a Corregedoria-Geral é não ter sofrido punição disciplinar de qualquer natureza nos últimos 5 (cinco) anos, bem como não responder a sindicância administrativa investigatória no momento da posse."
    ],
    correctOptionIndex: 2,
    explanation: "A alternativa C está correta.\n\nOnde está o veneno nas outras:\n- A) A instituição é vinculada ao órgão administrador do sistema penal (Executivo), e não ao Poder Judiciário.\n- B) A lei é clara (Art. 5º, §1º): todos os órgãos têm a titularidade exercida por servidores ativos efetivos da Polícia Penal, vedando terceiros/oficiais PM.\n- D) O diploma em Direito é só para o Corregedor-Geral e o Adjunto; para Corregedor basta curso superior completo. A experiência é de 5 anos (e não 10).\n- E) O requisito de não ter sofrido punição abrange os últimos 10 anos (e não 5 anos)."
  },
  {
    id: "cg-estatuto-pprs-q2",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "cg-normas-rs-1",
    articleOrSubtopic: "Arts. 28 ao 39",
    lawReference: "Lei Complementar nº 16.449/2025 (Estatuto da PPRS)",
    statement: "Sobre as carreiras, requisitos de ingresso e estágio probatório, assinale a ÚNICA alternativa CORRETA:",
    options: [
      "A) O quadro de servidores da Polícia Penal é composto pelo Policial Penal (vigilância, custódia e segurança), pelo Analista da Polícia Penal (atribuições técnicas em Ciências da Saúde, Humanas, Exatas e Administrativas) e pelo Técnico Administrativo da Polícia Penal (atividades administrativas e de apoio).",
      "B) O ingresso na instituição dar-se-á mediante concurso público, exigindo-se de todos os cargos (Policial, Analista e Técnico Administrativo) a aprovação na prova de conhecimentos, na prova de capacidade física (TAF), na avaliação psicológica e na investigação da vida pregressa.",
      "C) Para ingressar na carreira, o candidato deve ser brasileiro, ter escolaridade mínima exigida, apresentar quitação militar e eleitoral, conduta moral compatível, aptidão física e psiquiátrica. Em relação à condução de veículos, exige-se a apresentação de Carteira Nacional de Habilitação (CNH) na categoria \"D\" ou superior.",
      "D) O curso de formação profissional é etapa classificatória e eliminatória do concurso público, não compondo o estágio probatório. A aprovação exige rendimento mínimo de 60% in each disciplina, e a eventual reprovação nesta fase não acarreta a exoneração, mas o retorno do candidato ao cadastro de reserva.",
      "E) É assegurado o uso de carteira de identidade funcional com fé pública. Contudo, em razão das diretrizes estatutárias, a referida identidade não vale como autorização para porte de arma de fogo fora do horário de serviço, dependendo de autorização paralela da Polícia Federal."
    ],
    correctOptionIndex: 0,
    explanation: "A alternativa A está correta.\n\nOnde está o veneno nas outras:\n- B) O Teste de Aptidão Física (TAF) é exigido apenas para o cargo de Policial Penal (Art. 29), não se aplicando aos Analistas e Técnicos.\n- C) A habilitação exigida é CNH categoria \"B\" (e não \"D\").\n- D) O curso de formação profissional É PARTE INTEGRANTE do estágio probatório, exige-se 70% (e não 60%) em cada disciplina, e a reprovação leva, sim, à exoneração (Art. 31 e 32).\n- E) O §1º do Art. 38 diz taxativamente que a carteira funcional vale, sim, como autorização para porte de arma."
  },
  {
    id: "cg-estatuto-pprs-q3",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "cg-normas-rs-1",
    articleOrSubtopic: "Arts. 37 ao 65",
    lawReference: "Lei Complementar nº 16.449/2025 (Estatuto da PPRS)",
    statement: "Analisando as normas sobre a promoção, remuneração, deveres e carga horária na Polícia Penal, assinale a ÚNICA alternativa CORRETA:",
    options: [
      "A) A jornada normal de trabalho da Polícia Penal é de 200 horas mensais. O regime de expediente é de 8 horas diárias e 40 horas semanais, havendo o regime de plantão para funções ininterruptas. A convocação em caso de emergência ou perturbação da ordem é facultativa ao servidor que já cumpriu sua carga horária.",
      "B) As promoções ordinárias ocorrem na modalidade única de merecimento, de forma a privilegiar o servidor mais produtivo, devendo o critério de antiguidade ser utilizado exclusivamente como critério de desempate caso dois servidores alcancem a mesma pontuação.",
      "C) A remuneração dos servidores da Polícia Penal ocorrerá na forma de subsídio fixado em parcela única. É requisito essencial para a promoção ter concluído o estágio probatório e possuir 2 anos de interstício na classe.",
      "D) Para que a promoção do servidor seja barrada (impedimento legal) por razões disciplinares, ele deve ter sofrido punição disciplinar punível exclusivamente com suspensão nos últimos 24 (vinte e quatro) meses.",
      "E) Constituem impedimentos para a promoção do servidor as condenações criminais, independentemente do trânsito em julgado. Basta a condenação penal proferida por juiz singular (1º grau) para que o servidor seja retirado do quadro de acesso às promoções por merecimento."
    ],
    correctOptionIndex: 2,
    explanation: "A alternativa C está correta.\n\nOnde está o veneno nas outras:\n- A) A jornada normal é de 160 horas mensais (não 200). Além disso, a convocação em caso de calamidade/emergência obriga a atuação do servidor independentemente da jornada, não sendo \"facultativa\".\n- B) As promoções ocorrem pelas modalidades de merecimento e antiguidade, alternadamente, com percentuais de 50% para cada (Art. 40 e 42).\n- D) O impedimento por punição disciplinar abrange os últimos 12 meses (não 24 meses) (Art. 45, III).\n- E) O impedimento por condenação criminal exige o trânsito em julgado (Art. 45, inciso II), ou seja, não basta a condenação em 1º grau."
  }
];
