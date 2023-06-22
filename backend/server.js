const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express()
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10)
const User = require('./models/User.js')
const jwt = require('jsonwebtoken')
const secret = '932hdj8347d9002mshdh93'

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json())

mongoose.connect('mongodb+srv://jhashim1305:JASEM.h02@blogcluster.rqxxm5q.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e)
    }
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
        const userDoc = await User.findOne({username});
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            //login
            jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json('ok')
            });
        } else {
            res.status(400).json('wrong credentials');
        }
});
app.listen(4000)
