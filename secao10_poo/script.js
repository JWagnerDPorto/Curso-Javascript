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

// const pessoa1 = {
//     maos: 2,
// }

// console.log(Object.getPrototypeOf(pessoa1));
// console.log(Object.getPrototypeOf(pessoa1) === Object.prototype);

// console.log(pessoa1.hasOwnProperty('maos'));

// // Este código JavaScript define um objeto chamado 'pessoa' com uma propriedade 'maos' inicializada com o valor 2. Em seguida, utiliza Object.getPrototypeOf(pessoa) para acessar e imprimir o protótipo desse objeto no console. Posteriormente, verifica se o protótipo do objeto 'pessoa' é estritamente igual ao protótipo padrão de objetos em JavaScript (Object.prototype). Por fim, utiliza hasOwnProperty para determinar se a propriedade 'maos' é uma propriedade própria (não herdada) do objeto 'pessoa' e imprime o resultado no console. Essa análise abrange conceitos fundamentais de herança de protótipos e métodos de objeto em JavaScript


// // Prototypes2

// const pessoa2 = {
//         maos: 2,
// }
    
// console.log(Object.getPrototypeOf(pessoa2));
// console.log(Object.getPrototypeOf(pessoa2) === Object.prototype);
    
// console.log(pessoa2.hasOwnProperty('maos'));

// const pessoaNova = Object.create(pessoa2);

// console.log(pessoaNova.maos);

// console.log(pessoaNova.hasOwnProperty('maos'));

// console.log(Object.getPrototypeOf(pessoaNova) === pessoa2);

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


// // Instância Função

// function criarCachorro (raca, patas, cor) {
//     let cachorro = Object.create({});
//     cachorro.raca = raca;
//     cachorro.patas = patas;
//     cachorro.cor = cor;
//     cachorro.latir = function() {
//         console.log("Au Au Au");
//     }
//     return cachorro;
// }

// let viraLata = criarCachorro('Vira Lata', 4, "preta");

// console.log(viraLata);

// viraLata.latir();

// // Este código em JavaScript define uma função chamada criarCachorro que recebe três parâmetros: raca, patas e cor. Dentro da função, um objeto vazio é criado usando Object.create({}), e propriedades como raca, patas e cor são atribuídas a esse objeto. Além disso, a função adiciona um método latir ao objeto, que imprime "Au Au Au" no console. Em seguida, a função retorna o objeto representando o cachorro. O código então chama a função criarCachorro para criar um objeto doberman com características específicas e imprime esse objeto no console. Finalmente, é chamado o método latir do objeto doberman, resultando na impressão de "Au Au Au" no console.


// // Instância New

// function Cachorro (raca, patas, cor) {
//     this.raca = raca;
//     this.patas = patas;
//     this.cor = cor;
//     this.latir = function() {
//         console.log("Au Au Au");
//     }
// }

// let husky = new Cachorro('husky', 4, "preta");

// console.log(husky);

// husky.latir();


// // Este código em JavaScript define uma função construtora chamada Cachorro que aceita três parâmetros: raca, patas e cor. Dentro do construtor, as propriedades correspondentes são atribuídas ao objeto criado usando o operador this. Além disso, o construtor define um método chamado latir que imprime "Au Au Au" no console. Em seguida, a função construtora é utilizada com a palavra-chave new para criar uma instância do objeto husky com valores específicos para as características do cachorro. O objeto husky é então impresso no console, e finalmente, o método latir é chamado para imprimir "Au Au Au" no console. Este código exemplifica a criação de objetos usando uma função construtora em JavaScript.


// // Método Prototype

// function Gato (raca, patas, cor) {
//     this.raca = raca;
//     this.patas = patas;
//     this.cor = cor;
// }

// Gato.prototype.miar = function(){
//     console.log("Miauu");
// }

// let persa = new Gato('Persa', 4, "cinza");

// console.log(persa);

// persa.miar();


// // Neste código em JavaScript, é definida uma função construtora chamada Gato que aceita três parâmetros: raca, patas e cor. Dentro do construtor, as propriedades correspondentes são atribuídas ao objeto criado usando o operador this. Em seguida, é adicionado um método miar ao protótipo da função construtora Gato. A palavra-chave new é usada para criar uma instância do objeto persa com valores específicos para as características do gato. O objeto persa é então impresso no console, e o método miar é chamado, resultando na impressão de "Miauu" no console. Isso ilustra o uso do protótipo para adicionar métodos compartilhados entre todas as instâncias de objetos criados a partir da mesma função construtora.


// //Class Constructor

// class passaro {
//     constructor(raca, patas, cor) {
//         this.raca = raca;
//         this.patas = patas;
//         this.cor = cor;
//     }
// }

// let queroQuero = new passaro ('Quero Quero', 2, 'cinza');

// console.log(queroQuero);

// // Este trecho de código em JavaScript define uma classe chamada passaro usando a sintaxe de classes introduzida no ECMAScript 2015 (ES6). A classe tem um construtor que aceita três parâmetros (raca, patas, e cor) e os atribui às propriedades correspondentes do objeto criado usando a palavra-chave this. Em seguida, é criada uma instância da classe passaro chamada queroQuero com valores específicos para as características do pássaro (raca, patas e cor). O objeto queroQuero é impresso no console usando console.log(). Essa sintaxe de classe é uma maneira mais moderna e concisa de criar construtores de objetos em comparação com a abordagem de função construtora tradicional.

// // Class Methods

// class passaro2 {
//     constructor(raca, cor) {
//         this.raca = raca;
//         this.cor = cor;
//     }

//     falar() {
//         console.log("Loro quer biscoito")
//     }
// }


// passaro2.prototype.patas = 2;
// let papagaio = new passaro2 ('Papagaio', 'verde');

// console.log(papagaio);
// console.log(papagaio.patas);

// papagaio.falar();


// // Neste trecho de código em JavaScript, é definida uma classe chamada passaro2 usando a sintaxe de classes do ECMAScript 2015 (ES6). A classe tem um construtor que aceita dois parâmetros (raca e cor) e os atribui às propriedades correspondentes do objeto usando a palavra-chave this. Além disso, a classe possui um método chamado falar que imprime "Loro quer biscoito" no console.
// // Depois, é adicionada uma propriedade patas ao protótipo da classe passaro2 com o valor 2. Em seguida, é criada uma instância da classe passaro2 chamada papagaio com valores específicos para as características do pássaro (raca e cor). O objeto papagaio é impresso no console usando console.log(), e a quantidade de patas do papagaio é acessada e impressa no console.
// // Finalmente, o método falar é chamado para a instância papagaio, resultando na impressão de "Loro quer biscoito" no console. Isso mostra a combinação do uso de construtores, métodos e protótipos em uma classe em JavaScript.



// // Override Prototype

// class passaro3 {
//     constructor(raca, cor) {
//         this.raca = raca;
//         this.cor = cor;
//     }

//     falar() {
//         console.log("Loro quer biscoito")
//     }
// }


// passaro3.prototype.raca = "SRD";
// passaro3.prototype.patas = 2;


// let papagaio3 = new passaro3 ('Papagaio', 'verde');

// console.log(papagaio3);
// console.log(papagaio3.patas);

// papagaio3.falar();

// console.log(passaro3.prototype.raca);
// console.log(papagaio3.raca);

// // Você definiu uma classe chamada passaro3 que possui um construtor para inicializar as propriedades raca e cor. Além disso, você adicionou um método chamado falar que imprime "Loro quer biscoito" no console.
// // Depois, você modificou o protótipo da classe passaro3 para incluir as propriedades raca e patas com valores padrão ("SRD" e 2, respectivamente).
// // Em seguida, você criou uma instância da classe passaro3 chamada papagaio3 com valores específicos para as propriedades raca e cor, e então, você imprimiu essa instância no console, bem como o valor da propriedade patas da instância.
// // Finalmente, você chamou o método falar da instância papagaio3 e imprimiu no console tanto o valor da propriedade raca no protótipo quanto na instância. O código parece estar funcionando conforme o esperado, demonstrando o uso de classes, protótipos e instâncias em JavaScript.


// class Passarinho {
//     constructor(raca, cor) {
//         this.raca = raca;
//         this.cor = cor;
//     }

//     falar() {
//         console.log("Piu Piu")
//     }
// }


// Passarinho.prototype.raca = "SRD";

// // criando symbol
// let patas = Symbol();

// Passarinho.prototype[patas] = 2;


// let andorinha = new Passarinho ('Andorinha','verde');

// console.log(andorinha);
// console.log(andorinha.patas);

// andorinha.falar();

// console.log(Passarinho.prototype.raca);
// console.log(andorinha.raca);

// // acessando symbol
// console.log(Passarinho.prototype[patas]);
// console.log(andorinha[patas]);


// // No segundo trecho do código, você definiu uma classe chamada Passarinho com um construtor para inicializar propriedades como raca e cor, e um método falar que imprime "Piu Piu" no console. Modificou o protótipo da classe para incluir a propriedade raca com valor padrão ("SRD") e introduziu um símbolo chamado patas para representar o número de patas. Após criar uma instância chamada andorinha com valores específicos, você imprimiu a instância, chamou o método falar, acessou valores de propriedades no protótipo e na instância, incluindo o uso de símbolos para propriedades "ocultas". Isso ilustra a criação de uma classe e o uso de símbolos em JavaScript para representar características de um passarinho.

// // Get and Set

// class Cachorro4 {
//     constructor(raca, cor) {
//         this.raca = raca;
//         this.cor = cor;
//     }

//     latir() {
//         console.log("Au Au")
//     }

//     get getCor() {
//         return this.cor;
//     }

//     set setCor (cor) {
//         this.cor = cor;
//     }
// }

// let pastor = new Cachorro4 ('Pastor Almão', 'Sem cor');

// console.log(pastor);

// pastor.setCor ='Marrom';

// console.log(pastor.getCor);


// // Neste trecho de código em JavaScript, você definiu uma classe chamada Cachorro4 com um construtor que inicializa as propriedades raca e cor. Além disso, a classe possui um método latir que imprime "Au Au" no console.
// // Você também adicionou um getter chamado getCor que retorna o valor da propriedade cor, e um setter chamado setCor que permite definir o valor da propriedade cor.
// // Em seguida, você criou uma instância da classe Cachorro4 chamada pastor com valores específicos para as propriedades raca e cor. Essa instância foi impressa no console.
// // Posteriormente, você utilizou o setter setCor para alterar a cor do cachorro para "Marrom" e, em seguida, imprimiu a nova cor usando o getter getCor.
// // O código exemplifica a criação de uma classe com métodos, getters e setters em JavaScript, proporcionando uma maneira de interagir com as propriedades da instância.


// Herança e Instanceof

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Lobo extends Mamifero {
    constructor(patas, raca) {
        super(patas,patas);
        this.raca;
    }

    uivar() {
        console.log("Auuuuuuu");
    }
}

let cinzento = new Lobo (4, "Cinzento");

console.log(cinzento.patas);

cinzento.uivar();

console.log(new Lobo instanceof Mamifero);

console.log(coiote instanceof Mamifero);

// O código JavaScript cria duas classes: Mamifero e Lobo. A classe Mamifero possui um construtor que inicializa a propriedade patas. Em seguida, é criada uma instância chamada coiote da classe Mamifero com 4 patas, e o número de patas é impresso no console.
// A classe Lobo estende a classe Mamifero usando a palavra-chave extends. No entanto, há um erro no código: super(patas, patas) não é necessário e pode causar um erro, então corrigi para super(patas).
// É criada uma instância chamada cinzento da classe Lobo com 4 patas e a raça "Cinzento". O número de patas do lobo cinzento é impresso no console, e então é chamado o método uivar(), que imprime "Auuuuuuu" no console.
// Posteriormente, é verificado se uma instância da classe Lobo é também uma instância da classe Mamifero usando instanceof. As saídas no console indicarão se isso é verdadeiro ou falso.









