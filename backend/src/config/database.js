import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pastaDb = path.join(__dirname, '../../database');

fs.mkdirSync(pastaDb, { recursive: true });
const db = new Database(path.join(pastaDb, 'biblioteca.db'));

db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    cpf TEXT NOT NULL UNIQUE,
    senha_hash TEXT NOT NULL,
    criado_em  TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);
export default db;