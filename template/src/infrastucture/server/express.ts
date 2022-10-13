import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import register from '@/router';
import controllers from '@/ioc';

export type Param = 'params' | 'query' | 'body' | 'headers' | 'cookies';
export type Parse = 'number' | 'string' | 'boolean';


export interface ParamType {
  key: string;
  index: number;
  type: Param;
  name: string;
}

export interface ParseType {
  type: Parse;
  index: number;
  name: string;
}


/**
 * @description 处理请求参数和返回浏览器数据
 * @param func Contoller 中的函数
 * @returns 
 */
export function handlerFactory(
  func: (...args: any[]) => any,
  paramList: ParamType[],
  parseList: ParseType[],
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const args = extractParameters(req, res, next, paramList, parseList);
      // 合并query 和 params
      const result = await func(...args);

      res.send(result);
    } catch (err) {
      // next(err);
    }
  };
}

export function extractParameters(
  req: Request,
  res: Response,
  next: NextFunction,
  paramArr: ParamType[] = [],
  parseArr: ParseType[] = [],
) {
  if (!paramArr.length) return [req, res, next];

  const args = [];

  paramArr.forEach(param => {
    const { key, index, type } = param;
    const query = JSON.parse(JSON.stringify(req.query).replace(/\\"/g, ''));
    switch (type) {
      case 'query':
        args[index] = key ? query[key] : query;
        break;
      case 'body':
        args[index] = key ? req.body[key] : req.body;
        break;
      case 'params':
        args[index] = key ? req.params[key] : req.params;
        break;
      case 'headers':
        args[index] = key ? req.headers[key.toLowerCase()] : req.headers;
        break;
      case 'cookies':
        args[index] = key ? req.cookies[key] : req.cookies;
        break;
      default:
        args[index] = res;
        break;
    }
  });

  parseArr.forEach(parse => {
    const { type, index } = parse;
    switch (type) {
      case 'number':
        args[index] = +args[index];
        break;
      case 'string':
        args[index] = args[index] + '';
        break;
      case 'boolean':
        args[index] = Boolean(args[index]);
        break;
    }
  });

  args.push(req, res, next);
  return args;
}

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

// 依赖注入
register(controllers, app, handlerFactory);


export default app
