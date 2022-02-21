const express = require('express')
const app = express()
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
require(`dotenv`).config()
const { PORT }  = process.env

/**
 *  APP IDEA:
 * 1. Going to have users
 * 2. Useres going to have tasks
 */

// import routes
const UserRouter = require('./routers/userRouter')
const TaskRouter = require('./routers/taskRouter')

//import controllers
const UserController = require('./controllers/userController')
const TaskController = require('./controllers/taskController')

// import models
const db = require('./models')

// import middlewares
const auth = require('./middlewares/auth')()

// initialize controllers
const userController = new UserController('User', db.Users, db)
const taskController = new TaskController('Task', db.Tasks, db)


// route the routes
app.get('/', (req,res)=>res.render('index'))
app.get('/secure', (req,res)=>res.render('hack'))
app.use('/users', new UserRouter(userController, auth).router())
app.use('/tasks', new TaskRouter(taskController).router())


app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`))