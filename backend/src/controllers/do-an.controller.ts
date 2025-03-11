import { Context } from "hono";
import { db } from "../config/db";

export const getAllDoAn = async (c: Context) => {
  try {
    const [rows] = await db.query(`
      SELECT DA.*, GV.ho_ten AS ten_giang_vien, SV.ho_ten AS ten_sinh_vien
      FROM DO_AN DA
      LEFT JOIN GIANG_VIEN GV ON DA.ma_gv = GV.ma_gv
      LEFT JOIN SINH_VIEN SV ON DA.ma_sv = SV.ma_sv
    `);
    return c.json(rows);
  } catch (error) {
    return c.json({ error: "Lỗi khi lấy danh sách đồ án" }, 500);
  }
};

export const getDoAnById = async (c: Context) => {
  const { id } = c.req.param();
  try {
    const [rows] = await db.query(`
      SELECT DA.*, GV.ho_ten AS ten_giang_vien, SV.ho_ten AS ten_sinh_vien
      FROM DO_AN DA
      LEFT JOIN GIANG_VIEN GV ON DA.ma_gv = GV.ma_gv
      LEFT JOIN SINH_VIEN SV ON DA.ma_sv = SV.ma_sv
      WHERE DA.ma_da = ?
    `, [id]);

    if (Array.isArray(rows) && rows.length > 0) {
      return c.json(rows[0]);
    } else {
      return c.json({ error: "Không tìm thấy đồ án" }, 404);
    }
  } catch (error) {
    return c.json({ error: "Lỗi khi lấy đồ án" }, 500);
  }
};

export const createDoAn = async (c: Context) => {
  const { ma_da, ten_da, ma_gv, ma_sv } = await c.req.json();
  try {
    await db.query(`
      INSERT INTO DO_AN (ma_da, ten_da, ma_gv, ma_sv)
      VALUES (?, ?, ?, ?)
    `, [ma_da, ten_da, ma_gv, ma_sv]);

    return c.json({ message: "Đã tạo đồ án" }, 201);
  } catch (error) {
    return c.json({ error: "Lỗi khi tạo đồ án" }, 500);
  }
};

export const updateDoAn = async (c: Context) => {
  const { id } = c.req.param();
  const { ten_da, ma_gv, ma_sv } = await c.req.json();
  try {
    await db.query(`
      UPDATE DO_AN SET ten_da = ?, ma_gv = ?, ma_sv = ? WHERE ma_da = ?
    `, [ten_da, ma_gv, ma_sv, id]);

    return c.json({ message: "Đã cập nhật đồ án" });
  } catch (error) {
    return c.json({ error: "Lỗi khi cập nhật đồ án" }, 500);
  }
};

export const deleteDoAn = async (c: Context) => {
  const { id } = c.req.param();
  try {
    await db.query("DELETE FROM DO_AN WHERE ma_da = ?", [id]);
    return c.json({ message: "Đã xoá đồ án" });
  } catch (error) {
    return c.json({ error: "Lỗi khi xoá đồ án" }, 500);
  }
};
