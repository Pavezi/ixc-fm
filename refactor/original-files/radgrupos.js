
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/radgrupos',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'tipo': 'I',
    'id_produto': '',
    'id_sub_projeto': '',
    'grupo': '',
    'id_pool': '',
    'id_rad_dns': '',
    'address_list': '',
    'address_list_ipv6': '',
    'valor_produto': '',
    'cor_mapa': '',
    'ultima_atualizacao': '',
    'qos_ativo': 'S',
    'alteracao_velocidade': 'P',
    'ativo_normal': 'N',
    'horas_normal': '',
    'upload': '',
    'upload_busrt': '',
    'upload_busrt_th': '',
    'upload_busrt_time': '',
    'download': '',
    'download_busrt': '',
    'download_busrt_th': '',
    'download_busrt_time': '',
    'prioridade': '1',
    'garantia_upload': '',
    'garantia_download': '',
    'red_ativo': 'N',
    'horas_reduzido': '',
    'id_plano_reduzir': '',
    'red_upload': '',
    'red_upload_busrt': '',
    'red_upload_busrt_th': '',
    'red_upload_busrt_time': '',
    'red_download': '',
    'red_download_busrt': '',
    'red_download_busrt_th': '',
    'red_download_busrt_time': '',
    'red_prioridade': '1',
    'red_garantia_upload': '',
    'red_garantia_download': '',
    'tur_ativo': 'N',
    'horas_turbinado': '',
    'id_plano_turbinar': '',
    'tur_upload': '',
    'tur_upload_busrt': '',
    'tur_upload_busrt_th': '',
    'tur_upload_busrt_time': '',
    'tur_download': '',
    'tur_download_busrt': '',
    'tur_download_busrt_th': '',
    'tur_download_busrt_time': '',
    'tur_prioridade': '1',
    'tur_garantia_upload': '',
    'tur_garantia_download': '',
    'franquia_mensal': '0',
    'tipo_franquia': 'U',
    'id_plano_franquia': '',
    'reduzir_dias_atraso': '',
    'id_plano_atraso': '',
    'sici_tecnologia': 'C',
    'dici_download': '',
    'dici_tipo_conexao_mapa': '58',
    'type_band_control': 'l3',
    'ingress_juniper_policy_l2': '',
    'egress_juniper_policy_l2': '',
    'juniper_static_policy': 'S',
    'ingress_juniper_policy_ipv4': '',
    'egress_juniper_policy_ipv4': '',
    'ingress_juniper_policy_ipv6': '',
    'egress_juniper_policy_ipv6': '',
    'usa_active': 'S',
    'ativa_parametro_v6_juniper': 'S',
    'nome_perfil_router': '',
    'perfil_juniper_ipv6': '',
    'usa_perfil_huawei_dinamico': 'S',
    'usa_perfil_huawei': 'S',
    'nome_perfil_router_huawei': '',
    'gera_param_accel': 'S',
    'cisco_ativo': 'S',
    'cisco_static_qos': 'S',
    'cisco_dinamic_qos': 'S',
    'cisco_police_in': '',
    'cisco_police_out': '',
    'ingress_cisco_policy_ipv6': '',
    'egress_cisco_policy_ipv6': '',
    'usa_perfil_nokia_dinamico': 'N',
    'usa_perfil_nokia': 'S',
    'usar_perfil_nokia_e': 'S',
    'nome_perfil_router_nokia': '',
    'olt_hw_download': '',
    'olt_hw_upload': '',
    'perfil_fiberhome': ''
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
  url: 'https://HOST/webservice/v1/radgrupos/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/radgrupos/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "tipo": "I",
    "id_produto": "",
    "id_sub_projeto": "",
    "grupo": "",
    "id_pool": "",
    "id_rad_dns": "",
    "address_list": "",
    "address_list_ipv6": "",
    "valor_produto": "",
    "cor_mapa": "",
    "ultima_atualizacao": "",
    "qos_ativo": "S",
    "alteracao_velocidade": "P",
    "ativo_normal": "N",
    "horas_normal": "",
    "upload": "",
    "upload_busrt": "",
    "upload_busrt_th": "",
    "upload_busrt_time": "",
    "download": "",
    "download_busrt": "",
    "download_busrt_th": "",
    "download_busrt_time": "",
    "prioridade": "1",
    "garantia_upload": "",
    "garantia_download": "",
    "red_ativo": "N",
    "horas_reduzido": "",
    "id_plano_reduzir": "",
    "red_upload": "",
    "red_upload_busrt": "",
    "red_upload_busrt_th": "",
    "red_upload_busrt_time": "",
    "red_download": "",
    "red_download_busrt": "",
    "red_download_busrt_th": "",
    "red_download_busrt_time": "",
    "red_prioridade": "1",
    "red_garantia_upload": "",
    "red_garantia_download": "",
    "tur_ativo": "N",
    "horas_turbinado": "",
    "id_plano_turbinar": "",
    "tur_upload": "",
    "tur_upload_busrt": "",
    "tur_upload_busrt_th": "",
    "tur_upload_busrt_time": "",
    "tur_download": "",
    "tur_download_busrt": "",
    "tur_download_busrt_th": "",
    "tur_download_busrt_time": "",
    "tur_prioridade": "1",
    "tur_garantia_upload": "",
    "tur_garantia_download": "",
    "franquia_mensal": "0",
    "tipo_franquia": "U",
    "id_plano_franquia": "",
    "reduzir_dias_atraso": "",
    "id_plano_atraso": "",
    "sici_tecnologia": "C",
    "dici_download": "",
    "dici_tipo_conexao_mapa": "58",
    "type_band_control": "l3",
    "ingress_juniper_policy_l2": "",
    "egress_juniper_policy_l2": "",
    "juniper_static_policy": "S",
    "ingress_juniper_policy_ipv4": "",
    "egress_juniper_policy_ipv4": "",
    "ingress_juniper_policy_ipv6": "",
    "egress_juniper_policy_ipv6": "",
    "usa_active": "S",
    "ativa_parametro_v6_juniper": "S",
    "nome_perfil_router": "",
    "perfil_juniper_ipv6": "",
    "usa_perfil_huawei_dinamico": "S",
    "usa_perfil_huawei": "S",
    "nome_perfil_router_huawei": "",
    "gera_param_accel": "S",
    "cisco_ativo": "S",
    "cisco_static_qos": "S",
    "cisco_dinamic_qos": "S",
    "cisco_police_in": "",
    "cisco_police_out": "",
    "ingress_cisco_policy_ipv6": "",
    "egress_cisco_policy_ipv6": "",
    "usa_perfil_nokia_dinamico": "N",
    "usa_perfil_nokia": "S",
    "usar_perfil_nokia_e": "S",
    "nome_perfil_router_nokia": "",
    "olt_hw_download": "",
    "olt_hw_upload": "",
    "perfil_fiberhome": ""
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
  url: 'https://HOST/webservice/v1/radgrupos',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'radgrupos.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'radgrupos.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    