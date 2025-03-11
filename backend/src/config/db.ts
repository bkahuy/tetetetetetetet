import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",  // Cần đảm bảo user hợp lệ
  password: process.env.DB_PASS || "",  // Nếu có mật khẩu, nhập vào
  database: process.env.DB_NAME || "HThong",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
