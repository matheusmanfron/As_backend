const tarefasService = require("../services/tarefasServices");

module.exports = {
    async getMinhasTarefas(req, res) {
        const usuario_id = req.user.id;

        const tarefas = await tarefasService.listarPorUsuario(usuario_id);
        res.json(tarefas);
    },

    async criarTarefa(req, res) {
        const usuario_id = req.user.id;
        const { descricao, status } = req.body;

        const id_tarefa = await tarefasService.criar({
            descricao,
            status,
            id_usuarios
        });

        res.status(201).json({ id });
    },

    async atualizarTarefa(req, res) {
        const usuario_id = req.user.id;
        const { id_tarefa } = req.params;
        const { status } = req.body;

        const tarefa = await tarefasService.buscarPorId(id);

        if (!tarefa)
            return res.status(404).json({ error: "Tarefa não encontrada" });

        if (tarefa.usuario_id !== usuario_id)
            return res.status(403).json({ error: "Não autorizado" });

        await tarefasService.atualizarStatus(id_tarefa, status);

        res.json({ message: "Tarefa atualizada" });
    },

    async deletarTarefa(req, res) {
        const usuario_id = req.user.id;
        const { id_tarefa } = req.params;

        const tarefa = await tarefasService.buscarPorId(id_tarefa);

        if (!tarefa)
            return res.status(404).json({ error: "Tarefa não encontrada" });

        if (tarefa.usuario_id !== usuario_id)
            return res.status(403).json({ error: "Não autorizado" });

        await tarefasService.deletar(id_tarefa);

        res.json({ message: "Tarefa deletada" });
    }
};