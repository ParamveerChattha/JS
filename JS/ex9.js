// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
//
// for (i in student){
// console.log(i);
// }
//

var obj = {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}
var arr=[]

for (key in obj){

  arr.push(obj[key]);
}
console.log(arr);
