import express, { Request, Response } from 'express';

const api = express.Router();

api.get('/', (req: Request, res: Response) => {
	res.send('api v1 <3');
});

export default api;