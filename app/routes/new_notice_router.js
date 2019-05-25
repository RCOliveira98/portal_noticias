module.exports = function(my_app) {
    // renderizar page de cadastro de novas tecnologias
my_app.get('/new-noticia', (req, resp)=>{
    resp.render('admin/form_add_noticia.ejs');
})
}