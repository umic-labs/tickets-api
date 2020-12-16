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
      return response.status(412).json({ msg: "Wrong data." });
    });

    return response.json(info);
  },
};
