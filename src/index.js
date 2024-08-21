const express = require('express')

class AppController{
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.express.use(express.json());
    }
    routes(){
        this.express.get('/health/',(req,res) => 
            {res.send({ Nome: "Yasmin", Idade: "16", CPF: "446.576.558-41"});
    });
    }
}
module.exports = new AppController().express;