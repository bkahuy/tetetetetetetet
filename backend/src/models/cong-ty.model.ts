import { db } from '../config/db';

export interface CongTy {
  id: number;
  tenCongTy: string;
  diaChi: string;
  moTa: string;
}

export class CongTyModel {
  static async getAll(): Promise<CongTy[]> {
    const [rows] = await db.query('SELECT * FROM CONG_TY');
    return rows as CongTy[];
  }

  static async getById(id: number): Promise<CongTy | null> {
    const [rows] = await db.query('SELECT * FROM CONG_TY WHERE id = ?', [id]);
    return rows.length ? (rows[0] as CongTy) : null;
  }

  static async create(congTy: Omit<CongTy, 'id'>): Promise<void> {
    await db.query('INSERT INTO CONG_TY (tenCongTy, diaChi, moTa) VALUES (?, ?, ?)', 
      [congTy.tenCongTy, congTy.diaChi, congTy.moTa]);
  }

  static async update(id: number, congTy: Omit<CongTy, 'id'>): Promise<void> {
    await db.query('UPDATE CONG_TY SET tenCongTy = ?, diaChi = ?, moTa = ? WHERE id = ?', 
      [congTy.tenCongTy, congTy.diaChi, congTy.moTa, id]);
  }

  static async delete(id: number): Promise<void> {
    await db.query('DELETE FROM CONG_TY WHERE id = ?', [id]);
  }
}
