var arrays = function(arr1,arr2){

  this.arr1=arr1;
  this.arr2=arr2;
  //console.log(this.arr1 + ' ' + this.arr2)


}
var arr1= [3,5,8,5,9]
var arr2=[4,6,9,4,0,3,1]
var arraycall = new arrays(arr1,arr2);

arrays.prototype.arraydiff=function(){
    var set1=this.arr1
    var set2=this.arr2
    console.log( set1 + ' - - ' + set2);
    var set_1=new Set(set1);
    var set_2=new Set(set2);
    console.log('sets are' + ' ' + set_1 + '  ' + set_2);
//    var arrayU= _.union(arr1,arr2);

}

arraycall.arraydiff();
