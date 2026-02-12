/**

tenemos el siguiente objeto.


const mascota = {
    nombre: "Luna",
    especie: "Perro",
    edad: 3,
    color: "Marrón"
};

Usá un for...in para recorrer el objeto.
Mostrá en consola cada propiedad con su valor.
El formato debe ser así:
*/


const mascota = {
    nombre: "Luna",
    especie: "Perro",
    edad: 3,
    color: "Maron"
}

for(const datos in mascota){
    console.log("Datos de la mascota: ")
    console.log(`${datos}: ${mascota[datos]}`)
    setInterval( () => {

    })
}