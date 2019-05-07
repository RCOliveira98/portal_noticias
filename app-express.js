var my_express = require('express');

var my_app = my_express();
/* avisar ao express que ele trabalhará em equipe com EJS
 * estamos avisando ao xpress que o ejs cuidará da propriedade view engime
 */
my_app.set('view engine', 'ejs');
// renderizar page home
my_app.get('/', (req, resp)=>{
    // o método render é proporcionado pelo ejs.
    resp.render('home/index.ejs');
});
// render noticias
my_app.get('/noticias', (req, resp)=> {
    resp.render('noticias/noticias.ejs');
})
// renderizar page de cadastro de novas tecnologias
my_app.get('/new-noticia', (req, resp)=>{
    resp.render('admin/form_add_noticia.ejs');
})
// renderizar page tecnologia
my_app.get('/tecnologia', (req, resp)=>{
    resp.render('secao/tecnologia.ejs');
});

// esse método recebe como argumento uma porta e um callback.
my_app.listen(3000, ()=>{
    console.log('servidor com express.js');
});
