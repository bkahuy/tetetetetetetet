import { Hono } from "hono";
import { getAllSinhVien, getSinhVienByNganh, createSinhVien } from "../controllers/sinh-vien.controller";

export const sinhVienRoute = new Hono();

sinhVienRoute.get("/", getAllSinhVien);
sinhVienRoute.get("/:ma_nganh", getSinhVienByNganh);
sinhVienRoute.post("/", createSinhVien);

export default sinhVienRoute;
