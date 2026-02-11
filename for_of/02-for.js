// hago uso del DOM llamando a la clase del HTML.
const count = document.querySelector('.p');
const counter = document.querySelector('.counter');
const finalNumber = 5;


// creo un array del 0 al 100 (porque for...of necesita algo iterable)
const numbers = Array.from({ length: 101 }, (_, i) => i);

// recorro con for...of
for (const number of numbers) {
    setTimeout(() => {
        count.textContent = number;
    }, number * 30); 
}

