import { CompaniesModel, CompanyClosePricesModel, CompanyScoresModel } from '../../models';

const MAX_COMPANIES = 10000;

const findAll = async (limit = 100, page = 1, includePrices = false): Promise<CompaniesModel[]> => {
  const offset = limit * (page - 1);

  const includes: any = [
    {
      model: CompanyScoresModel,
    },
  ];

  if (includePrices) {
    includes.push(
      {
        model: CompanyClosePricesModel,
        separate: true,
        order: [['date', 'desc']],
        limit: 10,
      },
    );
  }

  const companies = await CompaniesModel.findAll({
    limit: limit > MAX_COMPANIES ? MAX_COMPANIES : limit,
    offset,
    include: includes,
  });

  return companies;
};

export {
  findAll,
};
