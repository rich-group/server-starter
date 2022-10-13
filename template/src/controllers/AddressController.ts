import { BaseController } from "./BaseController";
import { AddressModel } from '@/domain'
import { ResultStatus } from "@/utils/ResultStatus";
import { Controller, Get, Query, Post, Body, Delete } from '@/middleware/request'
import { SiteModel, SceneModel } from '@/application/sequelize/models'

@Controller('/address')
export class AddressController extends BaseController {
  // 查询所有地址信息
  @Get('/')
  async queryAllList () {
    const res = await AddressModel.all()
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  // 分页查询
  @Get('/queryPageList')
  async queryPageList (
    @Query('pageNum') pageNum: number,  // 页码
    @Query('pageSize') pageSize: number,// 一页多少条
    @Query('siteId') siteId: number,    // 站点id
    @Query('sceneId') sceneId: number   // 场景id
  ) {
    const where = JSON.parse(JSON.stringify({siteId, sceneId}))
    const res = await AddressModel.paging(pageNum, pageSize, where)
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  @Post('/')
  async addAddress (
    @Body('siteId') siteId: number,
    @Body('sceneId') sceneId: number,
    @Body('terminalId') terminalId: number,
    @Body('url') url: string
  ) {
    const oldAddress = await AddressModel.all({siteId, sceneId, terminalId})
    if (oldAddress.length > 0) {
      return this.JsonBackResult(ResultStatus.Fail, '同一站点、同一场景、同一终端只能存在一个地址')
    }
    const res = await AddressModel.addOne({ siteId, sceneId, terminalId, url })
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  @Post('/update')
  async updateAddress (
    @Body('id') id: number,
    @Body('siteId') siteId: number,
    @Body('sceneId') sceneId: number,
    @Body('terminalId') terminalId: number,
    @Body('url') url: string
  ) {
    const count = AddressModel.edit(id, JSON.parse(JSON.stringify({siteId, sceneId, terminalId, url})))
    return count ? this.JsonBackResult(ResultStatus.Success, count) : this.JsonBackResult(ResultStatus.Fail)
  }
  


  @Delete('/')
  async deleteAddress (
    @Query('id') id: number
  ) {
    const address = await AddressModel.one(id)
    try {
      await AddressModel.deleteOne(address)
      return this.JsonBackResult(ResultStatus.Success)
    } catch (err) {
      return this.JsonBackResult(ResultStatus.Fail, '删除失败')
    }
  }

  // 数据初始化
  @Get('/init')
  async init () {
    const res = await AddressModel.addMutil([])
    return this.JsonBackResult(ResultStatus.Success, res)
  }

  @Get('/report')
  async report () {
    const addresses = await AddressModel.findAll<any>({
      attributes: {
        include: ['site.siteName', 'scene.sceneName']
      },
      include: [{
        model: SiteModel,
        attributes: []
      }, {
        model: SceneModel,
        attributes: []
      }],
      raw: true
    })

    if (Array.isArray(addresses) && addresses.length > 0) {
      let index = -1
      while(++index < addresses.length) {
        const address = addresses[index] || {}
      }
    }
    return this.JsonBackResult(ResultStatus.Success)
  }
}