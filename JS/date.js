//var d=  Date.now();
var d = new Date();
//console.log(typeof(d));
//console.log(d);
//var A=d.getDate();
//console.log(A);
// var t = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();
// console.log(t);

var result = function formatedate(date){
  var hours = date.getHours();
  var amPm=0;
  if (hours>12){
    hours = hours-12
    amPm = 'pm'
  }
  else{
    amPm='am';
  }
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var month = date.getMonth() +1;
  var date = date.getDate();
  var year = d.getFullYear();
  return month + '/'+ date +'/' + year + ' '+ hours+ ':' + minutes  + ':' + seconds + ' ' + amPm;


}

var d = new Date();
console.log(result(d));
