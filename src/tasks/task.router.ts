import { Router, Request, Response } from 'express';
import TaskController from './task.controller';

const taskRouteBasePath: string = '/tasks';

const taskRouter: Router = Router();

taskRouter.get('/', async (req: Request, res: Response) => {
	const taskController: TaskController = new TaskController();
	const tasks = await taskController.fetchAllTasks();
	res.status(200).send(tasks);
});

export { taskRouter, taskRouteBasePath };
