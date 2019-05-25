module.exports = function(my_app) {
    // render noticias
my_app.get('/noticias', (req, resp)=> {
    resp.render('noticias/noticias.ejs');
})
}