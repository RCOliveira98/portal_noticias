// /noticias/salvar

module.exports = function(my_app) {

    my_app.get('/new-noticia', (req, resp)=>{
        my_app.app.controllers.adminController.formulario(resp);
    });

    my_app.post('/noticias/salvar', (req, resp)=>{
        my_app.app.controllers.adminController.save_notice(my_app, req, resp);
    });
}