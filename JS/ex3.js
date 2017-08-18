function indash(numb){
 var numb = document.getElementById('input').value;
  var numb = numb.toString();
  var result = [numb[0]]

//  var j = typeof(Number(numb[3]));
  for(i=1;i<numb.length;i++){
    if((numb[i-1]%2)==0 && (numb[i]%2)==0)
      {
//    alert(numb[i]);
//  console.log('if runs')
console.log(`if --> ${result}`);
      result.push('-');
      result.push(numb[i]);

console.log(`if --> ${result}`);

      }
    else{
//      console.log(`else runs ${numb[i]}`);
console.log(`elese --> ${result}`);
      result.push(numb[i]);
      }
      }
//      console.log('for ended')
    result = result.join('');
//  return result;
  alert(result);

}
//var a= indash(4444455588);
//console.log(a);
