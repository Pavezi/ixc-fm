
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/crm_canditados',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'razao': '',
    'fantasia': '',
    'id_candato_tipo': '',
    'id_concorrente': '',
    'id_perfil': '',
    'responsavel': '',
    'indicado_por': '',
    'status_prospeccao': 'C',
    'tipo_pessoa': 'F',
    'cnpj_cpf': '',
    'ie_identidade': '',
    'data_nascimento': '',
    'filial_id': '',
    'ativo': 'S',
    'data_cadastro': '',
    'prospeccao_ultimo_contato': '',
    'prospeccao_proximo_contato': '',
    'id_vendedor': '',
    'id_conta': '',
    'id_vd_contrato_desejado': '',
    'cadastrado_via_viabilidade': 'N',
    'ultima_atualizacao': 'current_timestamp()',
    'id_contato_principal': '',
    'fone': '',
    'telefone_comercial': '',
    'telefone_celular': '',
    'whatsapp': '',
    'ramal': '',
    'email': '',
    'contato': '',
    'website': '',
    'skype': '',
    'facebook': '',
    'id_condominio': '',
    'bloco': '',
    'apartamento': '',
    'cep': '',
    'endereco': '',
    'numero': '',
    'bairro': '',
    'cidade': '',
    'complemento': '',
    'referencia': '',
    'uf': '1',
    'moradia': 'P',
    'tipo_localidade': 'U',
    'latitude': '',
    'longitude': '',
    'crm': 'S',
    'pipe_id_organizacao': '',
    'idx': '',
    'crm_data_novo': '',
    'crm_data_sondagem': '',
    'crm_data_apresentando': '',
    'crm_data_negociando': '',
    'crm_data_vencemos': '',
    'crm_data_perdemos': '',
    'crm_data_abortamos': '',
    'crm_data_sem_viabilidade': '',
    'crm_data_sem_porta_disponivel': '',
    'obs': '',
    'alerta': '',
    'resultado_calc_vel': '',
    'qtd_pessoas_calc_vel': '',
    'qtd_smart_calc_vel': '',
    'freq_smart_calc_vel': '',
    'qtd_celular_calc_vel': '',
    'freq_celular_calc_vel': '',
    'qtd_computador_calc_vel': 'NULL',
    'freq_computador_calc_vel': '',
    'qtd_console_calc_vel': 'NULL',
    'freq_console_calc_vel': 'NULL',
    'plano_negociacao_auto_viab': '',
    'tipo_cobranca_auto_viab': '',
    'data_reserva_auto_viab': '',
    'melhor_periodo_reserva_auto_viab': ''
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
  url: 'https://HOST/webservice/v1/crm_canditados/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/crm_canditados/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "razao": "",
    "fantasia": "",
    "id_candato_tipo": "",
    "id_concorrente": "",
    "id_perfil": "",
    "responsavel": "",
    "indicado_por": "",
    "status_prospeccao": "C",
    "tipo_pessoa": "F",
    "cnpj_cpf": "",
    "ie_identidade": "",
    "data_nascimento": "",
    "filial_id": "",
    "ativo": "S",
    "data_cadastro": "",
    "prospeccao_ultimo_contato": "",
    "prospeccao_proximo_contato": "",
    "id_vendedor": "",
    "id_conta": "",
    "id_vd_contrato_desejado": "",
    "cadastrado_via_viabilidade": "N",
    "ultima_atualizacao": "current_timestamp()",
    "id_contato_principal": "",
    "fone": "",
    "telefone_comercial": "",
    "telefone_celular": "",
    "whatsapp": "",
    "ramal": "",
    "email": "",
    "contato": "",
    "website": "",
    "skype": "",
    "facebook": "",
    "id_condominio": "",
    "bloco": "",
    "apartamento": "",
    "cep": "",
    "endereco": "",
    "numero": "",
    "bairro": "",
    "cidade": "",
    "complemento": "",
    "referencia": "",
    "uf": "1",
    "moradia": "P",
    "tipo_localidade": "U",
    "latitude": "",
    "longitude": "",
    "crm": "S",
    "pipe_id_organizacao": "",
    "idx": "",
    "crm_data_novo": "",
    "crm_data_sondagem": "",
    "crm_data_apresentando": "",
    "crm_data_negociando": "",
    "crm_data_vencemos": "",
    "crm_data_perdemos": "",
    "crm_data_abortamos": "",
    "crm_data_sem_viabilidade": "",
    "crm_data_sem_porta_disponivel": "",
    "obs": "",
    "alerta": "",
    "resultado_calc_vel": "",
    "qtd_pessoas_calc_vel": "",
    "qtd_smart_calc_vel": "",
    "freq_smart_calc_vel": "",
    "qtd_celular_calc_vel": "",
    "freq_celular_calc_vel": "",
    "qtd_computador_calc_vel": "NULL",
    "freq_computador_calc_vel": "",
    "qtd_console_calc_vel": "NULL",
    "freq_console_calc_vel": "NULL",
    "plano_negociacao_auto_viab": "",
    "tipo_cobranca_auto_viab": "",
    "data_reserva_auto_viab": "",
    "melhor_periodo_reserva_auto_viab": ""
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
  url: 'https://HOST/webservice/v1/crm_canditados',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'crm_canditados.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'crm_canditados.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    