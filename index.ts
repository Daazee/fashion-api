import express, { Express } from 'express';
import { companyRouter  } from './src/routes/company.route';

const app: Express = express();

/** Takes care of JSON data */
// app.use(express.json());

app.use('/api/company', companyRouter);

app.listen(5001, ()=> {
    console.log("Fashion api is running on port 5001");
})