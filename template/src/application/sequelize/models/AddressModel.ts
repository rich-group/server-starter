import { Column, Table, AllowNull, Comment, ForeignKey, BelongsTo, HasOne, HasMany } from 'sequelize-typescript'
import { SiteModel } from './SiteModel';
import BaseModel from './BaseModel';
import { SceneModel } from './SceneModel';
import { PerformanceModel } from './PerformanceModel';
import { TerminalModel } from './TerminalModel';

@Table({
  modelName: 'address'
})
export class AddressModel extends BaseModel {
  @AllowNull(false)
  @Comment('测试地址')
  @Column
  declare url: String;

  @AllowNull(false)
  @ForeignKey(() => SceneModel)
  @Comment('场景id')
  @Column
  declare sceneId: Number;

  @BelongsTo(() => SceneModel) 
  declare scene?: SceneModel;

  @AllowNull(false)
  @ForeignKey(() => SiteModel)
  @Comment('站点id')
  @Column
  declare siteId: Number;

  @BelongsTo(() => SiteModel)
  declare site?: SiteModel

  @AllowNull(false)
  @ForeignKey(() => TerminalModel)
  @Comment('终端id')
  @Column
  declare terminalId: Number;

  @BelongsTo(() => TerminalModel)
  declare terminal?: TerminalModel

  @HasMany(() => PerformanceModel)
  declare performances?: PerformanceModel
}