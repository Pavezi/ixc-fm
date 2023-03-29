import request from "request";
import pkg from 'pg';
const { Client } = pkg;

let token = '7:8033b4f49653cb5d04817568aeb93f1f3636d6b90ceb39bf0bda598b843ff90d';
getData(-292); // how many days after or before today wil be used in the search
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
        request(options, function (error, body, response) {
            if (error) reject(error);
            console.log('reject(error)');
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
        client.end();
    } catch (err) {
        console.error(err);
    }
}

async function getData(days) {
    console.log('getData');
    let now = new Date();
    now.setDate(now.getDate() + days); // add or subtract days
    let searchDate = now.toLocaleDateString('pt-BR');
    console.log(searchDate + "Pt-BR")
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
                grid_param: `[{"TB": "fn_areceber.data_vencimento", "OP": "=", "P": "${searchDate}"}]`
            },
            json: true,
        };
        request(options, async function (error, response, body) {
            if (error) throw new Error(error);
            const rows = body.registros;
            console.log('Before for');
            console.log(rows.length + ' respone.registros');
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
