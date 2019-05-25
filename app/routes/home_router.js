module.exports = function(my_app) {
    my_app.get('/', (req, resp)=>{
        // o método render é proporcionado pelo ejs.
        resp.render('home/index.ejs');
    });
}