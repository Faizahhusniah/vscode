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