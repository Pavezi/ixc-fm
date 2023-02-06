
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/cdr',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'uniqueid': '',
    'tempo_distribuidor': '',
    'dest_descricao': '',
    'dstchannel': '',
    'dcontext': '',
    'channel': '',
    'dest_pais': 'Brasil',
    'dnis': '',
    'did': '',
    'data_utc': '',
    'profit': '',
    'id_contrato_servico': '',
    'lote_importacao': '',
    'id_fatura': '',
    'lote': '',
    'ramal': '',
    'accountcode': '',
    'lastdata': '',
    'id_ligacao': '',
    'amaflags': '',
    'recordingfile': '',
    'userfield': '',
    'cnum': '',
    'cnam': '',
    'outbound_cnum': '',
    'dst_cnam': '',
    'outbound_cnam': '',
    'id_iax': '',
    'id_sip': '',
    'clid': '',
    'calldate': '0000-00-00 00:00:00',
    'src': '',
    'dst': '',
    'destino': '',
    'duration': '',
    'billsec': '',
    'id_tarifa': '',
    'tp_chamada': '',
    'custo': '',
    'valor_user': '',
    'tarifado': 'S',
    'lastapp': ' ',
    'disposition': ' ',
    'importado': 'N'
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
  url: 'https://HOST/webservice/v1/cdr/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/cdr/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "uniqueid": "",
    "tempo_distribuidor": "",
    "dest_descricao": "",
    "dstchannel": "",
    "dcontext": "",
    "channel": "",
    "dest_pais": "Brasil",
    "dnis": "",
    "did": "",
    "data_utc": "",
    "profit": "",
    "id_contrato_servico": "",
    "lote_importacao": "",
    "id_fatura": "",
    "lote": "",
    "ramal": "",
    "accountcode": "",
    "lastdata": "",
    "id_ligacao": "",
    "amaflags": "",
    "recordingfile": "",
    "userfield": "",
    "cnum": "",
    "cnam": "",
    "outbound_cnum": "",
    "dst_cnam": "",
    "outbound_cnam": "",
    "id_iax": "",
    "id_sip": "",
    "clid": "",
    "calldate": "0000-00-00 00:00:00",
    "src": "",
    "dst": "",
    "destino": "",
    "duration": "",
    "billsec": "",
    "id_tarifa": "",
    "tp_chamada": "",
    "custo": "",
    "valor_user": "",
    "tarifado": "S",
    "lastapp": " ",
    "disposition": " ",
    "importado": "N"
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
  url: 'https://HOST/webservice/v1/cdr',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'cdr.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'cdr.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    