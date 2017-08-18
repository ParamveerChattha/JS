function indash(){
  var numb = document.getElementById('input').value;
  var numb = numb.toString();
  var result = [numb[0]]

//  var j = typeof(Number(numb[3]));
  for(i=0;i<numb.length-1;i++){
    if((numb[i]%2)==0)&&(numb[i+1]%2)==0))
      {
//    alert(numb[i]);
      result.push('-');
      result.push(numb[i]);
      }
    else{
      result.push(number[i]);
      }
      }
    result = result.join('');
  alert(numb);

}
