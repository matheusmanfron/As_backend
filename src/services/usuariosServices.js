const db = require("../../db/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    async register({ email, senha }) {
        const senhaHash = await bcrypt.hash(senha, 10);

        const [id] = await db("usuarios").insert({
            email,
            senha: senhaHash
        });

        return id;
    },

    async login({ email, senha }) {
        const usuario = await db("usuarios").where({ email }).first();

        if (!usuario) return null;

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) return false;

        const token = jwt.sign(
            { id: usuario.id },
            process.env.JWT_SECRET || "segredo",
            { expiresIn: "1d" }
        );

        return { usuario, token };
    }
};