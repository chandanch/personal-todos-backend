import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// init dotenv
dotenv.config();

// 1. Create an instance of express
const app: Express = express();

// 2. Define the port on which the express app will run
const APP_PORT: number = Number(process.env.APP_PORT) || 4000;

// 3. Create an default route
app.get('/', (req: Request, res: Response) => {
	res.send('Server is running');
});

// 4. Start listening for requests on the above defined port
app.listen(APP_PORT, '', () => {
	console.log('Server started');
});
