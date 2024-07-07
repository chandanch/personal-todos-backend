import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Task } from './task.entity';
import { instanceToPlain } from 'class-transformer';

class TaskController {
	/**
	 * Returns all tasks
	 * @param req
	 * @param res
	 * @returns
	 */
	async fetchAllTasks(req: Request, res: Response): Promise<Response> {
		const taskRepository = AppDataSource.getRepository(Task);

		let tasks: Task[];

		try {
			tasks = await taskRepository.find({
				order: {
					duedate: 'ASC',
				},
			});

			tasks = instanceToPlain(tasks) as Task[];

			return res.status(200).json(tasks);
		} catch (error) {
			return res.status(500).send({ error: 'An Error has occurred' });
		}
	}

	async createTask(req: Request, res: Response): Promise<Response> {
		// create a new instance of task
		const task: Task = new Task();

		// add data to task entity
		task.title = req.body.title;
		task.description = req.body.description;
		task.duedate = req.body.duedate;
		task.status = req.body.status;
		task.priority = req.body.priority;

		// get task repository
		const taskRepository = AppDataSource.getRepository(Task);

		try {
			// save new task in DB
			const createdTask = taskRepository.save(task);
			return res.status(201).json(instanceToPlain(createdTask));
		} catch (error) {
			console.log(error);
			return res.status(500).send('Error occured when saving task');
		}
	}
}

export const taskController: TaskController = new TaskController();
