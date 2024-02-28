Blog Post Service
   * Serviço em forma de aplicativo para postagens.
      - Este serviço faz parte de um teste tecnico para uma vaga de desenvolvedor mobile e tem como objetivo Novos posts com imagem, titulo, categoria e descricao. Editar, Deletar e apresentar os posts de forma visual agradavel
   * Stack & Libs
      - React Native
      - Type Script
      - Styled Components
      - Xstate
      - React-hook-form
      - Lottie-react-native
      - React-native-vector-icons
   * Execucao do código
     - Clone o projeto no github
     - Tenha um ambiente react native configurado em seu computador.
     - Entre no projeto via cmd/prompt e exececute o comando "yarn/nmp install" para instalar as libs contidas no package.json
     - Entre na pasta ios e execute o comando 'pod install/arch -x86_64 pod install (para mac M1)'
     - Volte a pasta raiz, start o bundle do projeto com o comando 'yarn start/npm start'
     - Escolha qual device deseja executar (para executar no android o device ja precisa estar inicializado)

    * Detalhes importantes
      - Como este projeto não contempla integracao com o backend, toda vez que o projeto for aberto estará com a configuracao de dados default
      - Dados mocados são dados iniciais vindo do arquivo na raiz do projeto chamado MOCK_DATA_CATEGORY.json e MOCK_DATA_POSTS.json que traz o dados inicias dos POSTS e as categorias fixas de filtro e cadastro.
      
    * Funcionalidades
      - Tela inicial Lista os posts de forma intuitiva, lendo os dados do arquivos json conforme citado a cima.
      - Para ver detalhes do post escolhido como sua categoria, e o texto descritivo completo basta clicar no botao 'Leia mais'
      - Ainda na tela inicial, pode-se optar por filtrar cada post seguindo as categorias previamente cadastradas que vem do arquivo MOCK_DATA_CATEGORY.json que o app irá trazer somente o resultado solicitado por categoria, em caso de não encontrar, irá exibir uma tela amigavel de retorno ao usuario indicando que para o filtro não foram encontrado resultados.
      - Tela "SETTINGS" lista os posts de forma que tenham ações para gestao dos mesmos
      - Header da pagina SETTINGS, contém um botao verde com simbolo "+ " para indicar uma ação de NOVO POST ao clicar abre o formulario para salvar um novo post.
      - Para incluir um novo post, preencha o formulario respeitando suas validações e clique em salvar, caso deseje cancelar, bastar clicar em voltar, ou no botão cancelar.
      - Na listagem, ao lado direito inferior de cada item da lista existem dois botões, Editar e Excluir respectivamente representados por icones, ao clicar no botão editar, o formulário ira abrir com os dados do item selecionado, basta alterar o que for necessário respeitando as regras de validação e clicar sob o botão salvar. Para excluir, haverá um modal de confirmação da ação antes de realizar a exclusão.



      * Detalhes Técnicos
      -  Sistema baseado em gerenciamento de estado global utilizando a lib XSTATE similar ao redux mas com implementacao mais simples onde todas as ações estao disponiveis sem necessidade de store/reducers/actions/dispaches
      - Estrutura de pastas : 
        -- SRC: Pasta onde ficam todos os nossos codigos separando camadas de reponsabilidades
        -- SRC/ASSETS: Pasta onde ficam os arquivos de midias fixas do projeto
        -- SRC/COMPONENTS: Pasta onde ficam os componentes do projeto, itens que podemos reutilizar conforme necessidade
        -- SRC/CONTEXTS: Pasta onde ficam os arquivos referente ao contexto do projeto, tudo que precisar ser compartilhado como contexto para compartilhar informações deve ficar aqui.
        -- SRC/CONTROLLERS: Pasta onde ficam os arquivos referente as ações do projeto, CANCEL/SHOW_EDITOR/SAVE/EDIT/DELETE/DETAILS
        -- SRC/HELPERS: Pasta onde ficam os arquivos referente as funções globais do projeto.
        -- SRC/MODELS: Pasta onde ficam os arquivos referente entidades do projeto neste caso, posts e categorias, e tbm suas respectivas tipagens e leituras iniciais.
        -- SRC/NAVIGATION: Pasta onde ficam os arquivos referente navegacao do projeto, neste caso implementados STACK NAVIGATOR e TABS NAVIGATOR
        -- SRC/SCREENS: Pasta onde ficam os arquivos referente as telas do projeto
        -- SRC/THEME: Pasta onde ficam os arquivos referente as cores utilizadas no projeto (thema dark/light) 
        
        
        
        
        
        
        
                
      
      
            
