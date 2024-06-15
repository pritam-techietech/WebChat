import express from 'express';
import {signup, login, logout, notFound, getUsersForSidebar} from "../controllers/user.controller";
import { requireAuth } from '../middleware/auth';

const router = express.Router();

router.get('/', requireAuth, getUsersForSidebar)
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/*', notFound);
router.post('/*', notFound);

export default router;