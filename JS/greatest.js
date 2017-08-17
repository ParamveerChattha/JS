function greatest()
{
  var numbers= document.getElementById("input").value;
//  var B= typeof(numbers);
  var arr = numbers.split(",");
  a=arr[0];
  for (i=1;i<(arr.length);i++)
  {
    if (arr[i] >a){
      a=arr[i];
    }
  }
  alert(a);
}
