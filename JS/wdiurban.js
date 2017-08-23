var fs = require('fs'); // adding fs module
var readline = require('readline'); // adding readline module
path = '../inputdata/indicators.csv';
// var read_stream = fs.createReadStream('');
var rl = readline.createInterface({
    input: fs.createReadStream(path)
      });

let country;
let type;
let year;
let value;
let count=0;
let result=[]
//var i=0;
/* rl.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
}); */
rl.on('line', function(line){
//    temp.push(line.split('\n'));
//    console.log(temp);
  line= line.split(',');
  if(count===0){
    country = line.indexOf('CountryName');
    type = line.indexOf('IndicatorName');
    year = line.indexOf('Year');
    value = line.indexOf('Value');
  //  console.log(country+ ' '+ type+ ' ' + year+ ' ' +value);
    count ++;  }
    if(line[country]==='India'){
    result.map(function(element){
              element['country']=line[country];

              if(line[type]==='Urban population')
              {
                element['Urban population']= line[value];
              }
              if(line[type]==='Rural population')
              {
                element['Rural population']= live[value] ;
              }
            }
        });
      }

    });


rl.on('close', function(close){
  console.log('JSON written successfully')
  console.log(result[9]);
});


//    console.log(result[9]);


//

convert= function(year){

  if(isNaN(year)){
    throw new Error ('Not a number');
  }
  else{
      return 'JSON written successfully';
    }
}
module.exports = convert;
