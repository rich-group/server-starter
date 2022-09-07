import { Repository, Model} from 'sequelize-typescript'

export default class BaseService<T extends Model> {
  db: Repository<T>
  constructor (entity: Repository<T>) {
    this.db = entity
  }

  findAll () {
    return this.db.findAll()
  }
}