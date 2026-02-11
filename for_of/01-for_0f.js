//variable para las frutas
const frutas = ["🍓", "🍉", "🍎", "🍑"];

//definimos la sentencia for of.
for (let fruta of frutas) {
    //imprimira una fruta cada 2 segundos.
    setTimeout(() => {
        console.log(frutas);
    }, 5000);
}
