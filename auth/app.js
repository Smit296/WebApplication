import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL
//Use when we attach this backend to the frontend 
app.use(cors())
connectDB(DATABASE_URL)

app.use(express.json())
app.use('/api/user',userRoutes)
app.listen(port,()=>{
    console.log(`serever running on port ${port}`)
})


