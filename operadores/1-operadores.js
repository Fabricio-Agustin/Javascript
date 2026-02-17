/*

OPERADORES

LOS OPERADORES NOS PERMITEN REALIZAR
OPERACIONES AL USAR VALORES Y VARIABLES.

TENEMOS DISTINTOS TIPOS DE OPERADORES 

- ARITMETICOS
- ASIGNACION 
- COMPARACION
- LOGICOS
- UNARIOS
- TERNARIOS

*/

// OPERADORES ARITMETICOS

/**
los operaores aritmeticos nos permiten realizar operaciones matematicas con los valores y variables,
tenemos el operador de suma (+) que nos permite sumar dos valores o variables,
tenemos el operador de resta (-) que nos permite restar dos valores o variables,
tenemos el operador de multiplicacion (*) que nos permite multiplicar dos valores o variables,
tenemos el operador de division (/) que nos permite dividir dos valores o variables,
tenemos el operador de modulo (%) que nos permite obtener el residuo de una division entre dos valores o variables,
tenemos el operador de potencia (**) que nos permite elevar un valor a la potencia de otro valor o variable.
*/

let a = 10;
let b = 5

console.log(a + b); // la salida es de 15


console.log(a - b) // la salida es de 5

console.log(a * b) // la salida es de 50

console.log(a / b) // la salida es de 2

console.log(a % b) // la salida es de 0

console.log(a ** b) // la salida es de 100000

// OPERADORES DE ASIGNACION

/*
los operadores de asignacion nos permiten asignar valores a las variables,
tenemos el operador de asignacion basico que es el igual (=) y luego tenemos los operadores de asignacion compuestos 
que nos permiten realizar una operacion y asignar el resultado a la variable al mismo tiempo,
como por ejemplo el operador de suma y asignacion (+=) que nos permite sumar un valor a la variable y asignar
el resultado a la variable al mismo tiempo.
*/


let c = 10;

c += 5;


//la salida de este es 15, 
// porque el operador de suma y asignacion (+=) nos 
// permite sumar el valor de 5 a la variable c 
// y asignar el resultado a la variable c al mismo tiempo.

//el + con el = es lo mismo que escribir c = c + 5, 
// pero con el operador de asignacion compuesto (+=) 
// es mas corto y facil de escribir.


console.log(c) // la salida de este es 15.

c -= 3;

// la salida de este es 12, 
// porque el operador de resta y asignacion (-=) nos 
// permite restar el valor de 3 a la variable c 
// y asignar el resultado a la variable c al mismo tiempo.

console.log(c) // la salida de este es 12.


c *= 2;

// la salida de este es 24, 
// porque el operador de multiplicacion y asignacion (*=) nos 
// permite multiplicar el valor de 2 a la variable c 
// y asignar el resultado a la variable c al mismo tiempo.

console.log(c) // la salida de este es 24.

c /= 4;

// la salida de este es 6, 
// porque el operador de division y asignacion (/=) nos 
// permite dividir el valor de 4 a la variable c 
// y asignar el resultado a la variable c al mismo tiempo.

console.log(c) // la salida de este es 6.

c %= 5;

// la salida de este es 1, 
// porque el operador de modulo y asignacion (%=) nos 
// permite obtener el residuo de la division entre el valor de 5 y la variable c 
// y asignar el resultado a la variable c al mismo tiempo.

console.log(c) // la salida de este es 1.

c **= 3;

// la salida de este es 1, 
// porque el operador de potencia y asignacion (**=) nos 
// permite elevar el valor de 3 a la variable c 
// y asignar el resultado a la variable c al mismo tiempo.

console.log(c) // la salida de este es 1.


/**
 * EJEMPLOS DE OPERADORES
 * DE ASIGNACION SIMPLES Y COMPUESTOS
 * 
 * RESUMEN:
 * 
 * Se vieron los operadores de asignación que sirven
 * para guardar valores dentro de variables.
 * 
 * 
 * Operador simple:
 * =  → Asigna un valor a una variable.
 * Ej: let c = 10;
 * 
 * 
 * Operadores compuestos:
 * Permiten hacer una operación y asignar el resultado
 * al mismo tiempo.
 * 
 * 
 * +=  → Suma y asigna
 * -=  → Resta y asigna
 * *=  → Multiplica y asigna
 * /=  → Divide y asigna
 * %=  → Módulo y asigna (resto)
 * **= → Potencia y asigna
 * 
 * Son atajos de escritura.
 * Ej: c += 5  es lo mismo que  c = c + 5
 */
