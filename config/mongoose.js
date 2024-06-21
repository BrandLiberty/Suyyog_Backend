import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

// const localDBUrl = "mongodb://127.0.0.1/suyog_db"
const DBUrl = "mongodb+srv://electronicssuyog:Suyog%24%25%32%30%32%34%CB%86@cluster0.x5g8cd2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// process.env.MONGODB_URL
mongoose.connect(DBUrl)
const db = mongoose.connection

db.on('error' , console.error.bind(console , `ERROR CONNECTING TO ${DBUrl}`))
db.once('open', ()=>console.log(`SUUCESSFULLY CONNECTED TO ${DBUrl}`))

export default db