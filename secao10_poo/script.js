// // Methods (Métodos)

// const cachorro = {
//     Uivar: function() {
//         console.log("Auuuuuuuuuu");
//     },
//     rosnar: function() {
//         console.log("Grrrrrrrrrr");
//     }
// }

// cachorro.Uivar();
// cachorro.rosnar();

// // Neste código, você criou um objeto chamado dog que possui dois métodos, howl e growl, responsáveis por imprimir diferentes sons no console. As chamadas subsequentes aos métodos resultam na execução dessas funções, imprimindo os sons associados no console.


// // Methods 2 (Métodos 2)

// const cachorro2 = {
//     raca: 'sem raça definida',
//     Uivar: function() {
//         console.log("Auuuuuuuuuu");
//     },
//     rosnar: function() {
//         console.log("Grrrrrrrrrr");
//     },
//     setRaca: function(raca) {
//         this.raca = raca;
//     },
//     getRaca: function() {
//         return "A raça é " + this.raca;
//     }
// }

// console.log(cachorro2.raca);

// cachorro2.setRaca('Pitbull');

// console.log(cachorro2.raca);

// console.log(cachorro2.getRaca());

// // Esse código cria um objeto cachorro2 que representa um cachorro com propriedades como raca e métodos como Uivar, rosnar, setRaca e getRaca. O código então demonstra como acessar, modificar e obter informações sobre o objeto.

// // Prototypes

// const pessoa = {
//     maos: 2,
// }

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// console.log(pessoa.hasOwnProperty('maos'));

// // Este código JavaScript define um objeto chamado 'pessoa' com uma propriedade 'maos' inicializada com o valor 2. Em seguida, utiliza Object.getPrototypeOf(pessoa) para acessar e imprimir o protótipo desse objeto no console. Posteriormente, verifica se o protótipo do objeto 'pessoa' é estritamente igual ao protótipo padrão de objetos em JavaScript (Object.prototype). Por fim, utiliza hasOwnProperty para determinar se a propriedade 'maos' é uma propriedade própria (não herdada) do objeto 'pessoa' e imprime o resultado no console. Essa análise abrange conceitos fundamentais de herança de protótipos e métodos de objeto em JavaScript

// // Prototypes2

// const pessoa = {
//         maos: 2,
// }
    
// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
    
// console.log(pessoa.hasOwnProperty('maos'));

// const pessoaNova = Object.create(pessoa);

// console.log(pessoaNova.maos);

// console.log(pessoaNova.hasOwnProperty('maos'));

// console.log(Object.getPrototypeOf(pessoaNova) === pessoa);

// // Este código em JavaScript cria um objeto pessoa com uma propriedade maos igual a 2. Em seguida, ele imprime o protótipo de pessoa, verifica se o protótipo de pessoa é estritamente igual ao protótipo padrão de objetos (Object.prototype), e verifica se pessoa possui a propriedade própria maos. Depois, cria um novo objeto chamado pessoaNova utilizando Object.create(pessoa), onde pessoa se torna o protótipo de pessoaNova. O código então imprime o valor de maos para pessoaNova, verifica se pessoaNova possui a propriedade própria maos, e compara o protótipo de pessoaNova com o objeto pessoa.

// // Classes

// let cachorro3 = {
//     patas: 4,
//     raca: 'SRD',
//     latir: function() {
//         console.log("Au Au Au")
//     }
// }

// let labrador =  Object.create(cachorro3);

// labrador.latir();

// labrador.raca = "Labrador";

// console.log(labrador.raca);
// console.log(cachorro3.raca);

// let doberman =  Object.create(cachorro3);

// doberman.raca = "Doberman";

// console.log(doberman.raca);

// // O código demonstra como criar objetos relacionados usando herança de protótipos. Isso permite que objetos derivados, como labrador e doberman, herdem propriedades e métodos do objeto cachorro3 e, ao mesmo tempo, possam ter propriedades específicas próprias.

// 