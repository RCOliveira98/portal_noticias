module.exports = function(my_app) {
    // render noticias
    my_app.get('/noticias', (req, resp)=> {
        let my_connection = my_app.config.dbConection();
        let noticiaModel = my_app.app.models.noticiaModel;

        noticiaModel.getNoticiasAll(my_connection, (erro, sucess) => resp.render('noticias/noticias', {noticias: sucess}));
    });
}