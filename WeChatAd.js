/*
此为微信广告追踪关闭的到期时间，看起来很简单的东西，效果自测!

查看路径：我的/设置/关于/隐私保护指引/9.其他(隐私政策)/广告/关于广告/二、如何管理您看到的广告(点击下面的管理)/拉到最下面，有个开关

[rewrite_local]
^https?:\/\/ads\.privacy\.qq\.com\/optout\/add url script-reponse-body https://raw.githubusercontent.com/General74110/QuantumultX/main/WeChatAd.js
^https?:\/\/ads\.privacy\.qq\.com\/optout\/list url script-reponse-body https://raw.githubusercontent.com/General74110/QuantumultX/main/WeChatAd.js

[MITM]
hostname = ads.privacy.qq.com
*/

var body = $response.body;
obj= {
"checked" : "false";
"endTime" : "3000-08-07 23:59:59";
body = JSON.stringify(obj);
$done(body);