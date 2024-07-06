import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const requestValidator = (
	req: Request,
	response: Response,
	next: NextFunction,
): void => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		response.status(400).json(errors.array());
	} else {
		next();
	}
};
