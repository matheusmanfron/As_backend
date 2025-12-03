const express = require('express');
const cors = require('cors');
const tarefasRoutes = require("./src/routes/tarefasRoutes");
const usuariosRoutes = require("./src/routes/usuariosRoutes");
const dashboardRoutes = require("./src/routes/dashboardRoutes")

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use("/", usuariosRoutes);
app.use("/", dashboardRoutes);
app.use("/tarefas", tarefasRoutes);


app.listen(3333, () => console.log('Servidor rodando na porta 3333'));