//function expression

// const tampilNama = function(nama) {
//     return `Hello ${nama}`;
// }

// console.log(tampilNama('Faizah'));

// const tampilNama = (nama) => {
//     return `Halo ${nama}`;
// }

// console.log(tampilNama('Faizah Husniah'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Faizah', 'Sore'));

//implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Faizah'));

// const tampilNama = () => 'Hello world!';
// console.log(tampilNama());


// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);
let mahasiswa = ['faizah', 'nisa', 'dilla', 'paula'];

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));

console.table(jumlahHuruf);