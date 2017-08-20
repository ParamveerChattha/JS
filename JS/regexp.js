var str = 'abc_xyz123@jongo.com12'

var expcheck =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if(expcheck.test(str)){
  console.log(`SUCCESSS`);
}
else{
  console.log('naa kaka na');
}
