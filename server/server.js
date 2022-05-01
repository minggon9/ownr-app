const express = require('express')
const imageData = require('./imageData')

const app = express();

const disableCORS = app => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
};

disableCORS(app);

app.use(express.json());

app.get('/api/:animal', imageData);

app.listen(8800, () => {
    console.log("Server is running on http://localhost:8800");
});
