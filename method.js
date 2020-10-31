class Car {
    //sama seperti function constructor
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }

    //Sama seperti Car.prototype.startEngine
    startEngines() {
        console.log('Mobil dinyalakan ..... ');
        this.enginesActive = true;
    }

    //sama seperti Car.prototype.info 
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color: ${this.color}`);
        console.log(`Engines: ${this.enginesActive ? "Active" : "Inactive"}`);
    }
}

const faizCar = new Car("Kijang", "Green");
faizCar.startEngines();
faizCar.info();

const dillaCar = new Car("Inova", "white");
dillaCar.startEngines();
dillaCar.info();