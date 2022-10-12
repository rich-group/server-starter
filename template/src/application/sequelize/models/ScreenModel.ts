import { Table, Column, Comment } from 'sequelize-typescript'
import BaseModel from '../BaseModel';

@Table({
  modelName: 'screenshot'
})
export class ScreenModel extends BaseModel {
  @Comment('图片')
  @Column
  data?: String;

  @Comment('时间戳')
  @Column
  timestamp?: Date;

  @Comment('耗费时间')
  @Column
  timing?: Number;
}