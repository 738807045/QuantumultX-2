^https://weather-data.apple.com/v1/weather/[\w-_]+/[0-9]+\.[0-9]+/[0-9]+\.[0-9]+\?include= url script-response-body https://cdn.jsdelivr.net/gh/Hackl0us/SS-Rule-Snippet@master/Scripts/Surge/iOS_Weather_AQI_Standard.js

hostname = weather-data.apple.com

// AQI 标准
const AirQualityStandard = {
	CN: "HJ6332012.1",
	US: "EPA_NowCast.1"
}

let body = JSON.parse($response.body); 

// 选定 AQI 标准(默认 AQI-US)
body.air_quality.airQualityScale = AirQualityStandard.US;

body = JSON.stringify(body);
$done({body});
