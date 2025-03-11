import { Hono } from "hono";
import { dotDoAnRoutes } from "./src/routes/dotDoAnRoutes";
import { dotThucTapRoutes } from "./src/routes/dotThucTapRoutes";
import { doAnRoutes } from "./src/routes/doAnRoutes";
import { congTyRoutes } from "./src/routes/congTyRoutes";

const app = new Hono();

// Đăng ký các route vào app
app.route("/dot-do-an", dotDoAnRoutes);
app.route("/dot-thuc-tap", dotThucTapRoutes);
app.route("/do-an", doAnRoutes);
app.route("/cong-ty", congTyRoutes);

// Khởi động server trên port 3000
export default {
  port: 3000,
  fetch: app.fetch,
};
