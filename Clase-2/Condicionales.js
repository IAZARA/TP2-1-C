

// let edad = 29

// IF, ELSE IF, ELSE
// if( edad < 18){
//     console.log('Menor de edad');
// } else if (edad < 22) {
//     console.log('Es un joven adulto');
// }else{
//     console.log("Es un adulto");
// }

// Operador Ternario
// Es una forma facil de resumir un if y else

let edad = 20

// console.log("Condicion: ", edad >= 18);

// let permitido = edad >= 18 ? "Permitido" : "Denegado"

let licencia = edad <= 18 ? "Denegado" : (edad <= 21) ? "Permitido con tutor" : "Permitido"

// console.log("licencia: ", licencia);


// Operador Logico &&
// Se ejecuta si la condicion es true

let permiso = true

permiso && console.log("Permitido ");


// Operador ?? 
// solo considera null o undefined como valores vacios
let username = "Matias"
console.log("Bienvenido: ", username ?? "Desconcido");


// Validar si accedemos a propiedades que todavia no existen o que no existen directamente

const usuario = {
    nombre: "Matias",
    edad: 30,

}

setTimeout(() => {
    usuario.direccion = {
            calle: "La Plata",
            altura: 29,
            edificio: {
                piso: 3,
                dept: 4
            }
        }
    
}, 2000);

console.log("Nombre: ", usuario.nombre);
console.log("Direccion: ", usuario.direccion);
console.log("Altura: ", usuario.direccion?.edificio.piso);






