//     // Strict

// // "use strict" torna o código mais restrito e ajuda a evitar certos erros comuns.
// // Por exemplo, impede a criação de variáveis globais implícitas e torna o código mais seguro.
// "use strict";

// // Variável global
// let opa = 'teste';

// // Tentando excluir a propriedade 'prototype' do objeto 'Object'.
// // Isso não é permitido no modo estrito e resultará em um TypeError.
// // delete Object.prototype;

// // Função que usa o modo estrito localmente
// function teste() {
//     // Modo estrito aplicado apenas a esta função
//     "use strict";

//     // Variável local
//     let testando = 'teste';
// }

// // Chamando a função
// teste();

// // Tentando acessar e modificar propriedades em tipos primitivos (false e "teste").
// // Isso não é permitido no modo estrito e resultará em um TypeError.
// // false.prop = "";
// // "teste".prop = "";

// // O "use strict" é uma diretiva que faz com que o código seja executado em um modo mais restrito, ajudando a capturar erros comuns e tornando-o mais seguro.

//     // console.log

// // Inicialização das variáveis
// let a = 1;
// let b = 2;
// let c = 3;

// // Verificação: se c for maior que a, atribui o valor de b a a e imprime a
// if (c > a) {
//   a = b;
//   console.log(a);
// }

// // Loop: decrementa i de 5 até 1
// for (let i = 5; i > 0; i--) {
//   // Incrementa b
//   b++;
//   // Atualiza a com a soma de a, c e 1
//   a = a + c + 1;
//   // Incrementa c por 2
//   c += 2;
//   // Imprime o valor de a em cada iteração
//   console.log(a);
// }

// // Verificação: se b for igual a a, incrementa a; caso contrário, a recebe a soma de a, b e c
// if (b == a) {
//   a++;
// } else {
//   a = a + b + c;
// }

// // Imprime o valor final de a
// console.log(a);

// // Multiplica a por b e imprime o resultado
// a = a * b;
// console.log(a);


//     // debugger

// let A = 1;
// let B = 2;
// let C = 3;

// // Se C for maior que A, A recebe B e a execução é pausada para depuração
// if (C > A) {
//     A = B;
//     debugger;
// }

// // Loop: decrementa i de 5 até 1
// for (let i = 5; i > 0; i--) {
//     B++;
//     A = A + C + 1;
//     C += 2;
//     // Pausa a execução para depuração após cada iteração do loop
//     debugger;
// }

// // Se B for igual a A, incrementa A; senão, A recebe a soma de A, B e C
// if (B == A) {
//     A++;
// } else {
//     A = A + B + C;
// }

// // Pausa a execução para depuração antes da multiplicação
// debugger;

// A = A * B;

// // Pausa a execução para depuração antes da impressão
// debugger;

// console.log('teste');

// // Ao executar esse código em um ambiente que suporte a depuração, como o console do navegador, a execução será pausada nos pontos onde você adicionou a palavra-chave debugger. Isso permite que você inspecione variáveis, avalie expressões e passe passo a passo pelo código durante a depuração.



//     // tratamento imput

// // Função para verificar se um valor é um número válido
// function checarNumero(num) {
//     // Converte o valor para um número usando Number()
//     let number = Number(num);

//     // Verifica se o resultado da conversão é um NaN (não é um número)
//     if (Number.isNaN(number)) {
//       // Se for NaN, exibe um alerta
//       alert("Por favor, passe só números para o programa");
//     } else {
//       // Se for um número válido, retorna o número
//       return number;
//     }
//   }

//   // Exemplos de chamadas da função
//   checarNumero(5);      // Retorna 5, pois é um número válido
//   checarNumero('sadh'); // Exibe um alerta, pois 'sadh' não é um número válido

//   // Solicita ao usuário que digite um número
//   let number = prompt("Digite um número");

//   // Verifica se o número inserido é válido usando a função checarNumero
//   checarNumero(number);


//   // exception

// // Função que cumprimenta o usuário com base no nome fornecido
// function saudacao(nome) {
//     // Verifica se o tipo do parâmetro nome é uma string
//     if (typeof nome != 'string') {
//         // Lança um erro se o tipo não for uma string
//         throw new Error("O parametro nome precisa ser string");
//     } else {
//         // Imprime uma saudação se o tipo for uma string
//         console.log(`Olá ${nome}.`);
//     }
// }

// // Chamadas da função com diferentes tipos de parâmetros
// saudacao("Wagner"); // Imprime: Olá Wagner.
// saudacao(5);         // Lança um erro: O parametro nome precisa ser string

// // Imprime "teste" no console
// console.log("teste");


    //try catch

// // Variável b não está definida neste trecho de código
// // Supondo que ela foi definida em algum lugar anteriormente no seu código

// try {
//     // Tentativa de executar uma operação que envolve a variável b
//     let a = 2 + b;
// } catch (e) {
//     // Se ocorrer um erro durante a execução do bloco try, o erro é capturado aqui
//     console.log(e);
//     // Poderia lançar o erro novamente usando throw new Error(e);
// }

// // Independente do que aconteceu no bloco try-catch, essa linha será sempre executada
// console.log('teste');

    // // finally

// let b = 2;

// try {
//   // Tentativa de executar uma operação que envolve a variável b
//   let a = 2 + b;
// } catch (e) {
//   // Se ocorrer um erro durante a execução do bloco try, o erro é capturado aqui
//   console.log(e);
// } finally {
//   // O bloco finally é sempre executado, independentemente de ocorrer ou não uma exceção
//   console.log("Executou");
// }

// // Esta linha seria executada independentemente de ocorrer ou não uma exceção no bloco try
// // console.log('teste');


    // assertions

// // Definição de um array
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];

// // Função que itera sobre um array e imprime os índices
// function iterarArray(arr) {
//   // Verifica se o array tem pelo menos um elemento
//   if (arr.length === 0) {
//     // Lança um erro se o array estiver vazio
//     throw new Error("O array precisa ter pelo menos um elemento");
//   } else {
//     // Itera sobre o array e imprime os índices
//     for (let i = 0; i < arr.length; i++) {
//       console.log(i);
//     }
//   }
// }

// // Função que verifica se o array está vazio e imprime uma mensagem de sucesso
// function arrayVazio(arr) {
//   // Verifica se o array não tem elementos
//   if (arr.length > 0) {
//     // Lança um erro se o array tiver elementos
//     throw Error("O array não pode ter elementos");
//   } else {
//     // Imprime uma mensagem de sucesso se o array estiver vazio
//     console.log("Agora deu certo");
//   }
// }

// // Chamadas das funções com os arrays definidos anteriormente
// iterarArray(arr);   // Imprime os índices de 0 a 4
// iterarArray(arr2);  // Lança um erro, pois arr2 está vazio

// // Se a chamada acima lançar um erro, as linhas abaixo não serão executadas
// arrayVazio(arr);    // Não será executado, pois arr não está vazio
// arrayVazio(arr2);   // Imprime "Agora deu certo", pois arr2 está vazio