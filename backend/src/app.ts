import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { dotDoAnRoute } from "./routes/dot-do-an.routes";
import { dotThucTapRoute } from "./routes/dot-thuc-tap.routes";
import { doAnRoute } from "./routes/do-an.routes";
import { congTyRoute } from "./routes/cong-ty.routes";
import { nganhRouter } from "./routes/nganh.routes";
import { giangVienRouter } from "./routes/giang-vien.routes";
import { sinhVienRouter } from "./routes/sinh-vien.routes";
import { db } from "./config/db";

const app = new Hono();

// Kiểm tra kết nối database
db.getConnection()
  .then((conn) => {
    console.log("Kết nối MySQL thành công!");
    conn.release();
  })
  .catch((err) => {
    console.error("Lỗi kết nối MySQL:", err);
  });

// Khai báo các routes

app.route("/api/dot-do-an", dotDoAnRoute);
app.route("/api/dot-thuc-tap", dotThucTapRoute);
app.route("/api/do-an", doAnRoute);
app.route("/api/cong-ty", congTyRoute);
app.route('/api/nganh', nganhRouter);
app.route('/api/giang-vien', giangVienRouter);
app.route('/api/sinh-vien', sinhVienRouter);

// Route mặc định
app.get("/", (c) => c.text("Welcome to the Project & Internship Management API "));

const port = 3000;
serve({
  fetch: app.fetch,
  port,
});

console.log(`Server đang chạy tại http://localhost:${port}`);
