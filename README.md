# to Do List

<h1>EM DESENVOLVIMENTO</h1>

<h2>Requisitos</h2>

<ul>
  <li>NodeJS</li>
  <p><code>sudo apt install nodejs</code></p>
  <br>
  <li>NPM</li>
  <p><code>sudo apt install npm</code></p>
  <br>
  <li>Express</li>
  <p><code>npm install express</code></p>
  <br>
  <li>MYSQL 2</li>
  <p><code>npm install mysql2</code></p>
  <br>
  <li>body-parser</li>
  <p><code>npm install body-parser</code></p>
  <br>
</ul>

<h2>Sobre</h2>

<p>O projeto to do list consiste em uma lista de tarefas, com 1 input de texto e um botão do tipo submit</p>

<p>Ao inserir o texto no input e clicar no botão de submit, a tarefa é enviada para o back-end usando a rota /new com o metodo POST, quando no back-end os dados são enviados a posts.js utilizando o metodo insertToDo, que faz uma requisição a database mysql toDoList</p>

<p>Apos a criação da tarefa, dois buttons são criados 'editar' e o 'remover'</p>

<p>Ao clicar no editar você pode editar uma tarefa fazendo a requisição a rota /edit utilizando o metodo put e enviando o novo nome da tarefa, quando no back-end os dados são direcionados ao metodo editToDo do arquivo posts.js que por sua vez faz uma query para o mysql database toDoList alterando o nome da tarefa para o nome enviado</p>

<p>Ja o botão remover faz uma requisição delete a rota /delete, quando no back-end a requisição é enviada para o arquivo posts.js utilizando o metodo deleteToDo que por sua vez faz uma requisição query ao mysql database toDoList deletando a requisição escolhida</p>

<p>Ao carregar a pagina a função updateToDo é executada atualizando todos os objetos do toDoList e os mostrando na tela por meio do fetch usando a rota /all e o metodo GET.</p>

<h2>MODO DE USO</h2>

<h3>GIT</h3>

<p>FAÇA O DOWNLOADS DO REPOSITORIO OU USE:<br><code>git clone git@github.com:joaov1ct0r/toDoList.git</code></p>

<h3>MySQL</h3>

<p>INICIE O SEU SERVIDOR MYSQL COM O COMANDO:<br><code>sudo systemctl start mysql</code></p>

<p>CRIE UM BANCO DE DADOS ATRAVES DO TERMINAL OU COM OUTRO GERENCIADOR DE BANCO DE DADOS, COM O NOME DE: toDoList COM O COMANDO:<br><code>CREATE DATABASE toDoList;</code></p>

<p>APOS CRIAR O BANCO DE DADOS USE-O COM O COMANDO: <br><code>USE toDoList;</code>

<p>CRIE UMA TABLE COM O NOME DE: toDo COM O COMANDO:<br><code>CREATE TABLE toDo (toDoID INT NOT NULL AUTO_INCREMENT, toDo VARCHAR(30) NOT NULL, PRIMARY KEY(toDoID);</code></p>

<h3>SERVER</h3>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA INICIE O SERVIDOR WEB NO SEU TERMINAL COM O COMANDO:<br><code>node src/index.js</code></p>

<p>APOS ISSO ABRA O NAVEGADOR E ENTRE COM A SEGUINTE URL:<br><code>http://localhost:3001/</code></p>

<p>A PAGINA PARA A LISTA DE TAREFAS SERA ABERTA E ESTARA PRONTA PARA CRIAR, ARMAZENAR, EDITAR E EXCLUIR SUAS TAREFAS</p>

<h2>Link para projeto apenas front-end</h2>
<a href='https://unruffled-turing-b06ef7.netlify.app/'>To do list</a>

<h2>Picture</h2>

![toDoList](https://user-images.githubusercontent.com/79015823/138046834-cd2142d6-a2a9-457b-a98f-5f18c90bde9f.jpg)
