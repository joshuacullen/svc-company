import { Router } from '@awaitjs/express';
import CompaniesModel from '../../models/Companies';

const routes = Router();

routes.getAsync('/', async (_req, res) => {
  const companies = await CompaniesModel.findByPk('3B07801A-1C3A-46E6-A7FF-E1F59F31C466');
  console.log(companies);
  res.json(companies);
});

export default routes;
