import { Sequelize } from 'sequelize-typescript'
import BaseController from '../../controllers/BaseController'
import AddressModel from './models/AddressModel'
import ErrorModel from './models/ErrorModel'
import PerformanceModel from './models/PerformanceModel'
import ScreenModel from './models/ScreenModel'
import SiteModel from './models/SiteModel'
import SceneModel from './models/SceneModel'
import TerminalModel from './models/TerminalModel'
import Config from '../../../config'


const ENV = Config[process.env.ENV]

new Sequelize({
  database: ENV.database,
  dialect: ENV.dialect,
  username: ENV.username,
  password: ENV.password,
  models:[__dirname + '/models/*.[tj]s'],
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