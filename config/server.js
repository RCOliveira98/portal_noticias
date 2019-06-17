let my_express = require('express');
let my_app = my_express();
let my_consign = require('consign');
let body_parser = require('body-parser');
// let express_validator = require('express-validator');

/* avisará ao express que ele trabalhará em equipe com EJS
 * estamos avisando ao express que o ejs cuidará da propriedade view engime
 */
my_app.set('view engine', 'ejs');
my_app.set('views', './app/views');
// middlware
my_app.use(body_parser.urlencoded({extended: true}));
my_app.use(my_express.static('./public'));



my_consign()
.include('app/routes')
.then('config/dbConection.js')
.then('app/models')
.then('app/controllers')
.into(my_app);

// my_app.use(express_validator);

module.exports = my_app;