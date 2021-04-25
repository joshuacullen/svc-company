import { Request, Response } from 'express';
import { validate } from 'jsonschema';
import { findAll as findAllCompanies } from '../../context/companies/findAll';
import responsePresenter from '../presenters/response';

interface CompaniesIndexRequestQuery {
  limit?: string;
  page?: string;
  includeClosePrices?: string
}

const indexSchema = {
  type: 'object',
  properties: {
    limit: { type: 'integer', minimum: 0, maximum: 10000 },
    page: { type: 'integer', minimum: 0, maximum: 10000 },
    includeClosePrices: { type: 'boolean' },
  },
};

const index = async (
  req: Request<unknown, unknown, unknown, CompaniesIndexRequestQuery>,
  res: Response,
) => {
  // TODO dry this up
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const includeClosePrices = req.query.includeClosePrices === 'true';

  // TODO wrap this up in a middleware that's shared between routes
  const validation = validate({
    limit,
    page,
    includeClosePrices,
  }, indexSchema);

  if (!validation.valid) {
    return res.status(400).json({
      status: 400,
      errors: validation.errors,
    });
  }

  const companies = await findAllCompanies(limit, page, includeClosePrices);

  // TODO dry up the links logic
  const presentedResponse = responsePresenter(
    200,
    companies,
    {
      self: `api/companies?limit=${limit}&page=${page}&includeClosePrices=${includeClosePrices}`,
    },
  );

  res.set('Cache-control', 'public, max-age=300');

  return res.json(presentedResponse);
};

export {
  index,
};
