const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colors')
const connectDb = require('./Config/config')
const Pizza = require('./models/pizzaModel')
const Pizzas = require('./Data/pizza-data') 
const connectDB = require('./Config/config')
const { default: pizzas } = require('./Data/pizza-data')

//config dotenv and mongodb file

dotenv.config()
connectDb()

const importData =async() => {
    try{
        await Pizza.deleteMany()
        const sampledata = Pizzas.map(pizza => {return {...pizza}})
        await Pizza.insertMany(sampledata)
        console.log('Data imported' . bgGreen.white)
    }
    catch(error)
    {
        console.log(`${error}`.bgRed.white)
        process.exit(1)
    }
}

const dataDestroy = () => {}

if(process.argv[2] === '-d' )
{
    dataDestroy()
}
else
{
    importData();
}