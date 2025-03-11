import mysql from 'mysql2/promise';

export const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Ở đây nhớ hãy sử dụng Bun và đã tạo và cài đặt file env xong

// Ví dụ cho việc sử dụng database:
// import { db } from '../config/db';

// export const getSinhVien = async () => {
//   const [rows] = await db.query('SELECT * FROM SINH_VIEN');
//   return rows;
// };
