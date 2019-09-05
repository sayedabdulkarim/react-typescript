const express = require('express')
const app = express()
const cors =  require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const User = require('./Model/Model.tsx')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


mongoose.connect('mongodb+srv://sayedabdul:sayed9124@todo-wkuw1.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(res => console.log('connected'))
  .catch(err => console.log(err))

app.get('/getdata', (req, res) => {
  User.find()
  .then(post => res.json(post))
  .catch(err => console.log(err))
})

//post
app.post('/postitem', (req, res) => {
    const { item, category, amount, date, edit, deleted } = req.body
    const newItem = new User({ item, category, amount, date, edit, deleted })
    newItem.save()
      .then(post => res.json(post))
      .catch(err => console.log(err))
  })
  
//delete
app.get('delete/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      const { item, category, amount, date, edit, deleted } = req.body
      user.save()
      .then(post => res.json(post))
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})
  
//update
app.get('/update/:id', (req, res) => {
  User.findById(req.params.id)
  .then(user => {
    const { item, category, amount, date, edit, deleted } = req.body
    user.save()
    .then(post => res.json(post))
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
})

const PORT = process.env.PORT || 5000
app.listen(PORT)