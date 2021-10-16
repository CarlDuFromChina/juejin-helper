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

export function Draw(count: number) {
  const promises = [];
  for (let i = 0; i < count; i++) {
    var promise = http.post('growth_api/v1/lottery/draw').then((resp) => {
      var result = resp.data as JuejinResponse<DrawData>;
      if (result.err_no === 0) {
        return `恭喜获得${result.data.lottery_name}`;
      }
      return result.err_msg;
    });
    promises.push(promise);
  }
  return Promise.all(promises).then((resp) => resp.join('<br/>'));
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
