import fs from 'fs';
import path from 'path';

export const readSqlFile = (filepath: string) => {
  return fs.readFileSync(path.join(__dirname, filepath)).toString();
};
