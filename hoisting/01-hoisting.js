// ================================
// 📚 HOISTING EN JAVASCRIPT
// ================================

/*
El "hoisting" es un comportamiento de JavaScript donde las
declaraciones de variables y funciones se elevan al inicio
de su contexto (scope) antes de ejecutar el código.

IMPORTANTE:
- Solo se eleva la DECLARACIÓN.
- NO se eleva la INICIALIZACIÓN.

Por eso una variable puede existir antes de asignarle valor,
pero será "undefined".

--------------------------------
VAR vs LET / CONST
--------------------------------

VAR:
- Se hoistea.
- Se declara al inicio automáticamente.
- Se inicializa como undefined.

LET y CONST:
- También se hoistean, PERO
- Quedan en la "Temporal Dead Zone".
- No se pueden usar antes de declararse.
- Si se usan antes → Error ReferenceError.
*/


// ================================
// 🧪 EJEMPLO 1 — HOISTING CON VAR
// ================================

console.log("Ejemplo VAR:");

y = 10;      // Inicialización
var y;       // Declaración (hoisteada)

console.log(y); // Resultado: 10

/*
JavaScript lo interpreta así internamente:

var y;   // hoisting
y = 10;
console.log(y);
*/


// ================================
// 🧪 EJEMPLO 2 — HOISTING PARCIAL
// ================================

console.log("\nHoisting parcial con VAR:");

console.log(a); // undefined (existe pero sin valor)
var a = 5;

console.log(a); // 5

/*
Interpretación interna:

var a;
console.log(a); // undefined
a = 5;
*/


// ================================
// 🧪 EJEMPLO 3 — LET (SIN HOISTING ÚTIL)
// ================================

console.log("\nEjemplo LET:");

let x;      // Declaración
x = 20;     // Inicialización

console.log(x); // 20

/*
Si intentamos usarla antes:

console.log(x);
let x = 20;

→ Error: ReferenceError
Porque está en la Temporal Dead Zone.
*/


// ================================
// 🧪 EJEMPLO 4 — ERROR CON LET
// ================================

// Descomenta para probar el error:

/*
console.log(z); // ❌ ReferenceError
let z = 30;
*/


// ================================
//  RESUMEN
// ================================

/*
VAR:
✔ Se hoistea
✔ Se puede usar antes
✔ Valor inicial: undefined

LET / CONST:
✔ Se hoistean técnicamente
 No se pueden usar antes
Temporal Dead Zone

RECOMENDACIÓN:
Usar LET y CONST en lugar de VAR
para evitar errores de hoisting.
*/
