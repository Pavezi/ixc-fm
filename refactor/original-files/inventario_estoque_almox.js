
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/inventario_estoque_almox',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'id_produto': '',
    'id_almox': '',
    'filial_id': '',
    'id_saldo_almox': '',
    'id_lote': '',
    'id_unidade': '',
    'data_inventario': '',
    'estoque_atual': '',
    'saldo_lote': '',
    'novo_estoque': '',
    'custo_medio_atual': '',
    'novo_custo_medio': '',
    'preco_base': '',
    'unidade_sigla': '',
    'fator_conversao': ''
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
  url: 'https://HOST/webservice/v1/inventario_estoque_almox/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/inventario_estoque_almox/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "id_produto": "",
    "id_almox": "",
    "filial_id": "",
    "id_saldo_almox": "",
    "id_lote": "",
    "id_unidade": "",
    "data_inventario": "",
    "estoque_atual": "",
    "saldo_lote": "",
    "novo_estoque": "",
    "custo_medio_atual": "",
    "novo_custo_medio": "",
    "preco_base": "",
    "unidade_sigla": "",
    "fator_conversao": ""
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
  url: 'https://HOST/webservice/v1/inventario_estoque_almox',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'inventario_estoque_almox.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'inventario_estoque_almox.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    