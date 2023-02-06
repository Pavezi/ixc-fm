
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/radusuarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'autenticacao': 'L',
    'tipo_conexao_mapa': '58',
    'id_integracao': '',
    'lte_id': '',
    'id_cliente': '',
    'id_contrato': '',
    'id_filial': '',
    'contrato_plano_venda_': '',
    'id_grupo': '',
    'login': '',
    'agent_circuit_id': '',
    'senha_md5': 'N',
    'senha': '',
    'usuario_router1': '',
    'senha_router1': '',
    'senha_router2': '',
    'ssid_router_wifi': '',
    'senha_rede_sem_fio': '',
    'ssid_router_wifi_5ghz': '',
    'senha_rede_sem_fio_5ghz': '',
    '': '',
    'login_simultaneo': '1',
    'ativo': 'S',
    'online': '',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'ip': '',
    'ip_aviso': '',
    'auto_preencher_ip': 'H',
    'fixar_ip': 'H',
    'relacionar_ip_ao_login': 'H',
    'framed_pd_ipv6': '',
    'framed_autopreencher_ipv6': 'H',
    'framed_fixar_ipv6': 'H',
    'framed_relacionar_ipv6_ao_login': 'H',
    'pd_ipv6': '',
    'auto_preencher_ipv6': 'H',
    'fixar_ipv6': 'H',
    'relacionar_ipv6_ao_login': 'H',
    'mac': '',
    'autenticacao_por_mac': 'P',
    'autenticacao_wpa': '',
    'id_porta_transmissor': '',
    'auto_preencher_mac': 'H',
    'relacionar_mac_ao_login': 'H',
    'relacionar_concentrador_ao_login': 'H',
    'pool_radius': '',
    'id_radgrupos_pools': '',
    'id_rad_dns': '',
    'id_concentrador': '',
    'ip_concentrador': '',
    'interface': '',
    'vlan': '',
    'vlan_ip_rede': '',
    'gw_vlan': '',
    'service_tag_vlan': 'S',
    'mtu': '1500',
    'concentrador': '',
    'conexao': '',
    'tipo_conexao': '',
    'porta_http_nas': '',
    'acct_session_id': '',
    'tipo_vinculo_plano': 'D',
    'cliente_tem_a_senha': 'S',
    'autenticacao_wps': 'S',
    'autenticacao_mac': 'S',
    'porta_http': '',
    'porta_router2': '',
    'ip_aux': '',
    'porta_aux': '',
    'ultima_conexao_inicial': '',
    'ultima_conexao_final': '',
    'motivo_desconexao': '',
    'count_desconexao': '',
    'tempo_conexao': '',
    'tempo_conectado': '',
    'download_atual': '',
    'upload_atual': '',
    'franquia_maximo': '',
    'franquia_consumo': '',
    'franquia_consumo_up': '',
    'franquia_atingida': 'N',
    'onu_compartilhada': '',
    'id_df_projeto': '',
    'id_transmissor': '',
    'modelo_tranmissor': '',
    'interface_transmissao': '',
    'interface_transmissao_fibra': '',
    'id_caixa_ftth': '',
    'ftth_porta': '',
    'tronco': '',
    'splitter': '',
    'onu_mac': '',
    'sinal_ultimo_atendimento': '',
    'id_hardware': '',
    'tipo_equipamento': '',
    'metragem_interna': '',
    'metragem_externa': '',
    'endereco_padrao_cliente': 'S',
    'ponta': '',
    'id_condominio': '',
    'condominio_novo': '',
    'bloco': '',
    'bloco_novo': '',
    'apartamento': '',
    'apartamento_novo': '',
    'cep': '',
    'cep_novo': '',
    'endereco': '',
    'endereco_novo': '',
    'numero': '',
    'numero_novo': '',
    'bairro': '',
    'bairro_novo': '',
    'cidade': '',
    'cidade_novo': '',
    'referencia': '',
    'referencia_novo': '',
    'complemento': '',
    'complemento_novo': '',
    'latitude': '',
    'latitude_novo': '',
    'longitude': '',
    'longitude_novo': '',
    'obs': ''
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
  url: 'https://HOST/webservice/v1/radusuarios/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/radusuarios/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "autenticacao": "L",
    "tipo_conexao_mapa": "58",
    "id_integracao": "",
    "lte_id": "",
    "id_cliente": "",
    "id_contrato": "",
    "id_filial": "",
    "contrato_plano_venda_": "",
    "id_grupo": "",
    "login": "",
    "agent_circuit_id": "",
    "senha_md5": "N",
    "senha": "",
    "usuario_router1": "",
    "senha_router1": "",
    "senha_router2": "",
    "ssid_router_wifi": "",
    "senha_rede_sem_fio": "",
    "ssid_router_wifi_5ghz": "",
    "senha_rede_sem_fio_5ghz": "",
    "": "",
    "login_simultaneo": "1",
    "ativo": "S",
    "online": "",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "ip": "",
    "ip_aviso": "",
    "auto_preencher_ip": "H",
    "fixar_ip": "H",
    "relacionar_ip_ao_login": "H",
    "framed_pd_ipv6": "",
    "framed_autopreencher_ipv6": "H",
    "framed_fixar_ipv6": "H",
    "framed_relacionar_ipv6_ao_login": "H",
    "pd_ipv6": "",
    "auto_preencher_ipv6": "H",
    "fixar_ipv6": "H",
    "relacionar_ipv6_ao_login": "H",
    "mac": "",
    "autenticacao_por_mac": "P",
    "autenticacao_wpa": "",
    "id_porta_transmissor": "",
    "auto_preencher_mac": "H",
    "relacionar_mac_ao_login": "H",
    "relacionar_concentrador_ao_login": "H",
    "pool_radius": "",
    "id_radgrupos_pools": "",
    "id_rad_dns": "",
    "id_concentrador": "",
    "ip_concentrador": "",
    "interface": "",
    "vlan": "",
    "vlan_ip_rede": "",
    "gw_vlan": "",
    "service_tag_vlan": "S",
    "mtu": "1500",
    "concentrador": "",
    "conexao": "",
    "tipo_conexao": "",
    "porta_http_nas": "",
    "acct_session_id": "",
    "tipo_vinculo_plano": "D",
    "cliente_tem_a_senha": "S",
    "autenticacao_wps": "S",
    "autenticacao_mac": "S",
    "porta_http": "",
    "porta_router2": "",
    "ip_aux": "",
    "porta_aux": "",
    "ultima_conexao_inicial": "",
    "ultima_conexao_final": "",
    "motivo_desconexao": "",
    "count_desconexao": "",
    "tempo_conexao": "",
    "tempo_conectado": "",
    "download_atual": "",
    "upload_atual": "",
    "franquia_maximo": "",
    "franquia_consumo": "",
    "franquia_consumo_up": "",
    "franquia_atingida": "N",
    "onu_compartilhada": "",
    "id_df_projeto": "",
    "id_transmissor": "",
    "modelo_tranmissor": "",
    "interface_transmissao": "",
    "interface_transmissao_fibra": "",
    "id_caixa_ftth": "",
    "ftth_porta": "",
    "tronco": "",
    "splitter": "",
    "onu_mac": "",
    "sinal_ultimo_atendimento": "",
    "id_hardware": "",
    "tipo_equipamento": "",
    "metragem_interna": "",
    "metragem_externa": "",
    "endereco_padrao_cliente": "S",
    "ponta": "",
    "id_condominio": "",
    "condominio_novo": "",
    "bloco": "",
    "bloco_novo": "",
    "apartamento": "",
    "apartamento_novo": "",
    "cep": "",
    "cep_novo": "",
    "endereco": "",
    "endereco_novo": "",
    "numero": "",
    "numero_novo": "",
    "bairro": "",
    "bairro_novo": "",
    "cidade": "",
    "cidade_novo": "",
    "referencia": "",
    "referencia_novo": "",
    "complemento": "",
    "complemento_novo": "",
    "latitude": "",
    "latitude_novo": "",
    "longitude": "",
    "longitude_novo": "",
    "obs": ""
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
  url: 'https://HOST/webservice/v1/radusuarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'radusuarios.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'radusuarios.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    