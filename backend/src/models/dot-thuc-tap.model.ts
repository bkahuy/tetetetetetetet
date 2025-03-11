import { db } from '../config/db';

export interface DotThucTap {
  id: number;
  tenDot: string;
  ngayBatDau: string;
  ngayKetThuc: string;
}

export class DotThucTapModel {
  static async getAll(): Promise<DotThucTap[]> {
    const [rows] = await db.query('SELECT * FROM DOT_THUC_TAP');
    return rows as DotThucTap[];
  }

  static async getById(id: number): Promise<DotThucTap | null> {
    const [rows] = await db.query('SELECT * FROM DOT_THUC_TAP WHERE id = ?', [id]);
    return rows.length ? (rows[0] as DotThucTap) : null;
  }

  static async create(dotThucTap: Omit<DotThucTap, 'id'>): Promise<void> {
    await db.query('INSERT INTO DOT_THUC_TAP (tenDot, ngayBatDau, ngayKetThuc) VALUES (?, ?, ?)', 
      [dotThucTap.tenDot, dotThucTap.ngayBatDau, dotThucTap.ngayKetThuc]);
  }

  static async update(id: number, dotThucTap: Omit<DotThucTap, 'id'>): Promise<void> {
    await db.query('UPDATE DOT_THUC_TAP SET tenDot = ?, ngayBatDau = ?, ngayKetThuc = ? WHERE id = ?', 
      [dotThucTap.tenDot, dotThucTap.ngayBatDau, dotThucTap.ngayKetThuc, id]);
  }

  static async delete(id: number): Promise<void> {
    await db.query('DELETE FROM DOT_THUC_TAP WHERE id = ?', [id]);
  }
}
