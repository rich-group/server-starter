import { Result, ResultStatus, ResultMessage } from '@/utils/ResultStatus'

export class BaseController {
  JsonBackResult(status: ResultStatus): Result;
  JsonBackResult(status: ResultStatus, data: any): Result
  JsonBackResult(status: ResultStatus, data: any, message: string): Result
  JsonBackResult(status: ResultStatus, data?: any, message?: string): Result {
    let result: Result = JSON.parse(JSON.stringify({ status, data, message }))
    if (Object.keys(result).length === 2 && typeof data === 'string') {
      result.message = result.data
      delete result.data
    }
    result.status = status
    result.message = result.message ?? ResultMessage[status] 
    return result
  }
}