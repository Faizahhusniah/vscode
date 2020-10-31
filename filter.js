//mencari angka >=3
//for


// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


//filter
// const newAngka = angka.filter((a) =>
//     a >= 3);
// console.log(newAngka);

//map
//kalikan semua angka dengan dua

// const newAngka = angka.map(a => a + 2);
// console.log(angka);
// console.log(newAngka);

//reduce
//jumlahkan seluruh elemen pada array
// 
// //3+ 4+ 6+ 7+ 8+ 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);

// console.log(newAngka);

//method chaining
//cari angka > 5;
//kalikan 3
//jumlahkan
const angka = [3, 4, 6, 7, 8, 9, ];
const hasil = angka.filter(a => a > 5) //6,7,8,9
    .map(a => a * 3) //18,21,24,27

.reduce((acc, cu) => acc + cu); //37
console.log(hasil);