import { Router } from "express";
import { protect } from "../config/middleware.js";
import { fetchMessage, removeMessage, saveMessages } from "../Controllers/message.js";
import Message from "../schemas/message.js";

const router = Router()

router.route('/').post(protect,saveMessages)
router.route('/').get(protect,fetchMessage)
router.route('/').delete(protect,removeMessage)


export default router