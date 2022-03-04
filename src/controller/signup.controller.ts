import { createCompanyDTO } from '../models/DTOs/createCompanyDTO'
import { Request, Response, NextFunction } from 'express';
import { createCompany } from '../db/company.data'
import { createUser } from '../db/user.data';
import { Company } from '../models/entity/company.entity';
import { User } from '../models/entity/user.entity';


export const register = async (req: Request, res: Response, next: NextFunction) => {
    let request = req.body;
    console.log("request => ",request);
    let company: Company = {
        companyid: 0,
        name: request.name,
        addressLine1: "",
        addressLine2: ""
    };

    let newCompany =await createCompany(company);
    console.log("new company =>" + newCompany);
    if (newCompany != null) {
        let user: User = {
            companyid: newCompany.companyid,
            emailaddress: request.emailaddress,
            lastlogindate: new Date(),
            password: request.password,
            phonenumber: request.phonenumber,
            userid:0
        };

        let newUser = await createUser(user);
     
    }
    res.status(201).json({ success: true, company: { "name": "IBCouture" } });
}

