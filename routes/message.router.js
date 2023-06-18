const { Router } = require("express");

const MessageController = require("../controllers/message.controller");

const router = Router();

router.get(
 "/message",
 MessageController.messagePage
);

module.exports = router;
