import {
  DataType, Table, Column, Model, HasMany, HasOne,
} from 'sequelize-typescript';
import CompanyPriceCloses from './CompanyPriceCloses';
import CompanyScores from './CompanyScores';

@Table({ tableName: 'swsCompany', timestamps: false })
class Companies extends Model {
  @Column({
    allowNull: false,
    type: DataType.UUID,
    primaryKey: true,
  }) id: string;

  @Column({
    field: 'unique_symbol',
  }) uniqueSymbol: string;

  @HasMany(() => CompanyPriceCloses)
  closePrices: CompanyPriceCloses[];

  @HasOne(() => CompanyScores)
  score: CompanyScores[];
}

export default Companies;
