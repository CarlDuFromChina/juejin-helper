import { juejin as http } from '../axios';

interface JuejinResponse {
  err_no: number,
  err_msg: string,
  data: any
}

interface CheckInData {
  incr_point: number,
  sum_point: number
}

interface DrawData {
  history_id: string,
  id: number,
  lottery_id: string,
  lottery_image: string,
  lottery_name: string,
  lottery_type: number
}

export function CheckIn(){
  return http.post('growth_api/v1/check_in').then(resp => {
    var result = resp.data as JuejinResponse;
    var data = result.data as CheckInData;
    if (result.err_no === 200) {
      return `签到成功，获得${data.incr_point}矿石，您现在已有${data.sum_point}矿石了`;
    }
    return result.err_msg
  });
}

export function Draw() {
  return http.post('growth_api/v1/lottery/draw').then(resp => {
    var result = resp.data as JuejinResponse;
    var data = result.data as DrawData;
    if (result.err_no === 0) {
      return `恭喜获得${data.lottery_name}`;
    }
    return result.err_msg;
  });
}

export function GetCurPoint() {
  return http.get('growth_api/v1/get_cur_point').then(resp => {
    var result = resp.data as JuejinResponse;
    if (result.err_no === 0) {
      return `您的矿石剩余：${result.data}`;
    }
    return result.err_msg;
  });
}

export default {
  CheckIn,
  Draw,
  GetCurPoint
}