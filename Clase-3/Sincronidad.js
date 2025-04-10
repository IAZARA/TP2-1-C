// Javascript es un lenguaje, sincronizado, que se ejecuta en un solo hilo.
// Este hilo solo, me refiero a un solo proceso
// Asincronidad: Permite separar el codigo de ejecucion, en distintas pilas


console.log("1");

let nombre

// Simula consulta a base de datos
setTimeout(() => {
    console.log("2");
    nombre = "Santiago"
}, 5000);

console.log("Que es nombre: ", nombre);



setTimeout(() => {

    console.log("Nombre es: ", nombre);
}, 2001);


console.log("3");

console.log("Termine");

