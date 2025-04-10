// CALLBACK:
// Funcion que se usa como argumento

function suma( a, b){
    return a + b
}

function operacionMatematica(num1, num2, callback){
    return callback(num1, num2)
}

const resultado = operacionMatematica(5, 10, suma)
const resultado2 = operacionMatematica(5, 10, (num, num2) => {
    return num * num2
})

// console.log("Resultado: ", resultado);
// console.log("Resultado: ", resultado2);

let numeros = [1, 2, 3, 4, 5]

// let resultadoMap = numeros.map((num) => {
//     return num * 5
// })

// console.log("Resultado Map: ", resultadoMap);


// numeros.forEach(() => {

// })

// numeros.filter(() => {

// })

// CALLBACK HELL: Una anidacion de callbacks, muy dificil de leer

function obtenerUser(id, callback){
    console.log("Buscando usuario");
    
    setTimeout(() => {
        console.log("Se encontro el usuario: ", id);
        callback()
    }, 1000);
}

function llamandoUsers(){
    obtenerUser(1, () => {
        obtenerUser(2, () =>{
            obtenerUser(3, () =>{
                obtenerUser(4, () =>{
                    obtenerUser(5, () =>{
                        obtenerUser(6, () =>{
                            console.log("Termino");
                            
                        } )
                    } )
                } )
            } )
        } )
    })
}

llamandoUsers()