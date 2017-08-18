var arrays = function(arr1,arr2){

  this.arr1=arr1;
  this.arr2=arr2;
  console.log(this.arr1 + ' ' + this.arr2)

}
var arr1= [3,5,8,5,9]
var arr2=[4,6,9,4,0,3,1]
var arraycall = new arrays()
