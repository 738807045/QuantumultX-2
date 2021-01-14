/*圈叉配置写法
rewrite_local
#微信阅读会员
^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary\? url script-response-body weread.js

MITM
hostname:i.weread.qq.com
-----------------将军℡--------------------
*/
var obj = JSON.parse($response.body);
obj= {
  "startTime": 991603940132,
  "expiredTime": 991604246399,
  "expired": 0,
  "isPaying": 0,
  "permanent": 0,
  "day": 91,
  "remainTime": 99306196,
  "payingRemainTime": 6,
  "isAutoRenewable": 6,
  "historyAutoRenewable": 6,
  "autoRenewableChannel": 6,
  "autoRenewableTime": 6,
  "autoRenewablePrice": 991900,
  "savedMoney": 9927433,
  "totalFreeReadDay": 6666,
  "remainCoupon": 6666,
  "remainCount": 6666,
  "hintsForRecharge": {
    "predictedSavedMoney": 9910315,
    "predictedChapterPrice": 15,
    "pricePerMonth": 99900,
    "sendCoupons": 6666,
    "buttonTitle": "付费无限卡9元/月 · 限时特惠",
    "buttonSubtitle": "你正在使用免费无限卡 · 升级付费无限卡即可阅读"
  },
  "freeBookIds": [],
  "timestamp": 1603940203,
  "random": 8341,
  "signature": "5d7f6c929086a4a958ead60c9bd95fae6991afef51c1de50a41e7c2641fdaf3f"
}
$done({body: JSON.stringify(obj)});
