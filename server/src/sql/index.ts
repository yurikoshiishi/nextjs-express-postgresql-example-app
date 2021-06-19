import fs from 'fs';
import path from 'path';
import pgPromise from 'pg-promise';

const pgp = pgPromise();

export const readSqlFile = (filepath: string) => {
  return fs.readFileSync(path.join(__dirname, filepath)).toString();
};

export const getFormattedQueryString = (
  filepath: string,
  params: {[key: string]: string | number}
) => {
  return pgp.as.format(readSqlFile(filepath), params);
};

export const getFormattedCondition = (query: object) => {
  if (Object.keys(query).length === 0) {
    return '';
  }

  const queries = Object.keys(query);

  const rawText = `WHERE ${queries.map((q) => `${q} = $(${q})`).join(' AND ')}`;

  return pgp.as.format(rawText, query);
};
