import Database from 'better-sqlite3';

export function createDatabase(path) {
  const db = new Database(path);
  db.pragma('journal_mode = WAL');
  return db;
}

export function createTable(db) {
  const statement = db.prepare(`CREATE TABLE IF NOT EXISTS words (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    word TEXT NOT NULL,
    lexical_category TEXT,
    ipa TEXT,
    meanings TEXT NOT NULL
  )`);
  statement.run();
}

export function indexTable(db) {
  const statement = db.prepare(
    `CREATE INDEX IF NOT EXISTS idx_word ON words (word)`
  );
  statement.run();
}

export function insertData(db, entry) {
  const statement = db.prepare(`INSERT INTO words
    (word, lexical_category, ipa, meanings)
    VALUES (?, ?, ?, ?)
  `);

  statement.run(
    entry.word,
    entry.lexicalCategory,
    entry.ipa,
    JSON.stringify(entry.meanings)
  );
}