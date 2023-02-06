
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/radpop_radio',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'login_hw': '',
    'senha_hw': '',
    'fabricante_modelo': 'M',
    'descricao': '',
    'id_pop': '',
    'ip': '',
    'login': '',
    'senha': '',
    'perfil_fibra_padrao': '',
    'porta_ssh': '22',
    'porta_telnet': '23',
    'httpd_port': '',
    'id_prov_snmp': '',
    'porta_api': '',
    'ativo': 'S',
    'cor_mapa': '',
    'id_padrao_cores': '',
    'ip_anm': '',
    'login_anm': '',
    'senha_anm': '',
    'porta_telnet_tl1': '3337',
    'gabinete': '',
    'subrack': '',
    'usa_smart': 'S',
    'id_servidor_unms': '',
    'id_olt_unms': '',
    'id_olt_conscius': '',
    'id_olt_externo': '',
    'conexoes_ulltima_data': '',
    'conexoes_ultima': '',
    'fwversion': '',
    'uptime': '',
    'time': '',
    'modelo': '',
    'cpu_load': '',
    'total_memory': '',
    'free_memory': '',
    'temperatura': '',
    'voltagem': '',
    'current_firmware': '',
    'upgrade_firmware': '',
    'id_olt': '',
    'autosave': '',
    'speed_lan': '',
    'speed_wlan': '',
    'rxrate': '',
    'txrate': '',
    'usa_vpn': '0',
    'id_pv_grupo_backup': ''
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
  url: 'https://HOST/webservice/v1/radpop_radio/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/radpop_radio/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "login_hw": "",
    "senha_hw": "",
    "fabricante_modelo": "M",
    "descricao": "",
    "id_pop": "",
    "ip": "",
    "login": "",
    "senha": "",
    "perfil_fibra_padrao": "",
    "porta_ssh": "22",
    "porta_telnet": "23",
    "httpd_port": "",
    "id_prov_snmp": "",
    "porta_api": "",
    "ativo": "S",
    "cor_mapa": "",
    "id_padrao_cores": "",
    "ip_anm": "",
    "login_anm": "",
    "senha_anm": "",
    "porta_telnet_tl1": "3337",
    "gabinete": "",
    "subrack": "",
    "usa_smart": "S",
    "id_servidor_unms": "",
    "id_olt_unms": "",
    "id_olt_conscius": "",
    "id_olt_externo": "",
    "conexoes_ulltima_data": "",
    "conexoes_ultima": "",
    "fwversion": "",
    "uptime": "",
    "time": "",
    "modelo": "",
    "cpu_load": "",
    "total_memory": "",
    "free_memory": "",
    "temperatura": "",
    "voltagem": "",
    "current_firmware": "",
    "upgrade_firmware": "",
    "id_olt": "",
    "autosave": "",
    "speed_lan": "",
    "speed_wlan": "",
    "rxrate": "",
    "txrate": "",
    "usa_vpn": "0",
    "id_pv_grupo_backup": ""
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
  url: 'https://HOST/webservice/v1/radpop_radio',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'radpop_radio.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'radpop_radio.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    