
const router = require("express").Router();
let { uservalidation } = require('../utils/SignupAuth')


// user routes
router.post('/admin-register', (req, res) => {
    uservalidation(req.body, 'admin', res)
})

router.post('/user-register', (req, res) => {
    uservalidation(req.body, 'user', res)
})


module.exports = router;