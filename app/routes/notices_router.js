module.exports = function(my_app) {
    // render noticias
    my_app.get('/noticias', (req, resp)=> {
        let my_connection = my_app.config.dbConection();
        
        my_connection.query(
            'select * from noticia', (erro, sucess) => resp.render('noticias/noticias', {noticias: sucess})
            );
    })
}