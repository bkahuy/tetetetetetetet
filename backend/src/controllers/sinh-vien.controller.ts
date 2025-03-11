import type { Context } from "hono";
import { db } from "../config/db";

export const getAllSinhVien = async (c: Context) => {
    const [rows] = await db.execute('SELECT * FROM sinh_vien');
    return c.json(rows);
};

export const getSinhVienByNganh = async (c: Context) => {
    const { ma_nganh } = c.req.param();
    const [rows] = await db.execute('SELECT * FROM sinh_vien WHERE ma_nganh = ?', [ma_nganh]);
    return c.json(rows);
};

export const createSinhVien = async (c: Context) => {
    const body = await c.req.json();
    await db.execute(
        'INSERT INTO sinh_vien (ma_sv, username, lop, ma_nganh) VALUES (?, ?, ?, ?)', 
        [body.ma_sv, body.username, body.lop, body.ma_nganh]
    );
    return c.json({ message: 'Sinh viên đã được tạo' });
};
