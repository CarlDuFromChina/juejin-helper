import axios from 'axios';

var config = require('../config.json');

var juejin = axios.create({
  baseURL: 'https://api.juejin.cn',
});
juejin.defaults.headers.common['cookie'] = config.cookie.juejin;

var jd = axios.create({
  baseURL: 'https://api.m.jd.com'
});
jd.defaults.headers.common['cookie'] = config.cookie.jd;
jd.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
export { juejin, jd };
