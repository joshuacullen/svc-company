import app from './app';
import initDb from '../sequelize';

const port: string = process.env['PORT'] || '8080'; // eslint-disable-line

initDb();

app.listen(port, () => console.info(`Server running on ${port}`));
