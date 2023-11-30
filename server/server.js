const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const UserModel = require('./models/Users')

const app = express()
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/chibanis')

app.post('/login', (req, res)=>{
    const {email, password} = req.body
    UserModel.findOne({ email: email, password: password})
    .then(user=>{
        if (user) {
            if(user.password === password) {
                res.json('connexion effectuée')
            }else {
                res.json("le mot de passe n'existe pas")
            }
        }  else{
            res.json("Le compte n'existe pas dans la base de donnée")
        }
    })
})

app.post('/register', (req, res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3000, () => console.log('Le serveur est lancé sur le port 3000'))

