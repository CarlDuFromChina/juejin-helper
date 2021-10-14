var express = require('express');
var router = express.Router();
import * as juejin from '../api/juejin';
import job from '../job';

/**
 * 签到
 */
router.get('/checkin', function (req, res, next) {
  juejin.CheckIn().then((resp) => {
    res.send(resp);
  });
});

/**
 * 抽奖
 */
router.get('/draw', function (req, res, next) {
  juejin.Draw().then((resp) => {
    res.send(resp);
  });
});

/**
 * 获取当前剩余矿石数
 */
router.get('/GetCurPoint', function (req, res, next) {
  juejin.GetCurPoint().then((resp) => {
    res.send(resp);
  });
});

/**
 * 自动签到开启
 */
router.get('/job/start', function (req, res, next) {
  job.start();
  res.send('job开启');
});

/**
 * 自动签到停止
 */
router.get('/job/stop', function (req, res, next) {
  job.cancel();
  res.send('job停止');
});

module.exports = router;
