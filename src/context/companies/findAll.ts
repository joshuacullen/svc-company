import { CompaniesModel, CompanyPriceClosesModel, CompanyScoresModel } from '../../models';

const findAll = async (): Promise<CompaniesModel[]> => {
  const companies = await CompaniesModel.findAll({
    include: [
      {
        model: CompanyPriceClosesModel,
        separate: true,
        order: ['date'],
        limit: 1,
      },
      {
        model: CompanyScoresModel,
      },
    ],
  });

  return companies;
};

export {
  findAll,
};
