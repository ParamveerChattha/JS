var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
jsonStr.replace({':':',',',':':'});
var jsonobj= JSON.parse(jsonStr);
var newjsonobj=function swap(jsonobj){
  var revs={};
  for(var key in json){
      revs[json[key]] = key;
  }
  return revs
}
console.log(newjsonobj);
console.log(jsonobj);
for (i in jsonobj){

  console.log (`${jsonobj[i].Book}`)
}
