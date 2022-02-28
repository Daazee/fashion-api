import { createConnection } from "typeorm";
import { Company } from "../models/entity/company.entity";


export async function getAllCompany() {
    // can be used once createConnection is called and is resolved
    const connection = await createConnection();
    const companyRepository = connection.getRepository(Company);
    let companies: any = null;
    if (companyRepository !== null) {
        companies = await companyRepository.find();
    }
    return companies;
}