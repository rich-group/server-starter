import { Column, Table, Comment, HasMany, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript";
import { PerformanceModel } from "./PerformanceModel";
import BaseModel from "../BaseModel";
import { AddressModel } from "./AddressModel";

@Table({
  modelName: 'scene'
})
export class SceneModel extends BaseModel {

  @AllowNull(false)
  @Comment('场景名称')
  @Column
  declare sceneName: String;

  // 场景对应多个性能
  @HasMany(() => PerformanceModel)
  declare performances?: PerformanceModel[]

  @HasMany(() => AddressModel)
  declare addresses?: AddressModel[]
}