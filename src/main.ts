import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (_req, res) => {
  res.json({ test: true });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on ${port}`);
});
