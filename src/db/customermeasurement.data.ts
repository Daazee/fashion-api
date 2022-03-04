import { dbConnection } from "./dbConnection";
import { customermeasurement } from "../models/entity/customermeasurement.entity";


export async function addCustomerMeasurement(customerMeasurement:customermeasurement){
    let connection = await dbConnection();;
    const customerMeasurementRepository = connection.getRepository(customermeasurement);
    let newCustomer = await customerMeasurementRepository.create(customerMeasurement)
    const result = await customerMeasurementRepository.save(newCustomer);
    return result;

}

export async function getCustomerMeasurementById(id:number) {
    const connection = await dbConnection();;
    const customerMeasurementRepository = connection.getRepository(customermeasurement);
    let customer: any = null;
    if (customerMeasurementRepository !== null) {
        customer = await customerMeasurementRepository.findOne(id);
    }
    return customer;
}