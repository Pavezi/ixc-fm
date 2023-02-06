
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/radpop_radio_cliente',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'id_pop_radio': '',
    'id_pop_radio_porta': '',
    'id_hardware': '',
    'id_radusuarios': '',
    'interface': '',
    'mac': '',
    'name': '',
    'id_pop': '',
    'ultima_atualizacao': '',
    'airmax_priority': '',
    'airmax_quality': '',
    'airmax_sinal': '',
    'airmax_capacity': '',
    'ap': '',
    'wds': '',
    'sinal': '',
    'ccq': '',
    'tx': '',
    'rx': '',
    'noise': '',
    'lastip': '',
    'bytes': '',
    'uptime': '',
    'distance': '',
    'ack': '',
    'signal_to_noise': '',
    'signal_strength_ch0': '',
    'signal_strength_ch1': '',
    'tx_ccq': '',
    'rx_ccq': '',
    'nstreme': '',
    'routeros_version': ''
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
  url: 'https://HOST/webservice/v1/radpop_radio_cliente/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/radpop_radio_cliente/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "id_pop_radio": "",
    "id_pop_radio_porta": "",
    "id_hardware": "",
    "id_radusuarios": "",
    "interface": "",
    "mac": "",
    "name": "",
    "id_pop": "",
    "ultima_atualizacao": "",
    "airmax_priority": "",
    "airmax_quality": "",
    "airmax_sinal": "",
    "airmax_capacity": "",
    "ap": "",
    "wds": "",
    "sinal": "",
    "ccq": "",
    "tx": "",
    "rx": "",
    "noise": "",
    "lastip": "",
    "bytes": "",
    "uptime": "",
    "distance": "",
    "ack": "",
    "signal_to_noise": "",
    "signal_strength_ch0": "",
    "signal_strength_ch1": "",
    "tx_ccq": "",
    "rx_ccq": "",
    "nstreme": "",
    "routeros_version": ""
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
  url: 'https://HOST/webservice/v1/radpop_radio_cliente',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'radpop_radio_cliente.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'radpop_radio_cliente.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    