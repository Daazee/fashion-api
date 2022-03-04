import { createConnection, createConnections, Connection, getConnection, getConnectionManager } from "typeorm";


const establishDBConnection = async () => {
    let connection: Connection;
    let hasConnection = getConnectionManager().has('default');
    if (hasConnection) {
        connection = getConnectionManager().get('default')
        if (!connection.isConnected)
            connection = await connection.connect();
    }
    else {
        connection = await createConnection("default");
    }
    return connection;
}

export { establishDBConnection as dbConnection }