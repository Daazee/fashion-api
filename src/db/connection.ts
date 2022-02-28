import { createConnection, createConnections, Connection } from "typeorm";

const connection = async () => {
    await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "test"
    });


    // const connection: Connection = await createConnection();
}



export { connection as dbConnection }