for (let i=1; i<=10; i++){
  console.log(i);
    let number = i;
    let count = 0;
  for (let j=1; j<=number; j++){
    if (number%j==0){
      count++;
    
    }
  }
    if(count==2){
      console.log("Prime number")
    }
  else {
    console.log("Not a Prime");
  }
}