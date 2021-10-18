import { juejin as http } from '../axios';

interface JuejinResponse<T> {
  err_no: number;
  err_msg: string;
  data: T;
}

interface CheckInData {
  incr_point: number;
  sum_point: number;
}

interface DrawData {
  history_id: string;
  id: number;
  lottery_id: string;
  lottery_image: string;
  lottery_name: string;
  lottery_type: number;
}

export function CheckIn(): Promise<JuejinResponse<CheckInData>> {
  return http.post('growth_api/v1/check_in').then((resp) => {
    var result = resp.data as JuejinResponse<CheckInData>;
    return result;
  });
}

export function Draw(count: number): Promise<Array<JuejinResponse<DrawData>>> {
  const promises = [];
  for (let i = 0; i < count; i++) {
    var promise = http.post('growth_api/v1/lottery/draw').then((resp) => {
      var result = resp.data as JuejinResponse<DrawData>;
      return result;
    });
    promises.push(promise);
  }
  return Promise.all(promises);
}

export async function Allin() {
  var curPoint = (await GetCurPoint()).data;
  var count = parseInt((curPoint / 200).toString());
  var result = await Draw(count);
  var prize = {};
  result.forEach(item => {
    if (item.data.lottery_name in prize) {
      prize[item.data.lottery_name] += 1;
    } else {
      prize[item.data.lottery_name] = 1;
    }
  });
  return prize;
}

export function GetCurPoint(): Promise<JuejinResponse<number>> {
  return http.get('growth_api/v1/get_cur_point').then((resp) => {
    return resp.data as JuejinResponse<number>;
  });
}

export default {
  CheckIn,
  Draw,
  GetCurPoint,
};
