import { DataSource } from "typeorm"
import { UserModel } from "./models/UserModel"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [UserModel],
    migrations: [],
    subscribers: [],
})
