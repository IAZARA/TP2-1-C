const http = require('http')

const PORT = 3000;

const alumnos = [
    {
        nombre: 'Augusto',
        edad: 28,
    },
    {
        nombre: 'Pedro',
        edad: 35,
    },
]

http.createServer((req, res) => {
    try {
        res.writeHead(404, { "Content-Type": "application/json"})
        res.write(JSON.stringify(alumnos))
        res.end()
    } catch (error) {
        res.writeHead(500);
        res.write("Error Interno: ", error)
        res.end()
    }
}).listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})