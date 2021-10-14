import juejin from './api/juejin';

var schedule = require('node-schedule');
var logger = require('log4js').getLogger('job');
var config = require('../config.json');

var isAutoCheckIn = config.auto_checkin;
var job;

function start() {
  const rule = new schedule.RecurrenceRule();
  rule.hour = 1;
  job = schedule.scheduleJob(rule, () => {
    juejin.CheckIn().then((resp) => {
      logger.debug(`自动签到：${resp}`);
    });
  });
}

function cancel() {
  if (job) {
    job.cancel();
    logger.debug('自动签到取消');
  }
}

// 自动执行
if (isAutoCheckIn) {
  logger.debug('自动签到开启');
  start();
}

export default {
  start,
  cancel,
};
