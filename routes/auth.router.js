const { Router } = require("express");

const AuthController = require("../controllers/auth.controller");

const router = Router();

router.get(
 "/login",
 AuthController.loginPage
);
router.get(
 "/register",
 AuthController.registerPage
);
router.post(
 "/register",
 AuthController.register
);
router.post(
 "/login",
 AuthController.login
);

router.get(
 "/logout",
 AuthController.logout
);

module.exports = router;
