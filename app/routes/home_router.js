module.exports = function(my_app) {
    my_app.get('/', (req, resp)=>{
        my_app.app.controllers.homeController.index(my_app, resp);
    });
}