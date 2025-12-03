const dashboardServices = require("../services/dashboardServices");

module.exports = {
    async dashboard(req, res) {
        try {
            const userId = req.userid;        // vem do JWT
            const anoAtual = new Date().getFullYear();

            const [
                tarefas,
                feriados,
                atividade
            ] = await Promise.all([
                dashboardServices.getTarefasNaoConcluidas(userId),
                dashboardServices.getFeriados(anoAtual),
                dashboardServices.getAtividade()
            ]);

            return res.json({
                tarefas_nao_concluidas: tarefas,
                feriados_nacionais: feriados,
                sugestao_atividade: atividade
            });

        } catch (err) {
            return res.status(500).json({
                error: "Erro ao carregar dashboard",
                detalhes: err.message
            });
        }
    }
};