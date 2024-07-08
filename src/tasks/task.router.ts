import { Router } from 'express';
import { taskController } from './task.controller';
import {
	createTaskValidationRules,
	updateTaskValidationRules,
} from './task.validator';
import { requestValidator } from '../helpers/request-validator';

const taskRouteBasePath: string = '/tasks';

const taskRouter: Router = Router();

taskRouter.get('/', taskController.fetchAllTasks);

taskRouter.post(
	'/',
	createTaskValidationRules,
	requestValidator,
	taskController.createTask,
);

taskRouter.patch(
	'/:id',
	updateTaskValidationRules,
	requestValidator,
	taskController.updateTask,
);

export { taskRouter, taskRouteBasePath };
