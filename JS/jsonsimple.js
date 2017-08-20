var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

//var library = JSON.stringify(library);
//var libstring = (JSON.parse(libobj));
//console.log(libstring);
//console.log(`---------------------------------------------------------`);
//console.log(libobj);
//console.log(library.title);
//console.log(library.length);
//console.log(libstring['title']);
var title=[];
var arr=[];
for(i=0; i<library.length;i++){
  //console.log(library[i].title);
  title.push(library[i].title);
  }
  title.sort();
  console.log(title);
//  console.log(title);
    for(var i in library){
      for (var j in library){
      if(library[j].title===title[i]){
        arr.push(library[j]);
      }
    }
  }
console.log(arr);
//
//
// function cs(x,y)
//  {
//   if (x.author < y.author ){
//     console.log(x.author + ' ' + y.author) ;
//     return -1;
//   }
//   if (x.author > y.author)
//     return 1;
//   return 0;
//  }
//
// console.log(library.sort(cs));
