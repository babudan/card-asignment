const express = require('express')
const router = express.Router()
const { getcard } = require('../controller/cardcontroller');

router.get("/test-me", function (req, res) {
    return res.send({ msg: "all things are okay" });
})

router.get("/get_card_status", getcard);


module.exports = router