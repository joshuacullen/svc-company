import { existsSync } from 'fs';
import { Sequelize } from 'sequelize-typescript';

const dbPath = `${__dirname}/../repo/database.sqlite3`;

if (!existsSync(dbPath)) {
  throw new Error(`DB not found at ${dbPath}`);
}

const init = () => new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  models: [`${__dirname}/models`],
});

export default init;
