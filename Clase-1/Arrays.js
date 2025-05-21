let frutas = ["Banana", "Manzana", "Frutilla"]

// console.log(frutas);

// METODOS DE ARRAYS

// push agrega un elemento al final del array
frutas.push("Uva")

// console.log(frutas);

// pop elimina el ultimo elemento del array
frutas.pop()

// console.log(frutas);

// unshift agrega un elemento al comienzo del array
frutas.unshift("Mango")

// console.log(frutas);

// shift elimina el primer elemento del array
frutas.shift()

// console.log(frutas);


let numeros = [1, 2, 3, 4, 5]

// console.log("Numeros: ", numeros);



// Transforma cada elemento del array, y devuelve uno nuevo, segun la funcion
let nuevoArray = numeros.map(num => num * num)

// console.log(nuevoArray);

// Filtra los elementos 1 por 1 segun la condicion y devuelve un nuevo array
let mayores = numeros.filter(numero => numero >= 3)

// console.log(mayores);


// reduce, reduce el array a un solo valor, acumulandolo en el acumulador
let sumaArray = numeros.reduce((acumulador, num) => acumulador + num, 0) 

// console.log(sumaArray);

// El find devuelve el PRIMER elemento que cumpla con la condicion
let busqueda = numeros.find( num => num >= 2);
// console.log(busqueda);

// Some devuelve true si al menos un elemento cumple con la condicion
let encontrado = numeros.some( num => num == 6)

// console.log("Algun elemento cumple la condicion? ", encontrado);

// Every devuelve true si TODOS los elementos cumplen la condicion
let encontrado2 = numeros.every( num => num < 5)


// console.log("Algun elemento cumple la condicion? ", encontrado2);


// Convierte el array a string y los separa a cada elemento por el separador que indiquemos en el join
let nuevoString = numeros.join(" /// ")

// console.log(nuevoString);

// Invierte el array
let invertido = numeros

invertido.reverse()

numeros.reverse()

// extrae una parte del array sin modificar el original
// let arrayNuevo = numeros.slice(2, 5)

// console.log(arrayNuevo);

// console.log(numeros);

// modifica el array eliminando elemento y reemplazandolo por otro, retorna el elemento eliminado
let reemplazo = numeros.splice(2, 1, 99)

// console.log(numeros);
// console.log(reemplazo);

//Concatena el array con otro
let arrayConcatenado = numeros.concat(frutas)
// console.log(arrayConcatenado);


// Ejemplo 1:
let usuarios = [
    {
    username: "Lau27",
    edad: 18,
    email: "ejemplo@gmail.com",
    materias: 5            
    },
    {
    username: "Lau27",
    edad: 19,
    email: "ejemplo@gmail.com",
    materias: 5        
    },
    {
        username: "Lau27",
        edad: 23,
        email: "ejemplo@gmail.com",
        materias: 5
    },
]


// console.log('Usuarios: ', usuarios[1]);

let fechaHoy = new Date

let usuariosNuevos;


// console.log('Usuarios Nuevos Hasta aca: ', usuariosNuevos);


// (a, b) => {

//     return a + b
// }

// usuariosNuevos = usuarios.map((user, indice) => {
//     // console.log("El usuario " + indice + " es: ", user);
//     // console.log(`El usuario ${indice} es: ${JSON.stringify(user)}`, );
    
//     user.fechaIncripcion = fechaHoy

//     if(indice == 2){
//         return user
//     }else{
//         return 'Not Found'
//     }
//     console.log('Usuarios Nuevos Hasta ahora: ', usuariosNuevos);
// })



// console.log('Usuarios Nuevos Final: ', usuariosNuevos);


let palabra = "Matias"

console.log(palabra);

const palabraSeparada = palabra.split("")
// console.log(palabraSeparada);


// Modulo

let num = 27

// let esPar = num % 2 === 0
let esImpar = num % 2 !== 0

console.log('Es impar? ', esImpar);





















