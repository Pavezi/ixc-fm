
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/fn_apagar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'id_fornecedor': '',
    'id_conta': '',
    'id_conta_class_finan_a': '',
    'id_contas': '',
    'filial_id': '',
    'tipo_pagamento': '',
    'chave_pix': '',
    'documento': '',
    'data_emissao': '',
    'data_vencimento': '',
    'valor': '',
    'previsao': 'N',
    'eh_despesa_veiculo': 'N',
    'obs': '',
    'codigo_barras': '',
    'status': 'A',
    'liberado': 'S',
    'tipo_conta': '',
    'id_entrada': '0',
    'duplicata': '',
    'lote': '',
    'previsao_conta_despesa': 'N',
    'status_auditoria': 'N',
    'id_lote_importacao': 'NULL',
    'valor_aberto': '',
    'valor_pago': '',
    'data_pagamento': '',
    'debito_data': '',
    'valor_total_pago': '0.00',
    'valor_cancelado': '',
    'data_cancelamento': '',
    'id_mot_cancelamento': '',
    'id_remessa_pagamento': '',
    'botoes_classe_finan': '',
    'id_conta_class_finan': '',
    'valor_class_finan': '',
    'grid_classe_finan': '',
    'json_class_finan': ''
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
  url: 'https://HOST/webservice/v1/fn_apagar/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/fn_apagar/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "id_fornecedor": "",
    "id_conta": "",
    "id_conta_class_finan_a": "",
    "id_contas": "",
    "filial_id": "",
    "tipo_pagamento": "",
    "chave_pix": "",
    "documento": "",
    "data_emissao": "",
    "data_vencimento": "",
    "valor": "",
    "previsao": "N",
    "eh_despesa_veiculo": "N",
    "obs": "",
    "codigo_barras": "",
    "status": "A",
    "liberado": "S",
    "tipo_conta": "",
    "id_entrada": "0",
    "duplicata": "",
    "lote": "",
    "previsao_conta_despesa": "N",
    "status_auditoria": "N",
    "id_lote_importacao": "NULL",
    "valor_aberto": "",
    "valor_pago": "",
    "data_pagamento": "",
    "debito_data": "",
    "valor_total_pago": "0.00",
    "valor_cancelado": "",
    "data_cancelamento": "",
    "id_mot_cancelamento": "",
    "id_remessa_pagamento": "",
    "botoes_classe_finan": "",
    "id_conta_class_finan": "",
    "valor_class_finan": "",
    "grid_classe_finan": "",
    "json_class_finan": ""
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
  url: 'https://HOST/webservice/v1/fn_apagar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'fn_apagar.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'fn_apagar.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    