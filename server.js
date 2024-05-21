import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import db from './config/mongoose.js'
import path from 'path'
const __dirname = path.resolve(path.dirname(''))
dotenv.config()
const PORT = process.env.PORT || 8080
const app = express()

//Middlewares 
app.use(cors('*'))
app.use(express.urlencoded())
app.use(express.json()) //for react native calls

//ROutes
import routes from './routes/index.js'

app.use('/uploads',express.static(__dirname + '/uploads'))
app.use('/',routes)


app.listen(PORT, (err) => {
    if (err) {
        console.log("ERROR LISTENING PORT ", PORT, err);
        return
    }
    console.log("SUCCESSFULLY CONNECTED TO THE PORT ", PORT);
})