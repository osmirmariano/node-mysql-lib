const mysql = require("mysql");

class Conexao {
    async connect (req) {
        if(!req.host)
            return ({
                message: "Host é obrigatório",
            });
        else if(!req.user) {
            return ({
                message: "User é obrigatório",
            });
        } else if(!req.password) {
            return ({
                message: "Password é obrigatório",
            });
        } else if(!req.db)
            return ({
                message: "Db é obrigatório",
            });

        const connection_db = mysql.createConnection({
            HOST: `${req.host}`,
            USER: `${req.user}`,
            PASSWORD: `${req.password}`,
            DB: `${req.db}`
        });
    
        connection_db.connect(error => {
            if (error) return ({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "As informações do banco de dados não é válida para conexão",
                    errror: error
                }
            });
 
            return ({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Conectado ao banco de dados com sucesso"
                }
            });
        });
    }
}

module.exports =  new Conexao();