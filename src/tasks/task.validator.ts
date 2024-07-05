import { body } from 'express-validator';

export const createTaskValidator = [
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
];
