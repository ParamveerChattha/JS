/*
function  error(message){
  this.message =message;
  this.name="UserException"
}

error.prototype.toString= function(){

  return ` $(this.name) : $(this.message) `;
}


throw new error("value too high")
*/
function mName(mo){
  let months= ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
  mo =mo-1;
  if (month[mo]){
    return month;
  }
  else {
    throw 'invalidmonthno';
  }
}

try{

  let monthName = new mName(6);
}
catch(e){
  monthName='unkown';
  logMyErrors(e);
}
