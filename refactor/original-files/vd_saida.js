
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/vd_saida',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'id_tipo_documento': '',
    'id_cliente': '',
    'id_condicao_pagamento': '',
    'filial_id': '',
    'data_emissao': '',
    'data_saida': '',
    'valor_total': '',
    'indFinal': '1',
    'indPres': '1',
    'documento': '',
    'obs': '',
    'status': 'A',
    'impresso': 'N',
    'gera_estoque': '',
    'numero_nf': '',
    'modelo_nf': '',
    'previsao': 'N',
    'id_contrato': '',
    'id_contrato_avulso': '',
    'alerta_cliente': '',
    'status_fat_os': '0',
    'id_produto_ativacao': '0',
    'data_cancelamento': '',
    'valor_produto_ativacao': '',
    'difal_vFCPUFDest': '',
    'difal_vICMSUFDest': '',
    'difal_vICMSUFRemet': '',
    'id_im_imovel': '',
    'nfse_lote': '',
    'nfse_prot': '',
    'nfse_status': 'NE',
    'id_almox_padrao_tipo_doc': '',
    'id_lote_geracao_financeiro': '',
    'numeracao_lote_ixc': '',
    'id_geracao_lote': '',
    'ultima_atualizacao': 'TESTE',
    'consumidor_final_razao': '',
    'consumidor_final_cpf': '',
    'modalidade_frete': '9',
    'id_transportadora': '',
    'placa': '',
    'placa_uf': '',
    'placa_rntc': '',
    'valor_frete': '',
    'id_comissionado': '',
    'pcomissao': '',
    'comissao_perc_recebimento': '0.00',
    'avalista_1': '',
    'avalista_2': ''
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
  url: 'https://HOST/webservice/v1/vd_saida/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/vd_saida/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "id_tipo_documento": "",
    "id_cliente": "",
    "id_condicao_pagamento": "",
    "filial_id": "",
    "data_emissao": "",
    "data_saida": "",
    "valor_total": "",
    "indFinal": "1",
    "indPres": "1",
    "documento": "",
    "obs": "",
    "status": "A",
    "impresso": "N",
    "gera_estoque": "",
    "numero_nf": "",
    "modelo_nf": "",
    "previsao": "N",
    "id_contrato": "",
    "id_contrato_avulso": "",
    "alerta_cliente": "",
    "status_fat_os": "0",
    "id_produto_ativacao": "0",
    "data_cancelamento": "",
    "valor_produto_ativacao": "",
    "difal_vFCPUFDest": "",
    "difal_vICMSUFDest": "",
    "difal_vICMSUFRemet": "",
    "id_im_imovel": "",
    "nfse_lote": "",
    "nfse_prot": "",
    "nfse_status": "NE",
    "id_almox_padrao_tipo_doc": "",
    "id_lote_geracao_financeiro": "",
    "numeracao_lote_ixc": "",
    "id_geracao_lote": "",
    "ultima_atualizacao": "TESTE",
    "consumidor_final_razao": "",
    "consumidor_final_cpf": "",
    "modalidade_frete": "9",
    "id_transportadora": "",
    "placa": "",
    "placa_uf": "",
    "placa_rntc": "",
    "valor_frete": "",
    "id_comissionado": "",
    "pcomissao": "",
    "comissao_perc_recebimento": "0.00",
    "avalista_1": "",
    "avalista_2": ""
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
  url: 'https://HOST/webservice/v1/vd_saida',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'vd_saida.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'vd_saida.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    