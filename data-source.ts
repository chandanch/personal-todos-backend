import { DataSource } from 'typeorm';
import { Task } from './src/tasks/task.entity';

export const AppDataSource: DataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
	entities: [Task],
	synchronize: true,
	// ssl: true,
});
