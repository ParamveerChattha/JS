var str= 'webmaster';
strarray=[]
for (i in str)
{
  //console.log(str[i]);
  strarray.push(str[i]);
}

console.log(strarray.join(''));

var j= strarray.sort();
//console.log(j.join());
j=j.toString();
console.log(typeof(j));
console.log(j.replace(/,/g, ""));
//console.log(j.join());
