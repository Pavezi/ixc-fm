
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/hs_adm_artigos',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'titulo': '',
    'publicado': 'S',
    'exibir_pagina_inicial': 'N',
    'nivel_acesso': '1',
    'id_secao': '',
    'id_categoria': '',
    'estado': '',
    'acessos': '',
    'criado': '',
    'modificado': '',
    'item_conteudo': '',
    'autor': '',
    'data_criacao': '',
    'data_publicacao': '',
    'exibir_titulo': 'G',
    'titulo_como_link': 'G',
    'texto_introdutorio': 'G',
    'nome_secao': 'G',
    'nome_secao_como_link': 'G',
    'nome_categoria': 'G',
    'nome_categoria_como_link': 'G',
    'avaliacao_artigo': 'G',
    'data_hora_de_criacao': 'G',
    'nomes_autores': 'G',
    'data_hora_modificacao': 'G',
    'icone_pdf': 'G',
    'icone_impressao': 'G',
    'icone_email': 'G',
    'texto_alternativo': '',
    'descricao': '',
    'palavras_chave': '',
    'conteudo': ''
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
  url: 'https://HOST/webservice/v1/hs_adm_artigos/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/hs_adm_artigos/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "titulo": "",
    "publicado": "S",
    "exibir_pagina_inicial": "N",
    "nivel_acesso": "1",
    "id_secao": "",
    "id_categoria": "",
    "estado": "",
    "acessos": "",
    "criado": "",
    "modificado": "",
    "item_conteudo": "",
    "autor": "",
    "data_criacao": "",
    "data_publicacao": "",
    "exibir_titulo": "G",
    "titulo_como_link": "G",
    "texto_introdutorio": "G",
    "nome_secao": "G",
    "nome_secao_como_link": "G",
    "nome_categoria": "G",
    "nome_categoria_como_link": "G",
    "avaliacao_artigo": "G",
    "data_hora_de_criacao": "G",
    "nomes_autores": "G",
    "data_hora_modificacao": "G",
    "icone_pdf": "G",
    "icone_impressao": "G",
    "icone_email": "G",
    "texto_alternativo": "",
    "descricao": "",
    "palavras_chave": "",
    "conteudo": ""
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
  url: 'https://HOST/webservice/v1/hs_adm_artigos',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'hs_adm_artigos.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'hs_adm_artigos.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    