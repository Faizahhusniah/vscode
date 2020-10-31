//2.1 execution context, hoisting & scope

// console.log(nama);
// var nama = 'Faizah';


//creation phase pada global context
//nama var = undefined
//function= fn()
//hoisting
//window = global object
//this = window
//execution phase
// console.log(sayHello());
// var nama = 'faizah'
// var umur = 33;



// function sayHello() {
//     return (`Halo, saya ${nama}, saya ${umur} tahun`);
// }
//function membuat lokal execution context
//yang didalamnya terdapat creation dan phase
//window
//arguments
//hoisting


// var nama = 'Faizah Husniah';
// var username = '@faizahhusniah';


// function cetakUrl() {
//     console.log(arguments);
//     var instagramUrl = 'http://instagram.com/';
//     return instagramUrl + username;
// }

// console.log(cetakUrl('Nurhabibah Lubis', 'dilla'));

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();