//Listar----------------------------
import request from "request";
let token = '41:de6e44f988b738dfdc3ece49d6c3acfaa8c1cf01dac8d5ceee92b4cc3b8950c4';
let options = {
    method: 'GET',
    url: 'https://fidelizoume.ixcsoft.com.br/webservice/v1/cliente',
    headers:
    {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
        ixcsoft: 'listar'
    },
    body:
    {
        qtype: 'cliente.id',
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

