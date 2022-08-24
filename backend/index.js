import express from "express";
import form from './routes/form.js'
import db from './config/db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'


//init express
const app = express()

//dotenv
dotenv.config()

//cors
app.use(cors())

//db
db()

//routes & middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/form',form)

const PORT = process.env.PORT || 8800

//deployment
app.listen(PORT,() => {
    console.log('Backend server started!!')
})