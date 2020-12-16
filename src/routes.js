const express = require("express");
const MailController = require("./controllers/MailController");

const routes = express.Router();

routes.post("/mail/new_order", MailController.new_order);

module.exports = routes;
