
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/radpop_radio_cliente_fibra',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'radpop_estrutura': 'N',
    'id_projeto': '',
    'id_caixa_ftth': '',
    'porta_ftth': '',
    'id_transmissor': '',
    'id_hardware': '',
    'id_contrato': '',
    'id_login': '',
    'id_ramal': '',
    'nome': '',
    'mac': '',
    'id_perfil': '',
    'ponid': '',
    'vlan': '',
    'onu_numero': '',
    'gemport': '',
    'service_port': '0',
    'comandos': '',
    'id_chamado_radpop': '0',
    'vlan_pppoe': '',
    'vlan_dhcp': '',
    'vlan_tr69': '',
    'vlan_iptv': '',
    'vlan_voip': '',
    'vlan_outros': '',
    'ip_gerencia': '',
    'login_onu_cliente': 'admin',
    'senha_onu_cliente': 'admin',
    'porta_telnet_onu_cliente': '23',
    'porta_web_onu_cliente': '80',
    'perfil_onu_cliente': '',
    'script_onu_cliente': '',
    'onu_tipo': '',
    'slotno': '',
    'ponno': '',
    'tipo_autenticacao': 'MAC',
    'versao': '',
    'sinal_rx': '',
    'sinal_tx': '',
    'temperatura': '',
    'voltagem': '',
    'data_sinal': '',
    'causa_ultima_queda': '',
    'senorid': '',
    'distancia_onu': '',
    'id_onu_unms': '',
    'id_activity': '',
    'endereco_padrao_cliente': 'S',
    'condominio_cliente': '',
    'id_condominio': '',
    'bloco_cliente': '',
    'bloco': '',
    'apartamento_cliente': '',
    'apartamento': '',
    'cep_cliente': '',
    'cep': '',
    'endereco_cliente': '',
    'endereco': '',
    'numero_cliente': '',
    'numero': '',
    'bairro_cliente': '',
    'bairro': '',
    'cidade_cliente': '',
    'cidade': '',
    'referencia_cliente': '',
    'referencia': '',
    'complemento_cliente': '',
    'complemento': '',
    'latitude': '',
    'longitude': ''
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
  url: 'https://HOST/webservice/v1/radpop_radio_cliente_fibra/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/radpop_radio_cliente_fibra/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "radpop_estrutura": "N",
    "id_projeto": "",
    "id_caixa_ftth": "",
    "porta_ftth": "",
    "id_transmissor": "",
    "id_hardware": "",
    "id_contrato": "",
    "id_login": "",
    "id_ramal": "",
    "nome": "",
    "mac": "",
    "id_perfil": "",
    "ponid": "",
    "vlan": "",
    "onu_numero": "",
    "gemport": "",
    "service_port": "0",
    "comandos": "",
    "id_chamado_radpop": "0",
    "vlan_pppoe": "",
    "vlan_dhcp": "",
    "vlan_tr69": "",
    "vlan_iptv": "",
    "vlan_voip": "",
    "vlan_outros": "",
    "ip_gerencia": "",
    "login_onu_cliente": "admin",
    "senha_onu_cliente": "admin",
    "porta_telnet_onu_cliente": "23",
    "porta_web_onu_cliente": "80",
    "perfil_onu_cliente": "",
    "script_onu_cliente": "",
    "onu_tipo": "",
    "slotno": "",
    "ponno": "",
    "tipo_autenticacao": "MAC",
    "versao": "",
    "sinal_rx": "",
    "sinal_tx": "",
    "temperatura": "",
    "voltagem": "",
    "data_sinal": "",
    "causa_ultima_queda": "",
    "senorid": "",
    "distancia_onu": "",
    "id_onu_unms": "",
    "id_activity": "",
    "endereco_padrao_cliente": "S",
    "condominio_cliente": "",
    "id_condominio": "",
    "bloco_cliente": "",
    "bloco": "",
    "apartamento_cliente": "",
    "apartamento": "",
    "cep_cliente": "",
    "cep": "",
    "endereco_cliente": "",
    "endereco": "",
    "numero_cliente": "",
    "numero": "",
    "bairro_cliente": "",
    "bairro": "",
    "cidade_cliente": "",
    "cidade": "",
    "referencia_cliente": "",
    "referencia": "",
    "complemento_cliente": "",
    "complemento": "",
    "latitude": "",
    "longitude": ""
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
  url: 'https://HOST/webservice/v1/radpop_radio_cliente_fibra',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'radpop_radio_cliente_fibra.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'radpop_radio_cliente_fibra.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    