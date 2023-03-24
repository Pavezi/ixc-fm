//Listar----------------------------
import request from "request";
import pkg from 'pg';
const { Client } = pkg;
// import { Client } from 'pg';

let token = '41:de6e44f988b738dfdc3ece49d6c3acfaa8c1cf01dac8d5ceee92b4cc3b8950c4';
let options = {
    method: 'GET',
    url: 'https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_areceber',
    headers:
    {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
        ixcsoft: 'listar'
    },
    body:
    {
        "qtype": "fn_areceber.status",
        "oper": "=", "query": "A",
        "sortname": "fn_areceber.id_contrato",
        "sortorder": "asc",
        "grid_param": "[{\"TB\": \"fn_areceber.data_vencimento\", \"OP\": \"<\", \"P\": \"23/03/2022\"}]"
    },
    json: true,
};

request(options, function (error, response, body) {
    new Error(error);
    // Save the response body to a variable
    let data = body;
    // // Connect to the PostgreSQL database
    const client = new Client({
        host: "127.0.0.1",
        port: '5432',
        user: "fidelizou_me",
        password: "fidelizou_me",
        database: "fidelizou_me",
    });
    client.connect();

    // Insert the data into the PostgreSQL table
    const query = {
        text: `INSERT INTO "areceber" (nn_boleto, id_cliente, status, data_vencimento, valor) VALUES ($1, $2, $3, $4, $5)`,
        values: [body.property3, body.property15, body.property8, body.property10, body.property11],

    };
    console.log(user_id);

    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data inserted successfully');
        client.end();
    });
});
