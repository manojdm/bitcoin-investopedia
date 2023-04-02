import { Router } from "express"
import { protect } from "../config/middleware.js";
import { addUser, login } from "../Controllers/user.js";
const router = Router();

router.route('/register').post(addUser)
router.route('/login').post(login)
router.route('/').get(protect, (req, res) => {
    res.send('working.... ')
})

export default router

