const axios = require("axios");

const SANDBOX_TOKEN = process.env.PAGSEGURO_SANDBOX_TOKEN;

const sandboxApi = axios.create({
  baseURL: `http://sandbox.api.pagseguro.com/`,
});

module.exports = {
  async send_charge_credit(request, response) {
    const info = await sandboxApi
      .post("charges", request.body, {
        headers: {
          Authorization: SANDBOX_TOKEN,
          "Content-type": "application/json",
        },
      })
      .catch((error) => {
        return response.status(error.response.status).json({ error: error });
      });

    return response.json(info.data);
  },
};
