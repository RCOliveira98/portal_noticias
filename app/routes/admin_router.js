// /noticias/salvar

module.exports = function(my_app) {
    // renderizar page de cadastro de novas tecnologias
    my_app.get('/new-noticia', (req, resp)=>{
        resp.render('admin/form_add_noticia.ejs');
    });

    my_app.post('/noticias/salvar', (req, resp)=>{
        let new_notice = req.body;

        let my_connection = my_app.config.dbConection();
        let noticiaModel = my_app.app.models.noticiaModel;

        noticiaModel.saveNotice(new_notice, my_connection, (erro, sucess) => resp.redirect('/noticias'));
    });
}