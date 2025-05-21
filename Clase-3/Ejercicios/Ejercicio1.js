

// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0

// Devolver un objeto como respuesta, con el nombre de los pokemons, como llaves

// respuesta = {
//     charmander:{
//         id:
//         name:
//         altura:
//     }
// }

// id, name, height, weight, 
// sprites.other.showdown.front_default

function obtenerPokemon(Ids){
    let respuesta = {}
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    // Filtren todos esos y quedense con los que tengan los ids correspondientes

    // una vez tengan esos pokemons filtrados, generar la respuesta final
    // let nombre = "charmander"
    // respuesta[nombre] = {
    //     altura: 5
    // }
}

let ids = [3, 20, 40, 80, 148, 151]

obtenerPokemon(ids)