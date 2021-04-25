import express from 'express';
import helmet from 'helmet';
import companyRoutes from './routes/companies';

const app = express();

// TODO cors when FE domain is known
app.use(helmet());
app.use('/api/companies', companyRoutes);

export default app;
