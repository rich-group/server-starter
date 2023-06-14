import { BaseController } from "./BaseController";
import { Controller, Get } from '@/middleware/request';
import { ResultStatus } from "@/utils/ResultStatus";
import { UserModel } from '@/application/{{orm}}/models'

@Controller('/user')
export class UserController extends BaseController {
  {{#if_eq orm "sequelize"}}
  @Get('/')
  async queryList () {
    const res = await UserModel.all()
    return this.JsonBackResult(ResultStatus.Success, res)
  }
  {{else}}
  @Get('/')
  async queryList () {
    const res = await UserModel.find()
    return this.JsonBackResult(ResultStatus.Success, res)
  }
  {{/if_eq}}
}