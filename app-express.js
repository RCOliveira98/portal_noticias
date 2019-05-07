var my_express = require('express');

var my_app = my_express();
/* avisar ao express que ele trabalhará em equipe com EJS
 * estamos avisando ao xpress que o ejs cuidará da propriedade view engime
 */
my_app.set('view engine', 'ejs');

my_app.get('/', (req, resp)=>{
    resp.send('<body><header><title>Express</title></header><body><h1>Home</h1></body></body>')
});

my_app.get('/tecnologia', (req, resp)=>{
    resp.render('secao/tecnologia.ejs');
});

// esse método recebe como argumento uma porta e um callback.
my_app.listen(3000, ()=>{
    console.log('servidor com express.js');
});
