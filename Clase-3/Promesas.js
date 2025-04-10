// Promesas

// Nos permiten manejar tareas de forma asincronica (al igual que los callbacks)

// Una promesa, representa una operacion o valor, que todavia no sucedio
// Pero lo va a hacer en el futuro

// Promesa basica

console.log("Inicio...");

const promesaBasica = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true

        if(exito === true){
            resolve("Operacion Exitosa")
        }else{
            reject("Operacion fallida")
        }
    }, 2000);
})


// Uso del then / catch / finally
//Then: entonces..., sirve para llegar al resolve
//Catch: atrapa el error, atrapa el reject
// Finally: Finalmente... le da el cierre a la promesa. Es casi opcional


// promesaBasica
//     .then((respuesta) => {
//         console.log("Respuesta: ", respuesta)
//     })
//     .catch((err) => {
//         console.log("Algo salio mal...");
//         console.error("El Catch: ", err)
//     })
//     .finally(() => {
//         console.log("Termine");
//         console.log("Esto se ejecuta siempre, haya error o no");
//     }) 


// Funcion que devuelve promesa:

function obtenerNumeroDelay(num) {
    return new Promise((res, rej) => {
        if(!num) rej(0)
        
        setTimeout(() => {
            res(num)
        }, 3000);
    })
}

function obtenerPalabraDelay(palabra) {
    return new Promise((res, rej) => {
        if(!palabra) rej("Vacio...")
        
        setTimeout(() => {
            res(palabra)
        }, 3000);
    })
}

// obtenerNumeroDelay(42).then((num) => console.log("Numero Recibido: ", num)).catch((err) => console.log(err))


// Promesas con Fetch:
// Fetch es una funcion nativa de javascript, para consultas HTTP
// Fetch: me devuelve una promesa
// .json(): EXTRAE LA DATA, DE LA RESPUESTA DE LA API

const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/charmanderrrrr")
                .then((res) => res.json())
                .then((data) => {
                    // console.log("Data: ", data.name);
                    // console.log("Imagen: ", data.sprites.front_default);
                })
                .catch((err) => {
                    // console.log("No se encuentra");
                })

// console.log("Pokemon: ", pokemon);


// Async / AWAIT
// Es una forma mas LEGIBLE de trabajar con promesas
// ASYNC: Se usa para declarar una funcion asincrona
// AWAIT: A/WAIT Se usa para decir que espere, a que termine esa promesa
// TRY / CATCH
// try: Va a intentar cumplir con esa porcion de codigo

async function obtenerPokemon(){
    try {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/charmanderrr")
    const data = await res.json()
    
    const pokemon = [data].map((poke) => {
        return {
            id: poke.id,
            nombre: poke.name,
            altura: poke.height,
        }
    })

    console.log("pokemon: ",pokemon);
            
} catch (error) {
    console.log("El error fue: ", error);
    
}
    
}

// obtenerPokemon()

async function proceso(){

    // const palabra = await obtenerPalabraDelay("Parlante")
    // console.log(palabra);
    // const numero = await obtenerNumeroDelay(27)
    // console.log(numero);

    // const promesas = [obtenerNumeroDelay(27), obtenerPalabraDelay("Megafono")]

    // PROMISE.ALL

    // const resultado = Promise.all([obtenerNumeroDelay(), obtenerPalabraDelay("Megafono")])
    // .then((resultados) => {
    //     return resultados
    // }).catch((error) => {
    //     console.log("error fue: ", error);

    //     return error
    // })

    // setTimeout(() => {
    //     console.log("operaciones: ", resultado);
    // }, 4000);

    try {
        // const [elNumero, laPalabra] = await Promise.all([ obtenerNumeroDelay(27), obtenerPalabraDelay("MEGA")])
        console.log("Numero: ", elNumero);
        const laPalabra = await obtenerPalabraDelay("Saludo")
        const elNumero = await obtenerNumeroDelay()
        console.log("Palabra: ", laPalabra);
        
    } catch (error) {
        console.log("Error: ", error);

    }
}

proceso()
