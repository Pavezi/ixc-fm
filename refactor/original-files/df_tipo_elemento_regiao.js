
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/df_tipo_elemento_regiao',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'nome_tipo': '',
    'especura_linha': '3',
    'cor_fundo': '',
    'cor_ativa': '',
    'pontilhada': 'N',
    'verificar_viabilidade': 'S',
    'classificacao_tipo': 'Polygon',
    'id_categoria_tipo': '5',
    'categoria_tipo': '5',
    'tec_28': 'S',
    'tec_58': 'S',
    'tec_adsl': 'S',
    'tec_cabo': 'S',
    'tec_fibra': 'S',
    'url_icone': 'NULL'
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
  url: 'https://HOST/webservice/v1/df_tipo_elemento_regiao/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/df_tipo_elemento_regiao/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "nome_tipo": "",
    "especura_linha": "3",
    "cor_fundo": "",
    "cor_ativa": "",
    "pontilhada": "N",
    "verificar_viabilidade": "S",
    "classificacao_tipo": "Polygon",
    "id_categoria_tipo": "5",
    "categoria_tipo": "5",
    "tec_28": "S",
    "tec_58": "S",
    "tec_adsl": "S",
    "tec_cabo": "S",
    "tec_fibra": "S",
    "url_icone": "NULL"
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
  url: 'https://HOST/webservice/v1/df_tipo_elemento_regiao',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'df_tipo_elemento_regiao.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'df_tipo_elemento_regiao.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    