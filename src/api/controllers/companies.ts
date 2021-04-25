import { Request, Response } from 'express';
import { validate } from 'jsonschema';
import { findAll as findAllCompanies } from '../../context/companies/findAll';
import bodyPresenter from '../presenters/body';

interface CompaniesIndexRequestQuery {
  limit?: string;
  page?: string;
  includePrices?: string
}

const indexSchema = {
  type: 'object',
  properties: {
    limit: { type: 'integer', minimum: 0, maximum: 10000 },
    page: { type: 'integer', minimum: 0, maximum: 10000 },
    includePrices: { type: 'boolean' },
  },
};

const index = async (
  req: Request<unknown, unknown, unknown, CompaniesIndexRequestQuery>,
  res: Response,
) => {
  // TODO dry this up
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const includePrices = req.query.includePrices === 'true';

  // TODO wrap this up in a middleware that's shared between routes
  const validation = validate({
    limit,
    page,
    includePrices,
  }, indexSchema);

  if (!validation.valid) {
    return res.status(400).json({
      status: 400,
      errors: validation.errors,
    });
  }

  const companies = await findAllCompanies(limit, page, includePrices);

  // TODO dry up the links logic
  const presentedBody = bodyPresenter(
    200,
    companies,
    {
      self: `api/companies?limit=${limit}&page=${page}&includePrices=${includePrices}`,
    },
  );

  return res.json(presentedBody);
};

export {
  index,
};
