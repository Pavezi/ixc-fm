// dados - axios

import axios from "axios";
// URL do sistema
const host = "https://isp.ixc/webservice/v1";

// Token do usuário criado nas configurações da API
const token = "";

// Se será usado certificado SSL ou não
const selfSigned = true;

// Array de parâmetros do método
const params = {
  boletos: "1", // ID da fatura
  juro: "N", // 'S'->SIM e 'N'->NÃO para cálculo de júro
  multa: "N", // 'S'->SIM e 'N'->NÃO para cálculo de multa
  atualiza_boleto: "N", // 'S'->SIM e 'N'->NÃO para atualizar o boleto
  tipo_boleto: "dados", // tipo de método que será executado
};

axios
  .get(`${host}/get_boleto`, {
    params,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + new Buffer.from(token).toString("base64"),
    },
  })
  .then((response) => {
    // Imprimindo resultado
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// retornar arquivo

// const https = require("https");
// const querystring = require("querystring");

// const host = "https://isp.ixc/";
// const token =
//   "";
// const selfSigned = true;

// const options = {
//   hostname: host,
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Basic " + new Buffer.from(token).toString("base64"),
//   },
// };

// const params = querystring.stringify({
//   boletos: "PARCELA",
//   juro: "N",
//   multa: "N",
//   atualiza_boleto: "N",
//   tipo_boleto: "arquivo",
//   base64: "S",
// });

// const api = https.request(`${host}/get_boleto?${params}`, options, (res) => {
//   let data = "";

//   res.on("data", (chunk) => {
//     data += chunk;
//   });

//   res.on("end", () => {
//     const retorno = JSON.parse(data);
//     console.log(retorno);
//   });
// });

// api.end();

/// consultar dados do boleto - api

// requerindo arquivo do webservice

// const https = require('https');
// const querystring = require('querystring');

// const host = 'https://HOST_DO_SISTEMA/webservice/v1';
// const token = '';

// const options = {
//   hostname: host,
//   port: 443,
// outro jeito path: "/get_boleto",

//   path: '/get_boleto?' + querystring.stringify({
//     boletos: 'PARCELA',
//     juro: 'N',
//     multa: 'N',
//     atualiza_boleto: 'N',
//     tipo_boleto: 'dados'
//   }),
//   method: 'GET',
//   headers: {
//     'Authorization': `Token ${token}`,
//   },
// };

// const req = https.request(options, (res) => {
//   let data = '';
//   res.on('data', (chunk) => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     const retorno = JSON.parse(data);
//     console.log(retorno);
//   });
// });

// req.on('error', (error) => {
//   console.error(error);
// });

// req.end();
