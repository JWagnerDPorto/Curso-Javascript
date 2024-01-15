
// Exercicío 26

    let fiveItems = ["sword", "shield", "arrow", "armor", "potion"];

    console.log(fiveItems[1]);
    console.log(fiveItems[3]);
    console.log(fiveItems[4]);

// Exercicío 27

    let twoElements = ["fire","water"];
    let fourElements = ["light", "darkness", "air", "earth"];

    console.log(twoElements.length);
    console.log(fourElements.length);

// Exercicío 28

    let bus = {
        wheels: 8,
        passengers: 40,
        doors: 2
    };

    console.log(bus);
    console.log(bus.wheels);
    console.log(bus.passengers);
    console.log(bus.doors);

// Exercicío 29

    let bus2 = {
        wheels: 8,
        passengers: 40,
        doors: 2
    };

    delete bus.wheels;
    console.log(bus.wheels);

    bus.windows = 20;

    console.log(bus);
    console.log(bus.windows);

// Exercicío 30

    let fiveNames = ["Jonathan", "José", "Josué", "Jéssica", "Juliano"];

    if(fiveNames.includes("José")) {
        console.log("O nome foi encontardo");
    } else {
        console.log("O nome não foi encontardo");
    }

    if(fiveNames.includes("Maria")) {
        console.log("O nome foi encontardo");
    } else {
        console.log("O nome não foi encontardo");
    }

// Exercicío 31

    let moreElements = [11, 22, 33, 44, 55, 66];

    let lessElements = [77, 88, 99];

    function contElements (arr) {
        if(arr.length >= 5) {
            console.log("Many Elements");
        } else {
            console.log("Few Elements")
        }
    }

    contElements(moreElements);
    contElements(lessElements);

// Exercicío 32

    let numbers = [1,4,7,6,9];

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

// Exercicío 33

    let person = {
        "name": "Wagner",
        "age": 37,
        "role": "programmer"
    }

    console.log(person);
    console.log(person.name);
    console.log(person.age);
    console.log(person.role);

// Exercicío 34

    const sentence = "Being a good programmer requires a lot of practice";

    const arrSentence = sentence.split(" ");

    for (let i = 0; i < arrSentence.length; i++) {
        console.log(arrSentence[i]);
    }

// Exercicío 35

const calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

console.log(calculator.add(2,2));
console.log(calculator.subtract(6,2));
console.log(calculator.multiply(2,2));
console.log(calculator.divide(8,2));
