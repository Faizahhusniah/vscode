// function init() {
//     //  let nama = 'Faizah';

//     return function(nama) {
//         console.log(nama);

//     }

// }
// let panggilNama = init();
// panggilNama('husniah');
// panggilNama('faizah');

// //untuk membuat function factories
// //kegunaan =membuat private method

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');
// let selamatSore = ucapkanSalam('sore');

// // selamatPagi('Faizah');
// // selamatMalam('Bibah');
// // selamatSiang('Cai');
// // selamatSore('Salsa');

// console.dir(selamatMalam('faizah'));


let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();


console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());