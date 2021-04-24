import companyScorePresenter from './companyScore';
import companyClosePricePresenter from './companyClosePrice';
import { CompaniesModel } from '../../models';

const companyPresenter = (company: CompaniesModel, includePrices: boolean): Company => {
  let closePrices;

  if (includePrices) {
    closePrices = company.closePrices
      ? company.closePrices.map(companyClosePricePresenter)
      : undefined;
  }

  const result = {
    name: company.name,
    uniqueSymbol: company.uniqueSymbol,
    score: companyScorePresenter(company.score),
    closePrices,
  };

  return result;
};

export default companyPresenter;
