import { createServer, ServerType } from './infrastucture/server';
import { useSchedulers } from './Scheduler';
// 创建服务
createServer(Number(process.env.PORT), {{#if_eq server "express"}}ServerType.express{{else}}ServerType.koa{{/if_eq}})
  .then(useSchedulers)