import {
  DataType, Table, Column, Model, HasMany, HasOne,
} from 'sequelize-typescript';
import CompanyClosePrices from './CompanyClosePrices'; // eslint-disable-line import/no-cycle
import CompanyScores from './CompanyScores'; // eslint-disable-line import/no-cycle

@Table({ tableName: 'swsCompany', timestamps: false })
class Companies extends Model {
  @Column({
    allowNull: false,
    type: DataType.UUID,
    primaryKey: true,
  }) id: string;

  @Column
  name: string;

  @Column({
    field: 'unique_symbol',
  }) uniqueSymbol: string;

  @HasMany(() => CompanyClosePrices)
  closePrices: CompanyClosePrices[];

  @HasOne(() => CompanyScores)
  score: CompanyScores;
}

export default Companies;
