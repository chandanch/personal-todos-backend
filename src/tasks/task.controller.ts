import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Task } from './task.entity';
import { instanceToPlain } from 'class-transformer';

class TaskController {
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
}

export const taskController: TaskController = new TaskController();
