import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cc1 = new ContaCorrente();

cliente1.nome = "Jade";
cliente1.cpf = 123321;
cc1.agencia = 1001;
cc1.cliente = cliente1;
cc1.usuario_depositar(10);

const cliente2 = new Cliente();
const cc2 = new ContaCorrente();

cliente2.nome = "Bruno";
cliente2.cpf = 321123;
cc2.agencia = 2002;
cc2.usuario_depositar(100);
cc2.cliente = cliente2;

console.log(cc1);
console.log(cc2);
