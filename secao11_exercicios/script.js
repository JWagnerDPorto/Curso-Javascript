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


    //Exercicio 39

// Definição da classe Carro para representar informações de um veículo
class Carro {
    // Construtor que inicializa os atributos marca, cor, gasolinaRestante e consumo
    constructor(marca, cor, gasolinaRestante, consumo) {
      this.marca = marca;
      this.cor = cor;
      this.gasolinaRestante = gasolinaRestante;
      this.consumo = consumo;
    }
  
    // Método para simular a ação de dirigir, calculando os litros consumidos com base na distância percorrida
    dirigir(km) {
      let litrosConsumidos = km / this.consumo; // Calcula os litros consumidos
      this.gasolinaRestante -= litrosConsumidos; // Atualiza a quantidade de gasolina restante
    }
  
    // Método para simular a ação de abastecer o carro com uma quantidade específica de litros
    abastecer(l) {
      this.gasolinaRestante += l; // Adiciona a quantidade de litros ao tanque
    }
  }
  
  // Criação de um objeto carro usando a classe Carro com valores iniciais
  let carro = new Carro("VW", "Cinza", 100, 14);
  
  // Imprime as informações do carro no console
  console.log(carro);
  
  // Simula a ação de dirigir o carro por 100 km
  carro.dirigir(100);
  
  // Imprime as informações do carro após a simulação de dirigir no console
  console.log(carro);
  
  // Simula a ação de abastecer o carro com 10 litros
  carro.abastecer(10);
  
  // Imprime as informações do carro após a simulação de abastecer no console
  console.log(carro);

//   Os comentários adicionados explicam cada parte do código, desde a definição da classe Carro até a criação do objeto carro e as simulações de dirigir e abastecer.
  