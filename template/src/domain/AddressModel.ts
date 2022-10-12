import BaseModel from '../application/sequelize/models/BaseModel'
import { AddressModel as Address, UseModel, SceneModel, SiteModel, TerminalModel } from '../application'

export class AddressModel extends Address {
  /**
   * @description 添加多个实体
   * @param entities 实体列表
   * @returns 
   */
  static addMutil (entities: UseModel<Address>[]) {
    return this.bulkCreate(entities)
  }

  /**
   * @description 添加单个实体
   * @param entity 实体
   * @returns 
   */
  static addOne (entity: UseModel<Address>) {
    return this.create(entity)
  }

  static deleteOne <T extends BaseModel> (entity: T) {
    return entity.destroy()
  }

  /**
   * @description 分页查询
   * @param pageNum 页码
   * @param pageSize 一页多少条
   * @param where 查询条件
   * @returns 
   */
  static paging (pageNum: number, pageSize: number, where?: any) {
    return this.findAndCountAll({
      order: ['createTime'],
      attributes: {
        include: ['site.siteName', 'scene.sceneName', 'terminal.terminalName']
      },
      include: [{
        model: SceneModel,
        attributes: []
      }, {
        model: SiteModel,
        attributes: []
      }, {
        model: TerminalModel,
        attributes: []
      }],
      where, // 过滤掉值为undefined的属性
      offset: Number(pageNum - 1) * pageSize,   // 跳过前n个元素
      limit: Number(pageSize),                  // 获取n个元素
      distinct: true,                           // 去重
      raw: true,                                // 平铺site表字段
    })
  }
}