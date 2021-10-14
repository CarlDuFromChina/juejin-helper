
var express = require('express');
var router = express.Router();
import * as juejin from '../api/juejin';

/**
 * 签到
 */
router.get('/checkin', function (req, res, next) {
  juejin.CheckIn().then(resp => {
    res.send(resp);
  });
});

/**
 * 抽奖
 */
router.get('/draw', function (req, res, next) {
  juejin.Draw().then(resp => {
    res.send(resp);
  });
});

/**
 * 获取当前剩余矿石数
 */
router.get('/GetCurPoint', function (req, res, next) {
  juejin.GetCurPoint().then(resp => {
    res.send(resp);
  });
});

module.exports = router;