/*
rewrite_local:

^http?:\/\/api\.06f158e\.xyz\/fast\-cloud\/user\/info url script-response-body Taozi.js

MITM:
hostname = api.06f158e.xyz
*/

obj= {
  "vipType\": 2",
  "vipValidDate\": 2240279057000",
  "accountLevel\": 2",
  "gold\": 99999",

  }
body = JSON.stringify(obj);
$done(body);