import { dbConnection } from "./dbConnection";
import { Company } from "../models/entity/company.entity";
import { getRepository } from "typeorm";


export async function getAllCompany() {
    // can be used once createConnection is called and is resolved
    const connection = await dbConnection();
    const companyRepository = connection.getRepository(Company);
    let companies: any = null;
    if (companyRepository !== null) {
        companies = await companyRepository.find();
    }
    return companies;
}

export async function createCompany(company: Company) {
    const connection = await dbConnection();
    const companyRepository = getRepository(Company);
    var newCompany = await companyRepository.create(company)
    const result = await companyRepository.save(newCompany);
    return result;
}

export async function getCompanyById(id: number) {
    const connection = await dbConnection();
    const companyRepository = connection.getRepository(Company);
    let company: any = null;
    if (companyRepository !== null) {
        company = await companyRepository.findOne(id);
    }
    return company;
}