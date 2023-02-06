
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/produtos',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'ativo': 'S',
    'subgrupo_tipo': '',
    'id_sub_grupo': '',
    'id_tabela_fipe': '',
    'descricao': '',
    'descricao_alt': '',
    'codigo_barras': '',
    'codigo_tecido': '',
    'qtde_min': '',
    'qtde_max': '',
    'tipo': '',
    'controla_estoque': '',
    'movimentacao': '',
    'unidade': '',
    'vencimento_garantia': '',
    'id_categoria_patrimonio': '',
    'preco_base': '',
    'margem_lucro': '',
    'aceita_valor': 'P',
    'pcomissao': '',
    'codigo': '',
    'ultima_atualizacao': 'CURRENT_TIMESTAMP',
    'id_fr_faturamento_classificacoes': '',
    'icms_issqn': 'ICMS',
    'id_class_fiscal': '',
    'id_class_fiscal_entrada': '',
    'ncm': '',
    'id_produtos_ncm_cest': '',
    'cod_servico': '',
    'id_conta_estoque': '',
    'id_conta_despesa': '',
    'id_conta_receita': '',
    'id_conta_comodato': '',
    'id_classe_financeira': '',
    'vICMSSTRet': '',
    'iss_natureza_operacao': '1',
    'controle_impressao_etiqueta': '5',
    'ecommerce': 'P',
    'ecommerce_pg_inicial': 'S',
    'mostra_valor_ecommerce': '0',
    'tipo_ecommerce': 'X',
    'ecommerce_prioridade': '1',
    'valor_prefixo': 'por',
    'valor_sufixo': '',
    'descricao_completa': '',
    'checkbox1': 'S',
    'checkbox2': 'S',
    'checkbox3': 'S',
    'checkbox4': 'S',
    'checkbox5': 'S',
    'checkbox6': 'S',
    'checkbox7': 'S',
    'checkbox8': 'S',
    'checkbox9': 'S',
    'checkbox10': 'S',
    'checkbox11': 'S',
    'checkbox12': 'S',
    'checkbox13': 'S',
    'checkbox14': 'S',
    'checkbox15': 'S',
    'checkbox16': 'S',
    'checkbox17': 'S',
    'checkbox18': 'S',
    'checkbox19': 'S',
    'checkbox20': 'S',
    'checkbox21': 'S',
    'checkbox22': 'S',
    'checkbox23': 'S',
    'checkbox24': 'S',
    'checkbox25': 'S',
    'checkbox26': 'S',
    'checkbox27': 'S',
    'checkbox28': 'S',
    'checkbox29': 'S',
    'checkbox30': 'S',
    'checkbox31': 'S',
    'checkbox32': 'S',
    'checkbox33': 'S',
    'checkbox34': 'S',
    'checkbox35': 'S',
    'checkbox36': 'S',
    'checkbox37': 'S',
    'checkbox38': 'S',
    'checkbox39': 'S',
    'checkbox40': 'S',
    'imagem': '',
    'saldo': '',
    'valor': '',
    'valor_custo': '',
    'custo_medio': '',
    'custo_medio_total': '0.00',
    'qtde_tecido_base': '',
    'qtde_tecido_almofadas': '',
    'pesob': '',
    'pesol': '',
    'altura': '',
    'largura': '',
    'profundidade': '',
    'plataforma': '',
    'tv_id_plataforma': '',
    'tv_LineUp': '',
    'tv_data_inicial': '',
    'tv_data_final': '',
    'tv_id_pacote_servicos': '',
    'tv_id_pacote_servicos_watch': '',
    'descricao_pacote_watch': '',
    'total_tickets_watch': '',
    'id_integracao_tv': '',
    'tv_id_pacotes': '',
    'tv_id_pacote_temporario': '',
    'tv_dias_expiracao_pacote_temporario': '',
    'tv_mus_produtos_disponiveis': '',
    'produto_playhub': 'NULL',
    'tariff_plan': '',
    'tv_dtvgo_produtos_disponiveis': '',
    'chassi': '',
    'renavan': '',
    'km': '',
    'veiculo_cor': '',
    'cambio': '',
    'qtdportas': '',
    'veiculo_combustivel': '',
    'id_sva_integracao': '',
    'id_sva_pacote': '',
    'id_sva_pacote_adicional': ''
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
  url: 'https://HOST/webservice/v1/produtos/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/produtos/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "ativo": "S",
    "subgrupo_tipo": "",
    "id_sub_grupo": "",
    "id_tabela_fipe": "",
    "descricao": "",
    "descricao_alt": "",
    "codigo_barras": "",
    "codigo_tecido": "",
    "qtde_min": "",
    "qtde_max": "",
    "tipo": "",
    "controla_estoque": "",
    "movimentacao": "",
    "unidade": "",
    "vencimento_garantia": "",
    "id_categoria_patrimonio": "",
    "preco_base": "",
    "margem_lucro": "",
    "aceita_valor": "P",
    "pcomissao": "",
    "codigo": "",
    "ultima_atualizacao": "CURRENT_TIMESTAMP",
    "id_fr_faturamento_classificacoes": "",
    "icms_issqn": "ICMS",
    "id_class_fiscal": "",
    "id_class_fiscal_entrada": "",
    "ncm": "",
    "id_produtos_ncm_cest": "",
    "cod_servico": "",
    "id_conta_estoque": "",
    "id_conta_despesa": "",
    "id_conta_receita": "",
    "id_conta_comodato": "",
    "id_classe_financeira": "",
    "vICMSSTRet": "",
    "iss_natureza_operacao": "1",
    "controle_impressao_etiqueta": "5",
    "ecommerce": "P",
    "ecommerce_pg_inicial": "S",
    "mostra_valor_ecommerce": "0",
    "tipo_ecommerce": "X",
    "ecommerce_prioridade": "1",
    "valor_prefixo": "por",
    "valor_sufixo": "",
    "descricao_completa": "",
    "checkbox1": "S",
    "checkbox2": "S",
    "checkbox3": "S",
    "checkbox4": "S",
    "checkbox5": "S",
    "checkbox6": "S",
    "checkbox7": "S",
    "checkbox8": "S",
    "checkbox9": "S",
    "checkbox10": "S",
    "checkbox11": "S",
    "checkbox12": "S",
    "checkbox13": "S",
    "checkbox14": "S",
    "checkbox15": "S",
    "checkbox16": "S",
    "checkbox17": "S",
    "checkbox18": "S",
    "checkbox19": "S",
    "checkbox20": "S",
    "checkbox21": "S",
    "checkbox22": "S",
    "checkbox23": "S",
    "checkbox24": "S",
    "checkbox25": "S",
    "checkbox26": "S",
    "checkbox27": "S",
    "checkbox28": "S",
    "checkbox29": "S",
    "checkbox30": "S",
    "checkbox31": "S",
    "checkbox32": "S",
    "checkbox33": "S",
    "checkbox34": "S",
    "checkbox35": "S",
    "checkbox36": "S",
    "checkbox37": "S",
    "checkbox38": "S",
    "checkbox39": "S",
    "checkbox40": "S",
    "imagem": "",
    "saldo": "",
    "valor": "",
    "valor_custo": "",
    "custo_medio": "",
    "custo_medio_total": "0.00",
    "qtde_tecido_base": "",
    "qtde_tecido_almofadas": "",
    "pesob": "",
    "pesol": "",
    "altura": "",
    "largura": "",
    "profundidade": "",
    "plataforma": "",
    "tv_id_plataforma": "",
    "tv_LineUp": "",
    "tv_data_inicial": "",
    "tv_data_final": "",
    "tv_id_pacote_servicos": "",
    "tv_id_pacote_servicos_watch": "",
    "descricao_pacote_watch": "",
    "total_tickets_watch": "",
    "id_integracao_tv": "",
    "tv_id_pacotes": "",
    "tv_id_pacote_temporario": "",
    "tv_dias_expiracao_pacote_temporario": "",
    "tv_mus_produtos_disponiveis": "",
    "produto_playhub": "NULL",
    "tariff_plan": "",
    "tv_dtvgo_produtos_disponiveis": "",
    "chassi": "",
    "renavan": "",
    "km": "",
    "veiculo_cor": "",
    "cambio": "",
    "qtdportas": "",
    "veiculo_combustivel": "",
    "id_sva_integracao": "",
    "id_sva_pacote": "",
    "id_sva_pacote_adicional": ""
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
  url: 'https://HOST/webservice/v1/produtos',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'produtos.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'produtos.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    