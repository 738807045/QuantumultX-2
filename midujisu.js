/*
米读去广告
^https?:\/\/apiwz\.midukanshu\.com\/user\/relation\/vipAndGoodsV2 url script-response-body midujisu.js

^https?:\/\/apiwz\.midukanshu\.com\/wz\/user\/getInfo url script-response-body midujisu.js

^https?:\/\/ddd\.1sapp\.com\/* url script-response-body midujisu.js

hostname:apiwz.midukanshu.com, ddd.1sapp.com
*/

var obj = JSON.parse($response.body);
obj= {{
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "vip\":{\"is_vip\":\"1\",\"vip_end_time\":\"2099-02-23 00:00:00\"}",
      "matchValue" : "vip\":{\"is_vip\":\"0\",\"vip_end_time\":\"\"}",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "modify-query",
      "matchField" : "isBookUser",
      "field" : "",
      "value" : "1",
      "matchValue" : "0",
      "destiontion" : "request",
      "isRegex" : false
    },
    {
      "action" : "modify-query",
      "matchField" : "isVip",
      "field" : "",
      "value" : "1",
      "matchValue" : "0",
      "destiontion" : "request",
      "isRegex" : false
    },
    {
      "action" : "modify-query",
      "matchField" : "vip_end_time",
      "field" : "",
      "value" : "2099-02-23 00:00:00",
      "matchValue" : "",
      "destiontion" : "request",
      "isRegex" : false
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "freeAd\":{\"ADChapterEndCoinVideo\":\"0\",\"ADChapterEndFreeVideo\":\"0\",\"ADCodeBiKanChapterStartPop\":\"0\",\"ADCodeBottomGuide\":\"0\",\"ADCodeNewEndVideo\":\"0\",\"ADCodeNewInsert\":\"0\",\"ADCodeNewInsertVideo\":\"0\",\"ADCodeNewUnlock\":\"0\",\"ADCodeNewUnlockAuto\":\"0\",\"ADCodeReadBottomFloat\":\"0\",\"ADCodeReadEnd\":\"0\",\"ADCodeReadEndIncentiveVideo\":\"0\",\"ADCodeReadEndShadow\":\"0\",\"ADCodeReadFullScreen\":\"0\",\"ADCodeReadInsert\":\"0\",\"ADCodeReadInsertFixed\":\"0\",\"ADCodeReadInsertVideo\":\"0\",\"ADCodeReadMiddlePop\":\"0\",\"ADCodeReadStartIncentiveVideo\":\"0\",\"ADCodeReadTopPop\":\"0\",\"ADCodeReadTopVideoButton\":\"0\",\"ADCodeSingleBookVideo\":\"0\"}",
      "matchValue" : "freeAd\":{\"ADChapterEndCoinVideo\":\"2\",\"ADChapterEndFreeVideo\":\"2\",\"ADCodeBiKanChapterStartPop\":\"2\",\"ADCodeBottomGuide\":\"2\",\"ADCodeNewEndVideo\":\"2\",\"ADCodeNewInsert\":\"2\",\"ADCodeNewInsertVideo\":\"2\",\"ADCodeNewUnlock\":\"2\",\"ADCodeNewUnlockAuto\":\"2\",\"ADCodeReadBottomFloat\":\"2\",\"ADCodeReadEnd\":\"2\",\"ADCodeReadEndIncentiveVideo\":\"2\",\"ADCodeReadEndShadow\":\"2\",\"ADCodeReadFullScreen\":\"2\",\"ADCodeReadInsert\":\"2\",\"ADCodeReadInsertFixed\":\"2\",\"ADCodeReadInsertVideo\":\"2\",\"ADCodeReadMiddlePop\":\"2\",\"ADCodeReadStartIncentiveVideo\":\"2\",\"ADCodeReadTopPop\":\"2\",\"ADCodeReadTopVideoButton\":\"2\",\"ADCodeSingleBookVideo\":\"2\"}",
      "destiontion" : "response",
      "isRegex" : false
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "is_vip\":\"1\"",
      "matchValue" : "is_vip\":\"\\d\"",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "vip_end_time\":\"2099-02-23 00:00:00\"",
      "matchValue" : "vip_end_time\":\"\"",
      "destiontion" : "response",
      "isRegex" : false
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "isVip\":true",
      "matchValue" : "isVip\":false",
      "destiontion" : "request",
      "isRegex" : false
    }
  ],
  "enabled" : true,
  "name" : "midu",
  "description" : "",
  "locations" : [
    {
      "method" : "POST",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "apiwz.midukanshu.com",
      "path" : "\/user\/relation\/vipAndGoodsV2"
    },
    {
      "method" : "GET",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "ddd.1sapp.com",
      "path" : "\/"
    },
    {
      "method" : "POST",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "apiwz.midukanshu.com",
      "path" : "\/wz\/user\/getInfo"
    },
    {
      "method" : "POST",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "ddd.1sapp.com",
      "path" : "\/"
    },
    {
      "method" : "POST",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "apiwz.midukanshu.com",
      "path" : "\/user\/relation\/equityInfo"
    },
    {
      "method" : "GET",
      "scheme" : "https",
      "enabled" : true,
      "port" : 443,
      "query" : "",
      "host" : "ddd.1sapp.com",
      "path" : "\/midu_report"
    }
  ]
}
  }
$done({body: JSON.stringify(obj)});
