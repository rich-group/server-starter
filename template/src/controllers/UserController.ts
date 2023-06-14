import { BaseController } from "./BaseController";
import { Controller, Get } from '@/middleware/request';
import { ResultStatus } from "@/utils/ResultStatus";
import { UserModel } from '@/application/typeorm/models'

@Controller('/user')
export class UserController extends BaseController {
  @Get('/')
  async queryList () {
    const res = await UserModel.find()
    return this.JsonBackResult(ResultStatus.Success, res)
  }
}