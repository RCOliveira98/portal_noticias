var my_app = require('express')();
/* avisar ao express que ele trabalhará em equipe com EJS
 * estamos avisando ao xpress que o ejs cuidará da propriedade view engime
 */
my_app.set('view engine', 'ejs');
my_app.set('views', './app/views');

module.exports = my_app;