import { Hono } from "hono";
import { dotDoAnRoute } from "./routes/dotDoAnRoute";
import { dotThucTapRoute } from "./routes/dotThucTapRoute";
import { doAnRoute} from "./routes/doAnRoute";
import { congTyRoute } from "./routes/congTyRoute";

const app = new Hono();

// Đăng ký các route vào app
app.route("/dot-do-an", dotDoAnRoute);
app.route("/dot-thuc-tap", dotThucTapRoute);
app.route("/do-an", doAnRoute);
app.route("/cong-ty", congTyRoute);

// Khởi động server trên port 3000
export default {
  port: 3000,
  fetch: app.fetch,
};
