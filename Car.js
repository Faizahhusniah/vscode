class Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.wheels = wheels;
        this.engineActive = false;
    }
    starEngines() {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }

    info() {
        console.log(`Nomor Kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? "Aktif" : "Nonaktif"}`);
    }


    parking() {
        console.log(`Kendaraan $ { this.licensePlate }
                   parkir!`);
    }
}


class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOf() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);

    }


    openDoor() {
        console.log(`Membuka pintu!`);
    }

    //overriding method info dari parent class 
    info() {
        super.info();
        console.log(`Jumlah Roda: ${this.wheels}`);
    }
}

class MotorCyle extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOf() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);

    }


    doWheelie() {
        console.log(`JALANKAN RODA!`);
    }

    //overriding method info dari parent class 
    info() {
        super.info();
        console.log(`Jumlah Roda: ${this.wheels}`);
    }
}

class VehicleFactory {
    static repair(vehicles) {
        vehicles.forEach(vehicle => {
            console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`);
        })

    }

    /*Pemanggilan method repair langsung dari classnya  */


}

const faizCar = new Car("H2122", "Inova", 4);
const dillaMotor = new MotorCyle("BM23FR", "Yamaha", "2");
const firaCar = new Car("TA647HD", "Tesla", 4);
VehicleFactory.repair([faizCar, dillaMotor, firaCar]);