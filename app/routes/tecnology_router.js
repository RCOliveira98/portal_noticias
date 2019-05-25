// renderizar page tecnologia
module.exports = function(my_app){
    my_app.get('/tecnologia', (req, resp)=>{
        resp.render('secao/tecnologia.ejs');
    });
}
