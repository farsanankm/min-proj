import express from 'express'
import { signupuser } from '../Controller/User-controller';

const router= express.Router();

router.post('/signup',signupuser);

export default router;