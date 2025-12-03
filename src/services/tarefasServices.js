const db = require("../../db/connection");

module.exports = {
    async listarPorUsuario(id_usuarios) {
        return await db("tarefas").where({ id_usuarios });
    },

    async criar({ descricao, status, id_usuarios }) {
        const [id] = await db("tarefas").insert({
            descricao,
            status,
            id_usuarios
        });

        return id;
    },

    async buscarPorId(id) {
        return await db("tarefas").where({ id }).first();
    },

    async atualizarStatus(id, status) {
        return await db("tarefas")
            .where({ id })
            .update({ status });
    },

    async deletar(id) {
        return await db("tarefas")
            .where({ id })
            .del();
    }
};