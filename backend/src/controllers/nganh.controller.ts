import type { Context } from "hono";

import { db } from '../config/db';

export const getAllNganh = async (c: Context) => {
    const [rows] = await db.execute('SELECT * FROM nganh');
    return c.json(rows);
};

export const createNganh = async (c: Context) => {
    const body = await c.req.json();
    await db.execute('INSERT INTO nganh (ma_nganh, ten_nganh) VALUES (?, ?)', [body.ma_nganh, body.ten_nganh]);
    return c.json({ message: 'Ngành học đã được tạo' });
};