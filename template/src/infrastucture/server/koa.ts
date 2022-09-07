import Koa from 'koa';
import koaBody from 'koa-body';
import register from '../../router';
import controllers from '../../ioc';
import Router from '@koa/router'
import cors from '@koa/cors'
import { Context } from 'koa'

/**
 * @description 处理请求参数和返回浏览器数据
 * @param func Contoller 中的函数
 * @returns 
 */
export function handlerFactory( func: (...args: any[]) => any) {
  return async (ctx: Context) => {
    try {
      // 合并query 和 params
      const args = Object.assign({}, ctx.request.body, ctx.request.query)
      const result = await func(args)
      ctx.status = 200
      ctx.body = result
    } catch (err) {
      // next(err);
    }
  };
}

const router = new Router();

const app = new Koa();

register(controllers, router, handlerFactory);

app.use(koaBody({ multipart: true }))
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())


export default app