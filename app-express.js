var my_app = require('./config/server');
// renderizar page home
var routerTi = require('./app/routes/tecnology_router')(my_app);
var routerHome = require('./app/routes/home_router')(my_app);
var routerNotice = require('./app/routes/notices_router')(my_app);
var routerNewRouter = require('./app/routes/new_notice_router')(my_app);

// esse método recebe como argumento uma porta e um callback.
my_app.listen(3000, ()=>{
    console.log('servidor com express.js');
});
