const express = require('express');

class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        const users = [];

        this.express.post("/users", (req, res) => {
            const {id, nome, email, senha} = req.body;
            users.push({ id, nome, email, senha });
            res.status(200).send({ message: "Usuário cadastrado com sucesso" });
        });

        this.express.post("/auth", (req, res) => {
            const {email, senha} = req.body;

            const user = users.find(user => user.email === email);

            if (user) {
                const user = users.find(user => user.senha === senha);
                if (user) {
                    return res.status(200).send({ message: "Usuario Autenticado" });
                }else {
                return res.status(400).send({ message: "Senha Incorreta" });
                }
            }else {
                return res.status(400).send({ message: "Email Incorreto" });
            }
        });

        this.express.get("/users/:id", (req, res) => {
            const {id} = req.params;
            const user = users.find(user => user.id == id);
            if (user) {
                res.status(200).send(user);
            } else {
                res.status(400).send({ message: "Usuário não encontrado" });
            }
        });

        this.express.get('/health/', (req, res) => {
            res.send({
                Nome: "Yasmin",
                Idade: "16",
                CPF: "446.576.558-41",
                Email: "ysmin.souza@hotmail"
            });
        });
    }
}

module.exports = new AppController().express;