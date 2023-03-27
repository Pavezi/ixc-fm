//Listar----------------------------
import request from "request";
import pkg from 'pg';
const { Client } = pkg;
// import { Client } from 'pg';

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
// Function to get client data by id

// getData();
const row = {
    id_cliente: 1,
    nn_boleto: '000001',
    status: 'A',
    data_vencimento: '2022-02-10',
    valor: '100'
};
insertRowIntoDB(row);
async function getClientData(clientId) {
    console.log('getClientData');

    return new Promise((resolve, reject) => {
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
            if (error) reject(error);
            console.log('reject(error)');
            resolve(body);
            console.log('resolve(body)');

        });
    });
}
// Function to insert row into the database
async function insertRowIntoDB(row) {
    console.log(row.id_cliente)
    try {
        const clientData = await getClientData(row.id_cliente);

        if (!clientData || !clientData.registros || clientData.registros.length < 1) {
            console.error('Error: getClientData returned invalid data:', clientData);
            return;
        }

        const client = new Client({
            host: "127.0.0.1",
            port: '5432',
            user: "fidelizou_me",
            password: "fidelizou_me",
            database: "fidelizou_me",
        });

        client.connect();

        const query = {
            text: 'INSERT INTO "areceber" (nn_ticket, id_customer, email, phone, status, due_date, value) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            values: [
                row.nn_boleto,
                clientData.registros[0].id_cliente || '',
                clientData.registros[0].email || '',
                clientData.registros[0].telefone_celular || '',
                row.status,
                row.data_vencimento,
                row.valor
            ],
        };

        const res = await client.query(query);

        console.log('Data inserted successfully');

        client.end();
    } catch (err) {
        console.error(err);
    }
}

async function getData() {
    console.log('getData');

    try {
        const response = await request(options);
        const rows = response.registros;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            console.log('Before calling insertRowIntoDB');
            await insertRowIntoDB(row);
        }
    } catch (err) {
        console.error(err);
    }
}
