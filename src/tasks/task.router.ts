import { Router, Request, Response } from 'express';
import TaskController from './task.controller';
import { createTaskValidator } from './task.validator';
import { requestValidator } from '../helpers/request-validator';

const taskRouteBasePath: string = '/tasks';

const taskRouter: Router = Router();

taskRouter.get('/', async (req: Request, res: Response) => {
	const taskController: TaskController = new TaskController();
	try {
		const tasks = await taskController.fetchAllTasks();
		res.status(200).send(tasks);
	} catch (error) {
		res.status(500).send({ error: 'An Error Occured' });
	}
});

taskRouter.post(
	'/',
	createTaskValidator,
	requestValidator,
	async (req: Request, res: Response) => {
		console.log(req, res);
		res.send(req.body);
	},
);

export { taskRouter, taskRouteBasePath };
