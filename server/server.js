const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.listen(3000, () => console.log('Le serveur est lancé sur le port 3000'))

mongoose.connect('mongodb://localhost:27017/Chibanis', {useNewUrlParser: true, useUnifiedTopology: true})

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    role: String,
    isVulnerable: Boolean,
    password: String,
}))

app.post('/register', async(req, res)=>{
    const { name, email, password, age, isVulnerable, role } = req.body
    const user = new User({name, password, isVulnerable, email, age, role})
    await user.save()
    res.send(user)
})

