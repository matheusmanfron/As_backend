const usuariosServices = require("../services/usuariosServices");

module.exports = {
    async register(req, res) {
        const { email, senha } = req.body;

        try {
            const id = await usuariosServices.register({ email, senha });
            return res.status(201).json({ id, message: "Usuário criado com sucesso" });
        } catch (err) {
            return res.status(500).json({ error: "Erro ao criar usuário" });
        }
    },

    async login(req, res) {
        const { email, senha } = req.body;

        const resultado = await usuariosServices.login({ email, senha });

        if (resultado === null)
            return res.status(404).json({ error: "Usuário não encontrado" });

        if (resultado === false)
            return res.status(401).json({ error: "Senha incorreta" });

        return res.json({
            id: resultado.usuario.id,
            token: resultado.token
        });
    }
};