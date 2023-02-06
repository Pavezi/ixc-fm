
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/fn_areceber',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'id_cliente': '',
    'id_conta': '',
    'id_conta_class_finan_a': '',
    'filial_id': '',
    'documento': '',
    'data_emissao': '',
    'data_vencimento': '',
    'valor': '',
    'previsao': 'N',
    'tipo_recebimento': '',
    'id_carteira_cobranca': '',
    'obs': '',
    'status': 'A',
    'id_saida': '',
    'liberado': 'S',
    'nn_boleto': '',
    'gateway_link': '',
    'gerencianet_token': '',
    'tipo_conta': '',
    'id_cobranca': '',
    'status_cobranca': '',
    'id_nota_gerada': '0',
    'id_im_imovel': '',
    'impresso': 'N',
    'arquivo_remessa_baixado': '',
    'duplicata': '',
    'id_sip': '',
    'tipo_renegociacao': '',
    'id_renegociacao': '',
    'id_renegociacao_novo': '',
    'boleto': '',
    'forma_recebimento': 'M',
    'credito_data': '',
    'baixa_data': '',
    'baixa_id_operador': '',
    'cancelamento_id_operador': '',
    'numero_parcela_recorrente': '',
    'nparcela': '',
    'id_contrato_principal': '',
    'previsao_conta_receita': 'N',
    'tipo_cobranca': '',
    'parcela_proporcional': '',
    'tipo_pagamento_cartao': '',
    'titulo_protestado': 'N',
    'desconto_condicional_valor': 'NULL',
    'validade_desconto_condicional': 'NULL',
    'id_nota_gerada_opc2': '',
    'id_nota_gerada_opc3': '',
    'id_nota_gerada_opc4': '',
    'valor_aberto': '',
    'valor_recebido': '',
    'pagamento_valor': '',
    'pagamento_data': '',
    'valor_cancelado': '',
    'data_cancelamento': '',
    'origem_importacao': '',
    'titulo_importado': 'N',
    'aguardando_confirmacao_pagamento': 'N',
    'parcelado_cartao': 'N',
    'id_remessa': '',
    'nn_boleto': '',
    'boleto': '',
    'gateway_link': '',
    'linha_digitavel': '',
    'id_remessa_alteracao': '',
    'motivo_alteracao': '',
    'pix_txid': '',
    'libera_periodo': 'N',
    'id_mot_cancelamento': '',
    'id_contrato': '',
    'id_contrato_avulso': '',
    'ultima_atualizacao': '',
    'botoes_classe_finan': '',
    'id_conta_class_finan': '',
    'valor_class_finan': '',
    'grid_classe_finan': '',
    'json_class_finan': '',
    'id_nf_gerada': '',
    'id_nf_opcional2': '',
    'id_nf_opcional3': '',
    'id_nf_opcional4': ''
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
  url: 'https://HOST/webservice/v1/fn_areceber/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/fn_areceber/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "id_cliente": "",
    "id_conta": "",
    "id_conta_class_finan_a": "",
    "filial_id": "",
    "documento": "",
    "data_emissao": "",
    "data_vencimento": "",
    "valor": "",
    "previsao": "N",
    "tipo_recebimento": "",
    "id_carteira_cobranca": "",
    "obs": "",
    "status": "A",
    "id_saida": "",
    "liberado": "S",
    "nn_boleto": "",
    "gateway_link": "",
    "gerencianet_token": "",
    "tipo_conta": "",
    "id_cobranca": "",
    "status_cobranca": "",
    "id_nota_gerada": "0",
    "id_im_imovel": "",
    "impresso": "N",
    "arquivo_remessa_baixado": "",
    "duplicata": "",
    "id_sip": "",
    "tipo_renegociacao": "",
    "id_renegociacao": "",
    "id_renegociacao_novo": "",
    "boleto": "",
    "forma_recebimento": "M",
    "credito_data": "",
    "baixa_data": "",
    "baixa_id_operador": "",
    "cancelamento_id_operador": "",
    "numero_parcela_recorrente": "",
    "nparcela": "",
    "id_contrato_principal": "",
    "previsao_conta_receita": "N",
    "tipo_cobranca": "",
    "parcela_proporcional": "",
    "tipo_pagamento_cartao": "",
    "titulo_protestado": "N",
    "desconto_condicional_valor": "NULL",
    "validade_desconto_condicional": "NULL",
    "id_nota_gerada_opc2": "",
    "id_nota_gerada_opc3": "",
    "id_nota_gerada_opc4": "",
    "valor_aberto": "",
    "valor_recebido": "",
    "pagamento_valor": "",
    "pagamento_data": "",
    "valor_cancelado": "",
    "data_cancelamento": "",
    "origem_importacao": "",
    "titulo_importado": "N",
    "aguardando_confirmacao_pagamento": "N",
    "parcelado_cartao": "N",
    "id_remessa": "",
    "nn_boleto": "",
    "boleto": "",
    "gateway_link": "",
    "linha_digitavel": "",
    "id_remessa_alteracao": "",
    "motivo_alteracao": "",
    "pix_txid": "",
    "libera_periodo": "N",
    "id_mot_cancelamento": "",
    "id_contrato": "",
    "id_contrato_avulso": "",
    "ultima_atualizacao": "",
    "botoes_classe_finan": "",
    "id_conta_class_finan": "",
    "valor_class_finan": "",
    "grid_classe_finan": "",
    "json_class_finan": "",
    "id_nf_gerada": "",
    "id_nf_opcional2": "",
    "id_nf_opcional3": "",
    "id_nf_opcional4": ""
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
  url: 'https://HOST/webservice/v1/fn_areceber',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'fn_areceber.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'fn_areceber.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    