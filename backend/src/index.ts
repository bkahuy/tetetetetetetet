import { Hono } from "hono";
import { dotDoAnRoutes } from "./routes/dotDoAnRoutes";
import { dotThucTapRoutes } from "./routes/dotThucTapRoutes";
import { doAnRoutes } from "./routes/doAnRoutes";
import { congTyRoutes } from "./routes/congTyRoutes";

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
