import Database from "better-sqlite3";

const db = new Database("dev.db"); // same file Prisma used

// create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS Campaign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    budget INTEGER NOT NULL,
    startDate TEXT NOT NULL,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
