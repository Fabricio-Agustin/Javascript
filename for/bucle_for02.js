let altura = 5;
let paloAlto = 2;

for (let i = 1; i <= altura; i++) {
    let fila = "";

    for (let j = 1; j <= altura - i; j++) {
        fila += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        fila += "*";
    }

    console.log(fila);
}


for (let t = 1; t <= paloAlto; t++) {
    let tronco = "";

    for (let s = 1; s <= altura - 1; s++) {
        tronco += " ";
    }

    tronco += "|";
    console.log(tronco);
}