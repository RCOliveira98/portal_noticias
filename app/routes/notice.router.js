module.exports = function(my_app) {
    // render noticias
    my_app.get('/noticia/:id', (req, resp)=> {
        let my_connection = my_app.config.dbConection();
        let noticiaModel = new my_app.app.models.NoticiaDao(my_connection);

        noticiaModel.getNoticiaById((erro, sucess) => resp.render('noticias/noticia', {noticia: sucess}));
    })
}