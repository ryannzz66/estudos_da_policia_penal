/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Subject, SubjectId } from "../types";

export const SYLLABUS_DATA: Subject[] = [
  {
    id: SubjectId.PORTUGUESE,
    title: "Língua Portuguesa",
    shortTitle: "Português",
    description: "Análise textual, gramática normativa, morfossintaxe, pontuação, ortografia oficial, colocação pronominal, regência e concordância.",
    iconName: "FileText",
    questionsCount: 20,
    color: "blue",
    topics: [
      {
        id: "lp-interpretacao",
        title: "1. Leitura, interpretação e relação entre as ideias de textos de gêneros diversos",
        importance: "Alta",
        macete: "Fiorin & Platão: atente para implícitos (o que o texto sugere sem dizer) e subentendidos (deduções do leitor). Orlandi, Guimarães & Koch: diferencie ideias principais (núcleo) de secundárias (suporte). Recursos de argumentação buscam persuadir.",
        summary: "Fato e opinião, intencionalidade discursiva, análise de implícitos e subentendidos de acordo com Fiorin e Savioli; ideias principais/secundárias e recursos de argumentação de acordo com Orlandi, Guimarães e Koch."
      },
      {
        id: "lp-comunicacao-variacao",
        title: "2. Linguagem e comunicação: situação comunicativa, variações linguísticas",
        importance: "Baixa",
        macete: "Variação diatópica (geográfica), diastrática (grupo social), diafásica (estilo/registro) e diacrônica (histórica). Adeque o registro policial (formal/norma culta) à situação institucional.",
        summary: "Contexto de fala, adequação discursiva, níveis de formalidade e as diferentes variações da língua portuguesa."
      },
      {
        id: "lp-generos-tipos",
        title: "3. Gêneros e tipos textuais e intertextualidade",
        importance: "Média",
        macete: "Marcuschi: Gêneros são formas sociais de comunicação (ex: boletim de ocorrência, ofício, e-mail). Tipos são estruturas linguísticas: narração, descrição, dissertação e injunção (instruções/ordens).",
        summary: "Características e estrutura dos gêneros e tipos textuais, e conceitos de intertextualidade de acordo com Luiz Antônio Marcuschi."
      },
      {
        id: "lp-coesao-coerencia",
        title: "4. Coesão e coerência textuais de acordo com Ingedore Villaça Koch",
        importance: "Alta",
        macete: "Coesão referencial retoma elementos (anafórica: ele, este, o mesmo) ou os antecipa (catafórica: isto, o seguinte). Coerência é a unidade lógica global do texto que impede contradições.",
        summary: "Mecanismos de coesão (referencial e sequencial) e fatores de coerência semântica e pragmática."
      },
      {
        id: "lp-lexico-significacao",
        title: "5. Léxico: significação e substituição de palavras no texto",
        importance: "Média",
        macete: "Parônimos são parecidos (infligir=aplicar pena / infringir=transgredir). Homônimos têm som ou grafia igual (sessão=reunião, seção=repartição, cessão=doar). Sinônimos substituem sem perda de sentido.",
        summary: "Sinônimos, antônimos, parônimos, homônimos e a substituição de vocábulos mantendo a coerência textual."
      },
      {
        id: "lp-ortografia-acentuacao",
        title: "6. Ortografia: emprego de letras, do hífen e acentuação gráfica",
        importance: "Média",
        macete: "Acordo Ortográfico (Decreto 6.583/2012): perderam acento ditongos abertos (ei, oi) de paroxítonas ('ideia', 'jiboia') e hiatos 'oo'/'ee' ('voo', 'leem'). Hífen: vogais iguais se repelem (anti-inflamatório); diferentes se atraem (autoajuda).",
        summary: "Normas ortográficas vigentes, emprego do hífen e regras de acentuação baseadas no Vocabulário Ortográfico (VOLP) e Aulete."
      },
      {
        id: "lp-figuras-linguagem",
        title: "7. Figuras de linguagem e suas relações de sentido",
        importance: "Média",
        macete: "Perspectivas de Bechara, Cegalla e Cunha: Eufemismo (suavização: 'faltou com a verdade'), Metonímia (troca de autor por obra, continente pelo conteúdo), Metáfora (comparação implícita) e Hipérbole (exagero).",
        summary: "Figuras de palavras, de pensamento, de sintaxe e de som, e seus efeitos expressivos na construção do discurso."
      },
      {
        id: "lp-fonologia",
        title: "8. Fonologia: relações entre fonemas e grafias",
        importance: "Baixa",
        macete: "Dígrafo: duas letras representam um único fonema (ex: 'chave' possui 5 letras e 4 fonemas). Encontro consonantal: cada consoante mantém seu som (ex: 'pacto' - p, c, t são pronunciados).",
        summary: "Relações entre letras e fonemas, vogais, semivogais e consoantes de acordo com Bechara, Cegalla, Cunha e Cintra."
      },
      {
        id: "lp-morfologia-classes",
        title: "9. Morfologia: classes de palavras, estrutura e vozes verbais",
        importance: "Alta",
        macete: "Voz ativa: o sujeito faz a ação. Voz passiva analítica: sujeito sofre a ação ('o suspeito foi conduzido [verbo ser + particípio] pelos policiais'). Derivação prefixal, sufixal, parassintética.",
        summary: "As 10 classes gramaticais (flexões e usos), estrutura/formação de palavras e transposição entre as vozes verbais."
      },
      {
        id: "lp-sintaxe",
        title: "10. Sintaxe: funções sintáticas, regência, crase e concordância",
        importance: "Alta",
        macete: "Crase obrigatória antes de locução feminina ('às 20h', 'à deriva') ou regência de prep 'a' + art 'a' ('dirigiu-se à guarita'). Verbos impessoais (haver, fazer) ficam no singular. Sintaxe de colocação: próclise, mesóclise e ênclise.",
        summary: "Termos da oração, períodos simples e compostos, colocação pronominal, regência verbal/nominal (crase) e concordância de acordo com Luft, Bechara, Cegalla e Cunha."
      },
      {
        id: "lp-coordenacao-subordinacao",
        title: "11. Coordenação e subordinação: conjunções e pronomes relativos",
        importance: "Alta",
        macete: "Concessivas (embora, conquanto) indicam oposição que não impede o fato. Adversativas (mas, porém, todavia) ligam coordenadas com forte oposição. Pronomes relativos (que, quem, cujo, onde) iniciam orações adjetivas.",
        summary: "Emprego e valor semântico de conjunções coordenadas, subordinadas, locuções conjuntivas e pronomes relativos."
      },
      {
        id: "lp-pontuacao",
        title: "12. Pontuação: regras e implicações de sentido",
        importance: "Alta",
        macete: "Nunca separe por vírgula o sujeito do verbo, ou o verbo de seus complementos! Use vírgula para adjuntos adverbiais longos deslocados, apostos explicativos e vocativos.",
        summary: "Regras de emprego dos sinais de pontuação (vírgula, ponto-e-vírgula, dois-pontos, travessão) nas visões de Bechara, Cegalla e Cunha."
      }
    ]
  },
  {
    id: SubjectId.INFORMATICA,
    title: "Informática Aplicada",
    shortTitle: "Informática",
    description: "Windows 10, Word, Excel, Navegadores, Outlook 2016 e conceitos de Inteligência Artificial generativa.",
    iconName: "Monitor",
    questionsCount: 10,
    color: "emerald",
    topics: [
      {
        id: "inf-windows-desktop",
        title: "1. Windows 10: Área de Trabalho, Menu Iniciar e Configurações",
        importance: "Alta",
        macete: "Área de Trabalho (botão direito: Exibir, Classificar, Resolução). Menu Iniciar abriga buscas de arquivos, Painel de Controle, computadores, dispositivos e impressoras, botão Desligar e os Programas Padrão.",
        summary: "Uso de menus suspensos, painéis, listas de busca, ícones e janelas usando teclado, mouse ou atalhos para customização do SO."
      },
      {
        id: "inf-windows-barra",
        title: "2. Windows 10: Barra de Tarefas, Menu Iniciar e Gerenciador de Tarefas",
        importance: "Alta",
        macete: "Atalho Ctrl+Shift+Esc abre o Gerenciador de Tarefas diretamente para fechar programas travados, analisar processos e verificar uso de CPU/Memória. Barra de tarefas permite fixar programas.",
        summary: "Organização de janelas, propriedades da barra de tarefas, atalhos de navegação e manipulação de arquivos/pastas/bibliotecas."
      },
      {
        id: "inf-windows-painel",
        title: "3. Windows 10: Painel de Controle e Lixeira",
        importance: "Média",
        macete: "Painel de Controle configura contas, programas e hardware. Shift+Delete exclui arquivos permanentemente sem enviá-los para a Lixeira. Lixeira pode restaurar ou esvaziar arquivos.",
        summary: "Configurações do ambiente Windows, restauração de arquivos, esvaziamento de lixeira e identificação de componentes do sistema."
      },
      {
        id: "inf-windows-arquivos",
        title: "4. Windows 10: Bibliotecas, Arquivos, Pastas, Ícones e Atalhos",
        importance: "Alta",
        macete: "Nomes de arquivos não podem conter caracteres reservados: \\ / : * ? \" < > | (Mnemônico: 'basílica das aspas e barras'). Atalhos facilitam acesso. Criptografar e ocultar protegem dados.",
        summary: "Mover, copiar (Ctrl+C), recortar (Ctrl+X), colar (Ctrl+V), renomear, criar atalhos, criptografia básica de pastas e regras de nomes válidos."
      },
      {
        id: "inf-word",
        title: "5. Microsoft Word (Office 365): Edição e Formatação de Documentos",
        importance: "Alta",
        macete: "Guia Início (fontes, parágrafos), Guia Inserir (tabelas, quebras), Guia Layout (margens, retrato/paisagem), Guia Revisão (ortografia, controle de alterações). Exibição controla zoom e modos de leitura.",
        summary: "Ambiente, ferramentas, faixas de opções (guias e grupos), formatação de texto, configuração de páginas e quebras de seção."
      },
      {
        id: "inf-excel",
        title: "6. Microsoft Excel (Office 365): Planilhas, Fórmulas e Funções",
        importance: "Alta",
        macete: "Dois-pontos (:) significa ATÉ; ponto-e-vírgula (;) significa E. Cifrão ($) trava linhas/colunas (ex: $A$1 é absoluto). SE(teste_lógico; valor_se_verdadeiro; valor_se_falso). CONT.SE conta células com critérios.",
        summary: "Uso de células, pastas e planilhas. Criação de fórmulas matemáticas, estatísticas e lógicas (SOMA, MÉDIA, SE, CONT.SE, PROCV)."
      },
      {
        id: "inf-chrome",
        title: "7. Google Chrome: Ambiente, Atalhos e Funcionalidades",
        importance: "Média",
        macete: "Atalhos essenciais: Ctrl+T (nova guia), Ctrl+W (fechar guia), Ctrl+Shift+T (reabrir última guia fechada), Ctrl+H (Histórico), Ctrl+J (Downloads) e Ctrl+Shift+N (nova janela anônima).",
        summary: "Características da janela principal, gerenciamento de abas, histórico, downloads e navegação em modo anônimo."
      },
      {
        id: "inf-firefox",
        title: "8. Mozilla Firefox: Ambiente, Atalhos e Funcionalidades",
        importance: "Média",
        macete: "Navegação Privativa abre uma janela que não salva histórico, cookies ou dados de formulário. Atalho: Ctrl+Shift+P para navegação privativa no Firefox.",
        summary: "Componentes da janela principal, histórico de pesquisa, limpeza de cache, favoritos e janela de navegação privativa."
      },
      {
        id: "inf-edge",
        title: "9. Microsoft Edge: Navegação e Teclas de Atalho",
        importance: "Baixa",
        macete: "Edge é o navegador nativo do Windows 10. Possui recursos de Leitura Avançada, modo de compatibilidade com IE, Favoritos e Barra de Comando. Atalho Ctrl+Shift+P abre janela InPrivate.",
        summary: "Ambiente de navegação do Edge, barras de ferramentas, compatibilidade e atalhos rápidos de navegação."
      },
      {
        id: "inf-outlook",
        title: "10. Microsoft Office 365 Outlook 2016: Correio Eletrônico",
        importance: "Média",
        macete: "Para (destinatários principais), Cc (Cópia Carbono - visível), Cco (Cópia Carbono Oculta - invisível para os demais). Anexos podem portar vírus; exportar e importar e-mails serve para backup.",
        summary: "Configuração de contas de e-mail, redação de mensagens, regras de envio/recebimento, uso de anexos e Cco."
      },
      {
        id: "inf-ia-generativa",
        title: "11. Ferramentas de Inteligência Artificial Generativas e LLMs",
        importance: "Média",
        macete: "LLMs (como Gemini, GPT) são probabilísticos; prevêem palavras baseados em padrões. Eles podem alucinar (gerar mentiras com firmeza). Prompts ricos (fornecendo contexto e papel) geram melhores resultados.",
        summary: "Conceitos de redes generativas, Large Language Models, limitações de alucinação, engenharia de prompts e uso profissional ético."
      }
    ]
  },
  {
    id: SubjectId.RACIOCINIO_LOGICO,
    title: "Raciocínio Lógico",
    shortTitle: "Raciocínio Lógico",
    description: "Estruturas lógicas, sequências, diagramas, proposições, tabelas-verdade, equivalências, negações e lógica de argumentação.",
    iconName: "Cpu",
    questionsCount: 10,
    color: "amber",
    topics: [
      {
        id: "rl-estruturas-relacoes",
        title: "1. Estrutura lógica de relações arbitrárias",
        importance: "Alta",
        macete: "Monte matrizes/tabelas de cruzamento de dados (ex: associar Carlos, Roberto e André às suas alas prisionais). Elimine opções baseando-se nas dicas excludentes fornecidas no enunciado.",
        summary: "Associação lógica de pessoas, lugares, objetos ou eventos fictícios; dedução de novas informações e análise de condições fornecidas."
      },
      {
        id: "rl-padroes-sequencias",
        title: "2. Identificação de padrões, sequências lógicas e argumentação",
        importance: "Alta",
        macete: "Procure regularidades de crescimento (ex: multiplicar por 2 e somar 1). Para sequências de letras ou figuras, atente para ordem alfabética de salto, rotações de 90° e alternância de cores.",
        summary: "Sequências lógicas de números, letras, palavras e figuras; detecção de padrões regulares de formação de séries."
      },
      {
        id: "rl-diagramas",
        title: "3. Diagramas lógicos",
        importance: "Média",
        macete: "Use círculos de conjuntos (Venn-Euler) para deduzir relações categóricas. Em 'Todo A é B', o círculo A está inteiramente dentro do círculo B. Se 'Algum A é B', há intersecção entre ambos.",
        summary: "Representação de proposições e relações de pertinência ou inclusão através de diagramas lógicos e conjuntos."
      },
      {
        id: "rl-proposicoes",
        title: "4. Proposições e conectivos lógicos",
        importance: "Alta",
        macete: "Uma proposição é uma sentença declarativa com verbo e sentido completo que pode ser V ou F. Perguntas (?), ordens (!), exclamações e sentenças abertas (ex: 'X é policial') NÃO são proposições.",
        summary: "Conceito de proposição, valores lógicos das proposições, proposições simples e proposições compostas."
      },
      {
        id: "rl-operacoes-proposicoes",
        title: "5. Operações lógicas sobre proposições",
        importance: "Alta",
        macete: "Mnemônicos dos Conectivos: Conjunção (∧): 'E' (exige ambas V). Disjunção (∨): 'OU' (exige pelo menos uma V). Condicional (→): 'Se... então' (só F se for V→F). Bicondicional (↔): 'Se e somente se' (V se valores forem iguais).",
        summary: "Negação, conjunção, disjunção, disjunção exclusiva, condicional e bicondicional, e seus respectivos símbolos e significados."
      },
      {
        id: "rl-tabelas-verdade",
        title: "6. Construção de tabelas-verdade",
        importance: "Alta",
        macete: "O número de linhas de uma tabela-verdade é dado pela fórmula 2^n, onde 'n' é o número de proposições simples componentes (ex: p e q geram uma tabela de 2^2 = 4 linhas; p, q, r geram 8 linhas).",
        summary: "Método de construção e preenchimento de tabelas-verdade passo a passo para avaliar proposições complexas."
      },
      {
        id: "rl-tautologia-contradicao",
        title: "7. Tautologias, contradições e contingências",
        importance: "Média",
        macete: "Tautologia: a coluna final é TODA Verdadeira. Contradição: a coluna final é TODA Falsa. Contingência: a coluna final possui tanto Verdadeiros quanto Falsos (pelo menos um de cada).",
        summary: "Classificação lógica de proposições compostas de acordo com seus valores de verdade finais na tabela."
      },
      {
        id: "rl-equivalencias-negacoes",
        title: "8. Implicação lógica e equivalência lógica",
        importance: "Alta",
        macete: "Equivalências do Condicional (p→q): 1) Contrapositiva: ~q → ~p (inverte e nega tudo); 2) Regra do Neymar: ~p ∨ q (nega a primeira OU mantém a segunda).",
        summary: "Conceitos de implicação, teoremas de equivalência e equivalências notáveis da condicional."
      },
      {
        id: "rl-demorgan",
        title: "9. Leis de De Morgan",
        importance: "Alta",
        macete: "Para negar o 'E', nega os dois e troca por 'OU' (~(p ∧ q) ≡ ~p ∨ ~q). Para negar o 'OU', nega os dois e troca por 'E' (~(p ∨ q) ≡ ~p ∧ ~q).",
        summary: "Regras de negação de conjunções e disjunções utilizando as leis clássicas do lógico Augustus De Morgan."
      },
      {
        id: "rl-argumentacao-deducao",
        title: "10. Argumentação e dedução lógica",
        importance: "Alta",
        macete: "Um argumento é composto de premissas e conclusão. É válido se as premissas verdadeiras impuserem obrigatoriamente uma conclusão verdadeira. Se for possível ter premissas V e conclusão F, é inválido (sofisma).",
        summary: "Estruturas de dedução lógica, análise de premissas, inferências e validade formal dos argumentos."
      },
      {
        id: "rl-sentencas-abertas",
        title: "11. Sentenças abertas e operações lógicas",
        importance: "Baixa",
        macete: "Sentenças abertas contêm variáveis indeterminadas (ex: 'x + 4 = 10' ou 'Aquele preso fugiu'). Tornam-se proposições lógicas apenas quando atribuímos valor à variável ou usamos quantificadores.",
        summary: "Conceito de sentenças abertas, conjunto universo, conjunto verdade e conectivos lógicos aplicados."
      },
      {
        id: "rl-quantificadores",
        title: "12. Quantificadores (Universal e Existencial) e suas negações",
        importance: "Alta",
        macete: "Negação de 'Todo' é 'PEA + NÃO' (Pelo menos um NÃO, Existe um que NÃO, Algum NÃO). Ex: A negação de 'Todo detento estuda' é 'Algum detento não estuda'. NUNCA use 'Nenhum' para negar 'Todo'!",
        summary: "Quantificador universal (Todo), quantificador existencial (Algum, Existe, Pelo menos um) e negação de proposições categóricas."
      },
      {
        id: "rl-argumentos-dedutivos",
        title: "13. Argumentos lógicos dedutivos e argumentos categóricos",
        importance: "Alta",
        macete: "Argumentos categóricos usam 'Todo', 'Nenhum' e 'Algum'. Teste-os desenhando diagramas. Cuidado com a falácia do consequente (ex: 'Todo cão policial fareja. Thor fareja. Logo Thor é cão policial' - Inválido!).",
        summary: "Silogismos categóricos, regras de validade dos termos e figuras silogísticas estruturais."
      }
    ]
  },
  {
    id: SubjectId.LEGISLACAO,
    title: "Legislação (Após Retificação do Edital)",
    shortTitle: "Legislação (Pós-Retificação)",
    description: "Direito Constitucional, Penal, Legislação Penal Especial, Legislação Federal e Legislação Estadual aplicável.",
    iconName: "Shield",
    questionsCount: 30,
    color: "red",
    topics: [
      {
        id: "leg-maria-da-penha",
        title: "Lei Federal nº 11.340/2006 – Lei Maria da Penha",
        importance: "Alta",
        macete: "Formas de violência: FÍ.PSI.SE.PA.MO (Física, Psicológica, Sexual, Patrimonial, Moral). Lesão corporal de violência doméstica é ação penal incondicionada. Proíbe aplicação isolada de pena pecuniária ou cestas básicas.",
        summary: "Mecanismos de coibição da violência doméstica e familiar contra a mulher, juizados especiais, medidas protetivas de urgência e assistência estatal."
      },
      {
        id: "leg-estatuto-igualdade-racial",
        title: "Lei Federal nº 12.288/2010 – Estatuto da Igualdade Racial",
        importance: "Média",
        macete: "População negra: conjunto de pessoas autodeclaradas pretas ou pardas. Ações afirmativas: medidas e programas temporários adotados pelo Estado para mitigar desigualdades históricas acumuladas.",
        summary: "Direitos fundamentais da população negra, políticas públicas de ação afirmativa e o Sistema Nacional de Promoção da Igualdade Racial (Sinapir)."
      },
      {
        id: "leg-igualdade-racial-est",
        title: "Lei Estadual nº 13.694/2011 – Estatuto Estadual da Igualdade Racial do RS",
        importance: "Média",
        macete: "Semelhante ao federal, mas foca nas ações afirmativas e proteção de comunidades quilombolas e religiões de matriz africana no âmbito do Estado do Rio Grande do Sul.",
        summary: "Garantia de igualdade de oportunidades para a população negra e indígena no RS, combate à discriminação institucional e fomento à diversidade."
      },
      {
        id: "leg-constituicao-fed",
        title: "Constituição da República Federativa do Brasil de 1988",
        importance: "Alta",
        macete: "Mnemônicos fundamentais: SO.DI.CI.VA.PLU (Fundamentos), CON.ER.GO.PRO (Objetivos - verbos no infinitivo). Segurança Pública (Art. 144): vinculação da Polícia Penal ao órgão administrador penal estadual (SUSEPE/RS).",
        summary: "Estudo detalhado dos artigos exigidos: Princípios (1-4), Direitos e Garantias (5-17), Organização do Estado (21-28), Adm. Pública (37-41), Judiciário (92-100, 125-126), Funções Essenciais (127-134) e Segurança Pública (144)."
      },
      {
        id: "leg-prisao-temporaria",
        title: "Lei Federal nº 7.960/1989 – Lei de Prisão Temporária",
        importance: "Média",
        macete: "Cabível estritamente na fase de Inquérito Policial (NUNCA no processo). Prazo: 5 dias prorrogáveis por mais 5 em extrema necessidade. Crimes Hediondos: prazo passa a ser de 30 dias prorrogável por mais 30.",
        summary: "Requisitos de decretação, rol taxativo de crimes autorizadores, rito do mandado e regras de custódia isolada dos presos temporários."
      },
      {
        id: "leg-execucao-penal",
        title: "Lei Federal nº 7.210/1984 – Lei de Execução Penal (LEP)",
        importance: "Alta",
        macete: "Súmula 533 do STJ: Obrigatório PAD com defesa técnica para homologar falta grave. Trabalho do condenado é obrigatório (não rege CLT); do provisório é facultativo. RDD (Regime Disciplinar Diferenciado) é sanção extrema.",
        summary: "Direitos, deveres e disciplinas do apenado. Assistências. Classificação, órgãos da execução, estabelecimentos penais e regimes prisionais."
      },
      {
        id: "leg-deficiencia-fed-7853",
        title: "Lei Federal nº 7.853/1989 – Apoio às Pessoas com Deficiência",
        importance: "Baixa",
        macete: "Estabelece a CORDE e criminaliza condutas de discriminação, como recusar matrícula escolar, obstar emprego ou atendimento médico a pessoas com deficiência em razão de sua condição.",
        summary: "Diretrizes de apoio à integração social das pessoas com deficiência, competências do Ministério Público e infrações penais."
      },
      {
        id: "leg-deficiencia",
        title: "Lei Federal nº 13.146/2015 – Estatuto da Pessoa com Deficiência",
        importance: "Média",
        macete: "Acessibilidade: possibilidade de alcance e uso autônomo com segurança. Barreiras: qualquer obstáculo, atitude ou comportamento que impeça/limite o gozo de direitos fundamentais.",
        summary: "Conceitos fundamentais, direitos à saúde, educação, moradia e trabalho, acessibilidade universal e penalidades para discriminação."
      },
      {
        id: "leg-eca",
        title: "Lei Federal nº 8.069/1990 – Estatuto da Criança e do Adolescente (ECA)",
        importance: "Média",
        macete: "Criança (até 12 anos incompletos): comete ato infracional sujeito apenas a medidas protetivas (Art. 101). Adolescente (12 a 18 anos): comete ato infracional sujeito a medidas socioeducativas (Art. 112, incluindo internação de até 3 anos).",
        summary: "Definição de menoridade, atos infracionais, procedimentos de custódia, medidas socioeducativas, conselho tutelar e crimes correlatos."
      },
      {
        id: "leg-crimes-hediondos",
        title: "Lei Federal nº 8.072/1990 – Lei de Crimes Hediondos",
        importance: "Alta",
        macete: "Crimes hediondos e equiparados (Tortura, Tráfico, Terrorismo = 3T) são inafiançáveis e insuscetíveis de graça, anistia ou indulto. Prisão temporária neles dura 30 + 30 dias.",
        summary: "Rol taxativo de crimes hediondos, consequências penais e processuais especiais e regras de progressão de regime prisional."
      },
      {
        id: "leg-improbidade",
        title: "Lei Federal nº 8.429/1992 – Lei de Improbidade Administrativa (LIA)",
        importance: "Alta",
        macete: "Reforma de 2021 (Lei 14.230): Extinguiu a improbidade culposa, EXIGE-SE DOLO em todos os casos. Três condutas: Enriquecimento ilícito (Art. 9º), Prejuízo ao erário (Art. 10) e Atentado aos princípios (Art. 11).",
        summary: "Sujeito ativo e passivo, dolo específico, sanções (perda do cargo, suspensão de direitos políticos, multas) e regras de prescrição (8 anos)."
      },
      {
        id: "leg-licitacoes",
        title: "Lei Federal nº 14.133/2021 – Nova Lei de Licitações e Contratos",
        importance: "Média",
        macete: "Modalidades: Pregão, Concorrência, Concurso, Leilão, Diálogo Competitivo (nova!). Contratação direta: Dispensa (valores pequenos, emergência) e Inexigibilidade (inviabilidade de competição/fornecedor exclusivo).",
        summary: "Fases da licitação, regras gerais de contratos, contratação direta, sanções administrativas e novos crimes em licitações."
      },
      {
        id: "leg-lei-tortura",
        title: "Lei Federal nº 9.455/1997 – Lei de Crimes de Tortura",
        importance: "Alta",
        macete: "Tortura exige sofrimento físico ou mental. Condenação implica perda do cargo público automática e interdição pelo DOBRO do prazo da pena. Omissão perante a tortura é apenada com detenção (única sem reclusão).",
        summary: "Espécies de tortura (prova, crime, discriminatória, castigo, em custódia), causas de aumento, qualificadoras e efeitos da condenação."
      },
      {
        id: "leg-transtornos-mentais",
        title: "Lei Federal nº 10.216/2001 – Proteção das Pessoas com Transtornos Mentais",
        importance: "Baixa",
        macete: "Internação psiquiátrica é recurso extremo. Três tipos: Voluntária (consentida), Involuntária (sem consentimento, a pedido de terceiro e por laudo médico) e Compulsória (decretada exclusivamente pelo Juiz).",
        summary: "Garantia de direitos das pessoas acometidas de sofrimento mental, ritos de internação e desinstitucionalização progressiva."
      },
      {
        id: "leg-estatuto-idoso",
        title: "Lei Federal nº 10.741/2003 – Estatuto da Pessoa Idosa",
        importance: "Média",
        macete: "Idoso é quem tem 60 anos ou mais. Prioridade especialíssima aos maiores de 80 anos. Abandonar idoso, expor ao perigo ou reter seu cartão de benefício financeiro configura crime especial do Estatuto.",
        summary: "Direitos fundamentais à dignidade e alimentos, obrigações da família e sociedade, e crimes em espécie cometidos contra idosos."
      },
      {
        id: "leg-armas",
        title: "Lei Federal nº 10.826/2003 – Estatuto do Desarmamento",
        importance: "Alta",
        macete: "Posse ilegal (dentro de casa/trabalho); Porte ilegal (nas ruas). Disparo de arma de fogo é crime de perigo abstrato. Policial Penal tem direito a porte de arma funcional (de acordo com regras institucionais).",
        summary: "Sistema Nacional de Armas (Sinarm), crimes de posse, porte, disparo, comércio e tráfico de armas, e porte funcional de agentes públicos."
      },
      {
        id: "leg-lei-drogas",
        title: "Lei Federal nº 11.343/2006 – Lei de Drogas (Sisnad)",
        importance: "Alta",
        macete: "Artigo 28 (Porte para consumo próprio) foi despenalizado: não prevê pena de prisão, apenas advertência, serviços comunitários e cursos. Artigo 33 (Tráfico ilícito de drogas) prevê reclusão de 5 a 15 anos.",
        summary: "Diferenciação jurídica entre porte para consumo pessoal e tráfico ilícito de entorpecentes, e o Tráfico Privilegiado."
      },
      {
        id: "leg-direitos-humanos",
        title: "Declaração Universal dos Direitos Humanos (DUDH) de 1948",
        importance: "Alta",
        macete: "DUDH de 1948 foi proclamada pela ONU. Afirma que todos os seres humanos nascem livres e iguais. Veda expressamente a escravidão e a tortura. Garante asilo político contra perseguição.",
        summary: "Histórico dos direitos humanos, direitos civis, políticos, econômicos e sociais inscritos na Declaração Universal de 1948."
      },
      {
        id: "leg-codigo-penal",
        title: "Decreto-Lei nº 2.848/1940 – Código Penal Brasileiro",
        importance: "Alta",
        macete: "Crimes funcionais (Art. 312 em diante): Peculato (apropriar-se/desviar bem público), Concussão (EXIGIR vantagem), Corrupção Passiva (SOLICITAR/RECEBER vantagem), Prevaricação (RETARDAR ato de ofício por interesse pessoal).",
        summary: "Parte Geral (lei penal, teoria do crime, concurso de pessoas, penas, extinção da punibilidade) e Parte Especial (crimes contra a pessoa, patrimônio, dignidade sexual e administração pública)."
      },
      {
        id: "leg-pacto-sao-jose",
        title: "Decreto nº 678/1992 – Convenção Americana sobre Direitos Humanos",
        importance: "Alta",
        macete: "Pacto de São José da Costa Rica: veda sumariamente a prisão civil por dívida, com a única exceção do inadimplemento inescusável de pensão alimentícia. Proíbe reintroduzir a pena de morte.",
        summary: "Garantias judiciais fundamentais, direito à vida e integridade, devido processo legal e proibição de tratamento cruel, desumano ou degradante."
      },
      {
        id: "leg-regimento-disciplinar",
        title: "Decreto nº 46.534/2009 – Regimento Disciplinar Penitenciário do RS (RDP)",
        importance: "Alta",
        macete: "Normatiza infrações leves e médias no RS (as graves seguem o Art. 50 da LEP federal). Isolamento preventivo do detento pelo diretor pode durar até 10 dias. Veda punições coletivas ou corporais.",
        summary: "Deveres e direitos dos presos no RS, classificação das transgressões, sanções disciplinares, conselho disciplinar e rito de apuração."
      },
      {
        id: "leg-regras-minimas-preso",
        title: "Resolução nº 14/1994 do CNPCP – Regras Mínimas para o Tratamento do Preso",
        importance: "Média",
        macete: "Adotadas do padrão da ONU. Proíbem castigos cruéis, celas escuras, algemas como punição ou punições coletivas. Garante assistência de saúde, banho de sol diário de no mínimo 2 horas e higiene adequada.",
        summary: "Diretrizes de humanização do sistema penitenciário brasileiro baseadas nas regras da ONU (Regras de Nelson Mandela)."
      },
      {
        id: "leg-constituicao-est-rs",
        title: "Constituição do Estado do Rio Grande do Sul de 1989",
        importance: "Alta",
        macete: "Arts. 137 a 139: Política Penitenciária do RS visa prioritariamente à reeducação e reinserção social dos apenados. Garante assistência escolar, jurídica, saúde e incentivo ao trabalho produtivo remunerado.",
        summary: "Arts. 1-7, 19-27, 29-37, 44-45, 49, 52, 78, 82, 85-90, 91-94, 98-99, 107-111, 114-115, 120-122, 124-127, 129, 133-136, e a Política Penitenciária (137-139)."
      },
      {
        id: "leg-decreto-concursos-rs",
        title: "Decreto Estadual nº 48.598/2011 – Temática de Gênero, Raça e Etnia no RS",
        importance: "Média",
        macete: "Torna obrigatória a inclusão de conteúdos de combate à discriminação e promoção de igualdade de gênero, raça e etnia nos certames públicos diretos e indiretos do Rio Grande do Sul.",
        summary: "Políticas afirmativas e de combate ao preconceito institucional no ingresso de servidores nos quadros públicos gaúchos."
      }
    ]
  },
  {
    id: SubjectId.CONHECIMENTOS_GERAIS,
    title: "Conhecimentos Gerais do Sistema Prisional",
    shortTitle: "Sistema Prisional (PPRS)",
    description: "Estrutura carcerária, objetivos do sistema penal, Lei de Execução Penal federal, Estatuto da Polícia Penal do RS e resoluções administrativas da SUSEPE.",
    iconName: "Lock",
    questionsCount: 10,
    color: "slate",
    topics: [
      {
        id: "cg-estrutura",
        title: "1. Estrutura do Sistema Prisional",
        importance: "Alta",
        macete: "A arquitetura prisional reflete a execução penal: guaritas de vigilância, muralhas, celas coletivas/individuais, pátios de sol, parlatórios de atendimento e oficinas de trabalho.",
        summary: "Estrutura física, organização física carcerária, e divisões funcionais de uma penitenciária."
      },
      {
        id: "cg-conceito",
        title: "2. Conceito e objetivos do sistema prisional",
        importance: "Alta",
        macete: "A execução penal tem por duplo objetivo: efetivar as disposições de sentença judicial criminal (punição/prevenção) e proporcionar condições para a harmônica integração social do condenado (ressocialização).",
        summary: "Fundamentos sociológicos e jurídicos da pena de privação de liberdade no Brasil."
      },
      {
        id: "cg-estabelecimentos",
        title: "3. Tipos de estabelecimentos prisionais",
        importance: "Alta",
        macete: "Mnemônico dos Prédios: Penitenciária (regime FECHADO). Colônia Agrícola/Industrial (regime SEMIABERTO). Casa de Albergado (regime ABERTO e limitação de fim de semana). Cadeia Pública (presos PROVISÓRIOS exclusivos). Hospital de Custódia (medida de segurança).",
        summary: "Definição, destinação física e regime de cumprimento correspondente a cada estabelecimento prisional previsto na LEP."
      },
      {
        id: "cg-classificacao",
        title: "4. Classificação de detentos por gravidade e regime",
        importance: "Alta",
        macete: "A classificação baseia-se na gravidade do delito, primariedade e antecedentes. Presos provisórios ficam separados dos condenados definitivos. Mulheres em estabelecimentos próprios de segurança especial.",
        summary: "Critérios de separação, classificação por regimes (fechado, semiaberto, aberto), exames criminológicos e de identificação do perfil."
      },
      {
        id: "cg-organizacao",
        title: "5. Organização administrativa do sistema prisional e Polícia Penal",
        importance: "Alta",
        macete: "A Polícia Penal RS é responsável pela custódia, vigilância interna/externa, escoltas armadas interestaduais e intramuros, manutenção da ordem carcerária e segurança geral dos estabelecimentos penais gaúchos.",
        summary: "Estrutura hierárquica e administrativa das casas prisionais, atribuições de direção, segurança carcerária e o papel operacional do policial penal."
      },
      {
        id: "cg-legislacao-cf",
        title: "6. Legislação Aplicável - Constituição Federal: Direitos do Detento",
        importance: "Alta",
        macete: "Art. 5º da CF garante aos detentos o respeito à integridade física e moral (inciso XLIX). Veda penas cruéis, de morte (salvo guerra declarada), de trabalhos forçados ou perpétuas.",
        summary: "Princípio da dignidade humana no cumprimento de pena e o núcleo intangível de direitos que o preso mantém mesmo custodiado."
      },
      {
        id: "cg-legislacao-lep",
        title: "7. Lei nº 7.210/1984 (LEP): Estudo, Trabalho, Classificação e Direitos",
        importance: "Alta",
        macete: "Mnemônico das Assistências: MA.SA.JU.ED.SO.RE (Material, Saúde, Jurídica, Educacional, Social, Religiosa). Remição de pena: 1 dia de pena a menos por 3 dias de trabalho ou 12 horas de estudo regular.",
        summary: "Tratamento penitenciário, classificação obrigatória de presos, deveres, direitos, assistência integral estatal e remição de pena."
      },
      {
        id: "cg-normas-rs-1",
        title: "8.1 Lei Complementar Estadual nº 16.449/2025 (Estatuto da PPRS)",
        importance: "Alta",
        macete: "Ingresso por concurso público exigindo Nível Superior completo e CNH 'B' mínima. Veda greve. Estabelece regime de plantão e dedicação exclusiva para os policiais penais do RS.",
        summary: "A lei orgânica e o estatuto da carreira de Policial Penal no Rio Grande do Sul: direitos, prerrogativas, proibições e regime de subsídio."
      },
      {
        id: "cg-normas-rs-2",
        title: "8.2 Decreto Estadual nº 57.389/2023 (Remoção dos Servidores)",
        importance: "Média",
        macete: "Remoção de servidores da segurança do RS. Pode ocorrer de ofício (interesse público) ou a pedido (permuta, ou por motivo de saúde pessoal ou dependente avaliado obrigatoriamente por junta médica oficial gaúcha).",
        summary: "Regulamento de remoções de policiais penais, civis e peritos do RS: critérios objetivos, rito de edital e vedações de transferência."
      },
      {
        id: "cg-normas-rs-3",
        title: "8.3 Instrução Normativa nº 014/2023 GAB/SUP (Visitas e Materiais)",
        importance: "Alta",
        macete: "Regula o cadastramento e controle de entrada de visitantes nos presídios da SUSEPE. Define ritos rígidos de revista, documentos aceitos e controle de sacolas de mantimentos ('jumbo').",
        summary: "Normas de ingresso de visitas sociais, íntimas, advogados e materiais permitidos em casas prisionais gaúchas."
      },
      {
        id: "cg-normas-rs-4",
        title: "8.4 Instrução Normativa nº 019/2023 GAB/SUP (Diárias de Viagens)",
        importance: "Baixa",
        macete: "Define o cálculo e prestação de contas de diárias para policiais penais do RS que se deslocam a trabalho (ex: escoltas de recambiamento de presos para outros estados ou comarcas distantes).",
        summary: "Procedimentos administrativos para concessão, reembolso e relatórios de diárias em deslocamentos operacionais da Polícia Penal RS."
      },
      {
        id: "cg-normas-rs-5",
        title: "8.5 Instrução Normativa nº 001/2024 GAB/SUP (Material Bélico)",
        importance: "Alta",
        macete: "Regulamento de armas e munições da Polícia Penal RS. Dispõe sobre acautelamento de armas de fogo institucionais, guarda e controle de paiol, e normas rígidas de segurança de armamento.",
        summary: "Regras de uso, custódia, inventário de armamentos, munições, coletes e equipamentos táticos de uso funcional da PPRS."
      },
      {
        id: "cg-normas-rs-6",
        title: "8.6 Instrução Normativa nº 001/2025 GAB/SUP (Televisitas)",
        importance: "Média",
        macete: "Regula as visitas virtuais/televisitas de familiares aos apenados por videochamada segura. Garante a integridade de contatos e reduz fluxos físicos mantendo o vínculo familiar do detento.",
        summary: "Procedimento operacional de agendamento, segurança virtual, monitoramento e duração de televisitas operadas nos presídios gaúchos."
      },
      {
        id: "cg-normas-rs-7",
        title: "8.7 Instrução Normativa nº 002/2026 GAB/SUP (Bens Patrimoniais)",
        importance: "Baixa",
        macete: "Regula o inventário, movimentação, cautela e baixa de patrimônio nas superintendências e presídios (ex: móveis, viaturas, algemas, rádios). Veda descarte informal de bens inservíveis.",
        summary: "Controle de guarda de carga patrimonial, doações, baixas e prestação de contas de bens estatais da Polícia Penal RS."
      }
    ]
  }
];
