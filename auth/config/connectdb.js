import mongoose from "mongoose";

const connectDB = async(DATABASE_URL)=>{
    try{
        const DB_OPTIONS = {
            dbName:'LoginApp'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log('Connection established');
    }
    catch(err){
        console.log('connection failed: ' + err.message);
    }
}

export default connectDB