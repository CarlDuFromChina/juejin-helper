var express = require('express');
var router = express.Router();
import * as juejin from '../api/juejin';
import job from '../job';

/**
 * 签到
 */
router.get('/checkin', function (req, res, next) {
  juejin.CheckIn().then((resp) => {
    if (resp.err_no === 200) {
      res.send(`签到成功，获得${resp.data.incr_point}矿石，您现在已有${resp.data.sum_point}矿石了`);
    } else {
      res.send(resp.err_msg);
    }
  });
});

/**
 * 抽奖
 */
router.get('/draw', function (req, res, next) {
  var count = req.param('count') ?? 1;
  juejin.Draw(count).then((resp) => {
    res.send(resp);
  });
});

/**
 * 获取当前剩余矿石数
 */
router.get('/GetCurPoint', function (req, res, next) {
  juejin.GetCurPoint().then((resp) => {
    if (resp.err_no === 0) {
      res.send(`您的矿石剩余：${resp.data}`);
    } else {
      res.send(resp.err_msg);
    }
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
