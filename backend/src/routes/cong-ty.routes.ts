import { Hono } from "hono";
import {
  getAllCongTy,
  getCongTyById,
  createCongTy,
  updateCongTy,
  deleteCongTy
} from "../controllers/cong-ty.controller";

export const congTyRoute = new Hono();

congTyRoute.get("/", getAllCongTy);
congTyRoute.get("/:id", getCongTyById);
congTyRoute.post("/", createCongTy);
congTyRoute.put("/:id", updateCongTy);
congTyRoute.delete("/:id", deleteCongTy);

export default congTyRoute;