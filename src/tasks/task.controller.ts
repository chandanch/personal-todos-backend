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
		return res.status(200).send(req.body);
	}
}

export const taskController: TaskController = new TaskController();
