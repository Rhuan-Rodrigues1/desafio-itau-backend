const http = require('http')
const { router } = require('./routes/router')

const PORT = 3000

const server = http.createServer((req, res) => {
    router(req, res)
})

if(process.env.NODE_ENV !== "test") {
    server.listen(PORT, () => {
        console.log(`Servidor rodando em: http://localhost:${PORT}`);
        
    })
}


module.exports = server
