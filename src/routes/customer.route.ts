import express from 'express';
import { createCustomer} from '../controller/customer.controller';
const router = express.Router();

router.route("/customer").post(createCustomer)
export { router as customerRouter };