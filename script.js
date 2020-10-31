// // // DOM SELECTION
// // // document.getElementById()->element
// // const judul = document.getElementById('judul');
// // judul.style.color = 'red';
// // judul.style.backgroundColor = 'grey';
// // judul.innerHTML = 'Faizah Husniah';

// // //document.getElementsByTagName()
// // //- >HTMLCollections

// // const p = document.getElementsByTagName('p');
// // for (let i = 0; i < p.length; i++) {
// //     p[i].style.backgroundColor = 'lightskyblue';
// // }

// // const h1 = document.getElementsByTagName('h1')[0];
// // h1.style.fontSize = '50px';

// // //document.getElementsByClassName()
// // //->HTMLCollection
// // const p1 = document.getElementsByClassName('p1')[0];
// // p1.innerHTML = 'Ini diubah dari javascript';

// //document.querySelector() ->element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'red';


// //document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Faizah Husniah</em>';
// const sectionA = document.querySelector('section#a');


// const judul = document.querySelector('#judul');

// judul.style.color = 'black';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];

// const a = document.querySelector('section#a a');

// const p2 = document.querySelector('.p2');

//DOM MANIPULATION
//buat elemen baru
// const pBaru = document.createElement('p');
// const textPBaru = document.createTextNode('Paraghraf baru');

// //simpan tulisan kedalam paraghraf
// pBaru.appendChild(textPBaru);
// //simpan pBaru diakhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);



// //menambahkan item baru
// const liBaru = document.createElement('li');
// const textLiBaru = document.createTextNode('Item Baru');

// liBaru.appendChild(textLiBaru);

// const ul = document.querySelector('section#b ul');

// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);


// //replace
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const H2bARU = document.createElement('h2');
// const teksh2Baru = document.createTextNode('Judul Baru');
// H2bARU.appendChild(teksh2Baru);

// sectionB.replaceChild(H2bARU, p4);

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// H2bARU.style.backgroundColor = 'lightgreen';


//event handler
// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul')

//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');

//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function() {
//     p3.style.color = "red";
// }
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});