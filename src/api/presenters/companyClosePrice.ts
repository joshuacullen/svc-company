import { CompanyClosePricesModel } from '../../models';

const companyClosePricePresenter = (closePrice: CompanyClosePricesModel): ClosePrice => ({
  price: closePrice.price,
  date: closePrice.date,
});

export default companyClosePricePresenter;
