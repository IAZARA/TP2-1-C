const http = require('http')

const PORT = 3000

http.createServer((req, res) => {
    res.write("Hola mundo")
    res.end()
}).listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: ", PORT);
})