import { Sequelize } from 'sequelize-typescript'
import Config from '../../../config'

const ENV = Config[process.env.ENV]

new Sequelize({
  database: ENV.database,
  dialect: ENV.dialect,
  username: ENV.username,
  password: ENV.password,
  models:[__dirname + '/models/!(index|BaseModel).ts'],
  timezone: '+08:00' //东八时区
}).sync({
  force: false
})

