import { DataSource } from "typeorm"
import { UserModel } from "./models"
import Config from '../../../config'

const ENV = Config[process.env.ENV]

export const AppDataSource = new DataSource({
    type: "mysql",
    host: ENV.host,
    port: ENV.port,
    username: ENV.username,
    password: ENV.password,
    database: ENV.database,
    synchronize: true,
    logging: false,
    entities: [UserModel],
    migrations: [],
    subscribers: [],
})
