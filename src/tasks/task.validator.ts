import { ValidationChain, body } from 'express-validator';
import { Priority } from '../enums/priority';
import { Status } from '../enums/status';

export const createTaskValidationRules: Array<ValidationChain> = [
	body('title')
		.not()
		.isEmpty()
		.withMessage('Title Field is required')
		.trim()
		.isString()
		.withMessage('Title field must be a text'),

	body('description')
		.isString()
		.withMessage('Description field must be string'),

	body('duedate')
		.not()
		.isEmpty()
		.withMessage('Due Date field is required')
		.isString()
		.withMessage('Due Date must contain  a valid date string format'),

	body('priority')
		.trim()
		.isIn([Priority.low, Priority.normal, Priority.high])
		.withMessage(
			`Invalid Priority selected, Must be ${Priority.low}, ${Priority.normal}, or ${Priority.high},`,
		),

	body('status')
		.trim()
		.isIn([Status.todo, Status.inProgress, Status.completed])
		.withMessage(
			`Invalid Status, Must be either of ${Status.todo} or ${Status.inProgress} or ${Status.completed} `,
		),
];

export const updateTaskValidationRules: Array<ValidationChain> = [
	body('status')
		.trim()
		.isIn([Status.todo, Status.inProgress, Status.completed])
		.withMessage(
			`Invalid Status, Must be either of ${Status.todo} or ${Status.inProgress} or ${Status.completed} `,
		),
];
