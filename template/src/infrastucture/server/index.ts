export enum ServerType {
  {{#if_eq server 'express'}}express = 'express'{{else}}koa = 'koa'{{/if_eq}}
}

/**
 * @description 创建服务
 * @param port 端口
 * @param type 服务的框架
 * @returns 
 */
export const createServer = (port: number, type: ServerType) => {
  return import(`./${type}`).then(module => module.default.listen(port))
}
