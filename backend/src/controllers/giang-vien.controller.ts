import { Hono } from 'hono';
import { db } from '../config/db';
const giangVienRouter = new Hono();

giangVienRouter.get('/', async (c) => {
    const [rows] = await db.execute('SELECT * FROM giang_vien');
    return c.json(rows);
});

giangVienRouter.get('/nganh/:ma_nganh', async (c) => {
    const { ma_nganh } = c.req.param();
    const [rows] = await db.execute('SELECT * FROM giang_vien WHERE ma_nganh = ?', [ma_nganh]);
    return c.json(rows);
});

giangVienRouter.post('/', async (c) => {
    const body = await c.req.json();
    await db.execute('INSERT INTO giang_vien (ma_gv, username, chuc_danh, ma_nganh) VALUES (?, ?, ?, ?)', [body.ma_gv, body.username, body.chuc_danh, body.ma_nganh]);
    return c.json({ message: 'Giảng viên đã được tạo' });
});

export default giangVienRouter;