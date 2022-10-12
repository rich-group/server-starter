import BaseModel from "./BaseModel";
import { Table, Column, Comment, AllowNull, HasMany } from 'sequelize-typescript'
import { PerformanceModel } from "./PerformanceModel";
import { AddressModel } from "./AddressModel";

@Table({
  modelName: 'terminal'
})
export class TerminalModel extends BaseModel {

  @AllowNull(false)
  @Comment('终端名称')
  @Column
  declare terminalName: String;

  @AllowNull(false)
  @Comment('终端类型')
  @Column
  declare terminalId: Number;

  @HasMany(() => PerformanceModel)
  declare performances?: PerformanceModel[]

  @HasMany(() => AddressModel)
  declare addresses?: AddressModel[]
}