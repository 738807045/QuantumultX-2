/*
rewrite_local:

^http?:\/\/api\.06f158e\.xyz\/fast\-cloud\/user\/info url script-response-body Taozi.js

MITM:
hostname = api.06f158e.xyz
*/

obj= {
  "code": "0000",
  "message": "",
  "total": null,
  "result": {
    "id": 3230372,
    "account": "20204611479",
    "phone": "20204611479",
    "accountLevel": 2,
    "machineCode": "iPhone 11 Pro Max|14.3",
    "accessToken": "66ZO5UFMFLU5DWSPFGBWJRF68Q01JXOV",
    "tokenValidDate": 1611676800000,
    "vipValidDate": 2240279057000,
    "sex": null,
    "nickName": null,
    "avatar": null,
    "invitationCode": "FEFCFJE",
    "channelCode": null,
    "createDate": 1609130828000,
    "gold": 99999,
    "vipType": 2,
    "authType": 0,
    "bindStatus": 0,
    "fans": 0,
    "stars": 0,
    "newUser": false
  },
  "data": null
}
body = JSON.stringify(obj);
$done(body);
