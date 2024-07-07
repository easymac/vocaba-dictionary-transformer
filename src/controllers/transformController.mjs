import { transformEntry } from '../services/transformService.mjs';
import * as fileUtils from '../utils/fileUtils.mjs';

export async function processData(inputFilePath, outputFilePath) {
  try {
    const lines = fileUtils.readLines(inputFilePath);
    const stream = fileUtils.createWriteStream(outputFilePath);
    stream.write('[\n');
    while (true) {
      const { value, done } = await lines.next();
      if (done) break;
      const transformedEntry = transformEntry(value);
      stream.write(JSON.stringify(transformedEntry) + ',\n');
    }
    stream.write(']\n')
    stream.end();
  } catch (error) {
    console.error(error);
  }
}