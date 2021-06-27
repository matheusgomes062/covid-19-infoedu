# covid-19-infoedu

## Build Setup

Para rodar o programa na sua máquina é necessário ter o [NodeJs](https://nodejs.org/en/)
e o [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable).

Você pode saber mais sobre os mesmos clicando nos links disponibilizados.


Os comandos abaixo permitem rodar o projeto do front-end
```bash
# instalar as dependencias
$ yarn install

# server com hot reload na rota localhost:3000
$ yarn dev

# build para deploy
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

Para rodar o back-end será necessário possuir o [PostgreSQL](https://www.postgresql.org/) instalado, então criar uma tabela chamada testedb.
Após, basta abrir o projeto [back-end](https://github.com/matheusgomes062/simple-form-api) e rodar o seguinte comando ```node server.js```. A partir daí o formulário irá popular a tabela testedb no postgres, e vc conseguirá visualizar ao vivo.



For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Sobre o projeto

A ideia do projeto é criar um site informativo sobre covid e outros tópicos como saúde dos animais e esportes na pandemia

## O que precisa ter
- [x] Soluções e dicas para saúde das pessoas na alimentação
- [x] Solucões e dicas para saúde das pessoas no esporte 
- [ ] Soluções e dicas para saúde dos animais 
- [x] Soluções e dicas financeira pessoal durante a pandemia 
- [x] Soluções e dicas financeira para as empresas durante a pandemia
- [ ] Soluções e dicas para saúde das pessoas nos cuidados ao sair de casa, na sua residência e empresa ao qual trabalham. 
- [ ] Soluções e dicas para educação na pandemia

## Wireframe/Design do projeto
<img width="819" alt="wireframe do projeto" src="https://user-images.githubusercontent.com/47605309/122134340-c2ee5880-ce14-11eb-94c8-9481e0c440bc.png">

### Home
<img width="708" alt="Home do projeto" src="https://user-images.githubusercontent.com/47605309/122134591-4d36bc80-ce15-11eb-95a4-637ba9f182c2.png">

## Tecnologias
### Front-end
- [Nuxt.js](https://nuxtjs.org)
- [Scss](https://sass-lang.com/)

### Sobre o Front-end:

### O que é o Nuxt JS?
O Nuxt JS é um framework JavaScript criado Sebastien Chopin e Alexander Chopin em 2016. Ele é mantido pela comunidade, assim como o Vue JS. Note que ele é um framework desenvolvido para outro framework. Por que isso é necessário?

### Por que o Nuxt é necessário?
Uma aplicação Vue por si só já é muito poderosa. Contudo, quando trabalhamos em uma aplicação muito grande, podemos sentir algumas dificuldades. Por exemplo: talvez sintamos dificuldades em manter a produtividade ao criar as páginas de nosso site.

Além disso, uma aplicação Vue por padrão é uma SPA (Single Page Application). Isso é bom devido à simplicidade. Contudo, essa abordagem pode nos trazer alguns problemas dependendo da aplicação que estamos desenvolvendo.

O conceito de uma SPA é possuir apenas um arquivo HTML e conforme realizamos interações com a página, mudamos seu conteúdo. No caso do Vue, mudamos os componentes que são renderizados. Mas esse conceito pode impactar em alguns quesitos importantes para que nosso projeto funcione bem. Uma questão é a velocidade. Como toda a renderização é feita no lado do cliente (browser), é feita toda a requisição dos arquivos CSS e JavaScript antes de nosso site estar de fato disponível para o usuário final. Esse processo pode ser um pouco demorado, o que faz nosso site perder performance. Isso pode prejudicar o rankeamento de nosso projeto nos motores de busca dos navegadores. Por exemplo, o Google recomenda que nosso site seja carregado em até 3 segundos para que tenha uma boa posição no ranking de busca.

Essas questões podem nos prejudicar. A boa notícia é que o Nuxt pode nos ajudar a solucionar esses “problemas”. Esse framework utiliza o conceito de SSR (Server-Side Rendering). Essa abordagem define que toda a renderização de nosso site ocorrerá do lado do servidor. Isso significa que o nosso HTML, incluindo as meta tags, nosso CSS e nosso JavaScript serão montados no servidor. Dessa forma, quando o browser requisitar uma página de nosso site, todo o conteúdo necessário já estará pronto e será enviado para o usuário de uma só vez. O resultado será que nosso site aumentará em velocidade e será amigável para o SEO, o que facilitará sua recomendação nos motores de busca dos navegadores, exatamente o que precisamos.

### Agora sobre o SCSS

### O que elas (pré-processadores) fazem exatamente?
LESS, SASS e SCSS são extensões do CSS, ou seja, de uma maneira bem simples, adicionam funcionalidades ao CSS. Pegando o contexto de desenvolvimento Web, podemos pensar em como o TypeScript é para o Javascript, adiciona novas funcionalidades, sem quebrar a compatibilidade, ou seja, no final o código é compilado, ou convertido para uma versão padrão. Assim também fazem esses pré-processadores de CSS.

Um exemplo mais funcional ajuda a entender. Cenário 1, conteúdos repetidos ao longo do CSS. É comum a empresa fornecer a paleta de cores e as cores serem definidas segundo esse padrão. Então o mesmo RGB aparece várias vezes no CSS. Ou o nome de das fontes, e por ai vai. Quando precisa achar as cores, tem que recorrer ao buscar, e quando quer mudar por exemplo, tem que sair trocando no código todo. Se tivesse uma funcionalidade básica de linguagem de programação no CSS, que são as variáveis, isso seria facilmente resolvido.

### Em quais casos seria útil usá-las no lugar de CSS convencional?
Bom, poderia dizer que todos. Sempre que se tem uma extensão, à medida que você domina começa a usar mais, então começa a perceber mais opções de onde pode ser útil. É possível escrever um código 100% em em pré-processador, e, à medida que vai dominando os recurso, vai implementando, o que faz a curva de aprendizagem suave.

### Não prejudicaria a performance da página em vez de usar CSS normal já que seria um processo a mais ou o custo x benefício vale a pena?
Como o código pode ser compilado e entregue como um CSS normal, não há incompatibilidade o custo seria esperar alguns segundos (não chega a isso, mas se chegar...) só na hora de montar o pacote para publicar, não creio se seja grande empecilho. Algumas IDEs também permitem compilar o código enquanto ele vai sendo salvo, o que deixa o processo ainda mais simples e transparente.


### Back-end
- [NodeJs](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)


### Sobre o back-end:

### Sobre o Node.js
O Node.js pode ser definido como um ambiente de execução Javascript server-side.

Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.

Apesar de recente, o Node.js já é utilizado por grandes empresas no mercado de tecnologia, como Netflix, Uber e LinkedIn.

O principal motivo de sua adoção é a sua alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless. Inclusive, os principais fornecedores de produtos e serviços Cloud já têm suporte para desenvolvimento de soluções escaláveis utilizando o Node.js.

### Características
A principal característica que diferencia o Node.JS de outras tecnologias, como PHP, Java, C#, é o fato de sua execução ser single-thread. Ou seja, apenas uma thread é responsável por executar o código Javascript da aplicação, enquanto que nas outras linguagens a execução é multi-thread.

### Mas o que isso significa na prática?

Em um servidor web utilizando linguagens tradicionais, para cada requisição recebida é criada uma nova thread para tratá-la. A cada requisição, serão demandados recursos computacionais (memória RAM, por exemplo) para a criação dessa nova thread. Uma vez que esses recursos são limitados, as threads não serão criadas infinitamente, e quando esse limite for atingido, as novas requisições terão que esperar a liberação desses recursos alocados para serem tratadas.

### Vantagens de uso do Node.js
**Flexibilidade**
O NPM (Node Package Manager) é o gerenciador de pacotes do Node.js e também é o maior repositório de softwares do mundo. Isso faz do Node.js uma plataforma com potencial para ser utilizada em qualquer situação. O pacote mais conhecido se chama Express.js e é um framework completo para desenvolvimento de aplicações Web.

**Leveza**
Criar um ambiente Node.js e subir uma aplicação é uma tarefa que não exige muitos recursos computacionais em comparação com outras tecnologias mais tradicionais. Se utilizado em conjunto com ferramentas como o Docker, o ganho na velocidade de deploy e replicação de máquinas pode ser muito significativo e em ambientes escaláveis isso significa menos custo e mais eficiência.

Tanto sua leveza quanto flexibilidade fazem do Node.JS uma tecnologia indicada para a implementação de serviços e componentes de arquiteturas como a de microsserviços e serverless. Além disso, conta com suporte das principais empresas de produtos e serviços Cloud do mercado, como a AWS, Google Cloud e Microsoft Azure que oferecem na maioria de seus produtos suporte nativo ao Node.JS.

**Produtividade da equipe**
Maior repositório do mundo: O NPM fornece pacotes de código reusáveis e provavelmente aquela integração que você precisa fazer com outro sistema ou banco de dados já está implementado e disponível gratuitamente para instalar via NPM.

Mesma linguagem no frontend e backend: Javascript é a linguagem padrão para desenvolvimento web client-side. Empresas de desenvolvimento Web contam como esse know-how como um ponto de partida importante para iniciar o uso do Node.js. Além disso, esse fator pode representar ganhos de reutilização de código e criação de equipes multidisciplinares, com melhor aproveitamento de recursos.

Ambiente de inovação: Possibilidade de deploys e iterações mais rápidas, e resolução de problemas On the Fly. Isso também permite a criação de soluções próprias e inovadoras, como fez o Uber criando produtos em Node.js para resolver alguns de seus problemas.

### Agora sobre o Postgresql + sequelize

### ORM
Quando estamos construindo aplicações com bancos de dados, independente da linguagem, existem muitas, mas muitas atividades repetitivas mesmo entre sistemas completamente diferentes. Uma delas é a escrita dos comandos e consultas SQL para fazer inserções, atualizações, etc nas tabelas do seu banco e a outra é o mapeamento das entidades e relacionamentos em objetos ou módulos da sua aplicação.

Mapear tabelas para código é um padrão muito comum independente de linguagem ou framework pois te permite programar mais próximo da regra de negócio da empresa, reduz a carga cognitiva de ficar chaveando mentalmente entre as diferentes camadas da aplicação e lhe dá muita produtividade, uma vez que, depois do mapeamento feito, atividades triviais, porém trabalhosas, como ficar escrevendo os mesmos SQLs de sempre se tornam apenas simples chamadas de funções ou métodos.

Ainda assim, fazer este mapeamento na mão também é extremamente penoso e coloca uma curva inicial de trabalho grande em novos projetos. Aí que entram os ORMs ou Object-Relational Mappers.

Um ORM é um framework que lhe permite fazer este mapeamento de forma automática, como o Entity Framework da Microsoft, ou de forma manual, mas extremamente simplificada, como o Hibernate da RedHat, sendo este segundo tipo o mais popular porque muitas vezes a mágica dos geradores automáticos de mapeamento criam código com baixa qualidade e/ou possuem funcionalidades mais limitadas.

Por exemplo, se você tem uma tabela de clientes, você pode ter uma classe ou módulo clientes na sua aplicação e ao invés de escrever um INSERT para salvar um novo cliente na base, você usaria uma função ou método save/add ou equivalente. Assim, você estará manipulando o banco SQL sem precisar escrever SQL de fato, usando apenas a sua linguagem de programação favorita.

Outra coisa bacana de trabalhar com ORMs é que muitas vezes eles atuam com mais de um banco, facilitando portar o seu código para diferentes mecanismos de persistência ou até em cenários de persistência poliglota.

Em Node.js, o ORM mais popular é o Sequelize.

### Sequelize
O Sequelize, segundo o site oficial, é um ORM para Node.js baseado em Promises, para os bancos PostgreSQL, MySQL, MariaDB, SQLite e MS SQL Server. 

