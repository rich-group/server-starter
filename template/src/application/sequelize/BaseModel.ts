import { Comment, Column, Model, PrimaryKey, DataType, Table, AutoIncrement, Default } from 'sequelize-typescript'

@Table({
  createdAt: false,
  updatedAt: false
})
export default class BaseModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Comment('主键')
  @Column(DataType.INTEGER)
  declare id?:Number;

  @Default('1')
  @Comment('状态(0: 删除, 1: 正常)')
  @Column(DataType.ENUM('0', '1'))
  declare status?: Boolean;

  @Default(new Date())
  @Comment('创建时间')
  @Column
  declare createTime?: Date;

  @Default(new Date())
  @Comment('更新时间')
  @Column
  declare updateTime?: Date;


  static all (where?: any) {
    return this.findAll({ where })
  }

  static one (id: number) {
    return this.findByPk(id)
  }

  static edit (id, entity) {
    return this.update(entity, {where: {id}})
  }
}