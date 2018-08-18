var request = require('request');
let staffs = [];
const city = 'London';
request.get('http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + city, function (err, res, body) {
//console.log(body)    ;
var parsed = JSON.parse(body);

    
    console.log("Thanh Pho: " + city + " - Nhiet do: " + parsed.main.temp + " - Toc do gio: " + parsed.wind.speed);

    
});