var getString=function(str){
  this.str=str;
  str = str.toString();
  var unsort=[]
  for(i=0;i<str.length-1;i++){
    unsort.push(str[i]);
  }
  unsort.sort();
//  console.log(unsort);// + ' ' + str.length);
//  unsort.reverse();
//  console.log(unsort)
  this.unsort=unsort;
//  console.log(unsort.sort(desc));
}
// New object for getString.
var ops = new getString('tttthhhijkttk');

// = new sort;
//console.log(result)
// adding dunamically to getString and via prototype
getString.prototype.rmdupl=function(){
  //
  var str = this.str.toString();
  // console.log('ops -> remove Duplication is running' + ' ' + str);
  // console.log(str.length);
  // var newStr=[];
  // for(i=0;i<str.length-1;i++)
  // {
  //   newStr.push(str[i]);
  //
  //   for(j=1;j<str.length-1;j++)
  //   {
  //     console.log('for loop newstr -> ' + newStr[j]);
  //     if (newStr[i]===str[j])
  //       {
  //         console.log(`if block ${newStr[i]} and str  -> ${str[j]}`);
  //         newStr.pop();
  //       }
  //   }
  //       console.log('newstr is ' + newStr[i]+ ' and i is ' + i + ' and str is ' + str[i]);
  //
  // }
  // console.log(newStr)

}


ops.rmdupl('tttthhhijkttk');
//var result = getString('thsisiti');
