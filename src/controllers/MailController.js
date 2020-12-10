require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

let mail = {
  from: '"UMIC Brasil" <mailer.umicbrasil@gmail.com>',
  to: "roginaldosemog@gmail.com",
  subject: `COMIC 2021 | Pedido`,
  text: `Pedido ae`,
  html: "<b>Aloi</b>",
};

module.exports = {
  async send(request, response) {
    const info = await transporter.sendMail(mail)
    .catch(() => {
      return response.status(412).json({ msg: "Wrong data." });
    });

    return response.json(info);
  },
};
