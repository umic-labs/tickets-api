require("dotenv").config();
const nodemailer = require("nodemailer");
const MailService = require("../services/mail.service");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

module.exports = {
  async new_order(request, response) {
    const order = request.body;
    const mail = MailService.getNewOrderMail(order);

    const info = await transporter.sendMail(mail).catch(() => {
      console.log("Erro no pedido " + order.id_string);
      return response.status(412).json({ msg: "Wrong data." });
    });

    console.log(info);
    return response.json(info);
  },
  async confirm_order(request, response) {
    const order = request.body;
    const mail = MailService.getConfirmOrderMail(order);

    const info = await transporter.sendMail(mail).catch(() => {
      console.log("Erro no pedido " + order.id_string);
      return response.status(412).json({ msg: "Wrong data." });
    });

    console.log(info);
    return response.json(info);
  },
};
