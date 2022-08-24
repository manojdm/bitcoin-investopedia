import { Router } from "express";
import Form from '../schemas/form.js'
const router = Router()

router.route('/new').post(async (req,res) => {

    const form =  await Form.create(req.body)
    
    res.json({success: true})
})

export default router