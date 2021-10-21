import * as jd from '../api/jd';

/**
 * 签到
 * @returns 签到信息
 */
async function checkIn() : Promise<string> {
  return jd.CheckIn().then((resp) => {
    if (resp.code === '0' && JSON.stringify(resp).match(/\"status\":\"?1\"?/)) {
      return `京东签到：成功（${resp.data.dailyAward.title}${resp.data.dailyAward.subtitle}${resp.data.dailyAward.beanAward.beanCount}京豆）`;
    } else if (resp.code === '3') {
      return '京豆签到: 失败, 原因: Cookie失效';
    } else if (JSON.stringify(resp).match(/跳转至拼图/)) {
      return '京豆签到: 失败, 需要拼图验证';
    } else {
      return '京豆签到：失败';
    }
  });
}

export default {
  checkIn
}