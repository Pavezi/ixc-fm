import axios from "axios";

async function request(options, params) {
  try {
    const response = await axios({
      method: options.method,
      url: options.url,
      headers: options.headers,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

let Deletar = {
  almox: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/almox/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  veiculos_tracker: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/veiculos_tracker/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  ajuste_inventario: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/ajuste_inventario/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  auth_usuarios: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/auth_usuarios/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cdr: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cdr/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cidade: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cidade/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cliente: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cliente_contrato: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cliente_contrato_desc_serv: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_desc_serv/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cliente_contrato_modelo: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_modelo/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cliente_contrato_produtos_reajuste_valor: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_produtos_reajuste_valor/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cliente_contrato_servicos_param: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_servicos_param/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cliente_contrato_tipo: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_tipo/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  cnf_classificacao_tributaria: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/cnf_classificacao_tributaria/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  condicoes_pagamento: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/condicoes_pagamento/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  configuracao_geral: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/configuracao_geral/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  configuracao_mvno: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/configuracao_mvno/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  contas: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/contas/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  contato: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/contato/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  contato_tipo: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/contato_tipo/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  crm_canditados: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/crm_canditados/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  crm_planos_negociacoes: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/crm_planos_negociacoes/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  crm_prospeccao_propostas: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/crm_prospeccao_propostas/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  crm_tipo_candidato: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/crm_tipo_candidato/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  df_elemento: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/df_elemento/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  df_projeto: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/df_projeto/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  df_tipo_elemento_regiao: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/df_tipo_elemento_regiao/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  empresa_setor: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/empresa_setor/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  fh_onu_nao_autorizadas: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/fh_onu_nao_autorizadas/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  fl_adto_salario: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/fl_adto_salario/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  fn_apagar: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_apagar/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  fn_areceber: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_areceber/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  fn_areceber_baixas: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_areceber_baixas/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  fn_carteira_cobranca: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_carteira_cobranca/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  fn_movim_finan: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_movim_finan/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  fornecedor: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/fornecedor/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  funcionarios: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/funcionarios/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  hs_adm_artigos: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/hs_adm_artigos/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  inventario_estoque: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/inventario_estoque/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  inventario_estoque_almox: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/inventario_estoque_almox/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  linha_mvno: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/linha_mvno/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  patrimonio: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/patrimonio/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  planejamento: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/planejamento/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  planejamento_analitico: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/planejamento_analitico/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  produtos: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/produtos/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  produtos_ixc_mvno: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/produtos_ixc_mvno/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  rad_caixa_ftth: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/rad_caixa_ftth/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radacct: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radacct/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radgrupos: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radgrupos/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radpop: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radpop_ocorrencias: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_ocorrencias/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radpop_olt_slot: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_olt_slot/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radpop_radio: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_radio/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radpop_radio_cliente: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_radio_cliente/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radpop_radio_cliente_fibra: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_radio_cliente_fibra/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radpop_radio_cliente_fibra_perfil: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_radio_cliente_fibra_perfil/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radusergroup: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radusergroup/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  radusuarios: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/radusuarios/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  requisicao_material: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/requisicao_material/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  smtp: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/smtp/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  su_diagnostico: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/su_diagnostico/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  su_oss_assunto: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/su_oss_assunto/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  su_oss_chamado: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/su_oss_chamado/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  su_ticket: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/su_ticket/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  su_ticket_setor: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/su_ticket_setor/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  transf_almox_top: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/transf_almox_top/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  tv_usuarios: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/tv_usuarios/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  unidades: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/unidades/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  usuarios: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/usuarios/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  vd_contratos: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/vd_contratos/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  vd_pedido_venda: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/vd_pedido_venda/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  vd_saida: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/vd_saida/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  veiculos: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/veiculos/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  vendedor: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/vendedor/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  view_voip_sippeers_cliente: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/view_voip_sippeers_cliente/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
  voip_sippeers: async (token, id) => {
    let options = {
      method: "DELETE",
      url: `https://fidelizoume.ixcsoft.com.br/webservice/v1/voip_sippeers/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },
    };
    await request(options);
  },
};

export default Deletar;
