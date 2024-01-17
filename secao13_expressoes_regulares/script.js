
//     // 01_regex_test

// // Cria uma expressão regular (RegExp) utilizando a sintaxe de string
// const reg1 = new RegExp('bola');

// // Testa se a string contém a palavra "bola"
// console.log(reg1.test("Tem bola?")); // Deve imprimir true
// console.log(reg1.test("Não tem"));   // Deve imprimir false

// // Cria uma expressão regular (RegExp) utilizando a sintaxe literal
// const reg2 = /bola/;

// // Testa se a string contém a palavra "bola"
// let text = 'Tem bola na cesta';
// console.log(reg2.test("Tem bola?")); // Deve imprimir true
// console.log(reg2.test("Não tem"));   // Deve imprimir false
// console.log(reg2.test(text));         // Deve imprimir true, pois a variável text contém a palavra "bola"

// // Testa se a string contém a palavra "quadrado"
// console.log(/quadrado/.test("Onde tem um quadrado")); // Deve imprimir true

// // Testa se a string contém a palavra "quadrado"
// console.log(/quadrado/.test("3423442323434quadrado2342323424332")); // Deve imprimir true, pois a palavra "quadrado" está presente na string


//     // 02_conjuntos

// // Cria uma expressão regular que procura por qualquer dígito de 1 a 5
// const reg1 = /[12345]/;

// // Testa se a string contém algum dos dígitos de 1 a 5
// console.log(reg1.test("Temos o número 6"));   // Deve imprimir false, pois não contém dígitos de 1 a 5
// console.log(reg1.test("Temos o número 2"));   // Deve imprimir true, pois contém o dígito 2
// console.log(reg1.test("Temos o número 23"));  // Deve imprimir true, pois contém o dígito 2 e 3
// console.log(reg1.test("Temos o número 60"));  // Deve imprimir false, pois não contém dígitos de 1 a 5

// // Cria uma expressão regular que procura por qualquer dígito de 0 a 9
// const reg2 = /[0-9]/;

// // Testa se a string contém algum dígito de 0 a 9
// console.log(reg2.test("Temos o número 65448484884848484")); // Deve imprimir true, pois contém dígitos de 0 a 9
// console.log(reg2.test("Temos o número"));                  // Deve imprimir false, pois não contém nenhum dígito



//     // 03_chars_especiais

// // Cria uma expressão regular que corresponde a qualquer caractere (exceto quebras de linha)
// const pontoRegex = /./;

// // Testa se a expressão regular casa com o ponto (.) literal
// console.log('.');              // Deve imprimir '.'
// console.log(pontoRegex.test("asd"));   // Deve imprimir true, pois qualquer caractere é casado, e a string contém caracteres
// console.log(pontoRegex.test(" "));     // Deve imprimir true, pois qualquer caractere é casado, e a string contém um espaço em branco
// console.log(pontoRegex.test("123"));   // Deve imprimir true, pois qualquer caractere é casado, e a string contém números
// console.log(pontoRegex.test("123sad")); // Deve imprimir true, pois qualquer caractere é casado, e a string contém caracteres

// // Cria uma expressão regular que corresponde a qualquer dígito (0-9)
// const dRegex = /\d/;

// // Testa se a expressão regular casa com dígitos
// console.log('d');
// console.log(dRegex.test("asd"));       // Deve imprimir false, pois não contém dígitos
// console.log(dRegex.test(" "));         // Deve imprimir false, pois não contém dígitos
// console.log(dRegex.test("123"));       // Deve imprimir true, pois contém dígitos
// console.log(dRegex.test("123sad"));    // Deve imprimir true, pois contém dígitos

// // Cria uma expressão regular que corresponde a qualquer caractere que não seja um dígito (0-9)
// const dRegex2 = /\D/;

// // Testa se a expressão regular casa com caracteres que não são dígitos
// console.log('D');
// console.log(dRegex2.test("asd"));      // Deve imprimir true, pois contém caracteres que não são dígitos
// console.log(dRegex2.test(" "));        // Deve imprimir true, pois contém um espaço em branco que não é um dígito
// console.log(dRegex2.test("123"));      // Deve imprimir false, pois contém dígitos
// console.log(dRegex2.test("123sad"));   // Deve imprimir true, pois contém caracteres que não são dígitos

// // Cria uma expressão regular que corresponde a qualquer caractere de espaço em branco
// const sRegex = /\s/;

// // Testa se a expressão regular casa com espaços em branco
// console.log('s');
// console.log(sRegex.test("asd"));       // Deve imprimir false, pois não contém espaços em branco
// console.log(sRegex.test(" "));         // Deve imprimir true, pois contém um espaço em branco
// console.log(sRegex.test("123"));       // Deve imprimir false, pois não contém espaços em branco
// console.log(sRegex.test("123sad"));    // Deve imprimir false, pois não contém espaços em branco

// // Cria uma expressão regular que corresponde a qualquer caractere de palavra (letras, números ou sublinhados)
// const wRegex = /\w/;

// // Testa se a expressão regular casa com caracteres de palavra
// console.log('w');
// console.log(wRegex.test("asd"));       // Deve imprimir true, pois contém caracteres de palavra
// console.log(wRegex.test(" "));         // Deve imprimir false, pois não contém caracteres de palavra
// console.log(wRegex.test("123"));       // Deve imprimir true, pois contém caracteres de palavra (números)
// console.log(wRegex.test("123sad"));    // Deve imprimir true, pois contém caracteres de palavra



//     // 04_chars_especiais-2

// // Cria uma expressão regular que corresponde a dois dígitos consecutivos
// const dia = /\d\d/;

// // Testa se a expressão regular casa com dois dígitos consecutivos em "2019" e verifica se o comprimento da string é igual a 2
// console.log(dia.test("2019") && "2019".length == 2); // Deve imprimir false, pois "2019" tem quatro dígitos

// // Testa se a expressão regular casa com dois dígitos consecutivos em "asd"
// console.log(dia.test("asd"));                         // Deve imprimir false, pois "asd" não contém dois dígitos consecutivos
// // Testa se a expressão regular casa com dois dígitos consecutivos em "05" e verifica se o comprimento da string é igual a 2
// console.log(dia.test("05") && "05".length == 2);     // Deve imprimir true, pois "05" tem dois dígitos consecutivos

// // Testa se a expressão regular casa com dois dígitos consecutivos em "asd1"
// console.log(dia.test("asd1"));                        // Deve imprimir false, pois "asd1" tem apenas um dígito consecutivo

// // Cria uma expressão regular que corresponde a pelo menos três caracteres de palavra consecutivos
// const palavrasPeloMenosTresLetras = /\w\w\w/;

// // Testa se a expressão regular casa com pelo menos três caracteres de palavra consecutivos em "asd"
// console.log(palavrasPeloMenosTresLetras.test("asd"));  // Deve imprimir false, pois "asd" tem apenas dois caracteres de palavra consecutivos

// // Testa se a expressão regular casa com pelo menos três caracteres de palavra consecutivos em "asdd"
// console.log(palavrasPeloMenosTresLetras.test("asdd")); // Deve imprimir true, pois "asdd" tem três caracteres de palavra consecutivos

// // Testa se a expressão regular casa com pelo menos três caracteres de palavra consecutivos em "as"
// console.log(palavrasPeloMenosTresLetras.test("as"));   // Deve imprimir false, pois "as" tem menos de três caracteres de palavra consecutivos



//     // 05_operador_not

// // Cria uma expressão regular que corresponde a qualquer caractere que não seja 'a' nem 'b'
// const notab = /[^ab]/;

// // Testa se a expressão regular casa com a string "a" (não deve casar)
// console.log(notab.test("a"));       // Deve imprimir false, pois a string contém o caractere 'a'
// // Testa se a expressão regular casa com a string "Aqui tem a" (não deve casar com 'a' e 'b' em minúsculas e maiúsculas)
// console.log(notab.test("Aqui tem a")); // Deve imprimir false, pois a string contém os caracteres 'a' e 'A'

// // Cria uma expressão regular que corresponde a qualquer caractere que não esteja entre 'a' e 'z'
// const nottoaz = /[^a-z]/;

// // Testa se a expressão regular casa com a string "123 as" (não deve casar com caracteres de 'a' a 'z')
// console.log(nottoaz.test("123 as")); // Deve imprimir true, pois a string contém números e espaço, mas não caracteres de 'a' a 'z'
// // Testa se a expressão regular casa com a string "asdasfdfsfeeqweqeqwes" (não deve casar com caracteres de 'a' a 'z')
// console.log(nottoaz.test("asdasfdfsfeeqweqeqwes")); // Deve imprimir false, pois a string contém apenas caracteres de 'a' a 'z'

// // Cria uma expressão regular que corresponde a qualquer caractere de 'a' a 'z'
// const az = /[a-z]/;

// // Testa se a expressão regular casa com a string "asd123asdad" (deve casar com os caracteres de 'a' a 'z' presentes na string)
// console.log(az.test("asd123asdad")); // Deve imprimir true, pois a string contém caracteres de 'a' a 'z'



//     //   06_operador_plus

// // Cria uma expressão regular que corresponde a um ou mais dígitos
// const umOuMaisNumeros = /\d+/;

// // Testa se a expressão regular casa com a string "1518" (deve casar, pois contém um ou mais dígitos)
// console.log(umOuMaisNumeros.test("1518")); // Deve imprimir true

// // Testa se a expressão regular casa com uma string vazia (não deve casar, pois não contém dígitos)
// console.log(umOuMaisNumeros.test("")); // Deve imprimir false

// // Testa se a expressão regular casa com a string "asdasdas" (não deve casar, pois não contém dígitos)
// console.log(umOuMaisNumeros.test("asdasdas")); // Deve imprimir false

// // Testa se a expressão regular casa com a string "1" (deve casar, pois contém um dígito)
// console.log(umOuMaisNumeros.test("1")); // Deve imprimir true

// // Testa se a expressão regular casa com a string "1511231231233123121323123121238" (deve casar, pois contém um ou mais dígitos)
// console.log(umOuMaisNumeros.test("1511231231233123121323123121238")); // Deve imprimir true



//     //  07_operador_question

// // Cria uma expressão regular que corresponde a "Abacaxi" ou "Abacai"
// const padrao = /Abacax?i/;

// // Testa se a expressão regular casa com a string "Abacaxi" (deve casar, pois o 'x' é opcional)
// console.log(padrao.test("Abacaxi")); // Deve imprimir true

// // Testa se a expressão regular casa com a string "Abacai" (deve casar, pois o 'x' é opcional)
// console.log(padrao.test("Abacai"));  // Deve imprimir true

// // Cria uma expressão regular que corresponde a um ou mais dígitos seguidos, opcionalmente seguidos por um caractere de palavra
// const padrao2 = /\d+\w?/;

// // Testa se a expressão regular casa com a string "123" (deve casar, pois contém um ou mais dígitos)
// console.log(padrao2.test("123"));   // Deve imprimir true

// // Testa se a expressão regular casa com a string "123a" (deve casar, pois contém um ou mais dígitos seguidos por um caractere de palavra)
// console.log(padrao2.test("123a"));  // Deve imprimir true

// // Testa se a expressão regular casa com a string "123 " (deve casar, pois contém um ou mais dígitos seguidos por um espaço em branco)
// console.log(padrao2.test("123 "));  // Deve imprimir true




//     //  08_operador_preciso

// // Cria uma expressão regular que corresponde ao formato padrão de CEP (XXXXX-XXX), onde X é um dígito
// const cep = /\d{5}-\d{3}/;

// // Testa se a expressão regular casa com a string "88117-500" (deve casar, pois segue o formato de CEP)
// console.log(cep.test("88117-500")); // Deve imprimir true

// // Testa se a expressão regular casa com a string "asd" (não deve casar, pois não segue o formato de CEP)
// console.log(cep.test("asd"));       // Deve imprimir false

// // Testa se a expressão regular casa com a string "881-50" (não deve casar, pois não segue o formato de CEP)
// console.log(cep.test("881-50"));     // Deve imprimir false

// // Testa se a expressão regular casa com a string "99999-999" (deve casar, pois segue o formato de CEP)
// console.log(cep.test("99999-999")); // Deve imprimir true

// // Cria uma expressão regular que corresponde ao formato padrão de telefone (XX)XXXXX-XXXX, onde X é um dígito
// const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

// // Testa se a expressão regular casa com a string "(48)9999-9999" (deve casar, pois segue o formato de telefone)
// console.log(tel.test("(48)9999-9999"));    // Deve imprimir true

// // Testa se a expressão regular casa com a string "(48)55555-4444" (deve casar, pois segue o formato de telefone)
// console.log(tel.test("(48)55555-4444"));    // Deve imprimir true



//     // 09_exec

// // Cria uma expressão regular que corresponde a um ou mais dígitos
// const digitos = /\d+/;

// // Usa o método exec() para encontrar a primeira ocorrência de dígitos na string "Tem o número 100 aqui"
// console.log(digitos.exec("Tem o número 100 aqui"));  // Deve imprimir ["100"], pois é a primeira ocorrência de um ou mais dígitos

// // Usa o método exec() para encontrar a primeira ocorrência de dígitos na string "Tem o número aqui"
// console.log(digitos.exec("Tem o número aqui"));       // Deve imprimir null, pois não há ocorrência de dígitos na string



//     // 10_match

// // Usa o método match() para encontrar a primeira ocorrência de um ou mais dígitos na string "O número 100 está aqui"
// const frase = "O número 100 está aqui".match(/\d+/);

// // Deve imprimir ["100"], pois é a primeira ocorrência de um ou mais dígitos na string
// console.log(frase);

// // Usa o método match() para encontrar a primeira ocorrência de um ou mais dígitos na string "O número está aqui"
// const frase2 = "O número está aqui".match(/\d+/);

// // Deve imprimir null, pois não há ocorrência de dígitos na string
// console.log(frase2);




//     // 11_choice_pattern

// // Cria uma expressão regular que corresponde a padrões do tipo "Nome: Matheus", "Nome: João" ou "Nome: Maria"
// const reg = /\w+: (Matheus|João|Maria)/;

// // Testa se a expressão regular casa com a string "Nome: Matheus" (deve casar, pois segue o padrão especificado)
// console.log(reg.test("Nome: Matheus")); // Deve imprimir true

// // Testa se a expressão regular casa com a string "Nome: José" (não deve casar, pois não está na lista de nomes permitidos)
// console.log(reg.test("Nome: José"));    // Deve imprimir false

// // Testa se a expressão regular casa com a string "Nome: Maria" (deve casar, pois segue o padrão especificado)
// console.log(reg.test("Nome: Maria"));   // Deve imprimir true


    // 12_validando_dominio

// Cria uma expressão regular que valida domínios no formato www.exemplo.com ou www.exemplo.com.br
const validaDominio = /^(www\.)?\w+\.com(\.br)?$/;

// Testa se a expressão regular casa com a string "www.google.com" (deve imprimir true)
console.log(validaDominio.test("www.google.com"));

// Testa se a expressão regular casa com a string "www.horadecodar.com.br" (deve imprimir true)
console.log(validaDominio.test("www.horadecodar.com.br"));

// Testa se a expressão regular casa com a string "www.horadecodar" (deve imprimir false, pois não possui ".com" no final)
console.log(validaDominio.test("www.horadecodar"));

// Testa se a expressão regular casa com a string "horadecodar.com.br" (deve imprimir false, pois não possui "www." no início)
console.log(validaDominio.test("horadecodar.com.br"));



    // 13_validando_email

// Cria uma expressão regular que valida o formato básico de um endereço de e-mail
const validarEmail = /\w+@\w+\.\w+/;

// Testa se a expressão regular casa com a string "matheus@gmail.com" (deve imprimir true)
console.log(validarEmail.test("matheus@gmail.com"));

// Testa se a expressão regular casa com a string "matheus@gmail" (deve imprimir false, pois não contém o domínio adequado)
console.log(validarEmail.test("matheus@gmail"));

// Testa se a expressão regular casa com a string "gmail.com" (deve imprimir false, pois não contém o formato de e-mail)
console.log(validarEmail.test("gmail.com"));

// Testa se a expressão regular casa com a string "matheus@gmail.com.br" (deve imprimir true)
console.log(validarEmail.test("matheus@gmail.com.br"));

// Testa se a expressão regular casa com a string "gmail@gmail.gmail.gmail" (deve imprimir false, pois não é um formato de e-mail válido)
console.log(validarEmail.test("gmail@gmail.gmail.gmail"));
    


    // 14_validando_data_nasc

// Cria uma expressão regular que valida o formato básico de uma data de nascimento no formato DD/MM/YYYY
const validarDataNasc = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/;

// Testa se a expressão regular casa com a string '05/02/2000' (deve imprimir true)
console.log(validarDataNasc.test('05/02/2000'));

// Testa se a expressão regular casa com a string '5/2/2000' (deve imprimir true, aceitando meses e dias sem o zero à esquerda)
console.log(validarDataNasc.test('5/2/2000'));

// Testa se a expressão regular casa com a string '05-02-2000' (deve imprimir false, pois usa o caractere errado para separar os elementos)
console.log(validarDataNasc.test('05-02-2000'));

// Testa se a expressão regular casa com a string '05/02/00' (deve imprimir false, pois o ano deve ter quatro dígitos)
console.log(validarDataNasc.test('05/02/00'));

// Testa se a expressão regular casa com a string '12/12/1999' (deve imprimir true)
console.log(validarDataNasc.test('12/12/1999'));

// Testa se a expressão regular casa com a string '99/99/9999' (deve imprimir false, pois os elementos não estão dentro dos intervalos corretos)
console.log(validarDataNasc.test('99/99/9999'));

// Testa se a expressão regular casa com a string '31/00/2010' (deve imprimir false, pois o mês deve estar entre 01 e 12)
console.log(validarDataNasc.test('31/00/2010'));
