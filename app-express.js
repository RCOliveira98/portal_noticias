var my_app = require("./config/server"); // requisitando o nosso módulo de setup inicial

// esse método recebe como argumento uma porta e um callback.
my_app.listen(3000, ()=>{
    console.log('servidor com express.js');
});
