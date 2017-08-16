/*var a={
  name:"joban",
  age:25,
  lname:"prasad"
}

console.log(a)

a.__proto__="dob";
a.dob="july1992";
console.log(a.__proto__);
console.log(a);
*/
function person(fname,lname){
  this.fname=fname;
  this.lnam=lname;
//  console.log("this is also prnited?")
  console.log("function invoked")
//  return (name + age);
}
person.prototype.getFullName=function(){
  return this.fname + ' ' + this.lnam;
}

var param = new person('Paramveer','Singh');
  console.log(param);

var xyz = new person('xyz','kaur');
console.log(xyz);

console.log(param.getFullName());
