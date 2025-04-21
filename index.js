let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação (+, -, *, /):");

let resultado;

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    resultado = numero2 !== 0 ? numero1 / numero2 : "Erro: divisão por zero!";
    break;
  default:
    resultado = "Operação inválida!";
}

alert("Resultado: " + resultado);

//  Salvar no localStorage
localStorage.setItem("ultimoResultado", resultado);

console.log("Último resultado salvo:", localStorage.getItem("ultimoResultado"));