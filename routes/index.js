const { Router } = require("express");
const authRouter = require("./auth.router");
const messageRouter = require("./message.router");

const router = Router();

router.use(authRouter);

router.get("/", (req, res) => {
 res.render("pages/index");
});

router.use(messageRouter);

router.use((req, res, next) => {
 res.status(404).render("pages/404");
});
module.exports = router;
