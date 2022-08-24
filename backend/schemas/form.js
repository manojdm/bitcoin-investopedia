import mongoose from "mongoose";

const browser = {
    appName: String,
    platform: String,
    vendor: String,
    language: String
}

const formSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    happy: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    roi: {
        type: Number,
        required: true
    },
    future: {
        type: String,
        required: true
    },
    browser: browser

})

const Form = mongoose.model('Form',formSchema)

export default Form

