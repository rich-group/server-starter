import { BaseController } from "../application/sequelize/BaseController";
import { Controller, Get } from '@/middleware/request'
import { ResultStatus } from "@/utils/ResultStatus";
import { TerminalModel } from "@/domain";

@Controller('/terminal')
export class TerminalController extends BaseController {
  @Get('/')
  async queryList () {
    const res = await TerminalModel.all()
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  @Get('/init')
  async init () {
    const res = await TerminalModel.add([{
      terminalId: 0,
      terminalName: 'app'
    }, {
      terminalId: 1,
      terminalName: 'web',
    }, {
      terminalId: 2,
      terminalName: 'webMobile'
    }])

    return this.JsonBackResult(ResultStatus.Success, res)
  }
}