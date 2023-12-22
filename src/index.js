const express = require("express")
const route = require('./routes/router');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.DB, {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);
app.use('/*', function (req, res) {
    return res.status(400).send({ status: false, msg: 'You Are In Wrong Path' })
})

app.listen(process.env.PORT, function () {
    console.log('Express app running on port ' + (process.env.PORT))
});


