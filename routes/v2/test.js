let express = require("express");
let router = express.Router()
router.get("/", (req, res, next) => {
    res.send({
        code: 200, 
        payload: {
            method: 'get',
            data: 'yuki-express'
        }
    })
})
router.post("/", (req, res, next) => {
    res.send({
        code: 200, 
        payload: {
            method: 'post',
            data: 'yuki-express'
        }
    })
})
module.exports = router;