const executorFunction = (resolve, reject) => {
    const isCoffeMakerReady = true;
    if (isCoffeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin Kopi tidak bisa digunakan!")
    }
}

const makeCoffe = new Promise(executorFunction);
console.log(makeCoffe);

const makeCoffe = new Promise(executorFunction);
makeCoffe
    .then(handlerSuccess)
    .then(null, handlerRejected);