import { Sequelize } from 'sequelize-typescript'
import BaseController from '@/controllers/BaseController'
import { AddressModel, ErrorModel, PerformanceModel, ScreenModel, SiteModel, SceneModel, TerminalModel } from './models'
import Config from '../../../config'


const ENV = Config[process.env.ENV]

new Sequelize({
  database: ENV.database,
  dialect: ENV.dialect,
  username: ENV.username,
  password: ENV.password,
  models:[__dirname + '/models/!(index).ts'],
  timezone: '+08:00' //东八时区
}).sync({
  force: false
})

export {
  BaseController,
  AddressModel,
  ErrorModel,
  PerformanceModel,
  ScreenModel,
  SiteModel,
  SceneModel,
  TerminalModel
}