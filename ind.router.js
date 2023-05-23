const { Router } = require("express");
const { messagesController } = require("./ind2.controller");
const router = Router();

router.get("/products", messagesController.createMessage);
router.get("/products/:id", messagesController.message);
router.post("/products", messagesController.postMessage);
router.delete("/products/:id", messagesController.deleteMessage);
router.get("/brands", messagesController.gettingMessage);
router.post("/brands", messagesController.postM);
router.delete("/brands", messagesController.deleteMessageBr);

module.exports = router;
