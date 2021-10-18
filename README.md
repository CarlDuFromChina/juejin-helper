# Juejin Helper

## 接口

| 说明             | 请求方式 | 地址                | 示例                                       | 备注            |
| ---------------- | -------- | ------------------- | ------------------------------------------ | --------------- |
| 签到             | get      | /juejin/checkin     | http://localhost:3000/juejin/checkin       |                 |
| 抽奖（连抽）     | get      | /juejin/draw        | http://localhost:3000/juejin/draw?count=10 | count：抽奖次数 |
| 获取当前剩余矿石 | get      | /juejin/GetCurPoint | http://localhost:3000/juejin/checkin       |                 |
| 自动签到开启     | get      | /juejin/job/start   | http://localhost:3000/juejin/job/start     |                 |
| 自动签到关闭     | get      | /juejin//job/stop   | http://localhost:3000/juejin/job/stop      |                 |

## 部署

1、编译

```
$ yarn install
$ yarn build
```

2、打开`dist`目录下的`config.json`，配置`cookie`

```json
{
  "account": {
    "cookie": "" // 登录掘金右击空白网页点击检查，在Network里找到包含Cookie的请求头
  },
  "auto_checkin": true
}
```

3、运行

```
node ./dist/app
```

## 持久化

### Linux

推荐用`pm2`

### Windows

`winsw`或`nssm`将`node`注册为`Windows`服务