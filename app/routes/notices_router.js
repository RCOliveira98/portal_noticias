module.exports = function(my_app) {
    // render noticias
    my_app.get('/noticias', (req, resp)=> {
        my_app.app.controllers.noticiaController.get_noticias(my_app, resp);
    });

    // render noticia
    my_app.get('/noticia/:id', (req, resp)=> {
        my_app.app.controllers.noticiaController.get_noticia_by_id(my_app, resp);
    });
}