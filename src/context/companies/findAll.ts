import { CompaniesModel, CompanyScoresModel } from '../../models';

const MAX_ROWS = 10000;

const findAll = async (limit = 100, page = 1, includeClosePrices = false): Promise<ICompany[]> => {
  const offset = limit * (page - 1);

  const companies = await CompaniesModel.findAll({
    limit: limit > MAX_ROWS ? MAX_ROWS : limit,
    offset,
    include: [
      {
        model: CompanyScoresModel,
      },
    ],
  });

  const result = [];

  for (const companyRow of companies) {
    const closePrices = await companyRow.$get('closePrices', {
      order: [['date', 'desc']],
      // Only need the latest if we're not including prices
      limit: includeClosePrices ? MAX_ROWS : 1,
    });

    const mappedClosePrices = closePrices.map((cp): IClosePrice => ({
      price: cp.price,
      date: cp.date,
    }));

    const score: ICompanyScore = {
      dividend: companyRow.score.dividend,
      future: companyRow.score.future,
      health: companyRow.score.health,
      past: companyRow.score.past,
      value: companyRow.score.value,
      total: companyRow.score.total,
      sentence: companyRow.score.sentence,
    };

    const company: ICompany = {
      name: companyRow.name,
      uniqueSymbol: companyRow.uniqueSymbol,
      closePrices: includeClosePrices ? mappedClosePrices : undefined,
      latestClosePrice: mappedClosePrices.length ? mappedClosePrices[0] : undefined,
      score,
    };

    result.push(company);
  }

  return result;
};

export {
  findAll,
};
