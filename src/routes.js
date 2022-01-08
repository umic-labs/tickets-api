const express = require("express");
const MailController = require("./controllers/MailController");
const AbacateController = require("./services/abacate.service");

const routes = express.Router();

routes.post("/mail/new_order", MailController.new_order);
routes.post("/mail/confirm_order", MailController.confirm_order);
routes.post("/abacate", AbacateController.sendCreditCardCharge);

module.exports = routes;
