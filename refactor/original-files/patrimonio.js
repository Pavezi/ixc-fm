
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/patrimonio',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'serial': '',
    'id_fornecedor': '',
    'id_mac': '',
    'serial_fornecedor': '',
    'id_almoxarifado': '',
    'id_filial': '',
    'numero_nf': '',
    'id_produto': '',
    'valor_bem': '',
    'descricao': '',
    'departamento_id': '',
    'responsavel_id': '',
    'data_aquisicao': '',
    'valor_residual': '',
    'id_contrato_comodato': '',
    'id_cliente_comodato': '',
    'situacao': '1',
    'estado': '1',
    'id_movimento_produto': '',
    'em_laboratorio': '2',
    'aguardando_instalacao': '2',
    'validacao_form_patrimonio': '',
    'dica_aba_indisponivel': '',
    'finalidade_indisponivel': '',
    'id_finalidade': '',
    'data_movimentacao_indisponivel': '',
    'cod_patrimonio': '',
    'nro_patrimonio': '',
    'descricao_indisponivel': ''
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
  url: 'https://HOST/webservice/v1/patrimonio/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/patrimonio/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "serial": "",
    "id_fornecedor": "",
    "id_mac": "",
    "serial_fornecedor": "",
    "id_almoxarifado": "",
    "id_filial": "",
    "numero_nf": "",
    "id_produto": "",
    "valor_bem": "",
    "descricao": "",
    "departamento_id": "",
    "responsavel_id": "",
    "data_aquisicao": "",
    "valor_residual": "",
    "id_contrato_comodato": "",
    "id_cliente_comodato": "",
    "situacao": "1",
    "estado": "1",
    "id_movimento_produto": "",
    "em_laboratorio": "2",
    "aguardando_instalacao": "2",
    "validacao_form_patrimonio": "",
    "dica_aba_indisponivel": "",
    "finalidade_indisponivel": "",
    "id_finalidade": "",
    "data_movimentacao_indisponivel": "",
    "cod_patrimonio": "",
    "nro_patrimonio": "",
    "descricao_indisponivel": ""
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
  url: 'https://HOST/webservice/v1/patrimonio',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'patrimonio.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'patrimonio.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    