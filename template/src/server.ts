import { createServer, ServerType, OrmType } from '@/infrastucture/server';
import { useSchedulers } from '@/Scheduler';
// 创建服务
createServer(Number(process.env.PORT), ServerType.{{ server }}, OrmType.{{ orm }})
  .then(useSchedulers)