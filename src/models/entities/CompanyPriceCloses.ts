import {
  Table, Column, Model, ForeignKey,
} from 'sequelize-typescript';
import Companies from './Companies'; // eslint-disable-line import/no-cycle

@Table({ tableName: 'swsCompanyPriceClose', timestamps: false })
class CompanyPriceCloses extends Model {
  @ForeignKey(() => Companies)
  @Column({
    field: 'company_id',
    primaryKey: true,
  })
  companyId: number;

  @Column
  price: number;

  @Column({
    primaryKey: true,
  })
  date: Date;
}

export default CompanyPriceCloses;
