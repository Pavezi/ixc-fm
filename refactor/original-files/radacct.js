
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/radacct',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'acctsessionid': '',
    'acctuniqueid': '',
    'username': '',
    'groupname': '',
    'realm': '',
    'nasipaddress': '',
    'nasportid': '',
    'nasporttype': '',
    'acctstarttime': '',
    'acctstoptime': '',
    'acctsessiontime': '',
    'acctauthentic': '',
    'connectinfo_start': '',
    'connectinfo_stop': '',
    'acctinputoctets': '',
    'acctoutputoctets': '',
    'calledstationid': '',
    'callingstationid': '',
    'acctterminatecause': '',
    'servicetype': '',
    'framedprotocol': '',
    'framedipaddress': '',
    'acctstartdelay': '',
    'acctstopdelay': '',
    'xascendsessionsvrkey': '',
    'acctupdatetime': 'acctupdatetime',
    'acctinterval': 'acctinterval',
    'framedipv6prefix': 'framedipv6prefix',
    'delegatedipv6prefix': ''
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
  url: 'https://HOST/webservice/v1/radacct/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/radacct/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "acctsessionid": "",
    "acctuniqueid": "",
    "username": "",
    "groupname": "",
    "realm": "",
    "nasipaddress": "",
    "nasportid": "",
    "nasporttype": "",
    "acctstarttime": "",
    "acctstoptime": "",
    "acctsessiontime": "",
    "acctauthentic": "",
    "connectinfo_start": "",
    "connectinfo_stop": "",
    "acctinputoctets": "",
    "acctoutputoctets": "",
    "calledstationid": "",
    "callingstationid": "",
    "acctterminatecause": "",
    "servicetype": "",
    "framedprotocol": "",
    "framedipaddress": "",
    "acctstartdelay": "",
    "acctstopdelay": "",
    "xascendsessionsvrkey": "",
    "acctupdatetime": "acctupdatetime",
    "acctinterval": "acctinterval",
    "framedipv6prefix": "framedipv6prefix",
    "delegatedipv6prefix": ""
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
  url: 'https://HOST/webservice/v1/radacct',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'radacct.radacctid',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'radacct.radacctid',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    