var myObj = [5, [22], [[14]], [[4]],[5,6]]
var newarr=[];

function flat(arr)
{
j=0;
  for (i in arr)
  {
    if(typeof(myObj[i]) === "object")
      {
        flat(myObj[j]);
      console.log('obj discovered');
    }
    else {
      newarr.push(myObj[i]);
      j=j+1;
    }
  }
}
var X= [flat(myObj)];
console.log(newarr);
//console.log(X)
