const express = require("express");
const MailController = require("./controllers/MailController");
const PaymentController = require("./services/payment.service");

const routes = express.Router();

routes.post("/mail/new_order", MailController.new_order);
routes.post("/mail/confirm_order", MailController.confirm_order);
routes.post("/payment/credit", PaymentController.send_charge_credit);

module.exports = routes;
