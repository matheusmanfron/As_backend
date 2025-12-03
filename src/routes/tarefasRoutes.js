const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const tarefasController = require("../controllers/tarefasControllers");

router.get("/", auth, tarefasController.getMinhasTarefas);
router.post("/", auth, tarefasController.criarTarefa);
router.put("/:id_tarefa", auth, tarefasController.atualizarTarefa);
router.delete("/:id_tarefa", auth, tarefasController.deletarTarefa);

module.exports = router;