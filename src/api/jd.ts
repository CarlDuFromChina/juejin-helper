import { jd } from '../axios';

interface JdResponse<T> {
  code: string,
  data: T
}

interface CheckInData {
  dailyAward: {
    type: string,
    title: string,
    subtitle: string,
    beanAward: {
      beanCount: number
    }
  }
}

/**
 * 京东京豆签到
 */
export async function CheckIn() : Promise<JdResponse<CheckInData>> {
  return jd.post('client.action?functionId=signBeanIndex&appid=ld').then(resp => {
    var result = resp.data as JdResponse<CheckInData>;
    return result;
  });
}