import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Column('varchar')
	title: string;

	@Column('varchar')
	description: string;
}
