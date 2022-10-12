import { Table, Column, Comment } from 'sequelize-typescript'
import BaseModel from './BaseModel';

@Table({
  modelName: 'error'
})
export class ErrorModel extends BaseModel {
  @Comment('描述')
  @Column
  description?: String;

  @Comment('')
  @Column
  line?: String;

  @Comment('来源')
  @Column
  source?: String;

  @Comment('')
  @Column
  url?: String;
}
