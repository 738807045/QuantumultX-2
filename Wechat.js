/*
QX:
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/General74110/QuantumultX/main/Wechat.js

Surge & QX MITM = mp.weixin.qq.com,
*/

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 
