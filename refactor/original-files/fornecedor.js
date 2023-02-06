
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/fornecedor',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'razao': '',
    'fantasia': '',
    'tipo': '',
    'tipo_plano_id': '3',
    'data': '',
    'tipo_pessoa': 'J',
    'cpf_cnpj': '',
    'ie_identidade': '',
    'rg_orgao_emissor': '',
    'contribuinte_icms': 'N',
    'ativo': 'S',
    'obs': '',
    'duplicata': '',
    'lote': '',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'telefone': '',
    'id_operadora_celular': '',
    'celular': '',
    'email': '',
    'site': '',
    'cep': '',
    'endereco': '',
    'numero': '',
    'bairro': '',
    'cidade': '',
    'referencia': '',
    'id_conta': '',
    'representante': '',
    'telefone_representante': ''
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
  url: 'https://HOST/webservice/v1/fornecedor/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/fornecedor/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "razao": "",
    "fantasia": "",
    "tipo": "",
    "tipo_plano_id": "3",
    "data": "",
    "tipo_pessoa": "J",
    "cpf_cnpj": "",
    "ie_identidade": "",
    "rg_orgao_emissor": "",
    "contribuinte_icms": "N",
    "ativo": "S",
    "obs": "",
    "duplicata": "",
    "lote": "",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "telefone": "",
    "id_operadora_celular": "",
    "celular": "",
    "email": "",
    "site": "",
    "cep": "",
    "endereco": "",
    "numero": "",
    "bairro": "",
    "cidade": "",
    "referencia": "",
    "id_conta": "",
    "representante": "",
    "telefone_representante": ""
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
  url: 'https://HOST/webservice/v1/fornecedor',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'fornecedor.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'fornecedor.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    