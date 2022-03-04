import express from 'express';
import { createCustomerMeasurement} from '../controller/customermeasurement.controller';
const router = express.Router();

router.route("/customerMeasurement").post(createCustomerMeasurement)
export { router as CustomerMeasurementRouter };