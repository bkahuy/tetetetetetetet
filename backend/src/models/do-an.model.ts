import { db } from '../config/db';

export interface DoAn {
  id: number;
  tenDoAn: string;
  moTa: string;
  giangVienId: number;
}

export class DoAnModel {
  static async getAll(): Promise<DoAn[]> {
    const [rows] = await db.query('SELECT * FROM DO_AN');
    return rows as DoAn[];
  }

  static async getById(id: number): Promise<DoAn | null> {
    const [rows] = await db.query('SELECT * FROM DO_AN WHERE id = ?', [id]);
    return rows.length ? (rows[0] as DoAn) : null;
  }

  static async create(doAn: Omit<DoAn, 'id'>): Promise<void> {
    await db.query('INSERT INTO DO_AN (tenDoAn, moTa, giangVienId) VALUES (?, ?, ?)', 
      [doAn.tenDoAn, doAn.moTa, doAn.giangVienId]);
  }

  static async update(id: number, doAn: Omit<DoAn, 'id'>): Promise<void> {
    await db.query('UPDATE DO_AN SET tenDoAn = ?, moTa = ?, giangVienId = ? WHERE id = ?', 
      [doAn.tenDoAn, doAn.moTa, doAn.giangVienId, id]);
  }

  static async delete(id: number): Promise<void> {
    await db.query('DELETE FROM DO_AN WHERE id = ?', [id]);
  }
}
