var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

var libobj = JSON.stringify(library);
var libstring = (JSON.parse(libobj));
console.log(libstring);
console.log(`---------------------------------------------------------`);
console.log(libobj);
console.log(libobj.title);
console.log(libstring.title);
