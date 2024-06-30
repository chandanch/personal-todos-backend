import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

// init dotenv
dotenv.config();

import { AppDataSource } from './data-source';
import { taskRouteBasePath, taskRouter } from './src/tasks/task.router';

// 1. Create an instance of express
const app: Express = express();

// 2. Define the port on which the express app will run
const APP_PORT: number = Number(process.env.APP_PORT) || 4000;

// 3. Create a connection to DB using DataSource
// const AppDataSource: DataSource = new DataSource({
// 	type: 'mysql',
// 	host: process.env.DB_HOST,
// 	port: Number(process.env.DB_PORT),
// 	username: process.env.DB_USER,
// 	password: process.env.DB_PWD,
// 	database: process.env.DB_NAME,
// 	synchronize: true,
// 	// ssl: true,
// });

// setup body parser
// binds request payload to request.body property
app.use(bodyParser.json());

// setup cors
app.use(cors());

// 4. Create an default route
// app.get('/', (req: Request, res: Response) => {
// 	res.send('Server is running');
// });

// 5. Init DB
AppDataSource.initialize()
	.then(() => {
		console.log('DB Connection Successful');
		// 4. Start listening for requests on the above defined port
		app.listen(APP_PORT, '', () => {
			console.log('Server started');
		});
	})
	.catch((err) => console.log('Error when connecting to DB', err));

// 6. Add all the routes here
app.use(taskRouteBasePath, taskRouter);
