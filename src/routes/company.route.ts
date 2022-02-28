import express from 'express';
import { createCompany, getCompany } from '../controller/company.controller';
const router = express.Router();

router.route("/createCompany").post(createCompany)
router.route("/getCompany").get(getCompany)

export { router as companyRouter };