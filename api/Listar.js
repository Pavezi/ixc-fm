import axios from "axios";
import { tramite } from "../utils.js";
import moment from "moment";

async function request(options, params) {
  let body = tramite.updateNestedProperties(options.body, params);

  try {
    const response = await axios({
      method: options.method,
      url: options.url,
      headers: options.headers,
      data: body,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

let Listar = {
  boleto: async (token) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/get_boleto",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
      },

      json: true,
    };

    let params = JSON.stringify({
      boletos: 1,
      juro: "N",
      multa: "N",
      atualiza_boleto: "N",
      tipo_boleto: "dados",
      base64: "S",
    });

    let data = await request(options, params, true);

    return data;
  },

  almox: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/almox",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "almox.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "almox.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  veiculos_tracker: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/veiculos_tracker",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "veiculos_tracker.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "veiculos_tracker.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  ajuste_inventario: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/ajuste_inventario",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "ajuste_inventario.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "ajuste_inventario.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  auth_usuarios: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/auth_usuarios",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "auth_usuarios.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "auth_usuarios.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cdr: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cdr",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cdr.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cdr.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cidade: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cidade",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cidade.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cidade.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cliente: async (token, nDay = 1) => {
    const startDate = new moment().subtract(nDay, "day").format("YYYY-MM-DD");
    const endDate = new moment().format("YYYY-MM-DD");

    const params = {
      rp: `100`,
      grid_param: JSON.stringify([
        { TB: "cliente.data_cadastro", OP: `>=`, P: `${startDate}` },
        { TB: "cliente.data_cadastro", OP: `<=`, P: `${endDate}` },
      ]),
    };

    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cliente.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cliente.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cliente_contrato: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cliente_contrato.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cliente_contrato.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cliente_contrato_desc_serv: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_desc_serv",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cliente_contrato_desc_serv.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cliente_contrato_desc_serv.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cliente_contrato_modelo: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_modelo",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cliente_contrato_modelo.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cliente_contrato_modelo.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cliente_contrato_produtos_reajuste_valor: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_produtos_reajuste_valor",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cliente_contrato_produtos_reajuste_valor.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cliente_contrato_produtos_reajuste_valor.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cliente_contrato_servicos_param: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_servicos_param",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cliente_contrato_servicos_param.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cliente_contrato_servicos_param.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cliente_contrato_tipo: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente_contrato_tipo",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cliente_contrato_tipo.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cliente_contrato_tipo.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  cnf_classificacao_tributaria: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/cnf_classificacao_tributaria",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "cnf_classificacao_tributaria.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "cnf_classificacao_tributaria.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },

  condicoes_pagamento: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/condicoes_pagamento",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "condicoes_pagamento.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "condicoes_pagamento.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  configuracao_geral: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/configuracao_geral",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "configuracao_geral.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "configuracao_geral.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  configuracao_mvno: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/configuracao_mvno",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "configuracao_mvno.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "configuracao_mvno.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  contas: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/contas",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "contas.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "contas.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  contato: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/contato",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "contato.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "contato.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  contato_tipo: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/contato_tipo",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "contato_tipo.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "contato_tipo.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  crm_canditados: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/crm_canditados",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "crm_canditados.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "crm_canditados.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  crm_planos_negociacoes: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/crm_planos_negociacoes",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "crm_planos_negociacoes.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "crm_planos_negociacoes.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  crm_prospeccao_propostas: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/crm_prospeccao_propostas",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "crm_prospeccao_propostas.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "crm_prospeccao_propostas.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  crm_tipo_candidato: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/crm_tipo_candidato",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "crm_tipo_candidato.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "crm_tipo_candidato.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  df_elemento: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/df_elemento",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "df_elemento.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "df_elemento.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  df_projeto: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/df_projeto",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "df_projeto.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "df_projeto.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  df_tipo_elemento_regiao: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/df_tipo_elemento_regiao",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "df_tipo_elemento_regiao.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "df_tipo_elemento_regiao.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  empresa_setor: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/empresa_setor",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "empresa_setor.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "empresa_setor.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  fh_onu_nao_autorizadas: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fh_onu_nao_autorizadas",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "fh_onu_nao_autorizadas.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "fh_onu_nao_autorizadas.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  fl_adto_salario: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fl_adto_salario",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "fl_adto_salario.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "fl_adto_salario.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  fn_apagar: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_apagar",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "fn_apagar.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "fn_apagar.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  fn_areceber: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_areceber",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "fn_areceber.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "fn_areceber.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  fn_areceber_baixas: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_areceber_baixas",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "fn_areceber_baixas.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "fn_areceber_baixas.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  fn_carteira_cobranca: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_carteira_cobranca",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "fn_carteira_cobranca.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "fn_carteira_cobranca.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  fn_movim_finan: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_movim_finan",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "fn_movim_finan.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "fn_movim_finan.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  fornecedor: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fornecedor",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "fornecedor.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "fornecedor.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  funcionarios: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/funcionarios",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "funcionarios.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "funcionarios.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  hs_adm_artigos: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/hs_adm_artigos",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "hs_adm_artigos.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "hs_adm_artigos.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  inventario_estoque: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/inventario_estoque",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "inventario_estoque.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "inventario_estoque.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  inventario_estoque_almox: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/inventario_estoque_almox",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "inventario_estoque_almox.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "inventario_estoque_almox.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  linha_mvno: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/linha_mvno",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "linha_mvno.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "linha_mvno.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  patrimonio: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/patrimonio",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "patrimonio.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "patrimonio.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  planejamento: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/planejamento",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "planejamento.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "planejamento.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  planejamento_analitico: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/planejamento_analitico",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "planejamento_analitico.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "planejamento_analitico.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  produtos: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/produtos",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "produtos.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "produtos.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  produtos_ixc_mvno: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/produtos_ixc_mvno",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "produtos_ixc_mvno.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "produtos_ixc_mvno.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  rad_caixa_ftth: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/rad_caixa_ftth",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "rad_caixa_ftth.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "rad_caixa_ftth.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radacct: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radacct",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radacct.radacctid",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radacct.radacctid",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radgrupos: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radgrupos",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radgrupos.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radgrupos.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radpop: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radpop.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radpop.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radpop_ocorrencias: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_ocorrencias",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radpop_ocorrencias.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radpop_ocorrencias.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radpop_olt_slot: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_olt_slot",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radpop_olt_slot.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radpop_olt_slot.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radpop_radio: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_radio",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radpop_radio.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radpop_radio.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radpop_radio_cliente: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_radio_cliente",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radpop_radio_cliente.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radpop_radio_cliente.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radpop_radio_cliente_fibra: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_radio_cliente_fibra",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radpop_radio_cliente_fibra.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radpop_radio_cliente_fibra.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radpop_radio_cliente_fibra_perfil: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radpop_radio_cliente_fibra_perfil",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radpop_radio_cliente_fibra_perfil.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radpop_radio_cliente_fibra_perfil.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radusergroup: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radusergroup",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radusergroup.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radusergroup.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  radusuarios: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/radusuarios",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "radusuarios.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "radusuarios.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  requisicao_material: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/requisicao_material",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "requisicao_material.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "requisicao_material.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  smtp: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/smtp",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "smtp.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "smtp.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  su_diagnostico: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/su_diagnostico",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "su_diagnostico.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "su_diagnostico.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  su_oss_assunto: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/su_oss_assunto",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "su_oss_assunto.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "su_oss_assunto.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  su_oss_chamado: async (token, nDay) => {
    const startDate = new moment()
      .subtract(nDay, "day")
      .format("YYYY-MM-DD HH:mm:ss");
    const endDate = new moment().format("YYYY-MM-DD HH:mm:ss");

    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/su_oss_chamado",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "su_oss_chamado.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "su_oss_chamado.id",
        sortorder: "desc",
      },
      json: true,
    };

    const params = {
      qtype: "su_oss_chamado.status",
      query: "F",
      oper: "=",
      page: "1",
      rp: "2000",
      sortname: "su_oss_chamado.id",
      sortorder: "desc",
      grid_param: `[{"TB":"su_oss_chamado.data_fechamento", "OP" : ">=", "P" : "${startDate}"}, {"TB":"su_oss_chamado.data_fechamento", "OP" : "<=", "P" : "${endDate}"}]`,
    };

    let data = await request(options, params);

    return data;
  },
  su_ticket: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/su_ticket",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "su_ticket.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "su_ticket.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  su_ticket_setor: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/su_ticket_setor",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "su_ticket_setor.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "su_ticket_setor.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  transf_almox_top: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/transf_almox_top",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "transf_almox_top.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "transf_almox_top.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  tv_usuarios: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/tv_usuarios",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "tv_usuarios.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "tv_usuarios.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  unidades: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/unidades",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "unidades.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "unidades.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  usuarios: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/usuarios",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "usuarios.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "usuarios.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  vd_contratos: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/vd_contratos",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "vd_contratos.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "vd_contratos.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  vd_pedido_venda: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/vd_pedido_venda",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "vd_pedido_venda.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "vd_pedido_venda.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  vd_saida: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/vd_saida",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "vd_saida.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "vd_saida.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  veiculos: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/veiculos",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "veiculos.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "veiculos.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  vendedor: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/vendedor",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "vendedor.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "vendedor.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  view_voip_sippeers_cliente: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/view_voip_sippeers_cliente",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "view_voip_sippeers_cliente.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "view_voip_sippeers_cliente.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
  voip_sippeers: async (token, params) => {
    let options = {
      method: "GET",
      url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/voip_sippeers",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + new Buffer.from(token).toString("base64"),
        ixcsoft: "listar",
      },
      body: {
        qtype: "voip_sippeers.id",
        query: "0",
        oper: ">",
        page: "1",
        rp: "200",
        sortname: "voip_sippeers.id",
        sortorder: "desc",
      },
      json: true,
    };
    let data = await request(options, params);

    return data;
  },
};

export default Listar;
