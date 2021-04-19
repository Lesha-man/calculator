const fs = require('fs');


class OperationDao {
    constructor() {
        this.fileName = "history.txt";
    }

async getAll() {

    try {
        // read contents of the file
        return fs.readFileSync('history.txt', 'UTF-8').split(/\r?\n/);

    } catch (err) {
        console.error(err);
        return;
    }
}

    async create(operation) {
        fs.appendFile('history.txt', `${operation}\n`, function (err) {
            if (err) {
                // append failed
            } else {
                console.error(err);
            }
        })
    }
}

module.exports = OperationDao;