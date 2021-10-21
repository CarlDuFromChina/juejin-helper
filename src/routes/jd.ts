var express = require('express');
var router = express.Router();
import service from '../service/jd';

/**
 * 签到
 */
 router.get('/checkin', function (req, res, next) {
  service.checkIn().then((resp) =>  res.send(resp));
});