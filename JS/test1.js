/*function test(){

console.log('test');
}
test.language= 'punjabi';
console.log(test.language);
console.log(test);
*/
/*
var person = {
  name:'todd',
    address: {
    street:'HSR',
    country: {
      city : 'CHD',
      city2: 'bnglr'
    }
    }
  }
console.log(Object.value(person.address.country));
 //.value + ' '  + person.address.country.city2 );
*/
//var x;
var arr = [3,5,7,'here', x= (function(){
  return 'check'
  }())
]
var arrJson= JSON.parse(JSON.stringify(arr));
console.log(arrJson);
console.log(Object.keys(arrJson)+" "+Object.values(arrJson));
