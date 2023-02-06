
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/condicoes_pagamento',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'ativo': 'S',
    'ind_pag': '1',
    'nome': '',
    'compra_venda': 'A',
    'com_entrada': '',
    'n_parcelas': '',
    'tipo': '',
    'dia_fixo': '',
    'vencimento_personalizado': '',
    'baixa_primeira': '',
    'desconto_max': '0.00',
    'qtde_repeticoes_venda': '',
    'ultima_atualizacao': '',
    'tipo_pagamento': ''
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
  url: 'https://HOST/webservice/v1/condicoes_pagamento/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/condicoes_pagamento/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "ativo": "S",
    "ind_pag": "1",
    "nome": "",
    "compra_venda": "A",
    "com_entrada": "",
    "n_parcelas": "",
    "tipo": "",
    "dia_fixo": "",
    "vencimento_personalizado": "",
    "baixa_primeira": "",
    "desconto_max": "0.00",
    "qtde_repeticoes_venda": "",
    "ultima_atualizacao": "",
    "tipo_pagamento": ""
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
  url: 'https://HOST/webservice/v1/condicoes_pagamento',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'condicoes_pagamento.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'condicoes_pagamento.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    