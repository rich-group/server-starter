import { BaseController } from "./BaseController";
import { Controller, Get, Query } from "@/middleware/request";
import { SiteModel } from '@/domain'
import { ResultStatus } from "@/utils/ResultStatus";

@Controller('/site')
export class SiteController extends BaseController {
  @Get('/init')
  async init () {
    const res = await SiteModel.add([])
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  @Get('/')
  async findAll () {
    const res = await SiteModel.all()
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  @Get('/paging')
  async paging (
    @Query('pageNum') pageNum: number,
    @Query('pageSize') pageSize: number,
  ) {
    const res = await SiteModel.paging(pageNum, pageSize)
    return this.JsonBackResult(ResultStatus.Success, res)
  }
}