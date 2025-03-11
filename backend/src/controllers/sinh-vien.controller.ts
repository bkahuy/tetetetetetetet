import { Hono } from 'hono';
import { db } from '../config/db';
const sinhVienRouter = new Hono();

sinhVienRouter.get('/', async (c) => {
    const [rows] = await db.execute('SELECT * FROM sinh_vien');
    return c.json(rows);
});

sinhVienRouter.get('/nganh/:ma_nganh', async (c) => {
    const { ma_nganh } = c.req.param();
    const [rows] = await db.execute('SELECT * FROM sinh_vien WHERE ma_nganh = ?', [ma_nganh]);
    return c.json(rows);
});

sinhVienRouter.post('/', async (c) => {
    const body = await c.req.json();
    await db.execute('INSERT INTO sinh_vien (ma_sv, username, lop, ma_nganh) VALUES (?, ?, ?, ?)', [body.ma_sv, body.username, body.lop, body.ma_nganh]);
    return c.json({ message: 'Sinh viên đã được tạo' });
});

export default sinhVienRouter;
