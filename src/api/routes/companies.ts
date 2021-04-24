import { Router } from '@awaitjs/express';
import { index as companyIndex } from '../controllers/companies';

const routes = Router();

routes.getAsync('/', companyIndex);

export default routes;
