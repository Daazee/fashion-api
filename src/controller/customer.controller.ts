import { createCompanyDTO } from '../models/DTOs/createCompanyDTO'
import { Request, Response, NextFunction } from 'express';
import { addCustomer } from '../db/customer.data'
import { Customer } from '../models/entity/customer.entity';


export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    let customer = req.body;
    let newCustomer =await addCustomer(customer);
    console.log("new customer =>" + newCustomer);
    res.status(201).json({ success: true, data: newCustomer });
}

