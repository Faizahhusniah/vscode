// const nama = 'Faizah';
// const umur = 20;

// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);

//Embeded Expression

// console.log(`${alert('halo!')}`);

// const x = 11;
// console.log(`${(x %2==0 ? 'genap' : 'ganjil')}`);

//HTML Fragments

const mhs = {
    nama: 'Faizah Husniah',
    umur: 20,
    nim: '11850120304',
    email: 'faizahhusniah87@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nim}</span>
</div>`;
console.log(el);