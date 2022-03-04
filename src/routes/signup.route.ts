import express from 'express';
import { register} from '../controller/signup.controller';
const router = express.Router();

router.route("/signup/register").post(register)
export { router as signupRouter };