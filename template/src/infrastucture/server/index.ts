export enum ServerType {
  {{#if_eq server 'express'}}express = 'express'{{else}}koa = 'koa'{{/if_eq}}
}

export enum OrmType {
  {{#if_eq orm 'sequelize'}}sequelize = 'sequelize'{{else}}typeorm = 'typeorm'{{/if_eq}}
}

/**
 * @description 创建服务
 * @param port 端口
 * @param type 服务的框架
 * @returns 
 */
export const createServer = (port: number, serverType: ServerType, ormType: OrmType) => {
  return import(`./${serverType}`).then(module => {
    module.default.listen(port)
    import(`@/application/${ormType}`)
  })
};
