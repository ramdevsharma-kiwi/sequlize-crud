const express = require('express');
const Sequelize  = require('sequelize');
const bodyParser = require('body-parser')
const app = express();
const port = 3000

const User = require("./models/user")
User.sync();

app.use(bodyParser.json())

const userController = require('./controllers/userController');



app.post('/users',userController.addUser)

app.get('/users',userController.getUser)

app.get('/users/:id',userController.getUser)

app.patch('/users/:id',userController.updateUser)

app.delete('/users/:id',userController.deleteUser)




app.listen(port, () => { 
  console.log(`App listening on port ${port}`)
})