// var createSql = "SELECT logs_time,logs_monitoring_id,logs_dnstime,logs_reptime,logs_site_id from logs where logs_time > DATE_SUB(now(),INTERVAL "+choosetime+" hour) and logs_site_id ="+site_id+" and logs_monitoring_id ="+logs_monitoring_id;
// select logs_time from logs where logs_time>=('2017-07-01 13:43:42') and logs_time<('2017-07-03 06:43:42');
//
// select a.logs_time,b.* from logs as a right join (select a.*,b.* from sitemonitoring as a, monitoring as b where a.monitoring_listid = b.monitoring_id and a.site_id=61) as b on a.logs_site_id = b.site_id and a.logs_monitoring_id = b.monitoring_listid and a.logs_time > DATE_SUB(now(),INTERVAL 24 hour) ORDER BY a.logs_time DESC;

// var a =[
//     "{\"phone\":\"03178760473\"}",
//     "{\"phone\":\"33333\"}",
//     "{\"phone\":\"33336\"}",
//     "{\"phone\":\"18732786552\"}",
//     "{\"phone\":\"13129481089\"}",
//     "{\"phone\":\"\"}",
//     "{\"phone\":\"13170107206\"}",
//     "{\"phone\":\"18577382183\"}",
//     "{\"phone\":\"17683824137\"}",
//     "{\"phone\":\"17607464107\"}",
//     "{\"phone\":\"15681836670\"}",
//     "{\"phone\":\"18582901768\"}",
//     "{\"phone\":\"17621129827\"}",
//     "{\"phone\":\"15504412903\"}",
//     "{\"phone\":\"15575009799\"}",
//     "{\"phone\":\"17609261234\"}",
//     "{\"phone\":\"17661492584\"}",
//     "{\"phone\":\"18567230328\"}",
//     "{\"phone\":\"18664218094\"}",
//     "{\"phone\":\"18653553709\"}",
//     "{\"phone\":\"13255417221\"}",
//     "{\"phone\":\"15607149381\"}",
//     "{\"phone\":\";*8\"}",
//     "{\"phone\":\"18671693907\"}",
//     "{\"phone\":\"13261680082\"}",
//     "{\"phone\":\"13069532021\"}",
//     "{\"phone\":\"13122981352\"}",
//     "{\"phone\":\"1312\"}",
//     "{\"phone\":\"13147762277\"}",
//     "{\"phone\":\"15699511377\"}",
//     "{\"phone\":\"17689255470\"}",
//     "{\"phone\":\"17693669725\"}",
//     "{\"phone\":\"13005516581\"}",
//     "{\"phone\":\"13180796688\"}",
//     "{\"phone\":\"17633626139\"}",
//     "{\"phone\":\"13093955524\"}",
//     "{\"phone\":\"-\"}",
//     "{\"phone\":\"18581309978\"}",
//     "{\"phone\":\"15588895395\"}",
//     "{\"phone\":\"17664003950\"}",
//     "{\"phone\":\"18613687265\"}",
//     "{\"phone\":\"17631623512\"}",
//     "{\"phone\":\"17676197986\"}",
//     "{\"phone\":\"18652377975\"}",
//     "{\"phone\":\"17666542929\"}",
//     "{\"phone\":\"17631560278\"}",
//     "{\"phone\":\"13295727506\"}",
//     "{\"phone\":\"13006909030\"}",
//     "{\"phone\":\"13233806902\"}",
//     "{\"phone\":\"15590551599\"}",
//     "{\"phone\":\"18538274534\"}",
//     "{\"phone\":\"18656372373\"}",
//     "{\"phone\":\"18688859043\"}",
//     "{\"phone\":\"13287817092\"}",
//     "{\"phone\":\"15652560698\"}",
//     "{\"phone\":\"17677049274\"}",
//     "{\"phone\":\"17677380671\"}",
//     "{\"phone\":\"13227249109\"}",
//     "{\"phone\":\"17681301648\"}",
//     "{\"phone\":\"13260553426\"}",
//     "{\"phone\":\"18680383985\"}",
//     "{\"phone\":\"18656267400\"}",
//     "{\"phone\":\"13232639690\"}"
// ];
// var tem = [];
// var te = [];
// var c = 0;
// a.forEach(function (item, idx) {
//     var phone = item.slice(10, 21);
//     //console.log();
//     checkMobile(phone);
//     function checkMobile(phone){
//         var regu =/0?(1phone3|14|15|18)[0-9]{9}/;
//         var re = new RegExp(regu);
//         if (re.test(phone)) {
//             console.log(re.test(phone));
//             console.log(phone);
//             tem.push(phone);
//         } else {
//             te.push(phone);
//             c++;
//         }
//     }
//     // if (CONST.UNICOM_PHONE_REGEX.test(phone)) {
//     //     console.log(tem);
//     //     tem.push(phone);
//     // }
// });
// console.log(tem.length);
// console.log(c);
// console.log(te);
// var request = require('request');
// var siteUrl = "https://m.10010.com/queen/tencent/fill.html?product=0&channel=2&ptag=4_5.6.3.19314_wxf&from=singlemessage&isappinstalled=1";
// request(siteUrl, function(error, response, body) {
//     body = body.replace(/'/g,'&quot');
//     //var a = body.split('\n') ;
//     //console.log(a);
//     //console.log(a.length);
//     var reg = /.*\bfill.css.*/;
//     console.log(reg.test(body));
// });
// var body = 'ab ';
// if (body.indexOf("\\n") >= 0) {
//     console.log(" 中有\n");
// }
//select c.*,b.sitelist_regex
//from (select a.*,b.* from sitemonitoring as a, monitoring as b where a.monitoring_listid = b.monitoring_id and a.site_id=59) as c ,sitelist as b  where c.site_id=b.sitelist_id;


// var util = {};
//
// Date.prototype.format = function(format) {
//     var date = {
//         "M+": this.getMonth() + 1,
//         "d+": this.getDate(),
//         "h+": this.getHours(),
//         "m+": this.getMinutes(),
//         "s+": this.getSeconds(),
//         "q+": Math.floor((this.getMonth() + 3) / 3),
//         "S+": this.getMilliseconds()
//     };
//     if (/(y+)/i.test(format)) {
//         format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
//     }
//     for (var k in date) {
//         if (new RegExp("(" + k + ")").test(format)) {
//             format = format.replace(RegExp.$1, RegExp.$1.length == 1
//                 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
//         }
//     }
//     return format;
// };
//
// util.formateDate = function (timestamp) {
//     var newDate = new Date();
//     newDate.setTime(timestamp);
//
//     return newDate.format('yyyy-MM-dd hh:mm:ss');
// };
//
// var t=new Date().getTime();
// console.log(t);
// console.log(util.formateDate(t));
// var request = require("request");
// var request = require('request');
// var siteUrl = 'http://c.b1yt.com/h.NtitFF?cv=fT9s0b32d9b&sm=d4f5fe';
// request(siteUrl, function(error, response, body) {
//     console.log(body)
// });
// function loadPage(url) {
//     var https = require('https');
//     var pm = new Promise(function (resolve, reject) {
//         https.get(url, function (res) {
//             var html = '';
//             res.on('data', function (d) {
//                 html += d.toString()
//             });
//             res.on('end', function () {
//                 resolve(html);
//             });
//         }).on('error', function (e) {
//             reject(e)
//         });
//     });
//     return pm;
// }
// loadPage(siteUrl).then(function (d) {
//     console.log(d);
// });
//


// var options = {
//     url: siteUrl,
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
//     }
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options,function (error, response, body) {
//     console.log(body);
// });
//request(options, callback);

// function GetDateStr(AddDayCount) {
//     var dd = new Date();
//     dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
//     var y = dd.getFullYear();
//     var m = dd.getMonth()+1;
//     if(m<10)
//     {m='0'+m;
//     }
//     var d = dd.getDate();
//     if(d<10)
//     {
//         d = '0'+d;
//     }
//     return y+"-"+m+"-"+d;
// }
// function GetMonthStr(AddDayCount) {
//     var dd = new Date();
//     dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
//     var y = dd.getFullYear();
//     var m = dd.getMonth()+1;
//     if(m<10)
//     {m='0'+m;
//     }
//     var d = dd.getDate();
//     if(d<10)
//     {
//         d = '0'+d;
//     }
//     return y+"-"+m;
//
// }

// var times = '2017-07-11 09:28:45';
// times = new Date(times);
// var time = '2017-07-10 09:28:45';
// time = new Date(time);
// console.log(times);
// console.log(time);
// var timess = (times.getTime()-time.getTime())/60000;
// console.log(timess);
// console.log(parseInt('60Mb'));
//2017-07-11T06:50:21.951Z 2017-07-11T06:58:52.429Z
//2017-07-11T06:50:19.885Z 2017-07-11T06:57:27.312Z

// var times = "2017-07-12";
// var time = times.slice(0,7);
// console.log(time);
//mongodb://zk:zk_zuma@192.168.1.99:27017/photolog
// var log4js = require('log4js');
// log4js.configure({
//     appenders: [
//         {
//             type: 'console',
//             category: "console"
//         },
//         {
//             type : 'dateFile',
//             filename : 'logs/',
//             pattern : '-yyyy-MM-dd.log',
//             alwaysIncludePattern : true,
//             category : 'record'
//         }
//     ],
//     replaceConsole: true,
//     levels:{
//         dateFileLog: 'all',
//         console: 'all'
//     }
// });
//
// var dateFileLog = log4js.getLogger('record');
// var consoleLog = log4js.getLogger('console');
// exports.logger = dateFileLog;
//
//
// exports.use = function(app) {
//     app.use(log4js.connectLogger(consoleLog, {level:'INFO', format:':method :url'}));
// }
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

// var a = [1];
// for(var i = 0; i < a.length; i++ ){
//     console.log(a[i]);
// }

// var a = "https://m.10010.com/queen/tencent/king-tab.html?channel=2&ptag=4_5.6.3.19314_wxf&from=singlemessage&isappinst";
// console.log(a.length);
// var b = a.slice(0,109);
// console.log(b);
//
// let resp = {
//     sess:[{sessid:"onc1",shijian:[1,2,3]},{sessid:"onc2",shijian:[1,2,3]},{sessid:"onc3",shijian:[1,2,3]}]
// };
// resp.sess[2].shijian.push(4);
// console.log(resp.sess[2].shijian);
// let a = [];
// let b = a.indexOf(4);
// console.log(b);
// a.push(4);
// b = a.indexOf(4);
// console.log(b);

// function Per(name) {
//     this.name = name;
// }
//
// var ab1 = new Per("wwf");
// var ab2 = new Per("w");
//
// console.log(ab1);
// console.log(ab2);
// console.log(ab1.name);
// console.log(ab2.name);
// console.log("开始时间"+new Date());
// var time_start = new Date();
// for(let i = 0 ; i < 100000 ; i++){
//     for (let j = 0 ; j < 50 ; j++){
//      console.log(i,j);
//     }
// }
// console.log("结束时间"+new Date());
// var time_end = new Date();
// console.log(time_start,time_end);

// var a = 3000000/100000;
// console.log(a);
//
// var a = '{"cmd":"get-checkcode","spinfocode":"00000560311","phone":"15070166312","dir":"2","type":1}';
// var c = "%7B%22cmd%22%3A%22get-checkcode%22%2C%22spinfocode%22%3A%2200000560311%22%2C%22phone%22%3A%2213866464577%22%2C%22dir%22%3A%222%22%2C%22type%22%3A1%7D";
//
// //var b = JSON.parse(c);
// if(JSON.parse(c) == err){
//     console.log(1);
// }
// console.log(typeof c);
// console.log(a);
// var a = [1,2];
// a.forEach(function (item,i) {
//     console.log(item);
// });

// var dd = new Date();
// dd.setDate(dd.getDate()+(-1));//获取AddDayCount天后的日期
// var y = dd.getFullYear();
// var m = dd.getMonth()+1;//获取当前月份的日期
// var d = dd.getDate();
// console.log( y+"-"+m+"-"+d);

// var a = {
//     data:{
//         b:[]
//     }
// };
// a.data.b.push({1:2});
// console.log(a);
// console.log(a.data.b);

// var a = 'Interface.get_fileurllist';
// var b = "Interface.get_fileurllist";
// console.log(a == b);

// function getNowFormatDate() {
//     var day = new Date();
//     var Year = 0;
//     var Month = 0;
//     var Day = 0;
//     var hour = 0;
//     var minute = 0;
//     var second = 0;
//     var CurrentDate = "";
// //初始化时间
//     Year = day.getFullYear();//ie火狐下都可以
//     Month = day.getMonth() + 1;
//     Day = day.getDate();
//     hour = day.getHours();
//     minute = day.getMinutes();
//     second = day.getSeconds();
//     CurrentDate += Year;
//     if (Month >= 10) {
//         CurrentDate += '-' + Month;
//     } else {
//         CurrentDate += "-0" + Month;
//     }

//     if (Day >= 10) {
//         CurrentDate += '-' + Day;
//     } else {
//         CurrentDate += "-0" + Day;
//     }
//     if (hour >= 10) {
//         CurrentDate += ' ' + hour;
//     } else {
//         CurrentDate += ' 0' + hour;
//     }
//     if (minute >= 10) {
//         CurrentDate += ':' + minute;
//     } else {
//         CurrentDate += ':0' + minute;
//     }
//     if (second >= 10) {
//         CurrentDate += ':' + second;
//     } else {
//         CurrentDate += ':0' + second;
//     }
//     console.log(CurrentDate); 
// }

// function getNewBatchNo() {
//     var day = new Date();
//     var Year = 0;
//     var Month = 0;
//     var Day = 0;
//     var hour = 0;
//     var minute = 0;
//     var second = 0;
//     var CurrentDate = "";
// //初始化时间
//     Year = day.getFullYear();//ie火狐下都可以
//     Month = day.getMonth() + 1;
//     Day = day.getDate();
//     hour = day.getHours();
//     minute = day.getMinutes();
//     second = day.getSeconds();
//     CurrentDate += Year;
//     if (Month >= 10) {
//         CurrentDate += Month;
//     } else {
//         CurrentDate += "0" + Month;
//     }

//     if (Day >= 10) {
//         CurrentDate += Day;
//     } else {
//         CurrentDate += "0" + Day;
//     }
//     CurrentDate += hour;
//     CurrentDate += minute;
//     CurrentDate += second;
//     console.log(CurrentDate); 
// }

// getNowFormatDate();
// getNewBatchNo();

// module.exports = function(req,res){
//     console.log(req);
//     console.log("hello");
// }
// var a = {
//     apply_address:"北京市东城区12",
//     apply_idcard:"340323199305183734",
//     apply_name:"王伟峰",
//     apply_phone:"15555373875"
// };
// var i;
// for(i in a){
//     console.log(typeof a);
//     console.log(a.hasOwnProperty(i));
// }

// var a = "340323199305183734";
// var b = a.slice(14,18);
// console.log(b);


// function a() 
// { 
// console.log(this); 
// } 
// a();
// global.name = "wwf";
// function a(){
//     console.log(this)
// }
// let b = 1;
// console.log(b);


// //a();
// var pe1 = {
//     name:"ww"
// }

// var pe2 = {
//     name:"w"
// }

// //a("w");
// a.call(this);
// //a.call(pe1);
// // a.call(pe2);

// fun
// function a(){
//     console.log(this.name)
// }
//
// var pe1 = {
//     name:"wwf"
// }
//
// var b = a.bind(pe1);
//
// b(pe1);

// function Pes(who) {
//     this.name = who;
// }

// Pes.prototype.say = function () {
//     console.log(this.name);
// };

// Pes.prototype.fav = [];

// var pe1 = new Pes("wwf");
// var pe2 = new Pes("w");

// pe1.say();
// pe2.say();
// console.log(pe1.fav);
// console.log(pe2.fav);

// function Parent(name) { 
//     this.name = name;
// }
// Parent.prototype.sayName = function() {
//     console.log('parent name:', this.name);
// }

//原型链继承
// function SuoperType() {
//     this.property = true;
// }
// SuoperType.prototype.getSuperValue = function () {
//     console.log(this.property);
// }
// function SubType() {
//     this.subproperty = false;
// }
// SubType.prototype = new SuoperType();
// SubType.prototype.getSubType = function () {
//     console.log(this.subproperty);

// }
// var instance = new SubType()
// instance.getSuperValue();//true
// instance.getSubType();//false

//call继承
// function Parent(n) {
//     console.log(this.name+":"+n);
// }

// function Childe(name) {
//     this.name = "12";
//     Parent.call(this,name);
// }

// var ch1 = new Childe("wwf");
// var ch2 = new Childe("w");

//es6继承

// class A {
//     constructor() {
//         this.x = 1;
//     }
//     print() {
//         console.log(this.x);
//     }
// }

// class B extends A {

//     constructor() {
//         super();
//         this.x = 2;
//     }
//     m() {
//         super.print();
//     }
// }

// let b = new B();
// b.m() // 2

// var crypto=require('crypto');  
// var md5=crypto.createHash("md5");  
// md5.update("校园卡资料填写页：https://10010.ringbox.cn/applyCard【校园卡】15555373875send_msg150390132009099sky");  
// var str=md5.digest('hex');  
// console.log(str);	

// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
//   }

//   class ColorPoint extends Point {
//     constructor(x, y, color) {
//       this.color = color; // ReferenceError
//       super(x, y);
//       this.color = color; // 正确
//     }
//   }

//var wwfcode = require("wwfcode");
var Info = [{spcode:1,atgroup:2,mark:3}, {spcode:2,atgroup:2,mark:3}]
Info.forEach((item, index) => {

    let createSql = 'UPDATE active_group SET spcode="' + item.spcode + '",atgroup="' + item.atgroup + '",mark="' + item.mark + '"'
    console.log(createSql);
    pool.query(createSql, (error, data) => {
        if (error) {
            // result.status=false,
            // result.massage='db error'
            // res.send(result)
            console.log(createSql);
        } else {

        }
    });

});

for (){ 
    
}