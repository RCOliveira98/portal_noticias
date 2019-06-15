let dbConection = require('../../config/dbConection');

module.exports = function(my_app) {
    let my_connection = dbConection();
    // render noticias
    my_app.get('/noticias', (req, resp)=> {
        
        my_connection.query(
            'select * from noticia', (erro, sucess) => resp.render('noticias/noticias', {noticias: sucess})
            );
    })
}