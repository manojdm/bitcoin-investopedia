import Message from "../schemas/message.js"

export const saveMessages = async (req, res) => {

    const message = await Message.create({
        user: req.user.id,
        messages: req.body
    })

    console.log(req.body)

    res.json(message)
}

export const fetchMessage = async(req, res) => {

    try {
        const message = await Message.findOne({user: req.user.id})

        res.json(message)
    } catch(e) {
        console.log(e)
        throw new Error(e)
    }
}

export const removeMessage = async(req, res) => {

        while(await Message.findOne({user: req.user.id}) != null){
            await Message.findOneAndRemove({user: req.user.id})
            continue
        }

    res.json({action: 'Removed'})
}