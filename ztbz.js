/*
纸糖壁纸下载链接https://apps.apple.com/cn/app/纸塘壁纸/id1483440137
hostname = api.bspapp.com

rewrite_local：^https?:\/\/api\.bspapp\.com\/client url script-response-body ztbz.js
*/

var obj = JSON.parse($response.body);
obj= {
"isVip": true,
"vipEffectiveTimestamp": 4567896543,
"integral": 1000,
}
$done({body: JSON.stringify(obj)});
