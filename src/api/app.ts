import express from 'express';
import companyRoutes from './routes/companies';

const app = express();

app.use('/companies', companyRoutes);

export default app;
