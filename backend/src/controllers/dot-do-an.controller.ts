import { Context } from "hono";
import { db } from "../config/db";

export const getAllDotDoAn = async (c: Context) => {
  try {
    const [rows] = await db.query("SELECT * FROM DOT_DANG_KY WHERE loai = 'do_an'");
    return c.json(rows);
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
};

export const getDotDoAnById = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const [rows] = await db.query("SELECT * FROM DOT_DANG_KY WHERE id = ? AND loai = 'do_an'", [id]);
    return rows.length ? c.json(rows[0]) : c.json({ message: "Not found" }, 404);
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
};

export const createDotDoAn = async (c: Context) => {
  try {
    const body = await c.req.json();
    const { ten, ngay_bat_dau, ngay_ket_thuc } = body;
    await db.query("INSERT INTO DOT_DANG_KY (ten, ngay_bat_dau, ngay_ket_thuc, loai) VALUES (?, ?, ?, 'do_an')", [
      ten,
      ngay_bat_dau,
      ngay_ket_thuc,
    ]);
    return c.json({ message: "Created successfully" }, 201);
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
};

export const updateDotDoAn = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { ten, ngay_bat_dau, ngay_ket_thuc } = body;
    await db.query("UPDATE DOT_DANG_KY SET ten = ?, ngay_bat_dau = ?, ngay_ket_thuc = ? WHERE id = ? AND loai = 'do_an'", [
      ten,
      ngay_bat_dau,
      ngay_ket_thuc,
      id,
    ]);
    return c.json({ message: "Updated successfully" });
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
};

export const deleteDotDoAn = async (c: Context) => {
  try {
    const id = c.req.param("id");
    await db.query("DELETE FROM DOT_DANG_KY WHERE id = ? AND loai = 'do_an'", [id]);
    return c.json({ message: "Deleted successfully" });
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
};
