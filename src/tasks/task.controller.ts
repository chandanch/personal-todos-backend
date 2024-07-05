import { AppDataSource } from '../../data-source';
import { Task } from './task.entity';
import { instanceToPlain } from 'class-transformer';

class TaskController {
	async fetchAllTasks(): Promise<Task[]> {
		const taskRepository = AppDataSource.getRepository(Task);

		let tasks: Task[];

		try {
			tasks = await taskRepository.find({
				order: {
					duedate: 'ASC',
				},
			});

			return instanceToPlain(tasks) as Task[];
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export const taskController: TaskController = new TaskController();
