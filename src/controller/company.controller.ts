import { createCompanyDTO } from '../models/DTOs/createCompanyDTO'
import { Request, Response, NextFunction } from 'express';
import {getAllCompany} from '../db/company.data'

export const createCompany = (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({ success: true, company: { "name": "IBCouture" } });
}

export const getCompany = async (req: Request, res: Response, next: NextFunction) => {
    let company = await getAllCompany();
    res.status(200).json({ success: true, company: company });
}
