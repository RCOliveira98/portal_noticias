module.exports.formulario = function(resp){
    resp.render('admin/form_add_noticia.ejs');
}

module.exports.save_notice = function(my_app, req, resp) {
    let msg = 'prenchimento obrigatório';
        let new_notice = req.body;

        /*
        req.assert('titulo', msg).notEmpty();
        req.assert('noticia', msg + ':10 a 100 caracteres').notEmpty().len(10, 100);
        req.assert('nome_autor', msg).notEmpty();
        req.assert('resumo', msg).notEmpty();
        req.assert('data_registro', msg).notEmpty().isDate({format: 'yyyy-mm-dd'});

        if(req.validationsErrors) {
            resp.render('/noticias/salvar');
            return;
        }
        */

        let my_connection = my_app.config.dbConection();

        let noticiaModel = new my_app.app.models.NoticiaDao(my_connection);

        noticiaModel.saveNotice(new_notice, (erro, sucess) => resp.redirect('/noticias'));
}