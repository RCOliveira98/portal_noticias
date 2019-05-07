console.log('criação de uma aplicação com nodejs');

var obj_htpp = require('http');

var my_server = obj_htpp.createServer(
    (req, resp) => {
        const category =  req.url;
        if (category == '/futebol'){
            resp.end('<html><header></header><body><p>Notícias de futebol</p></body></html>');
        } else if (category == '/cursos') {
            resp.end('<html><header></header><body><p>Notícias de cursos</p></body></html>');
        } else {
            resp.end('<html><header></header><body><p>Página not found</p></body></html>');
        }
    }
    );

my_server.listen(3000);