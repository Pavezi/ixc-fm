
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/tv_usuarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'id_contrato': '',
    'plataforma': 'apptec',
    'connection_type_tv': 'SAT',
    'id_vd_contratos_produtos': '',
    'account_id': '',
    'id_login_plataforma': '',
    'usar_email_principal': 'N',
    'profile_name': '',
    'pin': '',
    'birthday': '',
    'login': '',
    'senha': '',
    'token_assinante_watch': '',
    'status_assinante_watch': '',
    'id_portal': '',
    'controle_dos_pais': 'N',
    'mac_devices': '',
    'id_dealer': '',
    'version': '',
    'ip': '',
    'account_number': '',
    'online': '0',
    'device_limit_id': ''
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
  url: 'https://HOST/webservice/v1/tv_usuarios/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/tv_usuarios/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "id_contrato": "",
    "plataforma": "apptec",
    "connection_type_tv": "SAT",
    "id_vd_contratos_produtos": "",
    "account_id": "",
    "id_login_plataforma": "",
    "usar_email_principal": "N",
    "profile_name": "",
    "pin": "",
    "birthday": "",
    "login": "",
    "senha": "",
    "token_assinante_watch": "",
    "status_assinante_watch": "",
    "id_portal": "",
    "controle_dos_pais": "N",
    "mac_devices": "",
    "id_dealer": "",
    "version": "",
    "ip": "",
    "account_number": "",
    "online": "0",
    "device_limit_id": ""
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
  url: 'https://HOST/webservice/v1/tv_usuarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'tv_usuarios.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'tv_usuarios.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    