
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/su_oss_assunto',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'assunto': '',
    'finalidade': 'AM',
    'mostra_hotsite': 'N',
    'tipo': 'A',
    'id_resposta_padrao': '',
    'id_resposta_padrao_finalizacao': '',
    'ativo': 'S',
    'cor_marcador': '',
    'msg_regiao_manutencao': '',
    'ultima_atualizacao': '',
    'id_vendedor_faturamento': '',
    'obrigar_processo_atendimento': 'N',
    'id_processo': '',
    'login_obrigatorio': 'N',
    'layout_impressao': '',
    'imprimir_prod_serv': '',
    'numero_de_vias': '1',
    'su_oss_modelo_impressao': '',
    'modelo_email': '',
    'permite_abrir_cliente_atraso': 'P',
    'endereco_padrao': 'M',
    'habilitar_mini_projeto': 'S',
    'mesclar_mini_projetos_ao_finalizar_os': 'S',
    'setor_su_oss_chamado': '',
    'descricao': '',
    'mostrar_no_service': 'S',
    'exige_fotos_finalizacao_os': 'N',
    'quantidade_fotos_finalizacao_os': '1',
    'diagnostico_obrigatorio_finalizacao_os': 'N',
    'localizacao_obrigatoria_cliente_finalizacao_os': 'N',
    'localizacao_obrigatoria_login_finalizacao_os': 'N',
    'id_tipo_doc_comodato': '',
    'id_tipo_doc_pedido': '',
    'id_cond_pag_produto': '',
    'id_tipo_doc_servico': '',
    'id_cond_pag_servico': '',
    'id_tipo_doc_patrimonio_venda': '',
    'id_cond_pag_patrimonio_venda': '',
    'tipo_cobranca': 'NENHUM',
    'fat_somente_finalizada': 'N',
    'id_oss_kit': '',
    'tipo_comissao': 'F',
    'valor_comissao': '0,00',
    'equipe_obrigatoria_finalizacao_os': 'N',
    'horario_tempo_assunto': '',
    'formato_endereco': '#uf# #cidade# #cep# #bairro# - #endereco#, #numero#',
    'card_data_reservada': 'S',
    'validar_choque_horarios_agendamento_os': 'N',
    'sla_apenas_dias_uteis': 'P',
    'meta_horas_abertura': '72.0',
    'meta_horas_agendamento': '72.0',
    'metas_horas_abertura_ticket': '72.0',
    'wiz_comodato': 'M',
    'wiz_produtos': 'M',
    'wiz_mensalidade': 'M',
    'wiz_autorizar_ONU': 'M',
    'wiz_localizacao': 'M',
    'wiz_arquivos': 'M',
    'wiz_resumo_os': 'M',
    'wiz_servico': 'M',
    'wiz_assinatura_obrig': 'S',
    'id_checklist': '',
    'wiz_service_mobile_enviar_sms_deslocamento': 'S',
    'id_sms_deslocamento': '',
    'service_mobile_max_parc_adic_serv': '1',
    'wiz_service_mobile_adicionais': 'M',
    'wiz_service_mobile_onu': 'M',
    'wiz_service_mobile_loc': 'M',
    'wiz_service_mobile_anexos': 'M',
    'wiz_service_mobile_checklist': 'M'
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
  url: 'https://HOST/webservice/v1/su_oss_assunto/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/su_oss_assunto/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "assunto": "",
    "finalidade": "AM",
    "mostra_hotsite": "N",
    "tipo": "A",
    "id_resposta_padrao": "",
    "id_resposta_padrao_finalizacao": "",
    "ativo": "S",
    "cor_marcador": "",
    "msg_regiao_manutencao": "",
    "ultima_atualizacao": "",
    "id_vendedor_faturamento": "",
    "obrigar_processo_atendimento": "N",
    "id_processo": "",
    "login_obrigatorio": "N",
    "layout_impressao": "",
    "imprimir_prod_serv": "",
    "numero_de_vias": "1",
    "su_oss_modelo_impressao": "",
    "modelo_email": "",
    "permite_abrir_cliente_atraso": "P",
    "endereco_padrao": "M",
    "habilitar_mini_projeto": "S",
    "mesclar_mini_projetos_ao_finalizar_os": "S",
    "setor_su_oss_chamado": "",
    "descricao": "",
    "mostrar_no_service": "S",
    "exige_fotos_finalizacao_os": "N",
    "quantidade_fotos_finalizacao_os": "1",
    "diagnostico_obrigatorio_finalizacao_os": "N",
    "localizacao_obrigatoria_cliente_finalizacao_os": "N",
    "localizacao_obrigatoria_login_finalizacao_os": "N",
    "id_tipo_doc_comodato": "",
    "id_tipo_doc_pedido": "",
    "id_cond_pag_produto": "",
    "id_tipo_doc_servico": "",
    "id_cond_pag_servico": "",
    "id_tipo_doc_patrimonio_venda": "",
    "id_cond_pag_patrimonio_venda": "",
    "tipo_cobranca": "NENHUM",
    "fat_somente_finalizada": "N",
    "id_oss_kit": "",
    "tipo_comissao": "F",
    "valor_comissao": "0,00",
    "equipe_obrigatoria_finalizacao_os": "N",
    "horario_tempo_assunto": "",
    "formato_endereco": "#uf# #cidade# #cep# #bairro# - #endereco#, #numero#",
    "card_data_reservada": "S",
    "validar_choque_horarios_agendamento_os": "N",
    "sla_apenas_dias_uteis": "P",
    "meta_horas_abertura": "72.0",
    "meta_horas_agendamento": "72.0",
    "metas_horas_abertura_ticket": "72.0",
    "wiz_comodato": "M",
    "wiz_produtos": "M",
    "wiz_mensalidade": "M",
    "wiz_autorizar_ONU": "M",
    "wiz_localizacao": "M",
    "wiz_arquivos": "M",
    "wiz_resumo_os": "M",
    "wiz_servico": "M",
    "wiz_assinatura_obrig": "S",
    "id_checklist": "",
    "wiz_service_mobile_enviar_sms_deslocamento": "S",
    "id_sms_deslocamento": "",
    "service_mobile_max_parc_adic_serv": "1",
    "wiz_service_mobile_adicionais": "M",
    "wiz_service_mobile_onu": "M",
    "wiz_service_mobile_loc": "M",
    "wiz_service_mobile_anexos": "M",
    "wiz_service_mobile_checklist": "M"
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
  url: 'https://HOST/webservice/v1/su_oss_assunto',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'su_oss_assunto.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'su_oss_assunto.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    