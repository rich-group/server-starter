import { createServer } from '@/infrastucture/server';
import { useSchedulers } from '@/Scheduler';
// 创建服务
createServer(Number(process.env.PORT), '{{ server }}', '{{ orm }}')
  .then(useSchedulers)