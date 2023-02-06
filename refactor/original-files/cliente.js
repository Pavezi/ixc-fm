
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/cliente',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'razao': '',
    'fantasia': '',
    'tipo_assinante': '3',
    'id_tipo_cliente': '',
    'tipo_pessoa': 'F',
    'cnpj_cpf': '',
    'ie_identidade': '',
    'rg_orgao_emissor': '',
    'inscricao_municipal': '',
    'contribuinte_icms': 'N',
    'nacionalidade': 'Brasileiro',
    'cidade_naturalidade': '',
    'estado_nascimento': '',
    'data_nascimento': '',
    'estado_civil': '',
    'isuf': '',
    'ativo': 'S',
    'filial_id': '',
    'Sexo': '',
    'profissao': '',
    'grau_satisfacao': '',
    'idx': '',
    'data_cadastro': '',
    'tipo_cliente_scm': '01',
    'convert_cliente_forn': 'N',
    'ativo_serasa': '',
    'atualizar_cadastro_galaxPay': 'N',
    'id_condominio': '',
    'bloco': '',
    'apartamento': '',
    'cep': '',
    'cif': '',
    'endereco': '',
    'numero': '',
    'complemento': '',
    'bairro': '',
    'cidade': '',
    'referencia': '',
    'uf': '1',
    'moradia': '',
    'tipo_localidade': 'U',
    'latitude': '',
    'longitude': '',
    'cep_cob': '',
    'endereco_cob': '',
    'numero_cob': '',
    'bairro_cob': '',
    'cidade_cob': '',
    'complemento_cob': '',
    'referencia_cob': '',
    'uf_cob': '',
    'fone': '',
    'telefone_comercial': '',
    'ramal': '',
    'id_operadora_celular': '',
    'telefone_celular': '',
    'whatsapp': '',
    'email': '',
    'email_opa': '',
    'contato': '',
    'website': '',
    'skype': '',
    'facebook': '',
    'hotsite_email': '',
    'senha': '',
    'acesso_automatico_central': 'P',
    'alterar_senha_primeiro_acesso': 'P',
    'senha_hotsite_md5': 'N',
    'hotsite_acesso': '2',
    'crm': 'N',
    'id_candato_tipo': '',
    'id_concorrente': '',
    'id_perfil': '',
    'responsavel': '',
    'indicado_por': '',
    'cadastrado_via_viabilidade': 'N',
    'status_prospeccao': 'C',
    'crm_data_novo': '',
    'crm_data_sondagem': '',
    'crm_data_apresentando': '',
    'crm_data_negociando': '',
    'crm_data_vencemos': '',
    'crm_data_perdemos': '',
    'crm_data_abortamos': '',
    'crm_data_sem_porta_disponivel': '',
    'crm_data_sem_viabilidade': '',
    'pipe_id_organizacao': '',
    'foto_cartao': '',
    'participa_cobranca': 'S',
    'num_dias_cob': '',
    'participa_pre_cobranca': 'S',
    'cob_envia_email': 'S',
    'cob_envia_sms': 'S',
    'id_conta': '',
    'cond_pagamento': '',
    'id_vendedor': '',
    'tabela_preco': '',
    'deb_automatico': '',
    'deb_agencia': '',
    'deb_conta': '',
    'codigo_operacao': '',
    'tipo_pessoa_titular_conta': 'F',
    'cnpj_cpf_titular_conta': '',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'emp_empresa': '',
    'emp_cnpj': '',
    'emp_cep': '',
    'emp_endereco': '',
    'emp_cidade': '',
    'emp_fone': '',
    'emp_cargo': '',
    'emp_remuneracao': '',
    'emp_data_admissao': '',
    'nome_pai': '',
    'cpf_pai': '',
    'identidade_pai': '',
    'nascimento_pai': '',
    'nome_mae': '',
    'cpf_mae': '',
    'identidade_mae': '',
    'nascimento_mae': '',
    'quantidade_dependentes': '',
    'nome_conjuge': '',
    'fone_conjuge': '',
    'cpf_conjuge': '',
    'rg_conjuge': '',
    'data_nascimento_conjuge': '',
    'nome_contador': '',
    'telefone_contador': '',
    'orgao_publico': 'N',
    'im': '',
    'nome_representante_1': '',
    'cpf_representante_1': '',
    'identidade_representante_1': '',
    'nome_representante_2': '',
    'cpf_representante_2': '',
    'identidade_representante_2': '',
    'iss_classificacao_padrao': '99',
    'pis_retem': 'S',
    'cofins_retem': 'S',
    'csll_retem': 'S',
    'irrf_retem': 'S',
    'cli_desconta_iss_retido_total': 'S',
    'dica_imposto_retido_cliente': '',
    'ref_com_empresa1': '',
    'ref_com_fone1': '',
    'ref_com_empresa2': '',
    'ref_com_fone2': '',
    'ref_pes_nome1': '',
    'ref_pes_fone1': '',
    'ref_pes_nome2': '',
    'ref_pes_fone2': '',
    'obs': '',
    'alerta': ''
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
  url: 'https://HOST/webservice/v1/cliente/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/cliente/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "razao": "",
    "fantasia": "",
    "tipo_assinante": "3",
    "id_tipo_cliente": "",
    "tipo_pessoa": "F",
    "cnpj_cpf": "",
    "ie_identidade": "",
    "rg_orgao_emissor": "",
    "inscricao_municipal": "",
    "contribuinte_icms": "N",
    "nacionalidade": "Brasileiro",
    "cidade_naturalidade": "",
    "estado_nascimento": "",
    "data_nascimento": "",
    "estado_civil": "",
    "isuf": "",
    "ativo": "S",
    "filial_id": "",
    "Sexo": "",
    "profissao": "",
    "grau_satisfacao": "",
    "idx": "",
    "data_cadastro": "",
    "tipo_cliente_scm": "01",
    "convert_cliente_forn": "N",
    "ativo_serasa": "",
    "atualizar_cadastro_galaxPay": "N",
    "id_condominio": "",
    "bloco": "",
    "apartamento": "",
    "cep": "",
    "cif": "",
    "endereco": "",
    "numero": "",
    "complemento": "",
    "bairro": "",
    "cidade": "",
    "referencia": "",
    "uf": "1",
    "moradia": "",
    "tipo_localidade": "U",
    "latitude": "",
    "longitude": "",
    "cep_cob": "",
    "endereco_cob": "",
    "numero_cob": "",
    "bairro_cob": "",
    "cidade_cob": "",
    "complemento_cob": "",
    "referencia_cob": "",
    "uf_cob": "",
    "fone": "",
    "telefone_comercial": "",
    "ramal": "",
    "id_operadora_celular": "",
    "telefone_celular": "",
    "whatsapp": "",
    "email": "",
    "email_opa": "",
    "contato": "",
    "website": "",
    "skype": "",
    "facebook": "",
    "hotsite_email": "",
    "senha": "",
    "acesso_automatico_central": "P",
    "alterar_senha_primeiro_acesso": "P",
    "senha_hotsite_md5": "N",
    "hotsite_acesso": "2",
    "crm": "N",
    "id_candato_tipo": "",
    "id_concorrente": "",
    "id_perfil": "",
    "responsavel": "",
    "indicado_por": "",
    "cadastrado_via_viabilidade": "N",
    "status_prospeccao": "C",
    "crm_data_novo": "",
    "crm_data_sondagem": "",
    "crm_data_apresentando": "",
    "crm_data_negociando": "",
    "crm_data_vencemos": "",
    "crm_data_perdemos": "",
    "crm_data_abortamos": "",
    "crm_data_sem_porta_disponivel": "",
    "crm_data_sem_viabilidade": "",
    "pipe_id_organizacao": "",
    "foto_cartao": "",
    "participa_cobranca": "S",
    "num_dias_cob": "",
    "participa_pre_cobranca": "S",
    "cob_envia_email": "S",
    "cob_envia_sms": "S",
    "id_conta": "",
    "cond_pagamento": "",
    "id_vendedor": "",
    "tabela_preco": "",
    "deb_automatico": "",
    "deb_agencia": "",
    "deb_conta": "",
    "codigo_operacao": "",
    "tipo_pessoa_titular_conta": "F",
    "cnpj_cpf_titular_conta": "",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "emp_empresa": "",
    "emp_cnpj": "",
    "emp_cep": "",
    "emp_endereco": "",
    "emp_cidade": "",
    "emp_fone": "",
    "emp_cargo": "",
    "emp_remuneracao": "",
    "emp_data_admissao": "",
    "nome_pai": "",
    "cpf_pai": "",
    "identidade_pai": "",
    "nascimento_pai": "",
    "nome_mae": "",
    "cpf_mae": "",
    "identidade_mae": "",
    "nascimento_mae": "",
    "quantidade_dependentes": "",
    "nome_conjuge": "",
    "fone_conjuge": "",
    "cpf_conjuge": "",
    "rg_conjuge": "",
    "data_nascimento_conjuge": "",
    "nome_contador": "",
    "telefone_contador": "",
    "orgao_publico": "N",
    "im": "",
    "nome_representante_1": "",
    "cpf_representante_1": "",
    "identidade_representante_1": "",
    "nome_representante_2": "",
    "cpf_representante_2": "",
    "identidade_representante_2": "",
    "iss_classificacao_padrao": "99",
    "pis_retem": "S",
    "cofins_retem": "S",
    "csll_retem": "S",
    "irrf_retem": "S",
    "cli_desconta_iss_retido_total": "S",
    "dica_imposto_retido_cliente": "",
    "ref_com_empresa1": "",
    "ref_com_fone1": "",
    "ref_com_empresa2": "",
    "ref_com_fone2": "",
    "ref_pes_nome1": "",
    "ref_pes_fone1": "",
    "ref_pes_nome2": "",
    "ref_pes_fone2": "",
    "obs": "",
    "alerta": ""
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
  url: 'https://HOST/webservice/v1/cliente',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'cliente.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'cliente.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    