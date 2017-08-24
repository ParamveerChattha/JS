var fs = require('fs'); // adding fs module
var readline = require('readline'); // adding readline module
path = '../inputdata/indicators.csv';
// var read_stream = fs.createReadStream('');
var rl = readline.createInterface({ //interface to read each line until eof
  input: fs.createReadStream(path)
});
// created required variables
let country;
let type;
let year;
let value;
let count=0;
let result=[];
let ruralPop=0;
let urbanPop=0;
let ruralPer=0;
let urbanPer=0;

//var i=0;
/* rl.on('data', (chunk) => {
console.log(`Received ${chunk.length} bytes of data.`);
}); */
rl.on('line', function(line){
  //    temp.push(line.split('\n'));
  //    console.log(temp);
  line= line.split(',');
  if(count===0){ // to run it only once of index row
    country = line.indexOf('CountryName'); // below are the columns indexes taken out by the names
    type = line.indexOf('IndicatorName');
    year = line.indexOf('Year');
    value = line.indexOf('Value');
    //  console.log(country+ ' '+ type+ ' ' + year+ ' ' +value);
    count ++;  }
    if(line[country]==='India'){ // filter as per requirement
      //    if(typeof(line[year])===Number){
      if(line[type] === 'Urban population')
      //        console.log(line[value] + ' ' + line[type] + ' year is ' + line[year]);
      urbanPop=(line[value]);
      if(line[type]==='Rural population')
      //        console.log(line[value] + ' ' + line[type] +' year is ' + line[year]);
      ruralPop=(line[value]);
      if(ruralPop!=0 && urbanPop!=0) // condition until both populations are not found while traversing line  by line.
      {
        //        console.log('checking values of rural and urban ' + ruralPop + ' ' + urbanPop );
        var totPop =(Number(ruralPop)+Number(urbanPop)); // total population for one particular year
        ruralPer=Number((ruralPop)/(totPop))*100; // formula
        ruralPer = ruralPer.toFixed(2); // adding deciaml limit of 2
        urbanPer=Number((urbanPop)/(totPop))*100;
        urbanPer=urbanPer.toFixed(2);
        //      console.log(totPop+' Rural pop '+ruralPop+' Urban'+urbanPop+' RualPerc '+ruralPer+' urban is '+ urbanPer);
        /*  the below code will push the result into the variable as an object which will be written into JSON format/file later */
        result.push({"country":line[country],"rural_pop":ruralPer,"year":line[year],"urban_pop":urbanPer})
        ruralPop=0;
        urbanPop=0;
      }

      //      console.log(ruralPer + ' is rural percent');
      //      console.log(urbanPer + ' is urban percent');
    }
  });


  rl.on('close', function(close){
    //  console.log(result);

    //  console.log(result[9]);
    // writting the object into file
    fs.writeFile('./widurban.json',JSON.stringify(result),(err) =>{
      if(err)
      throw err;
      console.log('file has been saved');
      console.log('JSON written successfully')
    });
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
