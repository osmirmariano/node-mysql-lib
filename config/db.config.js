
class Conexao {
    async connect (res, req) {
        const connection_db = mysql.createConnection({
            HOST: `${req.host}`,
            USER: `${req.user}`,
            PASSWORD: `${req.password}`,
            DB: `${req.db}`
        });
    
        connection_db.connect(error => {
            if (error) res.json({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "As informações do banco de dados não é válida para conexão",
                    errror: error
                }
            });
 
            res.json({
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