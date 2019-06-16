let my_app = require('express')();
/* avisará ao express que ele trabalhará em equipe com EJS
 * estamos avisando ao express que o ejs cuidará da propriedade view engime
 */
my_app.set('view engine', 'ejs');
my_app.set('views', './app/views');

let my_consign = require('consign');

my_consign()
.include('app/routes')
.then('config/dbConection.js')
.into(my_app);

module.exports = my_app;