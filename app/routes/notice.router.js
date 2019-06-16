module.exports = function(my_app) {
    // render noticias
    my_app.get('/noticia/:id', (req, resp)=> {
        let my_connection = my_app.config.dbConection();
        
        my_connection.query(
            'select * from noticia where id = 2', (erro, sucess) => resp.render('noticias/noticia', {noticia: sucess})
            );
            // sucess é um object rowDataPacket
    })
}