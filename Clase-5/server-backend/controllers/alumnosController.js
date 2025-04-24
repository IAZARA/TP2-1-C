import { alumnos } from "../data/alumnos.js"

export const home = (req, res) => {
    res.send(`<h1>Home de la API</h1>`)
}

export const getAlumnos = (req, res) => {
    res.json(alumnos)
}

export const getAlumnosById = (req, res) => {

    const alumno = alumnos.find((alumno) => {
        console.log("alumno: ", alumno.id);
        console.log("id params: ", req.params.id);
        console.log("=== ", alumno.id === req.params.id);
        console.log("== ", alumno.id == req.params.id);
        return alumno.id == req.params.id
    })    
    if(alumno){
     res.json(alumno)
    }else{
        res.status(404).json({
            id: 0,
            error: "Alumno no existe"
        })
    }
    
}

export const CrearAlumno = (req, res) => {
    const nuevoAlumno = req.body;


    if(!req.body.id && !req.body.nombre && !req.body.edad){
        res.status(400).json({
            error: "Faltan datos"
        })
    }
    alumnos.push(nuevoAlumno);
    res.status(201).json(nuevoAlumno)
}

export const agregarPokemon = (req, res) => {

    // req.query = ??
    // req.params = ??

    const alumno = alumnos.find((alumno) => alumno.id == req.params.id)   
    
    // hacer el fetch a la api de pokemon, segun el id de req.query
    const nombrePokemon = obtenerPokemonNombre('??')

    // alumno.pokemon = 



}

async function obtenerPokemonNombre(id){
    try {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return data.name
 
} catch (error) {
    console.log("El error fue: ", );
    return null 
}
    
}