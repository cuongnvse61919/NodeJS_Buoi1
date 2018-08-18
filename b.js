var request = require('request');
let staffs = [];
request.get('http://192.168.1.6:3000/physics', function (err, res, body) {
    var parsed = JSON.parse(body);

    var arr = [];

    for (var x in parsed) {
        arr.push(parsed[x]);
    }
    for (let i = 0; i < arr.length; i++) {
        let giaGoc = arr[i].T_GiaMua;
        let giaBan = arr[i].T_GiaBan;
        let baoHiem = arr[i].T_BHYT;
        console.log("----------");
        console.log(arr[i].T_TenThuoc);
        console.log(arr[i].T_CongDung);
        console.log(arr[i].T_CachDung);

        console.log("Lai: " + tinhDoanhThu(giaGoc, giaBan));
        console.log("Gia sau bao hiem:" + tinhGiaBaoHiem(giaBan, baoHiem));
    }
});

function tinhDoanhThu(giaGoc, giaBan) {
    let doanhThu = giaBan - giaGoc;
    return doanhThu;
}
function tinhGiaBaoHiem(giaBan, baoHiem) {
    return baoHiem === 0 ? giaBan : (giaBan - ((giaBan * baoHiem) / 100));
}