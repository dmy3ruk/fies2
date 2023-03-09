const http = require('http')
const hostname = 'localhost';
const port = 3000;
const fs = require('fs')
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Файл не знайдено!')
            } else {
                res.writeHead(200, {'Content-Type': "text/html"})
                res.write(data)
            }
            res.end(data)
        })
    }else{
        res.writeHead(404);
        res.write('Сторінку не знайдено!')
        res.end()
    }

})
server.listen(port, hostname, ()=>{
    console.log('running')
})