import { Request, Response } from 'express';
import { findAll as findAllCompanies } from '../../context/companies/findAll';
import companyPresenter from '../presenters/company';
import bodyPresenter from '../presenters/body';

interface CompaniesIndexRequestQuery {
  limit?: string;
  page?: string;
  includePrices?: string
}

const index = async (
  req: Request<unknown, unknown, unknown, CompaniesIndexRequestQuery>,
  res: Response,
) => {
  // TODO dry this up
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : undefined;
  const page = req.query.page ? parseInt(req.query.page, 10) : undefined;

  const includePrices = req.query.includePrices === 'true';

  const companies = await findAllCompanies(limit, page, includePrices);

  const presentedCompanies = companies.map(
    (company) => companyPresenter(company, includePrices),
  );

  const presentedBody = bodyPresenter(200, presentedCompanies);

  return res.json(presentedBody);
};

export {
  index,
};
