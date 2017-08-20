var details= {
  david:80,
  vinod:88,
  divya:62,
  ishita:34,
  thomas:78
  }
  var sum=0
  j=0
  for (i in details){
    j=j+1;
  sum  = details[i] + sum;;

  }
//  console.log(sum);
//  console.log(j);
  var avg= (sum/j);
console.log(avg);
function grades(marks){

  if (marks>90)
    console.log('A');
  else if (marks > 80)
    console.log('B');
  else if (marks>70)
    console.log('C');
  else if (marks>60)
    console.log('B');
  // switch(marks){
  //   case (marks<60):
  //     console.log('F');
  //     break;
  //   case (marks<70):
  //   console.log('D');
  //     break;
  //   case (marks<80):
  //     console.log('C');
  //       break;
  //   case(marks <90):
  //     console.log('B');
  //     break;
  //   default:
  //     console.log('chookte');
  // }

}
for (i  in details){
  marks = details[i]
  console.log(marks);
  grades(marks);

}
