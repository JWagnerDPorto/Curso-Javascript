let num1 = 1;
let num2 = 5;
let num3 = 3;
let num4 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num1, num2, num3);

console.log("---------------------------------------");

imprimirNumeros(num3,num4);

console.log("---------------------------------------");

imprimirNumeros(2,5,3,6,7,8,4,2,6,4,3,2);