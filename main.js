import Listar from "./api/Listar.js";
import Inserir from "./api/Inserir.js";
import Editar from "./api/Editar.js";
import Deletar from "./api/Deletar.js";
import auth from "./auth.js";

let token = auth.asherah;

const main = async () => {
  // Inserir.su_ticket(token);
  // Inserir.su_oss_chamado(token, "A");
  // Inserir.cliente_contrato(token);
  // Inserir.cliente(token);
  // let tickets = await Listar.su_ticket(token, "333");
  // Editar.su_oss_chamado(token, "342");
  const areceber = await Listar.fn_areceber(token);
  console.log(areceber);
  // console.log(areceber);
  // const clientes = await Listar.cliente(token, 1);
  // console.log(clientes);
  // const contratos = await Listar.cliente_contrato(token, 1);
  // console.log(contratos);
  // const os = await Listar.su_oss_chamado(token, 1);
  // const usuarios = await Listar.usuarios(token, 1);
  // let boleto = await Listar.boleto(token);
  // console.log(boleto);
  // Inserir.usuarios(token);
  // Editar.cliente(token, 87);
  //   for (let index = 63, length = 130; index < length; index += 1) {
  //     Deletar.cliente(token, index);
  //   }
};

main();
