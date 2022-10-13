export enum ServerType {
  {{server}} = '{{server}}'
}

export enum OrmType {
  {{orm}} = '{{orm}}'
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
