import express, { Express } from 'express';
import { companyRouter  } from './src/routes/company.route';
import { customerRouter } from './src/routes/customer.route';
import { signupRouter } from './src/routes/signup.route';

const app: Express = express();

/** Takes care of JSON data */
app.use(express.json());

app.use('/api/', companyRouter, customerRouter);
app.use('/api/', signupRouter);

app.listen(5001, ()=> {
    console.log("Fashion api is running on port 5001");
})