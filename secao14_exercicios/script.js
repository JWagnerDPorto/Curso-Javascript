
    // exercicio 41

    // Expressão regular que valida a presença de pelo menos uma letra maiúscula de A a Z
const validarMaiusculas = /[A-Z]/;

// Testa a expressão regular com a string "testando"
console.log(validarMaiusculas.test("testando")); // Deveria retornar false, pois não há letras maiúsculas

// Testa a expressão regular com a string "1234"
console.log(validarMaiusculas.test("1234")); // Deveria retornar false, pois não há letras maiúsculas

// Testa a expressão regular com a string "TESTANDO"
console.log(validarMaiusculas.test("TESTANDO")); // Deveria retornar true, pois há pelo menos uma letra maiúscula


console.log("----------------------");

    // exercicio 42

// Criação de uma expressão regular para validar strings que terminam com "ID"
const validarID = /\d+ID\b/;

// Testa casos de uso
console.log(validarID.test("384284ID"));   // Deve retornar true, pois termina com "ID" após um ou mais dígitos.
console.log(validarID.test("384284"));     // Deve retornar false, pois não termina com "ID".
console.log(validarID.test("asd"));         // Deve retornar false, pois não termina com "ID" e não começa com dígitos.
console.log(validarID.test("asdasdID"));    // Deve retornar false, pois não começa com dígitos.
console.log(validarID.test("ID"));          // Deve retornar false, pois não tem dígitos antes de "ID".
console.log(validarID.test("555ID"));       // Deve retornar true, pois termina com "ID" após dígitos.


console.log("----------------------");

    // exercicio 43

// Criação de uma expressão regular para validar strings que começam com "Marca: " 
// seguido por uma das opções: Nike, Adidas, Puma ou Asics.
const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

// Testa casos de uso
console.log(validaMarca.test("Marca: Nike"));   // Deve retornar true, pois a marca é Nike.
console.log(validaMarca.test("Marca: ads"));    // Deve retornar false, pois não corresponde a Nike, Adidas, Puma ou Asics.
console.log(validaMarca.test("Marca: "));       // Deve retornar false, pois não há marca especificada após "Marca: ".
console.log(validaMarca.test("Nike"));          // Deve retornar false, pois não começa com "Marca: ".
console.log(validaMarca.test("12345"));         // Deve retornar false, pois não começa com "Marca: ".
console.log(validaMarca.test("Marca: Puma"));   // Deve retornar true, pois a marca é Puma.




console.log("----------------------");

    // exercicio 44

// Criação de uma expressão regular para validar strings que representam endereços IP.
// A expressão permite de 1 a 3 dígitos (\d{1,3}) separados por pontos.
const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

// Testa casos de uso
console.log(validarIP.test("127.0.0.1"));          // Deve retornar true, pois é um endereço IP válido.
console.log(validarIP.test("8.8.8.8"));            // Deve retornar true, pois é um endereço IP válido.
console.log(validarIP.test("192.168.0.62"));        // Deve retornar true, pois é um endereço IP válido.

console.log(validarIP.test("192.168.0"));          // Deve retornar false, pois não tem a quantidade correta de partes (quatro).
console.log(validarIP.test("192"));                // Deve retornar false, pois não tem a quantidade correta de partes (quatro).
console.log(validarIP.test("asdasd"));             // Deve retornar false, pois não é um endereço IP válido.
console.log(validarIP.test("123123123"));          // Deve retornar false, pois não é um endereço IP válido.
console.log(validarIP.test("1924.1648.04.6244"));  // Deve retornar false, pois não é um endereço IP válido.




console.log("----------------------");

    // exercicio 45

// Criação de uma expressão regular para validar nomes de usuário.
// A expressão requer que o nome de usuário tenha de 3 a 16 caracteres e consista em letras minúsculas,
// dígitos, underscores (_) ou hífens (-).
let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

// Testa casos de uso
console.log(validarNomeUsuario.test("matheus_123"));  // Deve retornar true, pois atende aos critérios definidos.

console.log(validarNomeUsuario.test("as"));          // Deve retornar false, pois é muito curto (menos de 3 caracteres).
console.log(validarNomeUsuario.test("11111111111111111111111111111"));  // Deve retornar false, pois é muito longo (mais de 16 caracteres).

