import { ResultStatus, ResultMessage } from '../../utils/ResultStatus'
import { EntityTarget, Repository } from 'typeorm'

export interface Result {
  status: ResultStatus,
  data?: any,
  msg?: string
}

export default class BaseController<T> {
  db: Repository<T>
  constructor (entity: EntityTarget<T>) {
    this.db = {} as any
  }
  JsonBackResult(status: ResultStatus): Result;
  JsonBackResult(status: ResultStatus, data: any): Result
  JsonBackResult(status: ResultStatus, data: any, msg: string): Result
  JsonBackResult(status: ResultStatus, data?: any, msg?: string): Result {
    let result:Result = JSON.parse(JSON.stringify({ status, data, msg: msg?? ResultMessage[status] }))
    if (Object.keys(result).length === 2 && typeof data === 'string') {
      result.msg = result.data
      delete result.data
    }
    return result
  }

  /**
   * @description 新增
   * @param entity 实体
   */
  add (entity: T) {
    this.db.save(entity)
  }

  /**
   * 删除
   */
  delete (id: number) {
    this.db.delete(id)
  }

  update (entity: T) {
  }

  query () {}
}