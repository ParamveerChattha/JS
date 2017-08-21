var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var age = []
for (i in myObj){
 if (myObj[i].occupation == "Programmer")
 {
   console.log (myObj[i]);
 }
age.push(myObj[i].age);
}
age.sort();
age.reverse();
console.log(age);
for (i in myObj){
  for (j in myObj){
    if (age[i]==myObj[j].age)
    {
      console.log(myObj[j]);
    }
  }
}
