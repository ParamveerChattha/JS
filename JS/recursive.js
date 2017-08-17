
var factorial = x =>{
  let i=x;
  var ans=x;
//  console.log(ans);
  for (j=(i-1);j--;j>1)
    {
//      console.log(ans);
      ans=ans*j;
      if (j==2)
      return ans;
    }
//    console.log( `this is answer ${ans} `);
    this.test=test


}
// the above codes works well, but can not be combined with prototype
/*
var factorial = function(x){
  let i=x;
  var ans=x;
//  console.log(ans);
  for (j=(i);j--;j>1)
    {
//      console.log(ans);
      ans=ans*j;
      if (j==1)
      return ans;

    }
//    console.log( `this is answer ${ans} `);
    this.test=test
    console.log( `this is the asnwer ${this.test}`);

}
*/
var test = factorial(8);
console.log(`test ${test}`);
//console.log(`the answer is ${test}`);
var addition = factorial();
factorial.prototype.add1 =  addition(test){

  return (this.test+1);
}
console.log(addition.add1());
