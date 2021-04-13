
const router = require("express").Router();
let { userlogin } = require('../utils/LoginAuth')


router.post('/admin-login', (req, res) => {
    userlogin(req.body, 'admin', res)
})

router.post('/user-login', (req, res) => {
    userlogin(req.body, 'user', res)
})

module.exports = router;