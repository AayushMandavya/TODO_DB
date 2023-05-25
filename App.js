const express = require('express');
const App = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router =require('./Routes/index.route');
const appConfig = require('./Config/Config');
const getConnection = require('./Config/db');
const UserRouter =require('./Routes/user.route');
const todoRouter = require('./Routes/todo.route');
const conn= getConnection();


//middleware
App.use((req, res,next)=>{
   req.conn = conn;
    next();
});

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:true}));

//routers
App.use("/",router);
App.use("/users",UserRouter);
App.use("/todo",todoRouter);

//server activation
App.listen(appConfig.PORT || 8000,()=>{
    console.log("server is running at port 8000");
})