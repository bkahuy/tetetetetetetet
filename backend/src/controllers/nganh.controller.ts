import { Hono } from 'hono';
import { db } from '../config/db';
const nganhRouter = new Hono();

nganhRouter.get('/', async (c) => {
    const [rows] = await db.execute('SELECT * FROM nganh');
    return c.json(rows);
});

nganhRouter.post('/', async (c) => {
    const body = await c.req.json();
    await db.execute('INSERT INTO nganh (ma_nganh, ten_nganh) VALUES (?, ?)', [body.ma_nganh, body.ten_nganh]);
    return c.json({ message: 'Ngành học đã được tạo' });
});

export default nganhRouter;
