const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const dashboardControllers = require("../controllers/dashboardControllers");

router.get("/dashboard", auth, dashboardControllers.dashboard);

module.exports = router;
