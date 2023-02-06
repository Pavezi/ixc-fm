
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/cliente_contrato_produtos_reajuste_valor',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'descricao': '',
    'percentual': '',
    'data_validade': '',
    'status': 'T',
    'status_internet': 'T',
    'data_base_inicial': '',
    'data_base_final': '',
    'data_ativacao_inicial': '',
    'data_ativacao_final': '',
    'data_renovacao_inicial': '',
    'data_renovacao_final': '',
    'mes_ativacao': '',
    'id_filial': '',
    'cliente': '',
    'contrato': '',
    'tipo_cobranca': '',
    'carteira_cobranca': '',
    'cidade': '',
    'condominio': '',
    'plano_venda': '',
    'tipo_servico': 'T'
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
  url: 'https://HOST/webservice/v1/cliente_contrato_produtos_reajuste_valor/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/cliente_contrato_produtos_reajuste_valor/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "descricao": "",
    "percentual": "",
    "data_validade": "",
    "status": "T",
    "status_internet": "T",
    "data_base_inicial": "",
    "data_base_final": "",
    "data_ativacao_inicial": "",
    "data_ativacao_final": "",
    "data_renovacao_inicial": "",
    "data_renovacao_final": "",
    "mes_ativacao": "",
    "id_filial": "",
    "cliente": "",
    "contrato": "",
    "tipo_cobranca": "",
    "carteira_cobranca": "",
    "cidade": "",
    "condominio": "",
    "plano_venda": "",
    "tipo_servico": "T"
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
  url: 'https://HOST/webservice/v1/cliente_contrato_produtos_reajuste_valor',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'cliente_contrato_produtos_reajuste_valor.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'cliente_contrato_produtos_reajuste_valor.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    