const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./Config/config')

require('colors')

const morgan = require('morgan')
//const { bgMagenta } = require('colors')


dotenv.config()
connectDB()


const app=express()

//middleware

app.use(express.json())
app.use(morgan('dev'))


//route
app.use("/api/pizzas" , require("./routes/pizzaRouts"));
app.use("/api/users" , require("./routes/userRoutes"));
app.use("/api/orders" , require("./routes/orderRoutes"));
app.get('/' , (req,res) => {
    res.send('<h1>Hello from node server</h1>');
});

const port = process.env.PORT || 8080

app.listen(8080, ()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});