//cara untuk membuat objek pada javscript
//1.object literal
//Problem: tidak efektif untuk objek yang banyak
// let mahasiswa1 = {
//     nama: 'Faizah',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }


// let mahasiswa2 = {
//         nama: 'Rajes',
//         energi: 20,
//         makan: function(porsi) {
//             this.energi = this.energi + porsi;
//             console.log(`Halo ${this.nama}, selamat makan!`);
//         }
//     }

//2. function declaration
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;


//     return mahasiswa;

// }

// let faizah = Mahasiswa('faizah', 10);
// let dilla = Mahasiswa('DILLA', 20);



//3.constructor function

// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }


// let faizah = new Mahasiswa('faizah', 12);
//keyword new
// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`


//versi kelas
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }
//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let faizah = new Mahasiswa('faizah', 18);
// let fare = new Mahasiswa('FARE', 23);

let angka = 1;
// console.log(angka);