import { generateToken } from '../config/generateToken.js';
import User from '../schemas/user.js'

const addUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } catch(e) {
        console.log(e.message)
    }

}

const login = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(user && await user.matchPassword(req.body.password)){
            res.json({
                id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            // res.json({
            //     error: "User not found"
            // })
            throw new Error('User not found')
        }
    } catch(e) {
        console.log(e)
    }
}

export {addUser, login}