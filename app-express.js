var my_express = require('express');

var my_app = my_express();
// ambas as linhas poderia ser resumidas em: var my_express = 
my_app.get('/', (req, resp)=>{
    resp.send('<body><header><title>Express</title></header><body><h1>Home</h1></body></body>')
});

my_app.get('/tecnologia', (req, resp)=>{
    resp.send('<body><header><title>Express</title></header><body><h1>Tecnologia</h1></body></body>')
});

// esse método recebe como argumento uma porta e um callback.
my_app.listen(3000, ()=>{
    console.log('servidor com express.js');
});
