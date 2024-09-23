//DESAFIO 1
function verificarFib() {
  //Para verificar se o campo está vazio.
  const inputCampo = document.querySelector("input#numfib");
  const valorNum = inputCampo.value;
  console.log(valorNum);

  if (valorNum === "") {
    alert("Por favor preencha o campo com um número.");
    return;
  }

  const num = Number(valorNum);
  //verificar se contem um input válido.
  if (num === "" || isNaN(num)) {
    alert("Por favor digite um número");
    return;
  } else if (num < 0) {
    alert("Por favor digite um número acima de 0");
    return;
  }

  if (num === 0 || num === 1) {
    alert(`${num} faz parte da sequência de Fibonacci!`);
  }

  let a = 0;
  let b = 1;
  let fibonacci = a + b;
  //Verificação e loop da sequência de Fibonacci.
  while (fibonacci <= num) {
    if (fibonacci === num) {
      alert(`${num} faz parte da seqência de Fibonacci!`);
      return;
    }
    a = b;
    b = fibonacci;
    fibonacci = a + b;
  }
  alert(`O número ${num} não faz parte da sequência de Fibonacci 😓`);
}

//DESAFIO 2
function checarLetraA() {
  const textoInput = document.querySelector("input#checkA").value;
  if (textoInput === "") {
    alert("Por favor digite um texto ou palavra.");
    return;
  }

  const buscaA = /a/gi;
  const contemA = buscaA.test(textoInput);
  const repeticao = (textoInput.match(buscaA) || []).length;

  if (contemA) {
    alert(`Contém A, e ele aparece ${repeticao} vezes!`);
  } else {
    alert("Não contém A!😓");
  }
}

// DESAFIO 3 resposta 77
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); //77

//DESAFIO 4
// a)
let sequenciaA = [1, 3, 5, 7];
let proximoA = sequenciaA[sequenciaA.length - 1] + 2;
console.log(proximoA); // 9

// b)
let sequenciaB = [2, 4, 8, 16, 32, 64];
let proximoB = sequenciaB[sequenciaB.length - 1] * 2;
console.log(proximoB); // 128

// c)
let sequenciaC = [0, 1, 4, 9, 16, 25, 36];
let proximoC = Math.pow(sequenciaC.length, 2);
console.log(proximoC); //49

// d)
let sequenciaD = [4, 16, 36, 64];
let proximoD = Math.pow((sequenciaD.length + 1) * 2, 2);
console.log(proximoD); //100

// e)
let sequenciaE = [1, 1, 2, 3, 5, 8];
let proximoE =
  sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];
console.log(proximoE); // 13

// f)
let sequenciaF = [2, 10, 12, 16, 17, 18, 19];
let proximoF = 200;
console.log(proximoF); //200

//DESAFIO 5
/*Digamos que temos os interruptores 1, 2 e 3. Se acendermos o 1 por um tempo e depois desligarmos, a lâmpada ficará quente. Assim bastava ligar o interruptor 2 e ir à duas salas. Se a lâmpada estivesse apagada, mas quente, seria a sala do interruptor 1, se estivesse com a luz acesa, seria a sala do interruptor 2 e se estivesse apaga e fria, seria a sala do interruptor 3*/
