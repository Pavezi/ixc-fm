
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/cliente_contrato_tipo',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'ativo': 'S',
    'tipo_contrato': '',
    'tipo_pagamento': '',
    'base_periodo_prestacao': 'V',
    'id_condicoes_pagamento': '',
    'avisar_dias': '',
    'bloquear_dias': '',
    'bloqueio_renegociado_n_dias': '3',
    'periodo': '',
    'qtd_periodos': '',
    'ordem': '',
    'ultima_atualizacao': '',
    'parcela_cobrar_proporcional': '1',
    'dias_proporcional_cob_mes': '0',
    'parcelas_cob_adicional': '1',
    'max_titulos_abertos_gerar_contrato': '0',
    'dias_carencia_pre': '1'
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
  url: 'https://HOST/webservice/v1/cliente_contrato_tipo/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/cliente_contrato_tipo/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "ativo": "S",
    "tipo_contrato": "",
    "tipo_pagamento": "",
    "base_periodo_prestacao": "V",
    "id_condicoes_pagamento": "",
    "avisar_dias": "",
    "bloquear_dias": "",
    "bloqueio_renegociado_n_dias": "3",
    "periodo": "",
    "qtd_periodos": "",
    "ordem": "",
    "ultima_atualizacao": "",
    "parcela_cobrar_proporcional": "1",
    "dias_proporcional_cob_mes": "0",
    "parcelas_cob_adicional": "1",
    "max_titulos_abertos_gerar_contrato": "0",
    "dias_carencia_pre": "1"
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
  url: 'https://HOST/webservice/v1/cliente_contrato_tipo',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'cliente_contrato_tipo.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'cliente_contrato_tipo.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    