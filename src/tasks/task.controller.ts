import { AppDataSource } from '../../data-source';
import { Task } from './task.entity';

class TaskController {
	constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

	async fetchAllTasks(): Promise<Task[]> {
		let tasks: Task[];

		try {
			tasks = await this.taskRepository.find({
				order: {
					duedate: 'ASC',
				},
			});
			console.log(tasks);
			return tasks;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export default TaskController;
