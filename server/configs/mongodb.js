import mongoose from "mongoose";

// Connect to the MongoDB database

const connectDB = async () =>{
    mongoose.connection.on('connected', ()=> console.log('Database Connect successfully'))
    mongoose.connection.on('error', (err) => console.log('Database Connection Error:', err.message))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}
export default connectDB;