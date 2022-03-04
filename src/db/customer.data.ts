import { dbConnection } from "./dbConnection";
import { Customer } from "../models/entity/customer.entity";

export async function getAllCustomers() {
    const connection = await dbConnection();
    const customerRepository = connection.getRepository(Customer);
    let customers: any = null;
    if (customerRepository !== null) {
        customers = await customerRepository.find();
    }
    return customers;
}

export async function addCustomer(customer:Customer){
    let connection = await dbConnection();;
    const customerRepository = connection.getRepository(Customer);
    let newCustomer = await customerRepository.create(customer)
    const result = await customerRepository.save(newCustomer);
    return result;

}

export async function getCustomerById(id:number) {
    const connection = await dbConnection();;
    const customerRepository = connection.getRepository(Customer);
    let customer: any = null;
    if (customerRepository !== null) {
        customer = await customerRepository.findOne(id);
    }
    return customer;
}