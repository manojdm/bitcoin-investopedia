import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import User from "../schemas/user.js";

const protect = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]

            const verified = jwt.verify(token, process.env.JWT);

            req.user = await User.findById(verified.id).select('-password');
    
            next()    
        } catch(e) {
            res.status(401)
            throw new Error('Not Authorized')
        }
    }
}

const admin = async(req,res,next) => {
    const user = req.user;

    if(user.isAdmin){
        next()
    } else {
        res.status(401)
        throw new Error('Not Authorized')
    }
}

export {protect, admin}