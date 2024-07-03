import { Router, Request, Response } from 'express';
import TaskController from './task.controller';

const taskRouteBasePath: string = '/tasks';

const taskRouter: Router = Router();

taskRouter.get('/', async (req: Request, res: Response) => {
	const taskController: TaskController = new TaskController();
	await taskController.fetchAllTasks();
	res.send({ tasks: ['Sample task'] });
});

export { taskRouter, taskRouteBasePath };
