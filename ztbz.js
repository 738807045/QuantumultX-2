*/
纸糖壁纸下载链接https://apps.apple.com/cn/app/纸塘壁纸/id1483440137
hostname = api.bspapp.com

rewrite_local：^https?:\/\/api\.bspapp\.com\/client url script-response-body ztbz.js


var obj = JSON.parse($response.body);
obj= {
  "success": true,
  "data": {
    "code": 200,
    "msg": "请求成功",
    "data": {
      "_id": "602ebdcffac28b0001b75c0a",
      "id": "602ebdcffac28b0001b75c0a",
      "isVip": true,
      "vipEffectiveTimestamp": 4567896543,
      "integral": 1,
      "avatar": "",
      "nickName": "将军",
      "rewardCode": ""
    }
  },
  "header": {
    "x-fc-code-checksum": "11920753897763040351",
    "access-control-expose-headers": "Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version",
    "x-fc-invocation-service-version": "LATEST",
    "content-disposition": "attachment",
    "x-serverless-request-id": "ac1412331614005901269476674",
    "x-serverless-runtime-version": "1.1.1",
    "content-length": "234",
    "date": "Mon, 22 Feb 2021 14:58:21 GMT",
    "x-fc-request-id": "4688e9e1-d494-4b1d-9bcc-af0af27ecc0d",
    "x-fc-invocation-duration": "207",
    "x-fc-max-memory-usage": "44.11",
    "content-type": "application/json"
  }
}
$done({body: JSON.stringify(obj)});