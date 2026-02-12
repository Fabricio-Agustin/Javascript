//array Persona.
const mascota = {
    nombre: "pulga",
    raza: "caniche",
    edad: 6
}

//Sentencia for ...in. 
for (const datos in mascota) {
    console.log(`${datos}: ${mascota[datos]}`);
}

