import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Priority } from '../enums/priority';
import { Status } from '../enums/status';

@Entity()
export class Task {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Column({ type: 'text' })
	title: string;

	@Column({ type: 'longtext' })
	description: string;

	@Column({ type: 'varchar', length: 255 })
	duedate: string;

	@Column({
		type: 'enum',
		enum: Priority,
		default: Priority.normal,
	})
	priority: Priority;

	@Column({
		type: 'enum',
		enum: Status,
		default: Status.todo,
	})
	status: Status;
}
