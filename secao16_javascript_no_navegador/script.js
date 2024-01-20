
// // Mover no DOM

// console.log(document.body);

// console.log(document.body.childNodes[1]);


// // by tag

// console.log(document.getElementsByTagName('h1'));

// console.log(document.getElementsByTagName('p'));

// console.log(document.getElementsByTagName('li'));


// // by id

// console.log(document.getElementsByTagName('h1'));

// console.log(document.getElementById('titulo-principal'));


// // by class

// console.log(document.getElementsByTagName('li'));

// console.log(document.getElementsByClassName('itens-azuis'));

// console.log(document.getElementsByClassName('itens-vermelhos'));

// console.log(document.getElementsByClassName('itens'));


// // query

// console.log(document.querySelector('#container-principal h1'));

// console.log(document.querySelector('div div p'));

// console.log(document.querySelector('footer h2'));

// console.log(document.querySelector('ul .itens azuis'));


// insert before

// let criarElemento = document.createElement("p");
// let texto = document.createTextNode("Algum texto");

// criarElemento.appendChild(texto);

// let elementoAlvo = document.querySelector("#titulo-principal");
// let elementoPai = document.querySelector("#container-principal");

// elementoPai.insertBefore(criarElemento, elementoAlvo);


// // append_child

// let novoElemento = document.createElement("p");
// let texto = document.createTextNode("Algum texto");

// novoElemento.appendChild(texto);

// let p = document.querySelector("#paragrafo-principal");
// let pai = p.parentNode;

// pai.appendChild(novoElemento);