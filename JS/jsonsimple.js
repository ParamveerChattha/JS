var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

//var library = JSON.stringify(library);
//var libstring = (JSON.parse(libobj));
//console.log(libstring);
console.log(`---------------------------------------------------------`);
//console.log(libobj);
console.log(library.title);
console.log(library.length);
//console.log(libstring['title']);
for(i=0; i<library.length;i++){
  console.log(library[i].title);
}
