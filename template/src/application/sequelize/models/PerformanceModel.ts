import { Table, Column, Comment, ForeignKey, BelongsTo, AllowNull, DataType } from 'sequelize-typescript'
import BaseModel from './BaseModel'
import { AddressModel } from './AddressModel';
import { SceneModel } from './SceneModel';
import { SiteModel } from './SiteModel'
import { TerminalModel } from './TerminalModel';

@Table({
  modelName: 'performance'
})
export class PerformanceModel extends BaseModel {

  @Comment('页面加载完成后的截屏')
  @Column
  declare finalScreenshot?: String;

  @Comment('性能报告静态文件地址')
  @Column
  declare reportUrl?: String;

  @AllowNull(false)
  @Comment('首次内容渲染时间标记了渲染出首个文本或首张图片的时间')
  @Column(DataType.FLOAT)
  declare firstContentfulPaint: Number;

  @AllowNull(false)
  @Comment('网页需要多长时间才能提供完整交互功能')
  @Column(DataType.FLOAT)
  declare timeToInteractive: Number;

  @AllowNull(false)
  @Comment('速度指数表明了网页内容的可见填充速度')
  @Column(DataType.FLOAT)
  declare speedIndex: Number;

  @AllowNull(false)
  @Comment('首次内容渲染 (FCP) 和可交互时间之间的所有时间段的总和')
  @Column(DataType.FLOAT)
  declare totalBlockingTime: Number;

  @AllowNull(false)
  @Comment('渲染出最大文本或图片的时间')
  @Column(DataType.FLOAT)
  declare largestContentfulPaint: Number;

  @AllowNull(false)
  @Comment('累积布局偏移')
  @Column(DataType.FLOAT)
  declare cumulativeLayoutShift: Number;
  
  @AllowNull(false)
  @Comment('性能')
  @Column(DataType.FLOAT)
  declare performance: Number;

  @AllowNull(false)
  @Comment('SEO')
  @Column(DataType.FLOAT)
  declare seo: Number;

  @AllowNull(false)
  @Comment('终端id')
  @ForeignKey(() => TerminalModel)
  @Column
  declare terminalId: Number;

  @BelongsTo(() => TerminalModel)
  declare terminal?: TerminalModel;

  @AllowNull(false)
  @Comment('场景id')
  @ForeignKey(() => SceneModel)
  @Column
  declare sceneId: Number;

  @BelongsTo(() => SceneModel)
  declare scene?: SceneModel;

  @AllowNull(false)
  @Comment('站点')
  @ForeignKey(() => SiteModel)
  @Column
  declare siteId: Number;

  @BelongsTo(() => SiteModel)
  declare site?: SiteModel;

  @AllowNull(false)
  @Comment('地址')
  @ForeignKey(() => AddressModel)
  @Column
  declare addressId: Number;

  @BelongsTo(() => AddressModel)
  declare address?: AddressModel;
}