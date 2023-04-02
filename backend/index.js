import express from "express";
import form from './routes/form.js'
import db from './config/db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import user from './routes/user.js'
import message from './routes/messages.js'

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

//routes
app.use('/api/user', user)
app.use('/api/form',form)
app.use('/api/message',message)


const PORT = process.env.PORT || 8800

//deployment
app.listen(PORT,() => {
    console.log('Backend server started!!')
})