import { Hono } from 'hono';
import { getAllNganh, createNganh } from '../controllers/nganh.controller';

export const nganhRoute = new Hono();
nganhRoute.get('/', getAllNganh);
nganhRoute.post('/', createNganh);
export default nganhRoute;