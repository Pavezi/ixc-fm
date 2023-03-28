/*
drop table areceber 
CREATE TABLE areceber (
    id SERIAL PRIMARY KEY,
    nn_ticket VARCHAR(50),
    id_customer VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(50),
    status VARCHAR(50),
    due_date DATE,
    value VARCHAR(50) 
);
*/


import request from "request";
import pkg from 'pg';
const { Client } = pkg;
const date = "23/03/2022";

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
        "grid_param": "[{\"TB\": \"fn_areceber.data_vencimento\", \"OP\": \"<\", \"P\": \"${date}\"}]"
    },
    json: true,
};

getData();

// Function to get client data by id
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
                query: clientId.toString(),
                oper: '=',
                page: '1',
                rp: '1',
                sortname: 'cliente.id',
                sortorder: 'desc'
            },

            json: true
        };
        request(options, function (error, response, body) {
            if (error) reject(error);
            console.log('reject(error)');
            resolve(body);
        });
    });
}

// Function to insert row into the database
async function insertRowIntoDB(row) {
    console.log(row.id_cliente + ' insertRowIntoDB')
    try {
        const clientData = await getClientData(row.id_cliente);
        const today = new Date(); // get the actual date

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
                clientData.registros[0].id || '',
                clientData.registros[0].email || '',
                clientData.registros[0].telefone_celular || '',
                row.status,
                row.data_vencimento,
                row.valor
            ],
        };

        if (row.data_vencimento > today) {
            console.log("atrasado");
        } else if (row.data_vencimento === today.setDate(today.getDate() + 3)) {
            console.log("sua fatura ira vencer em 3 dias");
        }

        const res = await client.query(query);
        const vencimento = new Date(row.data_vencimento);
        const hoje = new Date();

        if (vencimento.getFullYear() === hoje.getFullYear() && vencimento.getMonth() === hoje.getMonth() && vencimento.getDate() === hoje.getDate()) {
            console.log("sua fatura ira vencer em 1 dia");
        } else if (vencimento < hoje) {
            console.log("atrasado");
        } else {
            console.log("a data de vencimento ainda não chegou");
        }

        // const now = new Date(); // current date
        // const tomorrow = new Date(now); // create a new date object with the same value as now
        // tomorrow.setDate(now.getDate() + 1); // increment the day by 1
        // const formattedTomorrow = tomorrow.toISOString().slice(0, 10); // convert to YYYY-MM-DD format
        // console.log(formattedTomorrow); // output: "2023-03-29"

        const dueDate = new Date(row.data_vencimento);
        dueDate.setDate(dueDate.getDate() + 3); // increment the day by 1
        const formatteddueDate = dueDate.toISOString().slice(0, 10); // convert to YYYY-MM-DD format

        const localDate = now.toLocaleDateString('en-CA'); // gets the local date as a string in the format 'MM/DD/YYYY'
        console.log(localDate + ' toLocaleDateString');

        console.log(row.data_vencimento + ' row.data_vencimento');
        console.log(formatteddueDate + ' formatteddueDate'); // output: "2023-03-29"
        console.log(dueDate + 'dueDate');

        client.end();

    } catch (err) {
        console.error(err);
    }
}

async function getData() {
    console.log('getData');

    try {
        const options = {
            method: "GET",
            url: "https://fidelizoume.ixcsoft.com.br/webservice/v1/fn_areceber",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Basic " + new Buffer.from(token).toString("base64"),
                ixcsoft: "listar",
            },
            body: {
                qtype: "fn_areceber.status",
                oper: "=",
                query: "A",
                sortname: "fn_areceber.id_contrato",
                sortorder: "asc",
                grid_param: '[{"TB": "fn_areceber.data_vencimento", "OP": "<", "P": "23/03/2022"}]',
            },
            json: true,
        };
        request(options, async function (error, response, body) {
            if (error) throw new Error(error);
            const rows = body.registros;
            console.log('Before for');
            console.log(rows + ' respone.registros');
            // console.log(response.registros);
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                console.log('Before calling insertRowIntoDB');
                await insertRowIntoDB(row);
            }
        });
    } catch (err) {
        console.error(err);
    }
}
