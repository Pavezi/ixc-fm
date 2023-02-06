
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/contato',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'principal': 'N',
    'id_cliente': '',
    'nome': '',
    'tipo_pessoa': 'F',
    'cnpj_cpf': '',
    'data_nascimento': '',
    'razao': '',
    'id_filial': '',
    'id_contato_tipo': '',
    'id_candidato_tipo': '',
    'id_responsavel': '',
    'indicado_por': '',
    'data_cadastro': '',
    'data': '',
    'id_vd_contrato': '',
    'id_tipo_elemento': '',
    'velocidade_calculada': '',
    'id_fornecedor': '',
    'lead': 'S',
    'ativo': 'S',
    'id_caixa_ftth': '',
    'distancia_caixa_mais_proxima': '',
    'id_prospeccao': '',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'fone_residencial': '',
    'fone_comercial': '',
    'fone_celular': '',
    'fone_whatsapp': '',
    'email': '',
    'skype': '',
    'facebook': '',
    'website': '',
    'cep': '',
    'endereco': '',
    'numero': '',
    'bairro': '',
    'complemento': '',
    'cidade': '',
    'uf': '',
    'referencia': '',
    'moradia': 'P',
    'tipo_localidade': 'U',
    'latitude': '',
    'longitude': '',
    'pipe_id_pessoa': '',
    'cadastro_site': 'N',
    'status_viabilidade': '',
    'data_ult_verificacao_viab': '',
    'caixa_mais_proxima': '',
    'data_cadastro_lead': '',
    'velocidade_calculada_lead': '',
    'quantidade_pessoas_lead': '',
    'quantidade_smart_lead': '',
    'frequencia_smart_lead': '',
    'quantidade_celular_lead': '',
    'frequencia_celular_lead': '',
    'quantidade_computador_lead': '',
    'frequencia_computador_lead': '',
    'quantidade_console_lead': '',
    'frequencia_console_lead': '',
    'obs': '',
    'alerta': '',
    'identificador': '',
    'origem_medium': '',
    'origem_campaing': '',
    'origem_source': '',
    'conversao_duplicada_marketing': ''
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
  url: 'https://HOST/webservice/v1/contato/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/contato/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "principal": "N",
    "id_cliente": "",
    "nome": "",
    "tipo_pessoa": "F",
    "cnpj_cpf": "",
    "data_nascimento": "",
    "razao": "",
    "id_filial": "",
    "id_contato_tipo": "",
    "id_candidato_tipo": "",
    "id_responsavel": "",
    "indicado_por": "",
    "data_cadastro": "",
    "data": "",
    "id_vd_contrato": "",
    "id_tipo_elemento": "",
    "velocidade_calculada": "",
    "id_fornecedor": "",
    "lead": "S",
    "ativo": "S",
    "id_caixa_ftth": "",
    "distancia_caixa_mais_proxima": "",
    "id_prospeccao": "",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "fone_residencial": "",
    "fone_comercial": "",
    "fone_celular": "",
    "fone_whatsapp": "",
    "email": "",
    "skype": "",
    "facebook": "",
    "website": "",
    "cep": "",
    "endereco": "",
    "numero": "",
    "bairro": "",
    "complemento": "",
    "cidade": "",
    "uf": "",
    "referencia": "",
    "moradia": "P",
    "tipo_localidade": "U",
    "latitude": "",
    "longitude": "",
    "pipe_id_pessoa": "",
    "cadastro_site": "N",
    "status_viabilidade": "",
    "data_ult_verificacao_viab": "",
    "caixa_mais_proxima": "",
    "data_cadastro_lead": "",
    "velocidade_calculada_lead": "",
    "quantidade_pessoas_lead": "",
    "quantidade_smart_lead": "",
    "frequencia_smart_lead": "",
    "quantidade_celular_lead": "",
    "frequencia_celular_lead": "",
    "quantidade_computador_lead": "",
    "frequencia_computador_lead": "",
    "quantidade_console_lead": "",
    "frequencia_console_lead": "",
    "obs": "",
    "alerta": "",
    "identificador": "",
    "origem_medium": "",
    "origem_campaing": "",
    "origem_source": "",
    "conversao_duplicada_marketing": ""
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
  url: 'https://HOST/webservice/v1/contato',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'contato.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'contato.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    