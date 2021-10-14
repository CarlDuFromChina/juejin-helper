import axios from 'axios';

var config = require('../../config.json');
var cookie = config.account.cookie;

var juejin = axios.create({
  baseURL: "https://api.juejin.cn",
});
juejin.defaults.headers.common['cookie'] = cookie;

export {
  juejin
}
