import { PerformanceModel as Performance, SiteModel, SceneModel, TerminalModel, AddressModel, UseModel } from '../application'

export default class PerformanceModel extends Performance {

  /**
 * @description 添加单个实体
 * @param entity 实体
 * @returns 
 */
  static addOne (entity: UseModel<Performance>) {
    return this.create(entity)
  }

  /**
   * @description 分页查询
   * @param pageNum 页码
   * @param pageSize 一页多少条
   * @param where 查询条件
   * @returns 
   */
  static paging (pageNum: number, pageSize: number, where: any) {
    return this.findAndCountAll({
      order: ['createTime'],
      attributes: {
        include: ['site.siteName', 'scene.sceneName', 'terminal.terminalName', 'address.url']
      },
      include: [{
        model: SiteModel,
        attributes: [],
      },{
        model: SceneModel,
        attributes: [],
      }, {
        model: TerminalModel,
        attributes: [],
      }, {
        model: AddressModel,
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