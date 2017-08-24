var myObj = [5, [22], [[14]], [[4]],[5,6]]
var newarr=[];


function flat(arr){
temp =((myObj.toString()));
var newObj = temp.split(',').map(Number);
console.log(newObj);
};
flat();
// console.log(typeof(temp));
// for (i in temp){
//   console.log(temp[i]);
// }


// newObj = temp.map(
//   function(newObj){
//     return parseInt(newObj);
//   }
// );

/*
var flat =function(arr)
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
<<<<<<< HEAD
console.log(newarr);
//console.log(X)
=======
console.log(X)
*/
//>>>>>>> fedcd2a52a917394d5eafeeefa34ddd144525975
