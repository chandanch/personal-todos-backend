import { Router, Request, Response } from 'express';

const taskRouteBasePath: string = '/tasks';

const taskRouter: Router = Router();

taskRouter.get('/', (req: Request, res: Response) => {
	res.send({ tasks: [] });
});

export { taskRouter, taskRouteBasePath };
