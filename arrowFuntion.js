//Regular Function
const upperizedNames = ["faizah", "habibah", "windy"]
    .map(function(name) {
        return name.toUpperCase();
    });

//function declaration
function sayHello() {
    console.log(`${greet}!`);
}

//function expression
const sayname = function(name) {
    console.log(`Nama saya ${name}`)
}

console.log(...upperizedNames);

//arrowFunction
const upperizedNames = ["faizah", "habibah", "windy"]
    .map(nama => nama.toUpperCase());

console.log(...upperizedNames);

//function expression
// const sayHello = greet => console.log(`${greet}`)
// const sayName = name => console.log((`Nama saya ${name}`)

//name merupakan parameter dari fungsi
const sayname = name => console.log(`Nama saya ${name}`);
//jika terdapat dua paramter
const sayHello = (name, greet) => console.log(`${greet}, ${name}!`);

sayHello("Dimas", "Selamat Pagi")

//jika kita butuh lebih dari satu baris dalam body function, kita bisa menuliskannya seperti ini:

const sayHello = language => {
    if (language.toUpperCase() === "INDONESIA") {
        return "Selamat Pagi";
    } else {
        return "GOOD MORNING!"
    }
}

console.log(sayHello("Indonesia"));