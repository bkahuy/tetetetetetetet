import { Hono } from "hono";
import { getAllGiangVien, getGiangVienByNganh, createGiangVien } from "../controllers/giang-vien.controller";

export const giangVienRoute = new Hono();
giangVienRoute.get("/", getAllGiangVien);
giangVienRoute.get("/:ma_nganh", getGiangVienByNganh);
giangVienRoute.post("/", createGiangVien);

export default giangVienRoute;
