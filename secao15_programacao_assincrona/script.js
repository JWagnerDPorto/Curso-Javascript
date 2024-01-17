
//     // callbacks

// console.log("1"); // Imprime "1" imediatamente.

// // Agendar a execução da função de callback após 2000 milissegundos (2 segundos)
// setTimeout(function() {
//   console.log("5"); // Imprimirá "5" após 2 segundos.
// }, 2000);

// console.log("2"); // Imprime "2" imediatamente.
// console.log("3"); // Imprime "3" imediatamente.
// console.log("4"); // Imprime "4" imediatamente.




//     // promise

// let p = Promise.resolve(5); // Cria uma Promise que é resolvida imediatamente com o valor 5.

// console.log("Outros códigos"); // Imprime "Outros códigos" imediatamente.

// console.log(p); // Imprime a Promise (Promise { 5 }).

// p.then((value) => { return value + 5 })
//     .then((value) => { console.log(value) }); // Adiciona handlers para a Promise.

// // No entanto, neste caso, os handlers não terão tempo para executar antes do final do script,
// // pois a execução continua de forma síncrona após o último console.log.


  


//     // promise falha

// let pf = Promise.resolve(new Error("Não deu certo")); // Cria uma Promise que é resolvida imediatamente com um objeto Error.

// console.log("lalala"); // Imprime "lalala" imediatamente.

// pf.then(value => console.log(value)) // Este bloco não será executado porque a Promise é resolvida com um objeto Error.
//     .catch(reason => console.log("Falhou: " + reason)); // O bloco catch trata o erro e imprime a mensagem de erro.


    


//     // promise_reject

// // Função que retorna uma Promise para verificar se um número é igual a 2
// function verificarNumero(num) {
//     return new Promise((resolve, reject) => {
//       // Verifica se o número é igual a 2
//       if (num == 2) {
//         // Se for igual a 2, resolve a Promise com uma mensagem
//         resolve(console.log(`O numero é ${num}`));
//       } else {
//         // Se não for igual a 2, rejeita a Promise com um erro
//         reject(new Error("Falhou"));
//       }
//     });
//   }
  
//   // Chama a função verificarNumero com o argumento 2
//   verificarNumero(2);
  
//   // Chama a função verificarNumero com o argumento 3
//   verificarNumero(3);
  



//     // promise_all

// // Criando uma Promise (p1) que será resolvida com o valor 15 após 5 segundos
// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(15);
//     }, 5000);
// });

// // Criando uma Promise (p2) que é resolvida imediatamente com o valor 10
// const p2 = Promise.resolve(10);

// // Criando uma Promise (p3) que é resolvida imediatamente com o valor 12
// const p3 = new Promise((resolve, reject) => {
// resolve(12);
// });

// // Utilizando Promise.all para aguardar a resolução de todas as Promises
// Promise.all([p1, p2, p3]).then((values) => {
// // Quando todas as Promises são resolvidas, o array "values" contém os valores resolvidos de cada Promise
// console.log(values);
// });




//     // async_function
  
// // Definindo uma função assíncrona chamada "somar"
// async function somar(a, b) {
//     // A palavra-chave "async" indica que a função retorna uma Promise
  
//     // A expressão "return a + b;" retorna a soma de a e b, mas é implicitamente encapsulada em uma Promise
//     return a + b;
//   }
  
//   // Chamando a função somar com os argumentos 2 e 4 e imprimindo o resultado (não aguarda a Promise resolver)
//   console.log(somar(2, 4));
  
//   // Chamando a função somar com os argumentos 2 e 4 e utilizando "then" para imprimir o resultado (aguarda a Promise resolver)
//   somar(2, 4).then(value => console.log(value));
  


//     //   await

// // Função que retorna uma Promise com a soma de 'a' e 'b' após um atraso de 4 segundos
// function somaComDelay(a, b) {
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve(a + b);
//       }, 4000);
//     });
//   }
  
//   // Função assíncrona que utiliza a função somaComDelay
//   async function resSoma(a, b, c) {
//     // Chama a função somaComDelay e armazena a Promise resultante em 'x'
//     let x = somaComDelay(a, b);
  
//     // Atribui o valor de 'c' a 'y'
//     let y = c;
  
//     // Aguarda a resolução da Promise 'x' e soma o resultado com 'y'
//     return await x + y;
//   }
  
//   // Chama a função resSoma com os argumentos 1, 2 e 3 e imprime o valor resultante após a Promise ser resolvida
//   resSoma(1, 2, 3).then(value => console.log(value));
  


    //   generator

// Função geradora que cria uma sequência infinita de IDs
function* criadorId() {
    let id = 0;
    while(true) {
      // A palavra-chave 'yield' pausa a execução da função e retorna o valor atual de 'id'
      yield id++;
    }
  }
  
  // Cria uma instância do gerador
  let criaId = criadorId();
  
  // Imprime os valores gerados
  console.log(criaId.next().value); // Imprime: 0
  console.log(criaId.next().value); // Imprime: 1
  console.log(criaId.next().value); // Imprime: 2
  console.log(criaId.next().value); // Imprime: 3
  console.log(criaId.next().value); // Imprime: 4
  console.log(criaId.next().value); // Imprime: 5
  console.log(criaId.next().value); // Imprime: 6
  
  // O próximo 'console.log(criaId.next());' imprimirá o objeto que representa a última chamada do generator
  console.log(criaId.next());
  

