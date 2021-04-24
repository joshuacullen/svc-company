import {
  DataType, Table, Column, Model,
} from 'sequelize-typescript';

@Table({ tableName: 'swsCompany', timestamps: false })
class Companies extends Model {
  @Column({
    allowNull: false,
    type: DataType.UUID,
    primaryKey: true,
  }) id: string;
}

export default Companies;
