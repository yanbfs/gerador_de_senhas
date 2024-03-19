Documentação do Gerador de Senhas

Introdução
    O Gerador de Senhas é uma aplicação web que permite aos usuários criar senhas seguras de forma fácil e 
    personalizada. Esta documentação fornece uma visão geral do funcionamento da aplicação, incluindo suas 
    características, interface do usuário e funcionalidades principais.

Funcionalidades Principais
    • Geração de Senha Segura: O usuário pode gerar uma senha segura com base em suas preferências de comprimento 
    e tipos de caracteres (maiúsculas, minúsculas, números e símbolos).

    • Personalização da Senha: É possível personalizar a senha definindo o comprimento desejado e selecionando 
    quais tipos de caracteres devem ser incluídos na senha.

    • Visualização da Força da Senha: A aplicação exibe um indicador visual da força da senha gerada, indicando 
    o quão forte ela é em termos de segurança.

    • Cópia de Senha: O usuário pode copiar a senha gerada para a área de transferência com um simples clique.

    • Feedback de Copia de Senha: Após copiar a senha, um pop-up de confirmação é exibido para informar ao usuário 
    que a senha foi copiada com sucesso.

Interface do Usuário
    A interface do usuário da aplicação é composta por várias seções:

    1. Cabeçalho (Header): Apresenta o título "Gerador de Senha" e uma breve descrição sobre o objetivo da aplicação.

    2. Seção de Geração de Senha: Inclui um campo de entrada de texto onde a senha gerada será exibida, bem como botões 
    para copiar a senha e atualizá-la.

    3. Indicador de Segurança: Exibe visualmente a força da senha gerada.

    4. Seção de Personalização de Senha: Permite ao usuário definir o comprimento da senha e selecionar quais tipos de 
    caracteres devem ser incluídos.

    5. Rodapé (Footer): Apresenta links para as redes sociais e informações sobre o desenvolvedor da aplicação.

Utilização
    1. Geração de Senha: Para gerar uma senha, o usuário pode ajustar o comprimento desejado usando o controle deslizante 
    na seção de personalização e selecionar quais tipos de caracteres devem estar presentes na senha.

    2. Cópia de Senha: Após gerar uma senha, o usuário pode clicar no botão "Copiar Senha" para copiar a senha gerada para 
    a área de transferência.

    3. Atualização de Senha: Se o usuário desejar gerar uma nova senha, pode clicar no botão de atualização (ícone de rotação) 
    na seção de geração de senha.

    4. Feedback de Copia de Senha: Após copiar a senha, um pop-up de confirmação será exibido temporariamente para indicar que 
    a operação foi concluída com sucesso.

Tecnologias Utilizadas
    • HTML5: Linguagem de marcação para estruturar a página da web.

    • CSS3: Linguagem de estilo para estilizar os elementos da página.

    • JavaScript: Linguagem de programação para adicionar interatividade à página.

    • FontAwesome: Biblioteca de ícones utilizada para exibir ícones na página.

    • Google Fonts: Serviço para importar fontes personalizadas para a página.


*********************************************************************************************************************************

Documentação do Script em JavaScript do Gerador de Senhas
    Esta documentação descreve o código JavaScript responsável por gerar senhas seguras e interagir com a interface de usuário de um 
    "Gerador de Senhas". O código é parte de uma aplicação web que permite aos usuários gerar senhas personalizadas com base em 
    critérios específicos de segurança.

Estrutura do Código
    O código está organizado em funções e event listeners para lidar com diferentes aspectos da geração de senhas e interações do 
    usuário. Abaixo está a estrutura geral do código:

    1. Variáveis Globais:
        • passwordLength: Armazena o comprimento padrão da senha.
        • Variáveis que armazenam referências para elementos HTML relevantes da interface do usuário, como campos de entrada, 
        caixas de seleção e indicadores de segurança.

    2. Função generatePassword():
        Descrição:
            • Esta função é responsável por gerar uma senha com base nas preferências do usuário, como comprimento e tipos de 
            caracteres selecionados.

        Parâmetros:
            • Nenhum.

        Efeitos Colaterais:
            • Atualiza o valor do campo de entrada HTML com a senha gerada.
            • Chama as funções auxiliares 'calculatorQuality()' e 'calculatorFontSize()' para calcular a qualidade da senha e ajustar 
            o tamanho da fonte do campo de entrada, respectivamente.

        Retorno:
            • Nenhum.

    3. Função calculatorQuality():
        Descrição:
            • Esta função calcula a qualidade da senha com base em critérios como comprimento e tipos de caracteres selecionados 
            pelo usuário.

        Parâmetros:
            • Nenhum.

        Efeitos Colaterais:
            • Atualiza visualmente o indicador de segurança para refletir a qualidade da senha.
            • Adiciona ou remove classes CSS para indicar se a senha é considerada fraca, média, forte ou completa.

        Retorno:
            • Nenhum.

    4. Função calculatorFontSize():
        Descrição:
            • Esta função ajusta dinamicamente o tamanho da fonte do campo de entrada de senha com base no comprimento da senha 
            gerada.

        Parâmetros:
            • Nenhum.

        Efeitos Colaterais:
            • Altera a classe CSS aplicada ao campo de entrada de senha para ajustar o tamanho da fonte.

        Retorno:
            • Nenhum.

    5. Função copy():
        Descrição:
            • Esta função copia o valor do campo de entrada de senha para a área de transferência do sistema.

        Parâmetros:
            • Nenhum.

        Efeitos Colaterais:
            • Copia o valor do campo de entrada de senha para a área de transferência.

        Retorno:
            • Nenhum

    6. Função Notification:
        Descrição:
            • Esta função exibe um pop-up indicando que a senha foi copiada com sucesso.

        Parâmetros:
            •  Nenhum.

        Efeitos Colaterais:
            • Exibe um pop-up de notificação por um curto período de tempo.

        Retorno:
            • Nenhum.

    7. Chamada Inicial:
        • A função generatePassword() é chamada inicialmente para gerar e exibir uma senha assim que a página é carregada.

Documentação dos Event Listeners
    Esta seção fornece uma documentação detalhada sobre os event listeners utilizados no código do "Gerador de Senhas". Cada event 
    listener é descrito com informações sobre o evento ao qual está associado, sua função de callback e quais elementos da interface 
    do usuário estão sendo monitorados.

    Event Listener: 'refreshPasswordEl'
        • Evento Associado: clique (click).
        • Elemento Monitorado: Botão "Atualizar Senha".
        • Função de Callback: generatePassword().
        • Descrição: Quando o botão "Atualizar Senha" é clicado, esta função é chamada para gerar uma nova senha com base nas 
        configurações atuais do usuário.
    
    Event Listener: 'passwordLengthEl'
        • Evento Associado: input.
        • Elemento Monitorado: Controle deslizante de comprimento de senha.
        • Função de Callback: Anônima.
        • Descrição: Quando o usuário interage com o controle deslizante de comprimento de senha, esta função anônima é chamada para 
        atualizar o comprimento da senha e gerar uma nova senha com base no novo comprimento selecionado.

    Event Listener: 'upperCaseCheckEl', 'numberCaseCheckEl', 'symbolCaseCheckEl'
        • Evento Associado: clique (click).
        • Elemento(s) Monitorado(s): Caixas de seleção para incluir maiúsculas, números e símbolos na senha.
        •  Função de Callback: 'generatePassword()'.
        • Descrição: Quando o usuário seleciona ou desmarca uma opção de incluir maiúsculas, números ou símbolos na senha, esta 
        função é chamada para regerar a senha com base nas novas configurações selecionadas.
    
    Event Listener: 'copyButtonIconEl', 'copyButtonEl'
        • Evento Associado: clique (click).
        • Elemento(s) Monitorado(s): Ícone ou botão "Copiar Senha".
        • Função de Callback: 'copy()'.
        • Descrição: Quando o usuário clica no ícone ou botão "Copiar Senha", esta função é chamada para copiar o valor do campo de 
        entrada de senha para a área de transferência do sistema.
    
    Event Listener: 'container', 'button'
        • Evento Associado: Nenhum (a função é chamada diretamente).
        • Elemento(s) Monitorado(s): Contêiner de pop-up e botão de notificação.
        • Função de Callback: Notification().
        • Descrição: Esta função é chamada diretamente para exibir um pop-up de notificação indicando que a senha foi copiada com 
        sucesso. O evento monitorado aqui é o clique no botão de notificação

    O código é integrado a uma aplicação web que oferece aos usuários uma interface intuitiva para gerar senhas seguras de 
    maneira personalizada. Os usuários podem interagir com controles na página para ajustar o comprimento da senha e selecionar 
    quais tipos de caracteres devem ser incluídos. Após gerar uma senha, os usuários podem copiá-la para a área de transferência 
    do sistema com um clique.