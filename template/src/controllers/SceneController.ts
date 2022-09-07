import BaseController from "./BaseController";
import { ResultStatus } from '../utils/ResultStatus'
import { Controller, Get, Query } from '../middleware/request'
import { SceneModel } from '../domain'

@Controller('/scene')
export default class SceneController extends BaseController {
  @Get('/')
  async queryList () {
    const res = await SceneModel.all()
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  // 分页查询
  @Get('/queryPageList')
  async queryPageList (
    @Query('pageNum') pageNum: number,  // 页码
    @Query('pageSize') pageSize: number,// 一页多少条
  ) {
    const res = await SceneModel.paging(pageNum, pageSize)
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  @Get('/init')
  async init () {
    const res = await SceneModel.add([{
      sceneName: 'home'
    }, {
      sceneName: 'collection'
    }, {
      sceneName: 'pdp'
    }])
    return this.JsonBackResult(ResultStatus.Success, res)
  }
}