module.exports.get_noticias = function(my_app, resp) {
    let my_connection = my_app.config.dbConection();
        let noticiaModel = new my_app.app.models.NoticiaDao(my_connection);

        noticiaModel.getNoticiasAll((erro, sucess) => resp.render('noticias/noticias', {noticias: sucess}));
}

module.exports.get_noticia_by_id = function(my_app, req, resp) {
    let my_connection = my_app.config.dbConection();
    let noticiaModel = new my_app.app.models.NoticiaDao(my_connection);
    let params_url = req.query;
    noticiaModel.getNoticiaById(params_url.id, (erro, sucess) => resp.render('noticias/noticia', {noticia: sucess}));
}