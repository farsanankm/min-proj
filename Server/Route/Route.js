import express from 'express';
import { signupUser } from '../Controller/User-controller';  

const router = express.Router();

router.post('/signup', signupUser);

export default router;
