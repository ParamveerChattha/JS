/*Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

/*
var recipe = function(title,servings,ingredients){
  this.title=title;
  this.servings=servings;
  this.ingredients=ingredients[]
}
var make = recipe();
console.log(make('goha',4,[kutta, linidi, tooddi]))
*/

function person(Name,Class,Section){
  this.name=Name;
  this.class=Class;
  this.section=Section;
//  console.log("function invoked");
  this.details = function(){
    return this.name + this.class + this.section
  }
}

var Binda = new person('Bindu','9','C');
console.log(Binda.details());
