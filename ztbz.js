var obj = JSON.parse($response.body);
obj.isVip = true;
obj.vipEffectiveTimestamp = 4567896543;
obj.integral = 1000
$done({body: JSON.stringify(obj)});
