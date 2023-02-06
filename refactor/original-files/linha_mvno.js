
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/linha_mvno',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'api': 'A',
    'id_integracao': '',
    'id_contrato': '',
    'id_customer_mvno': '',
    'id_account_mvno': '',
    'profile_mvno': '',
    'id_prod_ixc_mvno': '',
    'simcard': '',
    'portabilidade': 'N',
    'tipo_numero': '',
    'ddd_telefone': '',
    'numero_telefone': '',
    'id_contrato_integracao': '',
    'id_linha_integracao': '',
    'msisdn': '',
    'status_linha': 'A',
    'status_portabilidade': '',
    'data_agendamento': ''
  },
  json: true
 };
request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

//Deletar----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'DELETE',
  url: 'https://HOST/webservice/v1/linha_mvno/Id_a_deletar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   }
 };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

//Editar----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'PUT',
  url: 'https://HOST/webservice/v1/linha_mvno/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "api": "A",
    "id_integracao": "",
    "id_contrato": "",
    "id_customer_mvno": "",
    "id_account_mvno": "",
    "profile_mvno": "",
    "id_prod_ixc_mvno": "",
    "simcard": "",
    "portabilidade": "N",
    "tipo_numero": "",
    "ddd_telefone": "",
    "numero_telefone": "",
    "id_contrato_integracao": "",
    "id_linha_integracao": "",
    "msisdn": "",
    "status_linha": "A",
    "status_portabilidade": "",
    "data_agendamento": ""
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

//Listar----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'GET',
  url: 'https://HOST/webservice/v1/linha_mvno',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'linha_mvno.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'linha_mvno.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    