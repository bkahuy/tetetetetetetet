import type { Context } from "hono";

import { db } from "../config/db";

export const getAllGiangVien = async (c: Context) => {
    const [rows] = await db.execute('SELECT * FROM giang_vien');
    return c.json(rows);
};

export const getGiangVienByNganh = async (c: Context) => {
    const { ma_nganh } = c.req.param();
    const [rows] = await db.execute('SELECT * FROM giang_vien WHERE ma_nganh = ?', [ma_nganh]);
    return c.json(rows);
};

export const createGiangVien = async (c: Context) => {
    const body = await c.req.json();
    await db.execute(
        'INSERT INTO giang_vien (ma_gv, username, chuc_danh, ma_nganh) VALUES (?, ?, ?, ?)', 
        [body.ma_gv, body.username, body.chuc_danh, body.ma_nganh]
    );
    return c.json({ message: 'Giảng viên đã được tạo' });
};
