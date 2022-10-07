import BaseController from "./BaseController";
import { Controller, Get, Query } from "@/middleware/request";
import { PerformanceModel } from "@/domain";
import { ResultStatus } from "@/utils/ResultStatus";
import { Op } from "sequelize";

@Controller('/performance')
export default class PerformanceController extends BaseController {
  // 查询所有地址信息
  @Get('/')
  async queryAllList (
    @Query('siteId') siteId: Number,
    @Query('sceneId') sceneId: Number
  ) {
    const where = JSON.parse(JSON.stringify({siteId, sceneId}))
    const res = await PerformanceModel.all(where)
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  @Get('/queryPageList')
  async paging (
    @Query('pageNum') pageNum : number,
    @Query('pageSize') pageSize: number,
    @Query('siteId') siteId: number,
    @Query('terminalId') terminalId: number,
    @Query('sceneId') sceneId: number,
    @Query('fetchTime') fetchTime: string[],
  ) {
    const where = JSON.parse(JSON.stringify({siteId, terminalId, sceneId}))
    if (Array.isArray(fetchTime)) {
      where['createTime'] = {[Op.between]: [fetchTime[0], fetchTime[1]]}
    }
    const res = await PerformanceModel.paging(pageNum, pageSize, where)
    return this.JsonBackResult(ResultStatus.Success, res)
  }
}