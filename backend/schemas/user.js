import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userschema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    lastLogin: Date
})

userschema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userschema.methods.matchPassword = async function(entered) {
    return bcrypt.compare(entered, this.password)
}

const User = mongoose.model('User', userschema)



export default User