import { Table, Column, Comment } from 'sequelize-typescript'
import { BaseModel } from './BaseModel';

@Table({
  modelName: 'user',
  freezeTableName: true // 为false, 自动给表名加 s
})
export class UserModel extends BaseModel {
  @Column
  firstName: String;

  @Comment('时间戳')
  @Column
  lastName: String;

  @Comment('耗费时间')
  @Column
  age: Number;

  @Comment('性别')
  @Column
  gender: Number;
}