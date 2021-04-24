import { existsSync } from 'fs';
import { Sequelize } from 'sequelize-typescript';

// TODO Add a real configuration layer
const appEnv = process.env['APP_ENV'] || 'dev' // eslint-disable-line
const logSql = process.env['LOG_SQL'] || false // eslint-disable-line

const dbPath = `${__dirname}/../repo/${appEnv}/database.sqlite3`;

if (!existsSync(dbPath)) {
  throw new Error(`DB not found at ${dbPath}`);
}

export default new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  models: [`${__dirname}/models/entities`],
  logging: logSql ? console.log : undefined,
});
