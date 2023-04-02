import mongoose from "mongoose";

const message = {
    id: {
        type: Number,
    },
    loading: Boolean,
    message: String,
    type: String,
    widget: String
}

const schema = new mongoose.Schema({
    user: {
        type: 'String',
        required: true
    },
    messages: [new mongoose.Schema(message)]
})

const Message = mongoose.model('Message', schema)

export default Message

