
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/cliente_contrato_modelo',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'nome': '',
    'eh_modelo_termo': 'N',
    'cabecalho_padrao': '',
    'texto': '',
    'texto_imobiliaria': '',
    'contrato_arquivo': '',
    'id_contrato_testes': '',
    'ultima_atualizacao': '',
    'cabecalho': '',
    'adesao_arquivo': '',
    'imprimir_comodatos': 'T',
    'imprimir_login_assinante': 'N',
    'imprimir_pppoe': 'N',
    'imprimi_roteador': 'S',
    'prazo': '',
    'fidelidade': '',
    'cliente_contrato_comodato': '',
    'comodato_arquivo': '',
    'cliente_contrato_de_permanencia': '',
    'permanencia_arquivo': '',
    'termo_personalizado': '',
    'personalizado_arquivo': ''
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
  url: 'https://HOST/webservice/v1/cliente_contrato_modelo/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/cliente_contrato_modelo/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "nome": "",
    "eh_modelo_termo": "N",
    "cabecalho_padrao": "",
    "texto": "",
    "texto_imobiliaria": "",
    "contrato_arquivo": "",
    "id_contrato_testes": "",
    "ultima_atualizacao": "",
    "cabecalho": "",
    "adesao_arquivo": "",
    "imprimir_comodatos": "T",
    "imprimir_login_assinante": "N",
    "imprimir_pppoe": "N",
    "imprimi_roteador": "S",
    "prazo": "",
    "fidelidade": "",
    "cliente_contrato_comodato": "",
    "comodato_arquivo": "",
    "cliente_contrato_de_permanencia": "",
    "permanencia_arquivo": "",
    "termo_personalizado": "",
    "personalizado_arquivo": ""
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
  url: 'https://HOST/webservice/v1/cliente_contrato_modelo',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'cliente_contrato_modelo.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'cliente_contrato_modelo.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    