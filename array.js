//Manipulasi Array

// //1. Menambah Isi Array
// var arr = [];
// arr[0] = "Faizah";
// arr[1] = "Husniah";
// arr[2] = "Habibah";
// arr[6] = "Yagami";
// console.log(arr);

//2. Menghapus Isi Array
// var arr = ["Faizah", "Darmilla", "Habibah"];
// arr[1] = undefined;
// console.log(arr);

//3. menampilkan isi array
// var arr = ["Faizah", "Darmilla", "Dilla"];
// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke - ' + (i + 1) +
//         ' : ' +
//         arr[i]);
// }



//Method Pada Array
var arr = ["Faizah", "Darmilla", "Dilla"];


//2.Push& pop

arr.push('Doddy', 'Adam');
// arr.pop();
// arr.pop();


//3. Unshift& Shifft

// arr.unshift('Dani');
// arr.shift();
// console.log(arr.join(' - '));

//4.Splice
//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ....)
// arr.splice(1, 2, 'Nana', 'Cai');
// console.log(arr.join(' - '));
//5.Slice
//slice(awal,akhir);
// var arr = ["Faizah", "Darmilla", "Dilla", 'Mutiara', 'Dika'];
// var arr2 = arr.slice(1, 4);
// console.log(arr2.join(' - '));
// console.log(arr.join(' - '));


//6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['faizah', 'dilla', 'shinta'];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(cetak);
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke - ' + (i + 1) +
//         ' adalah :' + e);
// });

//7.map
// var angka = [1, 6, 7, 9, 3];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });

// console.log(angka2.join(' - '));

// var angka = [1, 6, 10, 20, 7, 9, 3];
// console.log(angka.join(" - "));
// angka.sort(function(a, b) {
//     return a - b;
// });
// console.log(angka.join(" - "));


//9.filter & find
var angka = [1, 6, 10, 20, 7, 9, 3];
var angka2 = angka.find(function(x) {
    return x > 6;
});
console.log(angka2);