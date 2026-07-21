/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, SubjectId } from "../types";

export const DECRETO_REMOCOES_QUESTIONS: Question[] = [
  {
    id: "cg-decreto-remocoes-q1",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "cg-normas-rs-2",
    articleOrSubtopic: "Arts. 1º ao 3º",
    lawReference: "Decreto Estadual nº 57.389/2023",
    statement: "De acordo com as regras estabelecidas pelo Decreto para as modalidades de remoção e as hipóteses de remoção a pedido, assinale a ÚNICA alternativa CORRETA:",
    options: [
      "A) O Decreto regulamenta a remoção dos servidores integrantes das carreiras vinculadas à Brigada Militar, à Polícia Civil e à Superintendência dos Serviços Penitenciários. Para fins desta norma, entende-se como localidade, de forma restrita e exclusiva, a área geográfica pertencente aos municípios do interior do Estado, excluindo-se a região metropolitana.",
      "B) A remoção a pedido poderá ser requerida para manutenção da unidade familiar em casos como a nomeação do cônjuge para cargo efetivo das carreiras da mesma instituição, desde que a lotação inicial implique mudança de domicílio. Excepcionalmente, nos casos de risco excepcional à integridade da servidora (Lei Maria da Penha), exige-se a imediata publicação do ato em Diário Oficial Eletrônico para garantir a legalidade e transparência da movimentação.",
      "C) A remoção a pedido por motivo de saúde do servidor ou dependente exige que o cônjuge, o companheiro ou o dependente necessite de assistência pessoal e direta, bem como a comprovação do problema por serviço médico oficial. Ademais, é requisito indispensável que o surgimento da moléstia, ou de sua causa agravante, seja obrigatoriamente anterior ao ingresso do servidor na respectiva instituição.",
      "D) Fica vedada a remoção a pedido durante o período do estágio probatório de forma absoluta e incondicional, visando garantir a estabilidade do efetivo recém-nomeado. Dessa forma, servidores in estágio não podem ser removidos, nem mesmo em decorrência de permuta, tratamento de saúde, manutenção de unidade familiar ou situações que envolvam a Lei Maria da Penha.",
      "E) Fica vedada a remoção a pedido decorrente de Concurso de Remoções, permuta ou casamento/união estável superveniente para o servidor que estiver a dois (2) anos ou menos de adquirir direito à aposentadoria voluntária, ressalvada autorização do dirigente máximo da Instituição, nos casos de excepcional interesse público devidamente justificado."
    ],
    correctOptionIndex: 4,
    explanation: "A alternativa E está correta.\n\nOnde está o veneno nas outras:\n- A) O decreto não se aplica à Brigada Militar (mas ao IGP, PC e SUSEPE) e a \"localidade\" abrange sim a região metropolitana.\n- B) Em caso de risco (Lei Maria da Penha), a publicação é dispensada e feita de forma reservada.\n- C) O surgimento da moléstia deve ser posterior ao ingresso (a alternativa inverteu dizendo \"anterior\").\n- D) Há exceções expressas que permitem a remoção no estágio probatório (saúde, unidade familiar, permuta, etc)."
  },
  {
    id: "cg-decreto-remocoes-q2",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "cg-normas-rs-2",
    articleOrSubtopic: "Art. 4º",
    lawReference: "Decreto Estadual nº 57.389/2023",
    statement: "Com base no regramento da remoção \"ex officio\", por conveniência do serviço, assinale a ÚNICA alternativa CORRETA:",
    options: [
      "A) A remoção \"ex officio\" ocorrerá em casos de criação, instalação ou extinção de órgão, suprimento de efetivo e designação de função de chefia. Havendo extinção ou desinstalação de unidade, o servidor deverá ser removido preferencialmente para órgão localizado em região diametralmente oposta, a fim de oxigenar o quadro funcional do Estado.",
      "B) No caso de designação de função de Direção, Chefia e Assessoramento, poderá a administração promover remoção condicionada, \"ex officio\", com o compromisso de retorno à lotação na região de origem ou de outro órgão previamente acordado, quando dispensado da função.",
      "C) Nos casos de remoção \"ex officio\" para suprimento de efetivo, a autoridade administrativa detém poder discricionário absoluto, sendo-lhe facultada a alteração periódica e imotivada do local de exercício que serviu de fundamento para a remoção, independentemente de nova autorização do dirigente máximo da Instituição.",
      "D) O servidor em primeira investidura poderá ser removido \"ex officio\" por conveniência do serviço a qualquer tempo, não havendo exigência de tempo mínimo de efetivo exercício, uma vez que o interesse público e a necessidade de suprimento de efetivo se sobrepõem à inamovibilidade do servidor recém-nomeado.",
      "E) A remoção \"ex officio\" motivada por risco excepcional e efetivo à integridade do servidor ou de seus familiares, decorrente do exercício do cargo, exige que o servidor devolva os valores recebidos a título de ajuda de custo, uma vez que a administração dispensará a publicação do ato em Diário Oficial."
    ],
    correctOptionIndex: 1,
    explanation: "A alternativa B está correta.\n\nOnde está o veneno nas outras:\n- A) Se a unidade for extinta, a remoção será preferencialmente para a mesma região.\n- C) Para suprimento de efetivo, fica vedada a alteração do local que serviu de fundamento.\n- D) O servidor em primeira investidura só pode ser removido ex officio após três anos (Art. 4º, § 4º).\n- E) Não há previsão de devolução de ajuda de custo em casos de remoção sigilosa/reservada para proteção do servidor."
  },
  {
    id: "cg-decreto-remocoes-q3",
    subjectId: SubjectId.CONHECIMENTOS_GERAIS,
    topicId: "cg-normas-rs-2",
    articleOrSubtopic: "Arts. 6º ao 13",
    lawReference: "Decreto Estadual nº 57.389/2023",
    statement: "Acerca da disciplina aplicável ao Concurso de Remoções e à classificação dos candidatos, assinale a ÚNICA alternativa CORRETA:",
    options: [
      "A) O Concurso de Remoções tem como objetivo suprir a necessidade de efetivo dos órgãos ou unidades. O recrutamento será realizado exclusivamente pelo Governador do Estado e é obrigatório o preenchimento de todas as vagas previstas no edital de remoções, independentemente de classe ou cargo, para evitar claro de lotação.",
      "B) O edital do certame conterá as vagas disponíveis e os critérios de classificação. No entanto, é expressamente vedada a participação no Concurso de Remoções de servidor, anteriormente removido, que tenha menos de 2 (dois) anos de efetivo exercício no órgão de lotação atual até o último dia de inscrição no certame.",
      "C) Na apuração da classificação do Concurso de Remoções, ocorrendo empate de pontuação, o primeiro e mais importante critério de desempate utilizado será a maior idade do servidor, seguido sucessivamente pelo maior tempo de serviço público e maior tempo de efetivo exercício no cargo, prestigiando-se os servidores mais velhos.",
      "D) Os casos omissos serão decididos pelo dirigente máximo da Instituição, sendo que remoções por motivo de excepcional interesse público e para atender situações emergenciais, tais como calamidades, aumento pontual de criminalidade e locais de difícil provimento poderão, devidamente justificadas, serem realizadas independentemente do disposto nas regras ordinárias do Capítulo II do Decreto.",
      "E) Os critérios de classificação do Concurso de Remoções, estabelecidos no edital, deverão ignorar o tempo de serviço prestado em localidades de difícil provimento, visando manter a paridade de armas entre os servidores da capital e os do interior do Estado."
    ],
    correctOptionIndex: 3,
    explanation: "A alternativa D está correta.\n\nOnde está o veneno nas outras:\n- A) O recrutamento é feito pelo dirigente máximo da Instituição (não pelo Governador) e NÃO É OBRIGATÓRIO preencher todas as vagas (Art. 9º).\n- B) A viação para participar de novo concurso é para quem tem menos de 1 (um) ano na lotação atual (Art. 10).\n- C) A \"maior idade\" é o último critério de desempate, e não o primeiro (o 1º é maior tempo de lotação no órgão).\n- E) Os critérios poderão levar em consideração o tempo de serviço em locais de difícil provimento (Art. 7º, § 3º)."
  }
];
