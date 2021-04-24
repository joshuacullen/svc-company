import app from './app';

const port: string = process.env['PORT'] || '8080'; // eslint-disable-line

app.listen(port, () => console.info(`Server running on ${port}`));
