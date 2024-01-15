//     // Exercicio 36

// class Conta {
//     constructor(saldo) {
//         this.saldo = saldo;
//     }

//     deposito(valor) {
//         this.saldo += valor;
//     }

//     saque(valor) {
//         this.saldo -= valor;
//     }
// }

// let conta = new Conta(1000);

// conta.deposito(1000);

// console.log(conta.saldo);

// conta.saque(500);

// console.log(conta.saldo);


// // Este código em JavaScript define uma classe chamada Conta, que representa uma conta bancária simples. A classe possui um construtor que inicializa o saldo da conta com um valor fornecido. Além disso, ela contém métodos deposito e saque para adicionar e subtrair valores do saldo, respectivamente. Um objeto conta é então criado a partir dessa classe, inicializado com um saldo de 1000. Um depósito de 1000 é feito na conta, e o saldo é impresso no console. Em seguida, um saque de 500 é realizado, e novamente o saldo atualizado é exibido no console. Portanto, o resultado final no console será 1500, refletindo o saldo atualizado após os depósitos e saques.


//     // Exercicio 37

//     class Carrinho {
//         constructor(itens, qtd, valorTotal) {
//           this.itens = itens;      // Array que armazena os itens no carrinho
//           this.qtd = qtd;          // Quantidade total de itens no carrinho
//           this.valorTotal = valorTotal;  // Valor total do carrinho
//         }
      
//         // Método para adicionar um item ao carrinho
//         addItem(item) {
//           let contador = 0;
      
//           // Percorre os itens no carrinho
//           for(let itemCarrinho in this.itens) {
//             // Verifica se o item já está no carrinho pelo ID
//             if(this.itens[itemCarrinho].id == item.id) {
//               this.itens[itemCarrinho].qtd += item.qtd;  // Atualiza a quantidade se já existir
//               contador = 1;
//             }
//           }
      
//           // Se o item não existir no carrinho, adiciona-o
//           if(contador == 0) {
//             this.itens.push(item);
//           }
      
//           // Atualiza a quantidade total e o valor total do carrinho
//           this.qtd += item.qtd;
//           this.valorTotal += item.preco * item.qtd;
//         }
      
//         // Método para remover um item do carrinho
//         removeItem(item) {
//           for(let itemCarrinho in this.itens) {
//             if(this.itens[itemCarrinho].id == item.id) {
//               // Armazena o objeto do item e encontra o índice no array
//               let obj = this.itens[itemCarrinho];
//               let index = this.itens.findIndex(function(obj) { return obj.id == item.id });
      
//               // Atualiza a quantidade total e o valor total do carrinho
//               this.qtd -= this.itens[itemCarrinho].qtd;
//               this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
      
//               // Remove o item do array
//               this.itens.splice(index, 1);
//             }
//           }
//         }
//       }
      
//       // Exemplo de uso da classe Carrinho
//       let carrinho = new Carrinho([
//         { id: 01, nome: "Camisa", qtd: 1, preco: 20 },
//         { id: 02, nome: "Calça", qtd: 2, preco: 50 }
//       ], 3, 120);
      
//       console.log(carrinho);
      
//       // Adiciona um item ao carrinho
//       carrinho.addItem({ id: 01, nome: "Camisa", qtd: 2, preco: 20 });
//       console.log(carrinho);
      
//       // Adiciona outro item ao carrinho
//       carrinho.addItem({ id: 03, nome: "Boné", qtd: 1, preco: 15 });
//       console.log(carrinho);
      
//     // Remove um item do carrinho
//     carrinho.removeItem({ id: 01, nome: "Camisa", qtd: 1, preco: 20 });
//     console.log(carrinho);   

// //   Este código em JavaScript define uma classe Carrinho que representa um carrinho de compras. Ele possui métodos para adicionar e remover itens do carrinho, atualizando a quantidade total e o valor total do carrinho. O exemplo de uso no final demonstra a criação de um carrinho inicial, a adição de itens, a visualização do carrinho após cada modificação e a remoção de um item.



//     // Exercicio 38

// // Definição da classe Endereco para representar informações de endereço
// class Endereco {
//     // Construtor que inicializa os atributos rua, bairro, cidade e estado
//     constructor(rua, bairro, cidade, estado) {
//       this.rua = rua;
//       this.bairro = bairro;
//       this.cidade = cidade;
//       this.estado = estado;
//     }
  
//     // Método setter para atualizar a rua do endereço
//     set novaRua(novaRua) {
//       this.rua = novaRua;
//     }
  
//     // Método setter para atualizar o bairro do endereço
//     set novoBairro(novoBairro) {
//       this.bairro = novoBairro;
//     }
  
//     // Método setter para atualizar a cidade do endereço
//     set novaCidade(novaCidade) {
//       this.cidade = novaCidade;
//     }
  
//     // Método setter para atualizar o estado do endereço
//     set novoEstado(novoEstado) {
//       this.estado = novoEstado;
//     }
//   }
  
//   // Criação de um objeto endereco usando a classe Endereco com valores iniciais
//   let endereco = new Endereco("Rua das Gaivotas", "Terrário", "São Joaquim", "SC");
  
//   // Imprime o endereço original no console
//   console.log(endereco);
  
//   // Atualiza a rua do endereço usando o método setter
//   endereco.novaRua = "Rua dos Pardais";
  
//   // Imprime o endereço após a modificação da rua no console
//   console.log(endereco);
  
//   // Atualiza a cidade do endereço usando o método setter
//   endereco.novaCidade = "São Paulo";
  
//   // Imprime o endereço após a modificação da cidade no console
//   console.log(endereco);
  

// // Este código em JavaScript define uma classe Endereco que representa informações de endereço, como rua, bairro, cidade e estado. O construtor da classe inicializa esses atributos com os valores fornecidos. Além disso, a classe possui quatro métodos setter (novaRua, novoBairro, novaCidade, novoEstado) que permitem atualizar individualmente cada parte do endereço.

// // Um objeto endereco é criado usando a classe Endereco com valores iniciais. O programa então imprime o endereço no console. Em seguida, são feitas duas alterações no endereço utilizando os métodos setter, e o endereço é impresso novamente após cada modificação. Portanto, o console mostrará o endereço original, o endereço com a rua atualizada para "Rua dos Pardais", e o endereço com a cidade atualizada para "São Paulo".


//     //Exercicio 39

// // Definição da classe Carro para representar informações de um veículo
// class Carro {
//     // Construtor que inicializa os atributos marca, cor, gasolinaRestante e consumo
//     constructor(marca, cor, gasolinaRestante, consumo) {
//       this.marca = marca;
//       this.cor = cor;
//       this.gasolinaRestante = gasolinaRestante;
//       this.consumo = consumo;
//     }
  
//     // Método para simular a ação de dirigir, calculando os litros consumidos com base na distância percorrida
//     dirigir(km) {
//       let litrosConsumidos = km / this.consumo; // Calcula os litros consumidos
//       this.gasolinaRestante -= litrosConsumidos; // Atualiza a quantidade de gasolina restante
//     }
  
//     // Método para simular a ação de abastecer o carro com uma quantidade específica de litros
//     abastecer(l) {
//       this.gasolinaRestante += l; // Adiciona a quantidade de litros ao tanque
//     }
//   }
  
//   // Criação de um objeto carro usando a classe Carro com valores iniciais
//   let carro = new Carro("VW", "Cinza", 100, 14);
  
//   // Imprime as informações do carro no console
//   console.log(carro);
  
//   // Simula a ação de dirigir o carro por 100 km
//   carro.dirigir(100);
  
//   // Imprime as informações do carro após a simulação de dirigir no console
//   console.log(carro);
  
//   // Simula a ação de abastecer o carro com 10 litros
//   carro.abastecer(10);
  
//   // Imprime as informações do carro após a simulação de abastecer no console
//   console.log(carro);

// //   Os comentários adicionados explicam cada parte do código, desde a definição da classe Carro até a criação do objeto carro e as simulações de dirigir e abastecer.

// // Exercicio 40

// // Definição da classe Conta para representar informações de uma conta corrente e conta poupança
// class Conta {
//     constructor(saldoCC, saldoCP, juros) {
//       this.saldoCC = saldoCC; // Saldo da conta corrente
//       this.saldoCP = saldoCP; // Saldo da conta poupança
//       this.juros = juros;     // Taxa de juros para a conta poupança
//     }
  
//     // Método para realizar um depósito na conta corrente
//     deposito(valor) {
//       this.saldoCC += valor;
//     }
  
//     // Método para realizar um saque na conta corrente
//     saque(valor) {
//       this.saldoCC -= valor;
//     }
  
//     // Método para realizar uma transferência da conta corrente para a conta poupança
//     transferenciaCP(valor) {
//       this.saldoCC -= valor;
//       this.saldoCP += valor;
//     }
  
//     // Método para realizar uma transferência da conta poupança para a conta corrente
//     transferenciaCC(valor) {
//       this.saldoCP -= valor;
//       this.saldoCC += valor;
//     }
  
//     // Método para calcular e adicionar os juros de aniversário na conta poupança
//     jurosDeAniversario() {
//       let juros = (this.saldoCP * this.juros) / 100;
//       this.saldoCP += juros;
//     }
//   }
  
//   // Definição da classe ContaEspecial que herda de Conta
//   class ContaEspecial extends Conta {
//     // Construtor que ajusta a taxa de juros da conta poupança para o dobro
//     constructor(saldoCC, saldoCP, juros) {
//       super(saldoCC, saldoCP, juros * 2);
//     }
//   }
  
//   // Criação de um objeto conta usando a classe Conta com valores iniciais
//   let conta = new Conta(1000, 5000, 1);
  
//   // Imprime as informações da conta no console
//   console.log(conta);
  
//   // Realiza um saque na conta corrente
//   conta.saque(500);
  
//   // Imprime as informações da conta após o saque no console
//   console.log(conta);
  
//   // Realiza um depósito na conta corrente
//   conta.deposito(5000);
  
//   // Imprime as informações da conta após o depósito no console
//   console.log(conta);
  
//   // Realiza uma transferência da conta corrente para a conta poupança
//   conta.transferenciaCP(3000);
  
//   // Imprime as informações da conta após a transferência no console
//   console.log(conta);
  
//   // Calcula e adiciona os juros de aniversário na conta poupança
//   conta.jurosDeAniversario();
  
//   // Imprime as informações da conta após a adição dos juros no console
//   console.log(conta);
  
//   // Criação de um objeto conta2 usando a classe ContaEspecial com valores iniciais
//   let conta2 = new ContaEspecial(10000, 50000, 1);
  
//   // Imprime as informações da conta2 no console
//   console.log(conta2);
  
//   // Realiza um saque na conta2
//   conta2.saque(5000);
  
//   // Imprime as informações da conta2 após o saque no console
//   console.log(conta2);
  
//   // Calcula e adiciona os juros de aniversário na conta2
//   conta2.jurosDeAniversario();
  
//   // Imprime as informações da conta2 após a adição dos juros no console
//   console.log(conta2);

// //   Os comentários adicionados explicam cada parte do código, desde a definição das classes Conta e ContaEspecial até a criação dos objetos conta e conta2 e as operações realizadas em cada um.
  
//   // Exercicio de programacao 18

// class WordCounter {
//     constructor() {
//       // Inicializa o objeto vazio
//       this.wordCount = 0;
//     }
  
//     countWords(inputString) {
//       // Verifica se a string de entrada não é nula ou indefinida
//       if (inputString && typeof inputString === 'string') {
//         // Usa split para dividir a string em palavras com base nos espaços em branco
//         const words = inputString.split(/\s+/);
        
//         // Filtra as palavras não vazias (evita contagem de múltiplos espaços)
//         const nonEmptyWords = words.filter(word => word !== '');
        
//         // Atualiza o contador de palavras
//         this.wordCount = nonEmptyWords.length;
//       } else {
//         // Se a entrada for inválida, define o contador de palavras como 0
//         this.wordCount = 0;
//       }
  
//       // Retorna o resultado do contador de palavras
//       return this.wordCount;
//     }
//   }
  
//   // Exemplo de uso da classe WordCounter
//   const wordCounter = new WordCounter();
//   const sentence = "Isso é um exemplo de frase.";
//   const numberOfWords = wordCounter.countWords(sentence);
//   console.log(`Número de palavras na frase: ${numberOfWords}`);

// //   Esta classe WordCounter possui um construtor que inicializa um contador de palavras vazio. O método countWords recebe uma string como parâmetro, conta o número de palavras na string e retorna o resultado. Certifique-se de ajustar conforme necessário para atender aos requisitos específicos do seu projeto.


// // Exercicio de programacao 19

// class Retangulo {
//     constructor(largura, altura) {
//       // Verifica se largura e altura são números maiores que zero
//       if (typeof largura === 'number' && largura > 0 && typeof altura === 'number' && altura > 0) {
//         this.largura = largura;
//         this.altura = altura;
//       } else {
//         // Se os parâmetros não forem válidos, lança um erro
//         throw new Error("Largura e altura devem ser números maiores que zero.");
//       }
//     }
  
//     calcularArea() {
//       return this.largura * this.altura;
//     }
  
//     calcularPerimetro() {
//       return 2 * (this.largura + this.altura);
//     }
//   }
  
//   // Exemplo de uso da classe Retangulo
//   try {
//     const retangulo = new Retangulo(5, 10);
//     console.log(`Área do retângulo: ${retangulo.calcularArea()}`);
//     console.log(`Perímetro do retângulo: ${retangulo.calcularPerimetro()}`);
//   } catch (error) {
//     console.error(error.message);
//   }
  
// //   Neste exemplo, a classe Retangulo é definida com os atributos largura e altura, e os métodos calcularArea e calcularPerimetro que realizam os cálculos conforme especificado. O construtor verifica se os parâmetros são números maiores que zero; caso contrário, lança um erro. O exemplo de uso demonstra como criar uma instância da classe e chamar os métodos.


// // Exercicio de programacao 20

// class ContaBancaria {
//     constructor(numeroConta, saldo = 0) {
//       this.numeroConta = numeroConta;
//       this.saldo = saldo;
//     }
  
//     depositar(valor) {
//       if (typeof valor === 'number' && valor > 0) {
//         this.saldo += valor;
//         console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
//       } else {
//         console.error("O valor do depósito deve ser um número maior que zero.");
//       }
//     }
  
//     sacar(valor) {
//       if (typeof valor === 'number' && valor > 0) {
//         if (valor <= this.saldo) {
//           this.saldo -= valor;
//           console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
//         } else {
//           console.error("Saldo insuficiente para realizar o saque.");
//         }
//       } else {
//         console.error("O valor do saque deve ser um número maior que zero.");
//       }
//     }
  
//     consultarSaldo() {
//       return this.saldo;
//     }
//   }
  
//   // Exemplo de uso da classe ContaBancaria
//   const minhaConta = new ContaBancaria("12345", 1000);
  
//   minhaConta.depositar(500);
//   minhaConta.sacar(200);
//   minhaConta.sacar(900); // Isso deve exibir uma mensagem de saldo insuficiente
//   console.log(`Saldo atual: ${minhaConta.consultarSaldo()}`);

// //   Neste exemplo, a classe ContaBancaria é definida com os atributos numeroConta e saldo, e os métodos depositar, sacar e consultarSaldo que realizam as operações conforme especificado. O exemplo de uso demonstra como criar uma instância da classe e chamar os métodos.

//  // Exercicio de programacao 21

// class Voo {
//     constructor(codigoVoo, origem, destino, assentosDisponiveis) {
//       this.codigoVoo = codigoVoo;
//       this.origem = origem;
//       this.destino = destino;
//       this.assentosDisponiveis = assentosDisponiveis;
//     }
  
//     reservarAssento() {
//       if (this.assentosDisponiveis > 0) {
//         this.assentosDisponiveis--;
//         console.log("Assento reservado com sucesso.");
//       } else {
//         console.log("Não há assentos disponíveis para reserva.");
//       }
//     }
  
//     consultarAssentosDisponiveis() {
//       return this.assentosDisponiveis;
//     }
//   }
  
//   // Exemplo de uso da classe Voo
//   const meuVoo = new Voo("V123", "Cidade A", "Cidade B", 0);
  
//   meuVoo.reservarAssento(); // Isso deve exibir uma mensagem de assentos esgotados
//   console.log(`Assentos disponíveis: ${meuVoo.consultarAssentosDisponiveis()}`);

// //   Neste exemplo, a classe Voo é definida com os atributos codigoVoo, origem, destino e assentosDisponiveis, e os métodos reservarAssento e consultarAssentosDisponiveis que realizam as operações conforme especificado. O exemplo de uso demonstra como criar uma instância da classe e chamar os métodos.

//     // Exercicio de programacao 21
// class Livro {
//     constructor(titulo, autor, disponivel = true) {
//       this.titulo = titulo;
//       this.autor = autor;
//       this.disponivel = disponivel;
//     }
  
//     emprestar() {
//       if (this.disponivel) {
//         this.disponivel = false;
//         console.log("Livro emprestado com sucesso.");
//       } else {
//         console.log("O livro não está disponível para empréstimo.");
//       }
//     }
  
//     devolver() {
//       if (!this.disponivel) {
//         this.disponivel = true;
//         console.log("Livro devolvido com sucesso.");
//       } else {
//         console.log("O livro já está disponível.");
//       }
//     }
  
//     consultarDisponibilidade() {
//       return this.disponivel ? "Disponível" : "Indisponível";
//     }
//   }
  
//   // Exemplo de uso da classe Livro
//   const meuLivro = new Livro("JavaScript: The Good Parts", "Douglas Crockford");
  
//   console.log(`Disponibilidade do livro: ${meuLivro.consultarDisponibilidade()}`);
  
//   meuLivro.emprestar();
//   console.log(`Disponibilidade do livro: ${meuLivro.consultarDisponibilidade()}`);
  
//   meuLivro.devolver();
//   console.log(`Disponibilidade do livro: ${meuLivro.consultarDisponibilidade()}`);
  

