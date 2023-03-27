//Listar----------------------------
import request from "request";
import pkg from 'pg';
const { Client } = pkg;

let token = '7:8033b4f49653cb5d04817568aeb93f1f3636d6b90ceb39bf0bda598b843ff90d';
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
    if (error) throw new Error(error);

    // Connect to the PostgreSQL database
    const client = new Client({
        host: "127.0.0.1",
        port: '5432',
        user: "fidelizou_me",
        password: "fidelizou_me",
        database: "fidelizou_me",
    });
    client.connect();

    // Loop through the records in the response body and insert them into the PostgreSQL table
    for (let i = 0; i < body.registros.length; i++) {
        const row = body.registros[i];

        // Get the client based on the id_cliente
        const clientOptions = {
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
                query: row.id_cliente,
                oper: 'eq',
                page: '1',
                rp: '1',
                sortname: 'cliente.id',
                sortorder: 'desc'
            },
            json: true
        };

        request(clientOptions, function (error, response, clientBody) {
            if (error) throw new Error(error);

            // Insert the data into the PostgreSQL table
            const query = {
                text: 'INSERT INTO "areceber" (nn_ticket, id_customer, email, phone, status, due_date, value) VALUES ($1, $2, $3, $4, $5, $6, $7)',
                values: ['row.nn_boleto', 'clientData.registros[0].id_cliente', 'clientData.registros[0].email', 'clientData.registros[0].telefone_celular', row.status, row.data_vencimento, row.valor],
            };

            client.query(query, (err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Data inserted successfully');
            });
        });
        client.end();

    }

    // Close the database connection
});
