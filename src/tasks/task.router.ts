import { Router } from 'express';
import { taskController } from './task.controller';
import { createTaskValidator } from './task.validator';
import { requestValidator } from '../helpers/request-validator';

const taskRouteBasePath: string = '/tasks';

const taskRouter: Router = Router();

taskRouter.get('/', taskController.fetchAllTasks);

taskRouter.post(
	'/',
	createTaskValidator,
	requestValidator,
	taskController.createTask,
);

export { taskRouter, taskRouteBasePath };
