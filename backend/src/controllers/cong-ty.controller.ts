import { Context } from "hono";
import { db } from "../config/db";

export const getAllCongTy = async (c: Context) => {
  try {
    const [rows] = await db.query(`
      SELECT CT.*, DA.ten_da, SV.ho_ten AS ten_sinh_vien
      FROM CONG_TY CT
      LEFT JOIN DO_AN DA ON CT.ma_cty = DA.ma_cty
      LEFT JOIN SINH_VIEN SV ON DA.ma_sv = SV.ma_sv
    `);
    return c.json(rows);
  } catch (error) {
    return c.json({ error: "Lỗi khi lấy danh sách công ty" }, 500);
  }
};

export const getCongTyById = async (c: Context) => {
  const { id } = c.req.param();
  try {
    const [rows] = await db.query(`
      SELECT CT.*, DA.ten_da, SV.ho_ten AS ten_sinh_vien
      FROM CONG_TY CT
      LEFT JOIN DO_AN DA ON CT.ma_cty = DA.ma_cty
      LEFT JOIN SINH_VIEN SV ON DA.ma_sv = SV.ma_sv
      WHERE CT.ma_cty = ?
    `, [id]);

    if (Array.isArray(rows) && rows.length > 0) {
      return c.json(rows[0]);
    } else {
      return c.json({ error: "Không tìm thấy công ty" }, 404);
    }
  } catch (error) {
    return c.json({ error: "Lỗi khi lấy công ty" }, 500);
  }
};

export const createCongTy = async (c: Context) => {
  const { ma_cty, ten_cty, dia_chi, so_dien_thoai } = await c.req.json();
  try {
    await db.query(`
      INSERT INTO CONG_TY (ma_cty, ten_cty, dia_chi, so_dien_thoai)
      VALUES (?, ?, ?, ?)
    `, [ma_cty, ten_cty, dia_chi, so_dien_thoai]);

    return c.json({ message: "Đã tạo công ty" }, 201);
  } catch (error) {
    return c.json({ error: "Lỗi khi tạo công ty" }, 500 );
  }
};

export const updateCongTy = async (c: Context) => {
  const { id } = c.req.param();
  const { ten_cty, dia_chi, so_dien_thoai } = await c.req.json();
  try {
    await db.query(`
      UPDATE CONG_TY SET ten_cty = ?, dia_chi = ?, so_dien_thoai = ? WHERE ma_cty = ?
    `, [ten_cty, dia_chi, so_dien_thoai, id]);

    return c.json({ message: "Đã cập nhật công ty" });
  } catch (error) {
    return c.json({ error: "Lỗi khi cập nhật công ty" }, 500 );
  }
};

export const deleteCongTy = async (c: Context) => {
  const { id } = c.req.param();
  try {
    await db.query("DELETE FROM CONG_TY WHERE ma_cty = ?", [id]);
    return c.json({ message: "Đã xoá công ty" });
  } catch (error) {
    return c.json({ error: "Lỗi khi xoá công ty" }, 500 );
  }
};
