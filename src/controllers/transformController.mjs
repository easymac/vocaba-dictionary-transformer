import { transformEntry } from '../services/transformService.mjs';
import * as fileUtils from '../utils/fileUtils.mjs';
import * as dbUtils from '../utils/dbUtils.mjs';

export async function processData(inputFilePath, outputFilePath) {
  try {
    const db = dbUtils.createDatabase(outputFilePath);
    dbUtils.createTable(db);
    const lines = fileUtils.readLines(inputFilePath);
    while (true) {
      const { value, done } = await lines.next();
      if (done) break;
      const transformedEntry = transformEntry(value);

      if (transformedEntry.meanings.length) {
        dbUtils.insertData(db, transformedEntry);
      }
    }
    dbUtils.indexTable(db);
    db.close();
  } catch (error) {
    console.error(error);
  }

}