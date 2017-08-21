var myObj = [5, [22], [[14]], [[4]],[5,6]]

temp =((myObj.toString()));
var newObj = temp.split(',').map(Number);
console.log(newObj);
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

  for (i in arr)
  {
    return  (myObj[i]);

  }
}
var X= [flat(myObj)];
console.log(X)
*/
