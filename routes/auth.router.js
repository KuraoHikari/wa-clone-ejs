const { Router } = require("express");

const AuthController = require("../controllers/auth.controller");

const router = Router();

router.get(
 "/login",
 AuthController.loginPage
);
router.get(
 "/register",
 AuthController.loginPage
);

module.exports = router;
