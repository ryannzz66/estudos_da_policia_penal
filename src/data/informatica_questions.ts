/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, SubjectId } from "../types";

export const INFORMATICA_QUESTIONS: Question[] = [
  // ==========================================
  // WINDOWS 10 (OPERAÇÕES E FERRAMENTAS)
  // ==========================================
  {
    id: "inf-win10-q1",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-windows-desktop",
    articleOrSubtopic: "Área de Trabalho, Menu Iniciar e Barra de Tarefas",
    statement: "Considerando as funcionalidades da Área de Trabalho (Desktop), do Menu Iniciar e da Barra de Tarefas no sistema operacional Windows 10, assinale a alternativa tecnicamente INCORRETA que descreve as ferramentas e comportamentos desses elementos:",
    options: [
      "A) Ao clicar com o botão direito em um espaço vazio da Área de Trabalho, o Menu de Contexto exibe a opção Exibir, que permite controlar o visual e o tamanho dos ícones (Grandes, Médios ou Pequenos), além de marcar ou desmarcar a organização automática, o alinhamento à grade e a visibilidade dos ícones. A opção Classificar por utiliza o mnemônico NTTD (Nome, Tamanho, Tipo de item e Data de modificação) para definir a ordem dos arquivos. Já a função Atualizar, que recarrega a exibição de alterações, pode ser acionada pelo atalho de teclado F5.",
      "B) No Windows 10, a alteração da resolução, brilho e escala de texto é feita através da opção Configurações de Exibição no menu de contexto da Área de Trabalho (ou pelo caminho Configurações > Sistema > Vídeo), sendo que o termo \"Resolução da Tela\" é nomenclatura herdada do Windows 7. Os Gadgets (relógios e calendários flutuantes) não existem nativamente no Windows 10 por falhas de segurança, tendo sido substituídos conceitualmente pelos Blocos Dinâmicos (Live Tiles) no Menu Iniciar ou pelo painel de Widgets.",
      "C) O Menu Iniciar é considerado o \"Ponto de Partida\" do sistema, unindo a lista alfabética de aplicativos à esquerda (com rolagem vertical e índice por letras) e os blocos dinâmicos à direita, que podem ser redimensionados ou desativados. Através de Configurações > Personalização > Iniciar, o usuário pode escolher quais pastas aparecem no canto inferior esquerdo (como Documentos, Imagens e Vídeos). O botão Liga/Desliga oferece as opções de Suspender (baixo consumo em memória), Desligar (total) e Reiniciar, acessíveis também pelo atalho Win + X, seguido de U.",
      "D) A Barra de Tarefas, localizada por padrão na parte inferior, mas móvel para as quatro bordas da tela, exibe aplicativos abertos (sublinhados) e fixados. É possível fixar aplicativos clicando com o botão direito sobre eles, mas não é possível fixar arquivos ou pastas diretamente na barra. Na extremidade direita, a Área de Notificação contém o relógio e ícones do sistema, mas não exibe consumo de CPU ou nomes de computadores em rede. Atalhos como Win + D (minimizar tudo) e Win + V (histórico da área de transferência) são essenciais para a navegação.",
      "E) Nenhuma das alternativas anteriores está correta, e invalidam as operações gerais do Windows 10, sendo proibido o uso de teclas modificadoras como Ctrl (seleção múltipla), Shift (intervalo), e o uso do mouse para copiar (arrastar com Ctrl), mover (arrastar com Shift) ou criar atalho (arrastar com Alt), além do acesso universal à pesquisa via tecla Win + S ou simplesmente digitando com o Menu Iniciar aberto."
    ],
    correctOptionIndex: 4,
    explanation: "A alternativa E está incorreta (e por isso é o gabarito).\n\nOnde está o veneno: A alternativa inverteu completamente o texto original para anular as outras opções (que são corretas) e mentiu ao dizer que é \"proibido\" o uso de teclas modificadoras (Ctrl, Shift, Alt) para interagir com arquivos."
  },
  {
    id: "inf-win10-q2",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-windows-arquivos",
    articleOrSubtopic: "Explorador de Arquivos, Gerenciador de Tarefas, Painel de Controle e Lixeira",
    statement: "Sobre o Explorador de Arquivos, o Gerenciador de Tarefas, o Painel de Controle e as regras de nomenclatura e exclusão de arquivos no Windows 10, assinale a alternativa INCORRETA de acordo com as configurações do sistema:",
    options: [
      "A) O Explorador de Arquivos (Win + E) possui elementos como a barra de endereços, caixa de pesquisa (Ctrl + F ou Ctrl + E), e painéis de Navegação, Visualização e Detalhes. O recurso Acesso Rápido mostra itens recentes, enquanto as Bibliotecas centralizam pastas de locais diferentes. Os layouts de visualização incluem Ícones (Pequenos a Extra Grandes), Lista, Detalhes, Blocos e Conteúdo; ressaltando que \"Ordenar por nome\" é um critério de ordenação e não um layout. O atalho F2 é utilizado para renomear itens selecionados.",
      "B) O Gerenciador de Tarefas pode ser aberto por Ctrl + Shift + Esc, pelo menu Win + X ou pelo botão direito na barra de tarefas. Suas abas principais são: Processos (consumo de CPU, memória, disco e rede por app), Desempenho (gráficos em tempo real, excluindo segurança), Histórico de Aplicativos, Inicializar (programas que iniciam com o Windows), Usuários, Detalhes e Serviços. Ele obrigatoriamente possui abas como \"Programas Instalados\" ou \"Controle\", altera o idioma do sistema e substituiu definitivamente o Painel de Controle.",
      "C) O Painel de Controle organiza as configurações em categorias como Programas (para desinstalar ou definir Programas Padrão), Hardware e Sons (Dispositivos e Impressoras), e Relógio e Região (alterar formatos de data/hora). O Windows 10 prioriza o aplicativo Configurações (Win + I), mas o Painel de Controle ainda é acessível via comando control no Win + R. Já a ferramenta de Ajuda e Suporte clássica foi substituída pelo aplicativo Obter Ajuda (Get Help), frequentemente acionado pela tecla F1.",
      "D) A Lixeira armazena arquivos excluídos e permite a restauração para o local original. Em suas Propriedades, define-se o tamanho máximo ou a exclusão direta (sem passar pela lixeira). É importante notar que não se pode abrir documentos diretamente de dentro da Lixeira, e seu conteúdo não é apagado automaticamente ao desligar o computador. Arquivos na área de trabalho podem ser ocultados via menu de contexto (Exibir > Mostrar ícones da área de trabalho).",
      "E) Na nomeação de arquivos e pastas, a extensão (caracteres após o último ponto) define o tipo do arquivo. São caracteres PROIBIDOS (inválidos): \\ / : * ? \" < > |. Exemplos como concurso*fundatec.docx ou gravatai:gravatai.txt são inválidos. São caracteres VÁLIDOS: letras, números, espaços, hífen, sublinhado, ponto (exceto no início/fim), @, #, $, entre outros. Não há limite fixo de 9 ou 15 caracteres para nomes, e dois arquivos não podem ter nome e extensão idênticos na mesma pasta."
    ],
    correctOptionIndex: 1,
    explanation: "A alternativa B está incorreta (e por isso é o gabarito).\n\nOnde está o veneno: O Gerenciador de Tarefas não possui abas de \"Programas Instalados\" nem \"Controle\", não altera o idioma e não substituiu o Painel de Controle (quem está substituindo o Painel de Controle gradualmente é o aplicativo Configurações do Windows). A alternativa inverteu essas características técnicas."
  },

  // ==========================================
  // MICROSOFT OFFICE 365 - WORD
  // ==========================================
  {
    id: "inf-word-q1",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Ambiente e Componentes do Programa",
    statement: "Sobre o ambiente e os componentes da janela do Microsoft Word 365, assinale a alternativa que indica corretamente onde o usuário pode visualizar a contagem de palavras e alterar o idioma de correção ortográfica:",
    options: [
      "A) Barra de Ferramentas de Acesso Rápido.",
      "B) Barra de Título.",
      "C) Faixa de Opções (Ribbon).",
      "D) Barra de Status."
    ],
    correctOptionIndex: 3,
    explanation: "Alternativa D.\n\nJustificativa: A Barra de Status fica no rodapé da janela e é lá que o Word exibe o Número de Páginas, a Contagem de Palavras, os Erros de Revisão e o Idioma."
  },
  {
    id: "inf-word-q2",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Modos de Exibição",
    statement: "O Word 365 possui diferentes modos de exibição. Qual é o modo padrão que mostra o documento exatamente como será impresso (com margens, cabeçalhos, etc.)?",
    options: [
      "A) Layout da Web.",
      "B) Layout de Impressão.",
      "C) Modo de Leitura.",
      "D) Estrutura de Tópicos."
    ],
    correctOptionIndex: 1,
    explanation: "Alternativa B.\n\nJustificativa: O Layout de Impressão é o modo padrão, mostrando a folha com margens e elementos como sairão na impressora. (Modo de leitura oculta as faixas, Layout da web tira as quebras de página)."
  },
  {
    id: "inf-word-q3",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Manipulação Básica de Documentos e Atalhos",
    statement: "Sobre a manipulação básica de documentos e atalhos de teclado no Word (versão Português-Brasil), associe corretamente a ação ao seu atalho:",
    options: [
      "A) Ctrl + S salva o documento, e F12 abre um novo documento em branco.",
      "B) Ctrl + B salva as alterações no arquivo atual, e Ctrl + W fecha apenas o arquivo (mantendo o Word aberto).",
      "C) Ctrl + O seleciona todo o texto, e Ctrl + P salva como PDF.",
      "D) Ctrl + T cria um novo documento, e Alt + F4 imprime."
    ],
    correctOptionIndex: 1,
    explanation: "Alternativa B.\n\nJustificativa: No Brasil (PT-BR), salvar é Ctrl + B. Fechar apenas o documento mantendo o programa aberto é Ctrl + W. (Ctrl+O é Novo; Ctrl+T é Selecionar Tudo; F12 é Salvar Como)."
  },
  {
    id: "inf-word-q4",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Pincel de Formatação",
    statement: "O \"Pincel de Formatação\" é uma ferramenta muito cobrada em provas, utilizada para copiar a formatação de um texto e aplicar em outro. Em qual Guia e Grupo ele está localizado?",
    options: [
      "A) Guia Início, Grupo Fonte.",
      "B) Guia Inserir, Grupo Texto.",
      "C) Guia Início, Grupo Área de Transferência.",
      "D) Guia Layout, Grupo Organizar."
    ],
    correctOptionIndex: 2,
    explanation: "Alternativa C.\n\nJustificativa: O Pincel de Formatação fica na guia Início (Página Inicial), no primeiro grupo, chamado Área de Transferência, junto com Recortar, Copiar e Colar."
  },
  {
    id: "inf-word-q5",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Sumário Automático e Estilos",
    statement: "Para que seja possível criar um Sumário automático na guia Referências, o usuário deve formatar os títulos do seu documento de forma padronizada. Qual recurso da Guia Início deve ser utilizado para isso?",
    options: [
      "A) Grupo Parágrafo (Alinhamentos).",
      "B) Grupo Edição (Localizar e Substituir).",
      "C) Grupo Fonte (Negrito e Itálico).",
      "D) Grupo Estilos (Título 1, Título 2, Normal)."
    ],
    correctOptionIndex: 3,
    explanation: "Alternativa D.\n\nJustificativa: Para que o Word reconheça o que é capítulo e subcapítulo para montar o Sumário automático depois, você deve aplicar os Estilos (Título 1, Título 2, etc.) da guia Início."
  },
  {
    id: "inf-word-q6",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Guia Inserir",
    statement: "Se você precisar inserir uma \"Quebra de Página\", adicionar um \"Cabeçalho e Rodapé\" e colocar uma \"Letra Capitular\" no início de um parágrafo, você deve acessar a Guia:",
    options: [
      "A) Inserir.",
      "B) Layout da Página.",
      "C) Referências.",
      "D) Exibição."
    ],
    correctOptionIndex: 0,
    explanation: "Alternativa A.\n\nJustificativa: Tudo o que é um elemento externo que você \"coloca\" no texto (Páginas/Quebras, Tabelas, Imagens, Cabeçalhos, Letra Capitular, WordArt) fica na guia Inserir."
  },
  {
    id: "inf-word-q7",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Guia Layout",
    statement: "O controle da estrutura física do papel, como a configuração de Margens (Normais, Estreitas), Orientação (Retrato ou Paisagem) e Tamanho (A4, Carta), é feito na Guia:",
    options: [
      "A) Referências.",
      "B) Layout da Página (ou Layout).",
      "C) Início.",
      "D) Exibição."
    ],
    correctOptionIndex: 1,
    explanation: "Alternativa B.\n\nJustificativa: A Guia Layout da Página (ou Layout) controla a estrutura física da página: Margens, Orientação, Tamanho, Colunas e Espaçamento de parágrafos."
  },
  {
    id: "inf-word-q8",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Guia Referências",
    statement: "Durante a formatação de um trabalho acadêmico (normas ABNT), o usuário precisa inserir Notas de Rodapé e gerenciar a Bibliografia. Essas ferramentas encontram-se na Guia:",
    options: [
      "A) Correspondências.",
      "B) Revisão.",
      "C) Referências.",
      "D) Inserir."
    ],
    correctOptionIndex: 2,
    explanation: "Alternativa C.\n\nJustificativa: A guia Referências é a responsável pela estruturação formal: Sumário, Notas de Rodapé, Citações, Bibliografia e Legendas."
  },
  {
    id: "inf-word-q9",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Mala Direta",
    statement: "O recurso \"Mala Direta\" é fundamental para criar documentos em massa (como enviar uma mesma carta personalizada para vários clientes de uma lista). Em qual guia esse recurso se encontra?",
    options: [
      "A) Revisão.",
      "B) Layout da Página.",
      "C) Correspondências.",
      "D) Inserir."
    ],
    correctOptionIndex: 2,
    explanation: "Alternativa C.\n\nJustificativa: A guia Correspondências é dedicada à Mala Direta, Envelopes e Etiquetas."
  },
  {
    id: "inf-word-q10",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Guia Revisão",
    statement: "O botão para acionar a verificação de Ortografia e Gramática (F7) e o recurso \"Controle de Alterações\" (que marca em vermelho o que foi apagado ou escrito para aprovação posterior) estão localizados na Guia:",
    options: [
      "A) Revisão.",
      "B) Exibição.",
      "C) Referências.",
      "D) Início."
    ],
    correctOptionIndex: 0,
    explanation: "Alternativa A.\n\nJustificativa: A guia Revisão foca na correção do texto (Ortografia, Gramática, Dicionário) e no trabalho em equipe (Comentários e Controle de Alterações)."
  },
  {
    id: "inf-word-q11",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Exibição de Réguas",
    statement: "Se a Régua (Horizontal e Vertical) do seu Word sumir, em qual Guia você deve ir para marcar a caixa e mostrá-la novamente?",
    options: [
      "A) Layout da Página.",
      "B) Exibição (ou Exibir).",
      "C) Início.",
      "D) Revisão."
    ],
    correctOptionIndex: 1,
    explanation: "Alternativa B.\n\nJustificativa: A guia Exibição controla apenas como você vê o programa na tela. É nela que você encontra o grupo \"Mostrar\" para habilitar a Régua, Linhas de Grade e Painel de Navegação."
  },
  {
    id: "inf-word-q12",
    subjectId: SubjectId.INFORMATICA,
    topicId: "inf-word",
    articleOrSubtopic: "Atalhos e Ajuda",
    statement: "Qual é a tecla de atalho padrão para acessar a tela de Ajuda do Microsoft Word?",
    options: [
      "A) F5.",
      "B) F7.",
      "C) F12.",
      "D) F1."
    ],
    correctOptionIndex: 3,
    explanation: "Alternativa D.\n\nJustificativa: O F1 é o atalho universal do Windows e do Office para acessar a Ajuda. O F7 é para ortografia (Revisão) e o F12 é para \"Salvar Como\"."
  }
];
