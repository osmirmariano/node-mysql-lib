
class Mysql{
    async create(name_db, body, connect) {
        try {
            let atributo = [], values = [], atrib, val;
            let bodyValue = Object.entries(body);

            bodyValue.map(res => {
                atributo.push(res[0]);
                values.push(res[1])
            })
            atrib = JSON.stringify(atributo).replace('[', '').replace(']', '').replace(/"/g, '');
            val = JSON.stringify(values).replace('[', '').replace(']', '');

            let create = await connect.query(`INSERT INTO ${name_db} (${atrib}) VALUES (${val});`);
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

    async findById(name_db, id, conexao) {
        try {
            let findbyid = conexao.query(`SELECT * FROM ${name_db} WHERE id = ${id}`);
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

    async getAll(name_db, conexao) {
        try {
            let getall = conexao.query(`SELECT * FROM ${name_db}`);
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

    async updateById(name_db, body, conexao, query) {
        try {
            let updatebyid = await conexao.query(`UPDATE ${name_db} SET ? WHERE id = ${query.id}`, [body]);
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
    
    async removeById(name_db, id, conexao) {
        try {
            let updatebyid = conexao.query(`DELETE FROM ${name_db} WHERE id = ?`, id);
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

    async removeAll(name_db, conexao) {
        try {
            let updatebyid = conexao.query(`DELETE FROM ${name_db}`);
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
}

module.exports = new Mysql();