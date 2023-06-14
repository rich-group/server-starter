import { DataSource } from "typeorm"
import { UserModel } from "./models"
import Config from '../../../config'

const ENV = Config[process.env.ENV]

const AppDataSource = new DataSource({
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

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new UserModel()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.createTime = new Date()
    user.updateTime = new Date()
    user.age = 25
    user.status = 1
    user.gender = 1
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(UserModel)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
