
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/vd_contratos',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'tipo': 'I',
    'nome': '',
    'descricao': '',
    'moeda': 'R$',
    'id_tipo_documento': '',
    'id_modelo': '',
    'id_carteira_cobranca': '',
    'id_vendedor': '',
    'id_filial': '',
    'comissao': '',
    'valor_contrato': '',
    'limitar_n_logins': 'S',
    'logins_simultaneos': '1',
    'Ativo': 'S',
    'tipo_doc_opc': '',
    'tipo_doc_opc2': '',
    'tipo_doc_opc3': '',
    'tipo_doc_opc4': '',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'tel_franquia_segundos': '',
    'tel_franquia_prefix': '',
    'id_cidade': '',
    'id_tipo_doc_ativ': '',
    'id_produto_ativ': '',
    'id_cond_pag_ativ': '',
    'id_vendedor_ativ': '',
    '': '',
    'utilizar_desconto_ate_vencimento': 'N',
    'utilizar_desconto_por_repeticao': 'N',
    'utilizar_desconto_no_produto_plano': 'N',
    'qtde_repeticoes_desconto': '',
    'id_produto_ate_vencimento': '',
    'id_produto_contrato_vinc': '',
    'valor_desconto': ''
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
  url: 'https://HOST/webservice/v1/vd_contratos/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/vd_contratos/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "tipo": "I",
    "nome": "",
    "descricao": "",
    "moeda": "R$",
    "id_tipo_documento": "",
    "id_modelo": "",
    "id_carteira_cobranca": "",
    "id_vendedor": "",
    "id_filial": "",
    "comissao": "",
    "valor_contrato": "",
    "limitar_n_logins": "S",
    "logins_simultaneos": "1",
    "Ativo": "S",
    "tipo_doc_opc": "",
    "tipo_doc_opc2": "",
    "tipo_doc_opc3": "",
    "tipo_doc_opc4": "",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "tel_franquia_segundos": "",
    "tel_franquia_prefix": "",
    "id_cidade": "",
    "id_tipo_doc_ativ": "",
    "id_produto_ativ": "",
    "id_cond_pag_ativ": "",
    "id_vendedor_ativ": "",
    "": "",
    "utilizar_desconto_ate_vencimento": "N",
    "utilizar_desconto_por_repeticao": "N",
    "utilizar_desconto_no_produto_plano": "N",
    "qtde_repeticoes_desconto": "",
    "id_produto_ate_vencimento": "",
    "id_produto_contrato_vinc": "",
    "valor_desconto": ""
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
  url: 'https://HOST/webservice/v1/vd_contratos',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'vd_contratos.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'vd_contratos.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    