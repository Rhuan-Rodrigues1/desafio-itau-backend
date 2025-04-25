const http = require("http")
const server = require("../server")


function makeRequest({method, path, data}) {
    return new Promise((resolve) => {
        const options = {
            hostname: "localhost",
            port: 3000,
            path,
            method,
            headers: {
                "Content-Type": "application/json"
            }
        }

        const req = http.request(options, (res) => {
            let body = ""

            res.on("data", chunck => body += chunck)
            res.on("end", () => {
                resolve({
                    status: res.statusCode,
                    body: JSON.parse(body)
                })
            })
        })

        if(data) {
            req.write(JSON.stringify(data))
        }

        req.end()
        return data
    })    
}


beforeAll((done) => {
    server.listen(3000, done)
})

afterAll((done) => {
    server.close(done)
})

describe("Endpoints test",() => {

    test('POST deve retornar dados da transação', async () => {
        const transaction = {
            valor: 100,
            dataHora: new Date()
        }

        const res = await makeRequest({method: 'POST', path: '/transacao', data: transaction})
        const dateTest = res.body[0].dataHora

        expect(res.status).toBe(201)
        expect(res.body[0].valor).toBe(100)
        expect(res.body[0].dataHora).toBe(dateTest)
    })

    test('DELETE deve apagar todas as transações', async () => {
        
        const res = await makeRequest({method: 'DELETE', path: '/transacao'})
        

        expect(res.status).toBe(200)
        expect(res.body).toStrictEqual({message: "Todas as informações foram apagadas com sucesso"})
    })
})