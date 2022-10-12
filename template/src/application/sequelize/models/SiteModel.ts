import { Table, Column, Comment, HasMany, AllowNull } from 'sequelize-typescript'
import BaseModel from '../BaseModel';
import { PerformanceModel } from './PerformanceModel';
import { AddressModel } from './AddressModel'

@Table({
  modelName: 'site'
})
export class SiteModel extends BaseModel {
  @AllowNull(false)
  @Comment('域名')
  @Column
  declare host: String;

  @AllowNull(false)
  @Comment('站点名称')
  @Column
  declare siteName: String;

  @AllowNull(false)
  @Column
  declare siteId: Number;

  // 站点对应多个性能
  @HasMany(() => PerformanceModel)
  declare performances?: PerformanceModel[]

  // 站点对应多个场景
  @HasMany(() => AddressModel)
  declare addresses?: AddressModel[]
}