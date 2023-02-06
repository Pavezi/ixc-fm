
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/rad_caixa_ftth',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'descricao': '',
    'tipo': 'P',
    'id_projeto': '',
    'id_transmissor': '',
    'id_interface': '',
    'id_tecnologia': '',
    'capacidade': '',
    'latitude': '',
    'longitude': '',
    'codigo_estilo_caixa': '50r7nh0u',
    'obs_caixa_ftth': '',
    'status': 'A',
    'idx': '',
    'ultima_atualizacao': '',
    'cep': '',
    'endereco': '',
    'numero': '',
    'bairro': '',
    'id_cidade': ''
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
  url: 'https://HOST/webservice/v1/rad_caixa_ftth/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/rad_caixa_ftth/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "descricao": "",
    "tipo": "P",
    "id_projeto": "",
    "id_transmissor": "",
    "id_interface": "",
    "id_tecnologia": "",
    "capacidade": "",
    "latitude": "",
    "longitude": "",
    "codigo_estilo_caixa": "50r7nh0u",
    "obs_caixa_ftth": "",
    "status": "A",
    "idx": "",
    "ultima_atualizacao": "",
    "cep": "",
    "endereco": "",
    "numero": "",
    "bairro": "",
    "id_cidade": ""
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
  url: 'https://HOST/webservice/v1/rad_caixa_ftth',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'rad_caixa_ftth.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'rad_caixa_ftth.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    