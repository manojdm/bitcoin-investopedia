import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

export const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT)
}