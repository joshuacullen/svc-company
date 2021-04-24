import {
  Table, Column, Model, ForeignKey,
} from 'sequelize-typescript';
import Companies from './Companies'; // eslint-disable-line import/no-cycle

@Table({ tableName: 'swsCompanyScore', timestamps: false })
class CompanyScores extends Model {
  @ForeignKey(() => Companies)
  @Column({
    field: 'company_id',
    primaryKey: true,
  })
  companyId: number;

  @Column
  dividend: number;

  @Column
  future: number;

  @Column
  health: number;

  @Column
  past: number;

  @Column
  value: number;

  @Column
  total: number;

  @Column
  sentence: string;
}

export default CompanyScores;
