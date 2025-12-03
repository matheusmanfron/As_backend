Declaração sobre uso da I.A

Prompt: boa tarde chat, como posso fazer para popular meu banco de dados em node.js e knex?
Resposta:✅ 1. Usar Seeds do Knex (melhor prática)

Seeds são scripts próprios do Knex feitos para popular tabelas com dados iniciais.

✔️ Passo 1 — Criar o seed

No terminal:

npx knex seed:make nome_do_seed


Exemplo:

npx knex seed:make populate_usuarios


Isso cria um arquivo dentro de ./seeds.

✔️ Passo 2 — Editar o arquivo do seed

Exemplo de seed:

exports.seed = function (knex) {
  // Apaga registros existentes
  return knex('usuarios').del()
    .then(function () {
      // Insere novos registros
      return knex('usuarios').insert([
        { id: 1, email: "admin@ifood.com", senha: "123456" },
        { id: 2, email: "user@gmail.com", senha: "senha123" }
      ]);
    });
};

✔️ Passo 3 — Rodar os seeds
npx knex seed:run

✅ 2. Inserir manualmente pelo código da API

No seu controller/service:

const db = require("./db/connection");

async function criarUsuario() {
  const novo = {
    email: "teste@gmail.com",
    senha: "1234"
  };

  await db("usuarios").insert(novo);
}

✅ 3. Inserir dados direto no SQLite (caso use SQLite)

Você pode usar o DB Browser for SQLite para inserir manualmente.
⚠️ Mas para projetos sérios, prefira seeds.

🎯 Quando usar cada opção?
Método	Melhor para
Seeds	Dados iniciais do projeto, simular sistema, recriar banco rapidamente
Inserção via API	Inserir dados reais durante o uso da aplicação
Inserção manual	Testes rápidos

Aprendizado:É necessário criar as seeds para popular um banco de dados e fazer os testes devidamente corretos da API.

Prompt 2: Chat fui rodar a minha API e me ocorreu um erro:const express = require('express');
const cors = require('cors');
const tarefasRoutes = require("./src/routes/tarefasRoutes");

const app = express;
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use("/tarefas", tarefasRoutes);


app.listen(3333, () => console.log('Servidor rodando na porta 3333'));

o que aconteceu?

Resposta:Achamos o problema! ✅

O erro está exatamente aqui:

const app = express;


Você não está chamando a função express().
Assim, app recebe a função express, não uma instância do servidor, e por isso:

TypeError: app.use is not a function

✅ Correção do seu server.js

Aqui está ele corrigido e funcionando:

const express = require('express');
const cors = require('cors');
const tarefasRoutes = require("./src/routes/tarefasRoutes");

const app = express();  // <-- ERA AQUI O ERRO

app.use(cors());
app.use(express.json());

app.use("/tarefas", tarefasRoutes);

app.listen(3333, () => console.log('Servidor rodando na porta 3333'));

📌 Por que isso corrige?

Porque agora:

const app = express();


gera uma instância real do Express, e essa instância possui métodos como:

use()

get()

post()

listen()

Sem os parênteses, você estava atribuindo a função express bruta, que não tem use().

Aprendizado: Sempre conferir as linhas de código antes de rodar, pois o const app = express estava sem (), ou seja, não conseguia retornar nada.
