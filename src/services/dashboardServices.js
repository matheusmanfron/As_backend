const db = require("../../db/connection");
const axios = require('axios')

module.exports = {
    async getTarefasNaoConcluidas(usuarioId) {
        return await db("tarefas")
            .where("id_usarios", usuarioId)
            .whereNot({ status: "concluida" });
    },

    async getFeriados(ano) {
        const url = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
        const resp = await axios.get(url);
        return resp.data;
    },

    async getAtividade() {
        const url = "https://www.boredapi.com/api/activity/";
        const resp = await axios.get(url);
        return resp.data;
    }
};


