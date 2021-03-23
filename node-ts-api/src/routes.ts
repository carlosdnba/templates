import { Router } from 'express'

import Controller from './controller/Controller';

const routes = Router();

routes.get('/first', Controller.default);
routes.post('/test', Controller.test);

export default routes;