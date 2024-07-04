import { Router, Request, Response } from 'express';
import TaskController from './task.controller';

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

export { taskRouter, taskRouteBasePath };
