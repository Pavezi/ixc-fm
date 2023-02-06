
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/cnf_classificacao_tributaria',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'descricao': '',
    'tipo_operacao': 'S',
    'cf_tipo_tributacao': '',
    'cf_cfop': '',
    'cf_cfop_f': '',
    'cf_ncm': '',
    'cf_ex_tipi': '',
    'cf_id_fiscal': '',
    'nat_bc_cred': '',
    'codigo_classificacao_sped': '1',
    'icms_regime': '',
    'icms_sn_stributaria': '',
    'icms_sn_origem': '',
    'modBC': '',
    'cf_aliquota_icms': '',
    'icms_predbc': '',
    'icms_motdesicms': '',
    'icms_pbcop': '',
    'icms_pcredsn': '',
    'icms_modbcst': '',
    'icms_pmvast': '',
    'icms_predbcst': '',
    'icms_picmsst': '',
    'icms_vicmsst': '',
    'icms_vbcstret': '',
    'icms_ufst': '',
    'icms_vbcstdest': '',
    'cf_ipi_sit_tributaria': '',
    'cf_ipi_codigo_enquadramento': '',
    'cf_ipi_classe_enquadramento': '',
    'cf_ipi_codigo_selo_controle': '',
    'cf_ipi_cnpj_produtor': '',
    'cf_ipi_tipo_calculo': '',
    'cf_aliquota_ipi': '',
    'pis_situacao_tributaria': '',
    'cf_pis_bc': '',
    'cf_pis_alq': '',
    'cf_pis_valor': '',
    'descontar_icms_base_calculo': 'N',
    'cofins_situacao_tributaria': '',
    'cf_cofins_bc': '',
    'cf_cofins_alq': '',
    'cf_cofins_valor': '',
    'descontar_icms_base_calculo_cofins': 'N',
    'iss_tributacao': 'N',
    'iss_lista_servico': '',
    'cf_iss_aliquota': '',
    'cf_iss_aliquota_retido': '',
    'cf_iss_municipio_ocorencia': '',
    'id_natureza_operacao': '',
    'cod_tributacao_municipio': '',
    'cf_ii_bc': '',
    'cf_ii_alq': '',
    'cf_ii_valor': '',
    'cf_ii_iof': '',
    'cf_ii_desp_aduaneira': '',
    'cf_ii_di_adicao': '',
    'cf_ii_di_seqadicao': '',
    'cf_ii_di_cod_fabricante': '',
    'irrf_tipo_retencao': 'CX',
    'irrf_aliquota': '',
    'irrf_valor_minimo': '10,00',
    'irrf_acumular_valor': 'S',
    'csll_aliquota': '',
    'p_fust': '',
    'p_funttel': '',
    'excessao_st_reducao_fust_funttel': 'N',
    'excessao_st_isentos_fust_funttel': 'N'
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
  url: 'https://HOST/webservice/v1/cnf_classificacao_tributaria/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/cnf_classificacao_tributaria/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "descricao": "",
    "tipo_operacao": "S",
    "cf_tipo_tributacao": "",
    "cf_cfop": "",
    "cf_cfop_f": "",
    "cf_ncm": "",
    "cf_ex_tipi": "",
    "cf_id_fiscal": "",
    "nat_bc_cred": "",
    "codigo_classificacao_sped": "1",
    "icms_regime": "",
    "icms_sn_stributaria": "",
    "icms_sn_origem": "",
    "modBC": "",
    "cf_aliquota_icms": "",
    "icms_predbc": "",
    "icms_motdesicms": "",
    "icms_pbcop": "",
    "icms_pcredsn": "",
    "icms_modbcst": "",
    "icms_pmvast": "",
    "icms_predbcst": "",
    "icms_picmsst": "",
    "icms_vicmsst": "",
    "icms_vbcstret": "",
    "icms_ufst": "",
    "icms_vbcstdest": "",
    "cf_ipi_sit_tributaria": "",
    "cf_ipi_codigo_enquadramento": "",
    "cf_ipi_classe_enquadramento": "",
    "cf_ipi_codigo_selo_controle": "",
    "cf_ipi_cnpj_produtor": "",
    "cf_ipi_tipo_calculo": "",
    "cf_aliquota_ipi": "",
    "pis_situacao_tributaria": "",
    "cf_pis_bc": "",
    "cf_pis_alq": "",
    "cf_pis_valor": "",
    "descontar_icms_base_calculo": "N",
    "cofins_situacao_tributaria": "",
    "cf_cofins_bc": "",
    "cf_cofins_alq": "",
    "cf_cofins_valor": "",
    "descontar_icms_base_calculo_cofins": "N",
    "iss_tributacao": "N",
    "iss_lista_servico": "",
    "cf_iss_aliquota": "",
    "cf_iss_aliquota_retido": "",
    "cf_iss_municipio_ocorencia": "",
    "id_natureza_operacao": "",
    "cod_tributacao_municipio": "",
    "cf_ii_bc": "",
    "cf_ii_alq": "",
    "cf_ii_valor": "",
    "cf_ii_iof": "",
    "cf_ii_desp_aduaneira": "",
    "cf_ii_di_adicao": "",
    "cf_ii_di_seqadicao": "",
    "cf_ii_di_cod_fabricante": "",
    "irrf_tipo_retencao": "CX",
    "irrf_aliquota": "",
    "irrf_valor_minimo": "10,00",
    "irrf_acumular_valor": "S",
    "csll_aliquota": "",
    "p_fust": "",
    "p_funttel": "",
    "excessao_st_reducao_fust_funttel": "N",
    "excessao_st_isentos_fust_funttel": "N"
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
  url: 'https://HOST/webservice/v1/cnf_classificacao_tributaria',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'cnf_classificacao_tributaria.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'cnf_classificacao_tributaria.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    