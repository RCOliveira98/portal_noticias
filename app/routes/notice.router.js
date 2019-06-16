module.exports = function(my_app) {
    // render noticias
    my_app.get('/noticia/:id', (req, resp)=> {
        let my_connection = my_app.config.dbConection();
        let noticiaModel = my_app.app.models.noticiaModel;

        noticiaModel.getNoticiaById(my_connection, (erro, sucess) => resp.render('noticias/noticia', {noticia: sucess}));
    })
}