const mysql = require('mysql2');


class OperationDao {
    constructor() {
        const pool = mysql.createPool(process.env.CONNECTION_STRING);
        this.pool = pool.promise();
    }

    async getAll() {
        return (await this.pool.query("SELECT * FROM operations;"))[0];
    }

    async create(operation) {
        try {
            await this.pool.query("INSERT INTO operations (operation) VALUE (?)", [operation])
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = OperationDao;