import { createCompanyDTO } from '../models/DTOs/createCompanyDTO'
import { Request, Response, NextFunction } from 'express';
import { addCustomerMeasurement } from '../db/customermeasurement.data'


export const createCustomerMeasurement = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let customerMeasurement = req.body;
        let newCustomerMeasurement =await addCustomerMeasurement(customerMeasurement);
        res.status(201).json({ success: true, data: newCustomerMeasurement });
    }
    catch(ex){
        res.status(200).json({ success: true, data: ex });
    }
}

