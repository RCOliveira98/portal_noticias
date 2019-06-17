module.exports.index = function(my_app, resp) {

    let my_connection = my_app.config.dbConection();
    let modelo = new my_app.app.models.NoticiaDao(my_connection);

    modelo.getTopFiveNotices((error, sucess) => resp.render('home/index.ejs', {noticias: sucess}))
    // o método render é proporcionado pelo ejs.
}