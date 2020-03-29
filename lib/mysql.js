
const sql = require("../config/db.config");
const connect = require('../config/db.config')
class Mysql{
    async create(name_db, body) {
        try {
            let create = sql.connect.query(`INSERT INTO ${name_db} SET ? ${body}`);
            return ({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Create realizado com sucesso!",
                    data: create
                }
            })
        } catch (error) {
            return ({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async findById(name_db, id) {
        try {
            let findbyid = sql.connect.query(`SELECT * FROM ${name_db} WHERE id = ${id}`);
            return ({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "FindById realizado com sucesso!",
                    data: findbyid
                }
            })
        } catch (error) {
            return ({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async getAll(name_db) {
        try {
            let getall = sql.connect.query(`SELECT * FROM ${name_db}`);
            return ({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Select realizado com sucesso!",
                    data: getall
                }
            })
        } catch (error) {
            return ({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async updateById(name_db, body) {
        try {
            let updatebyid = sql.connect.query(`UPDATE ${name_db}`, [body]);
            return ({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Update realizado com sucesso!",
                    data: updatebyid
                }
            })
        } catch (error) {
            return ({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }
    
    async removeById(name_db, id) {
        try {
            let updatebyid = sql.connect.query(`DELETE FROM ${name_db} WHERE id = ?`, id);
            return ({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Delete realizado com sucesso!",
                    data: updatebyid
                }
            })
        } catch (error) {
            return ({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async removeAll(name_db) {
        try {
            let updatebyid = sql.connect.query(`DELETE FROM ${name_db}`);
            return ({
                messageCode: 0,
                message: {
                    title: "Sucesso",
                    message: "Delete realizado com sucesso!",
                    data: updatebyid
                }
            })
        } catch (error) {
            return ({
                messageCode: 3,
                message: {
                    title: "Erro",
                    message: "Não foi possível realizar a query",
                    error: error
                }
            })
        }
    }

    async connection(body){
        connect.connect(body)
    }
}

module.exports = new Mysql();