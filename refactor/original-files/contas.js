
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/contas',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'conta': '',
    'tipo_conta': '',
    'data_abertura': '',
    'saldo_abertura': '',
    'id_planejamento': '',
    'filial_padrao': '',
    'permitir_pag_saldo_negativo': 'S',
    'ativo': 'S',
    'id_planejamento_antigo': '',
    'cod_banco': '',
    'agencia': '',
    'agencia_dv': '',
    'numero_conta': '',
    'numero_conta_dv': '',
    'operacao': '',
    'layout_conciliacao': '',
    'cnpj': '',
    'razao_banco': '',
    'numero_cooperativa': '',
    'parametro_troca_eletronica': '',
    'numero_convenio': ''
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
  url: 'https://HOST/webservice/v1/contas/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/contas/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "conta": "",
    "tipo_conta": "",
    "data_abertura": "",
    "saldo_abertura": "",
    "id_planejamento": "",
    "filial_padrao": "",
    "permitir_pag_saldo_negativo": "S",
    "ativo": "S",
    "id_planejamento_antigo": "",
    "cod_banco": "",
    "agencia": "",
    "agencia_dv": "",
    "numero_conta": "",
    "numero_conta_dv": "",
    "operacao": "",
    "layout_conciliacao": "",
    "cnpj": "",
    "razao_banco": "",
    "numero_cooperativa": "",
    "parametro_troca_eletronica": "",
    "numero_convenio": ""
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
  url: 'https://HOST/webservice/v1/contas',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'contas.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'contas.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    