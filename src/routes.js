const express = require("express");

const MailController = require("./controllers/MailController");

const routes = express.Router();

routes.post("/mail", MailController.send);

module.exports = routes;
