import { SceneModel as Scene, UseModel } from '@/application/sequelize/models'
export class SceneModel extends Scene {
  static add (entities: UseModel<Scene>[]) {
    return this.bulkCreate(entities)
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
      where, // 过滤掉值为undefined的属性
      offset: Number(pageNum - 1) * pageSize,   // 跳过前n个元素
      limit: Number(pageSize),                  // 获取n个元素
      distinct: true,                           // 去重
      raw: true,                                // 平铺site表字段
    })
  }
}