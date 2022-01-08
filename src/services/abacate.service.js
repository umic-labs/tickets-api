const axios = require("axios");

const SANDBOX_TOKEN = process.env.REACT_APP_PAGSEGURO_SANDBOX_TOKEN;

const sandboxApi = axios.create({
  baseURL: `http://sandbox.api.pagseguro.com/`,
});

module.exports = {
  async sendCreditCardCharge(request, response) {
    const body = {
      reference_id: "P0001",
      description: "Motivo do pagamento",
      amount: {
        value: 1000,
        currency: "BRL",
      },
      payment_method: {
        type: "CREDIT_CARD",
        installments: 1,
        capture: false,
        soft_descriptor: "My Store",
        card: {
          number: "4111111111111111",
          exp_month: "03",
          exp_year: "2026",
          security_code: "123",
          holder: {
            name: "Jose da Silva",
          },
        },
      },
      notification_urls: [
        "https://yourserver.com/nas_ecommerce/277be731-3b7c-4dac-8c4e-4c3f4a1fdc46/",
      ],
      metadata: {
        Exemplo: "Aceita qualquer informação",
        NotaFiscal: "123",
        idComprador: "123456",
      },
    };

    const info = await sandboxApi
      .post("charges", body, {
        headers: {
          Authorization: "4A6812C212184D869148F2A1ACE5CD58",
          "Content-type": "application/json",
        },
      })
      .catch(() => {
        return response.status(412).json({ msg: "Deu ruim." });
      });

    console.log(info);
    return response.json(info.data);
  },
};
