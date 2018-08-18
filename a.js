var request = require('request');
let staffs = [];
request.get('http://192.168.1.6:3000/ds-nhan-su', function (err, res, body) {
    var parsed = JSON.parse(body);

    var arr = [];

    for (var x in parsed) {
        arr.push(parsed[x]);
    }
    
    for(let i = 0 ; i < arr.length ; i++){
        let  dob = arr[i].NV_NgaySinh;
        let s = dob.split("T");
        let s2 = s[0];
        let s3 = s2.split("-");
        let year = s3[0];
        let month = s3[1];
        let day = s3[2];
        let yob = day +"/" + month  +"/" + year;
        console.log("-------------------");
        console.log(arr[i].NV_HoTen +"\n" + yob + "\n"  + arr[i].NV_DiaChi );
        
    }
});
