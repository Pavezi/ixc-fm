
//Inserir----------------------------
let request = require("request");
let token = '6:4dacdb8e47193e8cbbabe508c3c59b4547e463817b1d9b9a1d20ab4812fe1a62';
let options = { method: 'POST',
  url: 'https://HOST/webservice/v1/view_voip_sippeers_cliente',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:{
    'tarifa': '',
    'id_contrato': '',
    'descricao': '',
    'accountcode': '',
    'callerid': '',
    'name': '',
    'secret': '',
    'senha_ata': '',
    'mailbox': '',
    'cliente_id': '',
    'cliente_razao': '',
    'cliente_fantasia': '',
    'numero_binagem': '',
    'fullcontact': '',
    'ipaddr': '',
    'port': '',
    'regseconds': '',
    'useragent': '',
    'nat': 'no',
    'host': 'dynamic',
    'contactpermit': '',
    'contactdeny': '',
    'context': 'LinhaConvencional',
    'callgroup': '',
    'pickupgroup': '',
    'allowtransfer': 'yes',
    'disallow': 'all',
    'allow': 'ulaw',
    'videosupport': 'no',
    'textsupport': 'no',
    'gravacao_chamada': 'N',
    'rtpholdtimeout': '',
    'rtptimeout': '',
    'rtpkeepalive': '',
    'qualify': '',
    'qualifyfreq': '',
    'timert1': '',
    'timerb': '',
    'session-timers': '',
    'session-refresher': '',
    'session-minse': '',
    'session-expires': '',
    'vmexten': '',
    'subscribemwi': '',
    'hasvoicemail': '',
    'mohinterpret': '',
    'mohsuggest': '',
    'allowsubscribe': '',
    'allowoverlap': '',
    'autoframing': '',
    'cid_number': '',
    'callingpres': '',
    'fullname': '',
    'numero': '',
    'fromdomain': '',
    'fromuser': '',
    'defaultuser': '',
    'defaultip': '',
    'trunkname': '',
    'buggymwi': 'yes',
    'dynamic': '',
    'setvar': '',
    'outboundproxy': '',
    'callcounter': '',
    'useclientcode': 'yes',
    'usereqphone': 'no',
    'ignoresdpversion': '',
    'trustrpid': '',
    'promiscredir': 'no',
    'sendrpid': '',
    'progressinband': '',
    'constantssrc': '',
    'maxcallbitrate': '',
    'busylevel': '',
    'callbackextension': '',
    'regexten': '',
    'amaflags': '',
    'id_sip': '',
    'auth': '',
    'parkinglot': '',
    'md5secret': '',
    'remotesecret': '',
    'regserver': '',
    'lastms': '',
    'directmedia': '',
    'path': '',
    'dtmfmode': 'rfc2833',
    'language': 'pt_BR',
    'type': 'friend',
    'rfc2833compensate': 'yes',
    'transport': 'udp',
    'insecure': '',
    'call-limit': '',
    'permit': '',
    'deny': '',
    'status_ramal': 'A'
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
  url: 'https://HOST/webservice/v1/view_voip_sippeers_cliente/Id_a_deletar',
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
  url: 'https://HOST/webservice/v1/view_voip_sippeers_cliente/Id_a_editar',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64')
   },
  body:
   {
    "tarifa": "",
    "id_contrato": "",
    "descricao": "",
    "accountcode": "",
    "callerid": "",
    "name": "",
    "secret": "",
    "senha_ata": "",
    "mailbox": "",
    "cliente_id": "",
    "cliente_razao": "",
    "cliente_fantasia": "",
    "numero_binagem": "",
    "fullcontact": "",
    "ipaddr": "",
    "port": "",
    "regseconds": "",
    "useragent": "",
    "nat": "no",
    "host": "dynamic",
    "contactpermit": "",
    "contactdeny": "",
    "context": "LinhaConvencional",
    "callgroup": "",
    "pickupgroup": "",
    "allowtransfer": "yes",
    "disallow": "all",
    "allow": "ulaw",
    "videosupport": "no",
    "textsupport": "no",
    "gravacao_chamada": "N",
    "rtpholdtimeout": "",
    "rtptimeout": "",
    "rtpkeepalive": "",
    "qualify": "",
    "qualifyfreq": "",
    "timert1": "",
    "timerb": "",
    "session-timers": "",
    "session-refresher": "",
    "session-minse": "",
    "session-expires": "",
    "vmexten": "",
    "subscribemwi": "",
    "hasvoicemail": "",
    "mohinterpret": "",
    "mohsuggest": "",
    "allowsubscribe": "",
    "allowoverlap": "",
    "autoframing": "",
    "cid_number": "",
    "callingpres": "",
    "fullname": "",
    "numero": "",
    "fromdomain": "",
    "fromuser": "",
    "defaultuser": "",
    "defaultip": "",
    "trunkname": "",
    "buggymwi": "yes",
    "dynamic": "",
    "setvar": "",
    "outboundproxy": "",
    "callcounter": "",
    "useclientcode": "yes",
    "usereqphone": "no",
    "ignoresdpversion": "",
    "trustrpid": "",
    "promiscredir": "no",
    "sendrpid": "",
    "progressinband": "",
    "constantssrc": "",
    "maxcallbitrate": "",
    "busylevel": "",
    "callbackextension": "",
    "regexten": "",
    "amaflags": "",
    "id_sip": "",
    "auth": "",
    "parkinglot": "",
    "md5secret": "",
    "remotesecret": "",
    "regserver": "",
    "lastms": "",
    "directmedia": "",
    "path": "",
    "dtmfmode": "rfc2833",
    "language": "pt_BR",
    "type": "friend",
    "rfc2833compensate": "yes",
    "transport": "udp",
    "insecure": "",
    "call-limit": "",
    "permit": "",
    "deny": "",
    "status_ramal": "A"
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
  url: 'https://HOST/webservice/v1/view_voip_sippeers_cliente',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'view_voip_sippeers_cliente.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'view_voip_sippeers_cliente.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

                    