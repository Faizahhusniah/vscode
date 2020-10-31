function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repeat(n, aksi) {
    for (let i = 0; i < n; i++) {
        aksi(i);
    }
}

repeat(10, console.log);
repeat(3, alert);