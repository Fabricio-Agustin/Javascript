/*
REPLICAR LA SIGUIENTE FORMA UTILLIZANDO CICLPO FOR.


    *
   ***
  *****
 *******
*********


*/


let altura = 5;

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