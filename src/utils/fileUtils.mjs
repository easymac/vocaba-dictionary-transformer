import { readlines } from 'node-jsonl';
import * as fs from 'fs';

export function readLines(path) {
  return readlines(path);
}

export function createWriteStream(path) {
  return fs.createWriteStream(path, { flags: 'ax+' });
}
