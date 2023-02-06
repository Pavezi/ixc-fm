
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/configuracao_geral',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'diretorio_do_log': '',
    'ativar_depuracao_sistema': 'N',
    'habilitar_web_services': 'N',
    'ativar_depuracao_idioma': 'N',
    'usuario': '',
    'senha_usuario': '',
    'url': '',
    'favicon': '',
    'manutencao': 'N',
    'mensagem': '',
    'nome_site': '',
    'tamanho_lista': '',
    'quantidade_noticias_externas': '',
    'email_noticias_externas': 'A',
    'template': '',
    'usa_template_personalizado': 'N',
    'envia_sms_app': 'N',
    'envia_email_app': 'N',
    'imprime_venda_fatura_app': 'N',
    'hotsite_logo': '',
    'firebase_server_key_legacy': '',
    'firebase_secret': '',
    'url_app_android': '',
    'speedtest_server': '',
    'habilitar_financeiro': 'S',
    'habilitar_contratos': 'S',
    'habilitar_assinaturas': 'S',
    'mostra_menu_nota_app': 'S',
    'habilitar_extrato_internet': 'S',
    'habilitar_suporte': 'S',
    'habilitar_contato': 'S',
    'habilitar_menu_conexao': 'S',
    'exibir_detalhamento_financeiro': 'S',
    'habilitar_declaracao_debitos': 'S',
    'habilitar_mostra_vendas': 'S',
    'habilitar_compras': 'S',
    'habilitar_altera_senha': 'S',
    'descricao_site': '',
    'palavras_chave_site': '',
    'exibir_titulo': 'S',
    'exibir_autor': 'S',
    'theme_color': '',
    'urls_amigaveis_search_engine_friendly': 'N',
    'mod_rewrite_do_apache': 'N',
    'adicionar_sufixo_urls': 'N',
    'permitir_cadastros_usuario': 'S',
    'prospeccao_cadastro_usuario': 'S',
    'identificacao_central_assinante': 'F',
    'tipo_login': 'E',
    'bloquear_ip': 'S',
    'acesso_automatico_central': 'S',
    'ativacao_cadastro_usuario': 'S',
    'aviso_login_cliente': 'S',
    'alterar_senha_primeiro_acesso': 'N',
    'usuario_senha': 'E',
    'recupera_senha': 'E',
    'gateway_sms': '',
    'parametros_usuario_site': 'E',
    'tipo_cadastro_usuario': '1',
    'cliente_tipo': '1',
    'planejamento_cliente': '',
    'login_campo_texto': '',
    'recebe_email_notificacao_alt_cadastral': 'N',
    'email_notificacao_alt_cadastral': '',
    'cad_cli_fantasia': 'M',
    'cad_cli_cpf': 'O',
    'cad_cli_rg': 'M',
    'cad_cli_data_nascimento': 'M',
    'cad_cli_telefone': 'O',
    'cad_cli_celular': 'M',
    'cad_cli_telefone_comercial': 'M',
    'cad_cli_ramal': 'M',
    'cad_cli_cep': 'O',
    'cad_cli_endereco': 'O',
    'cad_cli_numero': 'O',
    'cad_cli_bairro': 'O',
    'cad_cli_referencia': 'M',
    'cad_cli_complemento': 'M',
    'cad_cli_cidade': 'O',
    'cad_cli_sexo': 'E',
    'extensoes_permitidas': '',
    'tamanho_maximo_bytes': '',
    'caminho_diretorio_midia': '',
    'caminho_diretorio_imagem': '',
    'restringir_uploads': 'S',
    'nivel_minimo_usuario_acesso_adm_midia': 'T',
    'verificar_tipos_mime': 'S',
    'extensoes_imagens': '',
    'extensoes_ignoradas': '',
    'tipos_mime_permitidos': '',
    'tipos_mine_proibidos': '',
    'habilitar_flash_uploader': 'N',
    'cache': 'N',
    'tempo_cache': '',
    'fuso_horario': '',
    'caminho_diretorio_temporario': '',
    'compressao_paginas_gzip': 'N',
    'relatorio_erros': '',
    'forcar_ssl': 'N',
    'habilitar_ftp': 'S',
    'endereco_ftp': '',
    'porta_ftp': '',
    'usuario_ftp': '',
    'senha_ftp': '',
    'raiz_ftp': '',
    'nome_smtp': '',
    'porta_smtp': '',
    'autenticacao_smtp': 'S',
    'segurancao_smtp': 'S',
    'usuario_smtp': '',
    'senha_smtp': '',
    'id_smtp': '',
    'fatura_antecedencia': '15',
    'fatura_mostrar_apos_vencimento': '0',
    'fatura_pos_emissao': '0',
    'notificacao_financeiro': '',
    'credit_card_habilitar': 'S',
    'mostrar_request_error': 'N',
    'conceder_desconto_cartcredito_central': 'S',
    'credit_card_carteira': '',
    'credit_card_recorrente': 'S',
    'credit_card_recorrente_id_smtp': '',
    'credit_card_recorrente_email_interno': '',
    'credit_card_recorrente_max_dias_reenvio': '',
    'permitir_recorrencia_cartao_titulos_remessa': 'N',
    'avisar_cancel_recorrencia': 'N',
    'pix_habilitar': 'S',
    'pix_carteira': '',
    'suporte_usuario': '',
    'permitir_reabrir_atendimento': 'S',
    'suporte_mail_send': 'S',
    'suporte_mail': '',
    'suporte_mail_senha': '',
    'whatsapp_link': '',
    'webchat_link': '',
    'telefone_contato': '',
    'geracao_financeiro': '',
    'aviso_bloqueio': '',
    'aviso_confirmacao_pagamento': '',
    'bloqueio_automatico': '',
    'desbloqueio_confianca': '',
    'liberar_acesso_temporariamente': '',
    'liberar_acesso': '',
    'contrato_pendencia': ''
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
  url: 'https://HOST/webservice/v1/configuracao_geral/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/configuracao_geral/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "diretorio_do_log": "",
    "ativar_depuracao_sistema": "N",
    "habilitar_web_services": "N",
    "ativar_depuracao_idioma": "N",
    "usuario": "",
    "senha_usuario": "",
    "url": "",
    "favicon": "",
    "manutencao": "N",
    "mensagem": "",
    "nome_site": "",
    "tamanho_lista": "",
    "quantidade_noticias_externas": "",
    "email_noticias_externas": "A",
    "template": "",
    "usa_template_personalizado": "N",
    "envia_sms_app": "N",
    "envia_email_app": "N",
    "imprime_venda_fatura_app": "N",
    "hotsite_logo": "",
    "firebase_server_key_legacy": "",
    "firebase_secret": "",
    "url_app_android": "",
    "speedtest_server": "",
    "habilitar_financeiro": "S",
    "habilitar_contratos": "S",
    "habilitar_assinaturas": "S",
    "mostra_menu_nota_app": "S",
    "habilitar_extrato_internet": "S",
    "habilitar_suporte": "S",
    "habilitar_contato": "S",
    "habilitar_menu_conexao": "S",
    "exibir_detalhamento_financeiro": "S",
    "habilitar_declaracao_debitos": "S",
    "habilitar_mostra_vendas": "S",
    "habilitar_compras": "S",
    "habilitar_altera_senha": "S",
    "descricao_site": "",
    "palavras_chave_site": "",
    "exibir_titulo": "S",
    "exibir_autor": "S",
    "theme_color": "",
    "urls_amigaveis_search_engine_friendly": "N",
    "mod_rewrite_do_apache": "N",
    "adicionar_sufixo_urls": "N",
    "permitir_cadastros_usuario": "S",
    "prospeccao_cadastro_usuario": "S",
    "identificacao_central_assinante": "F",
    "tipo_login": "E",
    "bloquear_ip": "S",
    "acesso_automatico_central": "S",
    "ativacao_cadastro_usuario": "S",
    "aviso_login_cliente": "S",
    "alterar_senha_primeiro_acesso": "N",
    "usuario_senha": "E",
    "recupera_senha": "E",
    "gateway_sms": "",
    "parametros_usuario_site": "E",
    "tipo_cadastro_usuario": "1",
    "cliente_tipo": "1",
    "planejamento_cliente": "",
    "login_campo_texto": "",
    "recebe_email_notificacao_alt_cadastral": "N",
    "email_notificacao_alt_cadastral": "",
    "cad_cli_fantasia": "M",
    "cad_cli_cpf": "O",
    "cad_cli_rg": "M",
    "cad_cli_data_nascimento": "M",
    "cad_cli_telefone": "O",
    "cad_cli_celular": "M",
    "cad_cli_telefone_comercial": "M",
    "cad_cli_ramal": "M",
    "cad_cli_cep": "O",
    "cad_cli_endereco": "O",
    "cad_cli_numero": "O",
    "cad_cli_bairro": "O",
    "cad_cli_referencia": "M",
    "cad_cli_complemento": "M",
    "cad_cli_cidade": "O",
    "cad_cli_sexo": "E",
    "extensoes_permitidas": "",
    "tamanho_maximo_bytes": "",
    "caminho_diretorio_midia": "",
    "caminho_diretorio_imagem": "",
    "restringir_uploads": "S",
    "nivel_minimo_usuario_acesso_adm_midia": "T",
    "verificar_tipos_mime": "S",
    "extensoes_imagens": "",
    "extensoes_ignoradas": "",
    "tipos_mime_permitidos": "",
    "tipos_mine_proibidos": "",
    "habilitar_flash_uploader": "N",
    "cache": "N",
    "tempo_cache": "",
    "fuso_horario": "",
    "caminho_diretorio_temporario": "",
    "compressao_paginas_gzip": "N",
    "relatorio_erros": "",
    "forcar_ssl": "N",
    "habilitar_ftp": "S",
    "endereco_ftp": "",
    "porta_ftp": "",
    "usuario_ftp": "",
    "senha_ftp": "",
    "raiz_ftp": "",
    "nome_smtp": "",
    "porta_smtp": "",
    "autenticacao_smtp": "S",
    "segurancao_smtp": "S",
    "usuario_smtp": "",
    "senha_smtp": "",
    "id_smtp": "",
    "fatura_antecedencia": "15",
    "fatura_mostrar_apos_vencimento": "0",
    "fatura_pos_emissao": "0",
    "notificacao_financeiro": "",
    "credit_card_habilitar": "S",
    "mostrar_request_error": "N",
    "conceder_desconto_cartcredito_central": "S",
    "credit_card_carteira": "",
    "credit_card_recorrente": "S",
    "credit_card_recorrente_id_smtp": "",
    "credit_card_recorrente_email_interno": "",
    "credit_card_recorrente_max_dias_reenvio": "",
    "permitir_recorrencia_cartao_titulos_remessa": "N",
    "avisar_cancel_recorrencia": "N",
    "pix_habilitar": "S",
    "pix_carteira": "",
    "suporte_usuario": "",
    "permitir_reabrir_atendimento": "S",
    "suporte_mail_send": "S",
    "suporte_mail": "",
    "suporte_mail_senha": "",
    "whatsapp_link": "",
    "webchat_link": "",
    "telefone_contato": "",
    "geracao_financeiro": "",
    "aviso_bloqueio": "",
    "aviso_confirmacao_pagamento": "",
    "bloqueio_automatico": "",
    "desbloqueio_confianca": "",
    "liberar_acesso_temporariamente": "",
    "liberar_acesso": "",
    "contrato_pendencia": ""
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
  url: 'https://HOST/webservice/v1/configuracao_geral',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'configuracao_geral.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'configuracao_geral.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    