let pessoa = {
    "nome": "Wagner",
    "idade": 37,
    "profissao": "Programador",
    "hobbies": ["RPG", "Trilha", "Acampar"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
