
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/funcionarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'funcionario': '',
    'filial_id': '',
    'id_funcao': '',
    'id_departamento': '',
    'id_conta': '',
    'id_conta_decimo': '',
    'ramal': '',
    'coeficiente': '',
    'ativo': 'S',
    'exibir_colaborador_inmap': 'S',
    'cor_mapa': '',
    'data_admissao': '',
    'data_demissao': '',
    'obs': '',
    'percen_max_desc_areceber': '',
    'ctps_numero': '',
    'ctps_serie': '',
    'ctps_data_emissao': '',
    'ctps_cidade_emissao': '',
    'cpf_cnpj': '',
    'pis_numero': '',
    'pis_data': '',
    'ie_identidade': '',
    'rg_orgao_emissor': '',
    'rg_data_emissao': '',
    'nacionalidade': 'Brasileiro',
    'data_nascimento': '',
    'cnh_numero': '',
    'cnh_categoria': '',
    'cnh_vencimento': '',
    'titulo_numero': '',
    'titulo_zona': '',
    'titulo_secao': '',
    'rastreador': '',
    'ultima_atualizacao': '',
    'cep': '',
    'endereco': '',
    'numero': '',
    'cidade': '',
    'bairro': '',
    'complemento': '',
    'uf': '1',
    'referencia': '',
    'nome_pai': '',
    'nome_mae': '',
    'estado_civil': 'S',
    'nome_conjuge': '',
    'cpf_conjuge': '',
    'rg_conjuge': '',
    'dependentes_ir': '',
    'num_dependentes': '',
    'dep_um_nome': '',
    'dep_um_rg': '',
    'dep_um_cpf': '',
    'dep_dois_nome': '',
    'dep_dois_rg': '',
    'dep_dois_cpf': '',
    'dep_tres_nome': '',
    'dep_tres_rg': '',
    'dep_tres_cpf': '',
    'cor_raca': 'B',
    'num_manequim': '',
    'camiseta': 'M',
    'possui_deficiencia': 'N',
    'tipo_deficiencia': '',
    'grau_escolaridade': '',
    'estagio_escolaridade': '',
    'periodo_escolaridade': '',
    'fone': '',
    'telefone_comercial': '',
    'fone_celular': '',
    'fone_emergencia': '',
    'falar_com': '',
    'email': '',
    'id_email_smtp': '',
    'assinatura_email': '',
    'salario': '',
    'id_conta_salario': '',
    'cod_integracao_folha': 'NULL',
    'banco': '',
    'agencia': '',
    'agencia_dv': '',
    'conta': '',
    'numero_conta_dv': '',
    'tipo_recebimento': '',
    'camara_centralizadora': '',
    'envia_email_os': 'S',
    'envia_sms_os': 'N',
    'integracao_calendario': 'N',
    'envia_telegram_os': '',
    'telegram_chat_id_funcionario': '',
    'id_chat_telegram_funcionario': '',
    'id_setor_padrao': '',
    'img_assinatura': '',
    'id_perfil_jornada_trabalho': '',
    'ferias_colaborador': 'S',
    'prj_custo_hora_base': '',
    'prj_custo_hora_adicionais': ''
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
  url: 'https://HOST/webservice/v1/funcionarios/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/funcionarios/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "funcionario": "",
    "filial_id": "",
    "id_funcao": "",
    "id_departamento": "",
    "id_conta": "",
    "id_conta_decimo": "",
    "ramal": "",
    "coeficiente": "",
    "ativo": "S",
    "exibir_colaborador_inmap": "S",
    "cor_mapa": "",
    "data_admissao": "",
    "data_demissao": "",
    "obs": "",
    "percen_max_desc_areceber": "",
    "ctps_numero": "",
    "ctps_serie": "",
    "ctps_data_emissao": "",
    "ctps_cidade_emissao": "",
    "cpf_cnpj": "",
    "pis_numero": "",
    "pis_data": "",
    "ie_identidade": "",
    "rg_orgao_emissor": "",
    "rg_data_emissao": "",
    "nacionalidade": "Brasileiro",
    "data_nascimento": "",
    "cnh_numero": "",
    "cnh_categoria": "",
    "cnh_vencimento": "",
    "titulo_numero": "",
    "titulo_zona": "",
    "titulo_secao": "",
    "rastreador": "",
    "ultima_atualizacao": "",
    "cep": "",
    "endereco": "",
    "numero": "",
    "cidade": "",
    "bairro": "",
    "complemento": "",
    "uf": "1",
    "referencia": "",
    "nome_pai": "",
    "nome_mae": "",
    "estado_civil": "S",
    "nome_conjuge": "",
    "cpf_conjuge": "",
    "rg_conjuge": "",
    "dependentes_ir": "",
    "num_dependentes": "",
    "dep_um_nome": "",
    "dep_um_rg": "",
    "dep_um_cpf": "",
    "dep_dois_nome": "",
    "dep_dois_rg": "",
    "dep_dois_cpf": "",
    "dep_tres_nome": "",
    "dep_tres_rg": "",
    "dep_tres_cpf": "",
    "cor_raca": "B",
    "num_manequim": "",
    "camiseta": "M",
    "possui_deficiencia": "N",
    "tipo_deficiencia": "",
    "grau_escolaridade": "",
    "estagio_escolaridade": "",
    "periodo_escolaridade": "",
    "fone": "",
    "telefone_comercial": "",
    "fone_celular": "",
    "fone_emergencia": "",
    "falar_com": "",
    "email": "",
    "id_email_smtp": "",
    "assinatura_email": "",
    "salario": "",
    "id_conta_salario": "",
    "cod_integracao_folha": "NULL",
    "banco": "",
    "agencia": "",
    "agencia_dv": "",
    "conta": "",
    "numero_conta_dv": "",
    "tipo_recebimento": "",
    "camara_centralizadora": "",
    "envia_email_os": "S",
    "envia_sms_os": "N",
    "integracao_calendario": "N",
    "envia_telegram_os": "",
    "telegram_chat_id_funcionario": "",
    "id_chat_telegram_funcionario": "",
    "id_setor_padrao": "",
    "img_assinatura": "",
    "id_perfil_jornada_trabalho": "",
    "ferias_colaborador": "S",
    "prj_custo_hora_base": "",
    "prj_custo_hora_adicionais": ""
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
  url: 'https://HOST/webservice/v1/funcionarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'funcionarios.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'funcionarios.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    