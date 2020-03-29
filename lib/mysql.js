
const sql = require("../config/db.config");

class Mysql{
    Customer = (body) => {
        body
    }

    async create(req, res) {
        try {
            let create = sql.connect.query(`INSERT INTO ${req.name_db} SET ? ${req.body}`);
            res.json({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Create realizado com sucesso!",
                    data: create
                }
            })
        } catch (error) {
            res.json({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async findById(req, res) {
        try {
            let findbyid = sql.connect.query(`SELECT * FROM ${req.name_db} WHERE id = ${req.id}`);
            res.json({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "FindById realizado com sucesso!",
                    data: findbyid
                }
            })
        } catch (error) {
            res.json({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async getAll(req, res) {
        try {
            let getall = sql.connect.query(`SELECT * FROM ${req.name_db}`);
            res.json({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Select realizado com sucesso!",
                    data: getall
                }
            })
        } catch (error) {
            res.json({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async updateById(req, res) {
        try {
            let updatebyid = sql.connect.query(`UPDATE ${req.name_db}`, [req.body]);
            res.json({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Update realizado com sucesso!",
                    data: updatebyid
                }
            })
        } catch (error) {
            res.json({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }
    
    async removeById(req, res) {
        try {
            let updatebyid = sql.connect.query(`DELETE FROM ${req.name_db} WHERE id = ?`, req.id);
            res.json({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Delete realizado com sucesso!",
                    data: updatebyid
                }
            })
        } catch (error) {
            res.json({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async removeAll(req, res) {
        try {
            let updatebyid = sql.connect.query(`DELETE FROM ${req.name_db}`);
            res.json({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Delete realizado com sucesso!",
                    data: updatebyid
                }
            })
        } catch (error) {
            res.json({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }
}

module.exports = new Mysql();