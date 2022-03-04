import { createCompanyDTO } from '../models/DTOs/createCompanyDTO'
import { Request, Response, NextFunction } from 'express';
import {getAllCompany, getCompanyById} from '../db/company.data'

export const createCompany = (req: Request, res: Response, next: NextFunction) => {
    let newcompany = null;
    res.status(201).json({ success: true, company: { "name": "IBCouture" } });
}

export const companies = async (req: Request, res: Response, next: NextFunction) => {
    let company = await getAllCompany();
    res.status(200).json({ success: true, company: company });
}


export const companyDetail = async (req: Request, res: Response, next: NextFunction) => {
    let company = await getCompanyById(Number(req.params.id));
    res.status(200).json({ success: true, company: company });
}