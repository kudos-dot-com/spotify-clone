
const router = require("express").Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const verify = require('../middleware/middleware');


router.get('/dashboard', verify, (req, res) => {
    res.json({ user: req.user });
})

module.exports = router;