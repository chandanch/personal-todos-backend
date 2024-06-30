import { Task } from './task.entity';

class TaskController {
	async fetchAllTasks(): Promise<Task[]> {
		return [new Task()];
	}
}

export default TaskController;
