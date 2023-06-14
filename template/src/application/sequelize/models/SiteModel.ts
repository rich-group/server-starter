import { Table, Column, Comment, AllowNull } from 'sequelize-typescript'
import { BaseModel } from './BaseModel';

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
}