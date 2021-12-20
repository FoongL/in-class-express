const express = require('express')
const app = express()
app.use(express.json());
require(`dotenv`).config()
const { PORT }  = process.env

/**
 *  APP IDEA:
 * 1. Going to have users
 * 2. Useres going to have tasks
 */

// import routes
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')

//import controllers
const UserController = require('./controllers/userController')
const TaskController = require('./controllers/taskController')

// import models
const db = require('./models')

// initialize controllers
const userController = new UserController('User', db.Users, db)
const taskController = new TaskController('Task', db.Tasks, db)

// route the routes
app.use('/users', userRouter(userController))
app.use('/tasks', taskRouter(taskController))


app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`))