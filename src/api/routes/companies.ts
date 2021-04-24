import { Router } from '@awaitjs/express';
import { findAll as findAllCompanies } from '../../context/companies/findAll';

const routes = Router();

routes.getAsync('/', async (_req, res) => {
  const companies = await findAllCompanies();
  res.json(companies);
});

export default routes;
