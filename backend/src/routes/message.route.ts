import Express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller";
import { requireAuth } from "../middleware/auth";
const router = Express.Router();

router.post('/', requireAuth, getMessages);
router.post('/send', requireAuth, sendMessage);

export default router;