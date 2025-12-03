const express = require("express");
const router = express.Router();
const usuariosControllers = require("../controllers/usuariosControllers");

router.post("/register", usuariosControllers.register);
router.post("/login", usuariosControllers.login);

module.exports = router;