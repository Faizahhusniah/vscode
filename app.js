//kita dapat mengubah penamaan coffee stock sesuai dengan kebutuhan kita
import { coffeeStock, isCoffeeMakerReady }
from "./state.js"


const displayStock = stock => {
    const coffeeStockListElement = document.querySelector("#coffee-stock-list");
    for (const type in stock) {
        const coffeeStockListElement = document.createElement("li");
        coffeeStockListElement.innerText = `${type}: ${stock[type]}`;
        coffeeStockListElement.appendChild(coffeeStockListElement);
    }
}

const coffeeOrder = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if (isCoffeeMakerReady) {
            if (coffeeStock[type] >= miligrams) {
                resolve("Kopi berhasil dipesan!");
            } else {
                reject("Maaf stock kopi telah habis!")
            }
        } else {
            reject("Maaf mesin sedang rusak!")
        }
    })

}

const coffeeOrderButtonEventHandler = async event => {
    const type = prompt("Kopi apa yang ingin dipesan?");
    const miligrams = prompt("berapa miligrams?");

    try {
        const result = await coffeeOrder(type, miligrams);
        alert(result);

    } catch (rejectionReason) {
        alert(rejectionReason);
    }
}

const coffeeOrderButtonElement = document.querySelector("#coffee-order-button");
coffeeOrderButtonElement.addEventListener("click", coffeeOrderButtonEventHandler);


// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }