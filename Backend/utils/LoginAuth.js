const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config');
const verify = require('../middleware/middleware');


const userlogin = (user, role, res) => {

    const { email, password } = user;
    if (!email || !password) {
        return res.status(422).json({ err: "incomplete fields" });
    }

    User.findOne({ email: email })

        .then(getuser => {
            if (!getuser) {
                return res.status(422).json({ err: "user doesn't exist wrong email" });
            }

            if (getuser.role !== role) {
                return res.status(401).json({ err: "Login into right field" });
            }

            bcrypt.compare(password, getuser.password)
                .then(status => {
                    if (status) {
                        const token = jwt.sign({ _id: getuser._id }, JWT_SECRET, { expiresIn: '1h' })
                        res.json({ token: token });
                    }
                    else {
                        return res.status(422).json({ err: "password wrong" });
                    }
                })
                .catch(err => {
                    res.json({ err: err })
                })
        })

        .catch(err => {
            res.json({ err: err })
        })
}

module.exports = { userlogin };