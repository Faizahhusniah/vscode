class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }


    get color() { return `Warna mobil: ${this._color}`; }

    set color(value) {
        console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);

        this._color = value;
    }

}

const faizCar = new Car("Inova", "green");
console.log(`Warna mobil: ${faizCar.color}`); // output->warna mobil: green

faizCar.color = "Red"; //Mengubahnilai properti color menjadi merah

console.log(`Warna mobil: ${faizCar.color}`);
//output - > warna mobil: red
console.log(`Warna mobil: ${faizCar.color}`);
//output - > warna mobil: red