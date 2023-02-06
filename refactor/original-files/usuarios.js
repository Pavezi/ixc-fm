
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/usuarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'id_grupo': '',
    'tipo_alcada': 'ADM',
    'nome': '',
    'email': '',
    'senha': '',
    'status': 'A',
    'permite_acesso_ixc_mobile': 'S',
    'imagem': '',
    'dica_imagem': '',
    'acesso_webservice': 'S',
    'acesso_token': '',
    'user_callcenter': 'S',
    'callcenter': '',
    'alter_passwd_date': 'NULL',
    'language': 'Pt-Br',
    'caixa_fn_receber': '',
    'id_caixa': '',
    'vendedor_padrao': '',
    'recebimentos_dia_atual': 'N',
    'pagamentos_dia_atual': 'N',
    'lancamentos_dia_atual': 'S',
    'desc_max_recebimento': '0.00',
    'desc_max_venda': '0.00',
    'desc_max_renegociacao': '0.00',
    'funcionario': '',
    'filtra_setor': 'S',
    'filtra_funcionario': 'S',
    'mostrar_os_sem_funcionario': 'S',
    'crm_filtra_vendedor': 'S',
    'inmap_filtra_vendedor': 'S',
    'enviar_monitoramento_host': 'S',
    'enviar_notificacao_backup': 'S',
    'permite_inutilizar_patrimonio': 'N',
    'permite_ver_diferenca': 'S'
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
  url: 'https://HOST/webservice/v1/usuarios/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/usuarios/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "id_grupo": "",
    "tipo_alcada": "ADM",
    "nome": "",
    "email": "",
    "senha": "",
    "status": "A",
    "permite_acesso_ixc_mobile": "S",
    "imagem": "",
    "dica_imagem": "",
    "acesso_webservice": "S",
    "acesso_token": "",
    "user_callcenter": "S",
    "callcenter": "",
    "alter_passwd_date": "NULL",
    "language": "Pt-Br",
    "caixa_fn_receber": "",
    "id_caixa": "",
    "vendedor_padrao": "",
    "recebimentos_dia_atual": "N",
    "pagamentos_dia_atual": "N",
    "lancamentos_dia_atual": "S",
    "desc_max_recebimento": "0.00",
    "desc_max_venda": "0.00",
    "desc_max_renegociacao": "0.00",
    "funcionario": "",
    "filtra_setor": "S",
    "filtra_funcionario": "S",
    "mostrar_os_sem_funcionario": "S",
    "crm_filtra_vendedor": "S",
    "inmap_filtra_vendedor": "S",
    "enviar_monitoramento_host": "S",
    "enviar_notificacao_backup": "S",
    "permite_inutilizar_patrimonio": "N",
    "permite_ver_diferenca": "S"
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
  url: 'https://HOST/webservice/v1/usuarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'usuarios.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'usuarios.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    