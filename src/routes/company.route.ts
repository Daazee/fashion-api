import express from 'express';
import { createCompany, companies, companyDetail } from '../controller/company.controller';
const router = express.Router();

router.route("/companies").post(createCompany)
router.route("/companies").get(companies)
router.route("/companies/:id").get(companyDetail)
export { router as companyRouter };