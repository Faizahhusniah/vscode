const state = {
    isCoffeMakerReady: true,
    seedStock: {
        arabica: 250,
        robusta: 60,
        liberica: 80
    }
}

const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if (state.seedStock[type] >= miligrams) {
            state.seedStock[type] -= miligrams;
            resolve("Biji kopi didapatkan!")
        } else {
            reject("Maaf stock kopi habis!")
        }
    });
}

const makeCoffe = seeds => {
    return new Promise((resolve, reject) => {
        if (state.isCoffeMakerReady) {
            resolve("Kopi berhasil dibuat!")
        } else {
            reject("Maaf mesin tidak dapat digunakan!")
        }
    })
}

const servingToTable = coffee => {
    return new Promise(resolve => {
        resolve("Pesanan kopi sudah selesai")
    })

}


async function reserveACoffee(type, miligrams) {
    try {
        const seeds = await getSeeds(type, miligrams);
        const coffee = await makeCoffe(seeds);
        const result = await servingToTable(coffee);
        console.log(result);
    } catch (rejectionReason) {
        console.log(rejectionReason);
    }
}

reserveACoffee("liberica", 80);