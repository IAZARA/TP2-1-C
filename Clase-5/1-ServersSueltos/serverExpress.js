const express = require('express')

const PORT = 3000
const app = express()

app.use(express.json())

const alumnos = [
    {
        id: 1,
        nombre: 'Augusto',
        edad: 28,
    },
    {
        id: 2,
        nombre: 'Pedro',
        edad: 35,
    },
]

app.get("/", (req, res) => {
    res.send(`<h1>Home de la API</h1>`)
})

app.get('/api/alumnos', (req, res) => {

    // console.log({
    //     body: req.body.alumno,
    //     query: req.query.auto,
    // });
    

    res.json(alumnos)
})

app.get('/api/alumnos/:id', (req, res) => {

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
    
})

app.post("/api/alumnos", (req, res) => {
    const nuevoAlumno = req.body;


    if(!req.body.id && !req.body.nombre && !req.body.edad){
        res.status(400).json({
            error: "Faltan datos"
        })
    }
    alumnos.push(nuevoAlumno);
    res.status(201).json(nuevoAlumno)
})

app.delete('/api/alumnos/:id', (req, res) => {
    const alumno = alumnos.filter((alumno) => {
        return alumno.id != req.params.id
    })    
    if(alumno){
     res.json(alumno)
    }else{
        res.status(404).json({
            id: 0,
            error: "Alumno no existe"
        })
    }
    
})



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
