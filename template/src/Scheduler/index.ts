import schedule from 'node-schedule';

export const useSchedulers = () => {
  // 五分钟执行一次：*/5 * * * *
  // 每小时的第五分钟执行一次：* 5 * * * *
  // 每天凌晨0点执行：0 0 0 * * *
  // 每周一凌晨0点执行：0 0 0 * * 1
  schedule.scheduleJob('*/1 * * * *', async () => {
    console.log('This job was supposed to run at ' + ', but actually ran at ' + new Date());
  })
}