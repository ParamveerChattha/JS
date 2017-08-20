var charcount = function(str,val){
count=0
console.log(str + ' ' +val);
for (i in str){
  if (val===str[i]){
  count=count+1;
  //console.log(count);
  }
}
return count;

}
a='checkcc';
b='c';
console.log(charcount(a,b));
