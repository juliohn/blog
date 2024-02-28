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
      - 
   * Execucao do código
     - Clone o projeto no github
     - Tenha um ambiente react native configurado em seu computador.
     - Entre no projeto via cmd/prompt e exececute o comando "yarn/nmp install" para instalar as libs contidas no package.json
     - Entre na pasta ios e execute o comando 'pod install/arch -x86_64 pod install (para mac M1)'
     - Volte a pasta raiz, start o bundle do projeto com o comando 'yarn start/npm start'
     - Escolha qual device deseja executar (para executar no android o device ja precisa estar inicializado)

    * Execucao do código
      - Como este projeto não contempla integracao com o backend, toda vez que o projeto for aberto estará com a configuracao de dados default
      - Dados mocados são dados iniciais vindo do arquivo na raiz do projeto chamado MOCK_DATA_CATEGORY.json e MOCK_DATA_POSTS.json que traz o dados inicias dos POSTS e as categorias fixas de filtro e cadastro.

    * Funcionalidades
      - Tela inicial Lista os posts de forma intuitiva, lendo os dados do arquivos json conforme citado a cima
      - Tela "SETTINGS" lista os posts de forma que tenham ações para gestao dos mesmos
      - Header da pagina SETTINGS, contém um botao verde com simbolo "+ " para indicar uma ação de NOVO POST ao clicar abre o formulario para salvar um novo post. Para incluir um novo post, preencha o formulario respeitando suas validacoes e clique em salvar, caso deseje cancelar, bastar clicar em voltar, ou no botão cancelar.
        
            
