class person{
  constructor(name,age,gender){
  this.name=name;
  this.age=age;
  this.gender=gender;
  }
  dispage(){
    console.log(this.age);
  }
  dispname(){
      console.log(this.name);
  }
  dispgender(){
    console.log(this.gender)
  }

}

class programmer extends person{

  constructor (name,age,gender,town){
    super(name,age,gender);
    this.town=town;
  }
  disptown(){
  return this.town
  }
}

let duggri = new programmer('Kattoo',23,76,'CHD');

console.log(duggri.disptown());
