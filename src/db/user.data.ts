import { dbConnection } from "./dbConnection";
import { User } from "../models/entity/user.entity";

export async function getAllUsers() {
    // can be used once createConnection is called and is resolved
    const connection = await dbConnection();
    const userRepository = connection.getRepository(User);
    let users: any = null;
    if (userRepository !== null) {
        users = await userRepository.find();
    }
    return users;
}

export async function createUser(user:User){
    let connection = await dbConnection();;
    const userRepository = connection.getRepository(User);
    var newUser = await userRepository.create(user)
    const result = await userRepository.save(newUser);
    return result;

}

export async function getUserById(id:number) {
    const connection = await dbConnection();;
    const userRepository = connection.getRepository(User);
    let user: any = null;
    if (userRepository !== null) {
        user = await userRepository.findOne(id);
    }
    return user;
}