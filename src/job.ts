import juejin from './api/juejin';
import jd from './service/jd';

var schedule = require('node-schedule');
var logger = require('log4js').getLogger('job');
var config = require('../config.json');

var isAutoCheckIn = config.auto_checkin;

function start() {
  schedule.scheduleJob('0 0 1 * * ?', () => {
    juejin.CheckIn().then((resp) => {
      logger.debug(resp);
    });
    jd.checkIn().then((resp) => {
      logger.debug(resp);
    });
  });
}

// 自动执行
if (isAutoCheckIn) {
  logger.debug('自动签到开启');
  start();
}
