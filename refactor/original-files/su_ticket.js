
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/su_ticket',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'tipo': 'C',
    'id_estrutura': '',
    'protocolo': '',
    'id_circuito': '',
    'id_cliente': '',
    'id_login': '',
    'id_contrato': '',
    'id_filial': '',
    'id_assunto': '',
    'titulo': '',
    'origem_endereco': 'M',
    'origem_endereco_estrutura': 'E',
    'endereco': '',
    'latitude': '',
    'longitude': '',
    'id_wfl_processo': '',
    'id_ticket_setor': '',
    'id_responsavel_tecnico': '',
    'data_criacao': '',
    'data_ultima_alteracao': '',
    'prioridade': 'M',
    'data_reservada': '',
    'melhor_horario_reserva': 'Q',
    'id_ticket_origem': 'I',
    'id_usuarios': '',
    'id_resposta': '',
    'menssagem': '',
    'interacao_pendente': 'N',
    'su_status': 'N',
    'id_evento_status_processo': '',
    'id_canal_atendimento': '',
    'status': 'T',
    'mensagens_nao_lida_cli': '0',
    'mensagens_nao_lida_sup': '0',
    'token': '',
    'finalizar_atendimento': 'N',
    'id_su_diagnostico': '',
    'status_sla': '',
    'origem_cadastro': 'P',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'cliente_fone': '',
    'cliente_telefone_comercial': '',
    'cliente_id_operadora_celular': '',
    'cliente_telefone_celular': '',
    'cliente_whatsapp': '',
    'cliente_ramal': '',
    'cliente_email': '',
    'cliente_contato': '',
    'cliente_website': '',
    'cliente_skype': '',
    'cliente_facebook': '',
    'atualizar_cliente': 'S',
    'latitude_cli': '',
    'longitude_cli': '',
    'atualizar_login': 'S',
    'latitude_login': '',
    'longitude_login': ''
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
  url: 'https://HOST/webservice/v1/su_ticket/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/su_ticket/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "tipo": "C",
    "id_estrutura": "",
    "protocolo": "",
    "id_circuito": "",
    "id_cliente": "",
    "id_login": "",
    "id_contrato": "",
    "id_filial": "",
    "id_assunto": "",
    "titulo": "",
    "origem_endereco": "M",
    "origem_endereco_estrutura": "E",
    "endereco": "",
    "latitude": "",
    "longitude": "",
    "id_wfl_processo": "",
    "id_ticket_setor": "",
    "id_responsavel_tecnico": "",
    "data_criacao": "",
    "data_ultima_alteracao": "",
    "prioridade": "M",
    "data_reservada": "",
    "melhor_horario_reserva": "Q",
    "id_ticket_origem": "I",
    "id_usuarios": "",
    "id_resposta": "",
    "menssagem": "",
    "interacao_pendente": "N",
    "su_status": "N",
    "id_evento_status_processo": "",
    "id_canal_atendimento": "",
    "status": "T",
    "mensagens_nao_lida_cli": "0",
    "mensagens_nao_lida_sup": "0",
    "token": "",
    "finalizar_atendimento": "N",
    "id_su_diagnostico": "",
    "status_sla": "",
    "origem_cadastro": "P",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "cliente_fone": "",
    "cliente_telefone_comercial": "",
    "cliente_id_operadora_celular": "",
    "cliente_telefone_celular": "",
    "cliente_whatsapp": "",
    "cliente_ramal": "",
    "cliente_email": "",
    "cliente_contato": "",
    "cliente_website": "",
    "cliente_skype": "",
    "cliente_facebook": "",
    "atualizar_cliente": "S",
    "latitude_cli": "",
    "longitude_cli": "",
    "atualizar_login": "S",
    "latitude_login": "",
    "longitude_login": ""
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
  url: 'https://HOST/webservice/v1/su_ticket',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'su_ticket.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'su_ticket.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    