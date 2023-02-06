
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/su_oss_chamado',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'tipo': 'C',
    'id_ticket': '',
    'protocolo': '',
    'id_assunto': '',
    'id_cliente': '',
    'id_estrutura': '',
    'id_filial': '',
    'id_login': '',
    'id_contrato_kit': '',
    'origem_endereco': 'M',
    'origem_endereco_estrutura': 'E',
    'latitude': '',
    'longitude': '',
    'prioridade': 'N',
    'melhor_horario_agenda': 'Q',
    'setor': '',
    'id_tecnico': '',
    'mensagem': '',
    'idx': '',
    'status': 'A',
    'gera_comissao': 'S',
    'liberado': '1',
    'id_atendente': '',
    'impresso': 'N',
    'preview': '',
    'id_wfl_param_os': '',
    'id_wfl_tarefa': '',
    'id_su_diagnostico': '',
    'regiao_manutencao': '',
    'origem_cadastro': 'P',
    'origem_change_endereco': 'default',
    'status_sla': 'NULL',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'id_cidade': '',
    'bairro': '',
    'endereco': '',
    'complemento': '',
    'referencia': '',
    'id_condominio': '',
    'bloco': '',
    'apartamento': '',
    'data_abertura': '',
    'data_inicio': '',
    'data_hora_analise': '',
    'data_agenda': '',
    'data_agenda_final': '',
    'data_hora_encaminhado': '',
    'data_hora_assumido': '',
    'data_hora_execucao': '',
    'data_final': '',
    'data_fechamento': '',
    'data_prazo_limite': '',
    'data_reservada': '',
    'data_reagendar': '',
    'data_prev_final': '',
    'mensagem_resposta': '',
    'justificativa_sla_atrasado': '',
    'valor_total': '',
    'valor_outras_despesas': '',
    'valor_unit_comissao': '0,00',
    'valor_total_comissao': '0,00'
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
  url: 'https://HOST/webservice/v1/su_oss_chamado/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/su_oss_chamado/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "tipo": "C",
    "id_ticket": "",
    "protocolo": "",
    "id_assunto": "",
    "id_cliente": "",
    "id_estrutura": "",
    "id_filial": "",
    "id_login": "",
    "id_contrato_kit": "",
    "origem_endereco": "M",
    "origem_endereco_estrutura": "E",
    "latitude": "",
    "longitude": "",
    "prioridade": "N",
    "melhor_horario_agenda": "Q",
    "setor": "",
    "id_tecnico": "",
    "mensagem": "",
    "idx": "",
    "status": "A",
    "gera_comissao": "S",
    "liberado": "1",
    "id_atendente": "",
    "impresso": "N",
    "preview": "",
    "id_wfl_param_os": "",
    "id_wfl_tarefa": "",
    "id_su_diagnostico": "",
    "regiao_manutencao": "",
    "origem_cadastro": "P",
    "origem_change_endereco": "default",
    "status_sla": "NULL",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "id_cidade": "",
    "bairro": "",
    "endereco": "",
    "complemento": "",
    "referencia": "",
    "id_condominio": "",
    "bloco": "",
    "apartamento": "",
    "data_abertura": "",
    "data_inicio": "",
    "data_hora_analise": "",
    "data_agenda": "",
    "data_agenda_final": "",
    "data_hora_encaminhado": "",
    "data_hora_assumido": "",
    "data_hora_execucao": "",
    "data_final": "",
    "data_fechamento": "",
    "data_prazo_limite": "",
    "data_reservada": "",
    "data_reagendar": "",
    "data_prev_final": "",
    "mensagem_resposta": "",
    "justificativa_sla_atrasado": "",
    "valor_total": "",
    "valor_outras_despesas": "",
    "valor_unit_comissao": "0,00",
    "valor_total_comissao": "0,00"
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
  url: 'https://HOST/webservice/v1/su_oss_chamado',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'su_oss_chamado.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'su_oss_chamado.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    