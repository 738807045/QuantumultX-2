var obj = JSON.parse($response.body);
obj.data.isVip = true;
obj.data.vipEffectiveTimestamp = 4567896543;
obj.data.integral = 1000
$done({body: JSON.stringify(obj)});
