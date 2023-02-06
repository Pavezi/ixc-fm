
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/crm_planos_negociacoes',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'descricao': '',
    'id_campanha': '',
    'id_filial': '',
    'id_funil': '',
    'id_estagio': '',
    'modelo_email': '',
    'valor_mensal': '',
    'valor_fixo': '',
    'cor_mapa': '',
    'ativo': 'S',
    'ultima_atualizacao': '',
    'inserir_contrato': 'S',
    'id_plano': '',
    'id_tipo_cobranca': '',
    'fidelidade': '',
    'id_modelo_contrato': '',
    'inserir_acesso': 'S',
    'autenticacao': 'L',
    'tipo_conexao_mapa': 'F',
    'id_grupo': '',
    'inserir_atendimento': 'S',
    'prioridade': 'M',
    'id_assunto': '',
    'id_wfl_processo': '',
    'menssagem': '',
    'inserir_tarefa': 'S',
    'id_tipo_agendamento': ''
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
  url: 'https://HOST/webservice/v1/crm_planos_negociacoes/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/crm_planos_negociacoes/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "descricao": "",
    "id_campanha": "",
    "id_filial": "",
    "id_funil": "",
    "id_estagio": "",
    "modelo_email": "",
    "valor_mensal": "",
    "valor_fixo": "",
    "cor_mapa": "",
    "ativo": "S",
    "ultima_atualizacao": "",
    "inserir_contrato": "S",
    "id_plano": "",
    "id_tipo_cobranca": "",
    "fidelidade": "",
    "id_modelo_contrato": "",
    "inserir_acesso": "S",
    "autenticacao": "L",
    "tipo_conexao_mapa": "F",
    "id_grupo": "",
    "inserir_atendimento": "S",
    "prioridade": "M",
    "id_assunto": "",
    "id_wfl_processo": "",
    "menssagem": "",
    "inserir_tarefa": "S",
    "id_tipo_agendamento": ""
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
  url: 'https://HOST/webservice/v1/crm_planos_negociacoes',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'crm_planos_negociacoes.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'crm_planos_negociacoes.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    