/*圈叉配置写法
rewrite_local
#微信阅读会员
^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary\? url script-response-body weread.js

MITM
hostname:i.weread.qq.com
-----------------将军℡--------------------
*/
var result = body
let path = "/pay/memberCardSummary";
if (url.indexOf(path) != -1){
  var obj = JSON.parse(body);
  obj["expiredTime"] = 1747624048;
  obj["remainTime"] = 189302400;
  result = JSON.stringify(obj);
}
result;
