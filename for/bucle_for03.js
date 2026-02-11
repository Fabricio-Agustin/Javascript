let valor = parseInt(prompt("Ingrese un número entero: "));
let resultado = "";

for (let i = 0; i <= valor; i++) {
    resultado += i;

    if (i < valor) {
        resultado += ", ";
    }
}

alert(resultado);