const PORT = process.env.PORT || 8081;

const express = require("express");
const bodyParser = require('body-parser');
const OperationDao = require('./src/OperationDao');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/client/build"));

const dao = new OperationDao();

app.get('/api/history/all', async function(req, res) {
    res.send(await dao.getAll());
});

app.post('/api/history', urlencodedParser, async function(req, res) {
    if(!req.body) return res.sendStatus(400);
    const operation = req.body.operation;
    try {
        dao.create(operation);
    } catch (e) {
        res.sendStatus(500);
        res.send();
        return;    
    }
    res.sendStatus(201);
    res.send();
});

app.listen(PORT);