import * as transformController from './controllers/transformController.mjs';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(
    'Usage: node src/index.mjs <input-file-path> <output-file-path>'
  );
  process.exit(1);
}

const inputFilePath = args[0];
const outputDbName = args[1];

transformController.processData(inputFilePath, outputDbName);