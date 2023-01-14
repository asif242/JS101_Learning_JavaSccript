for (let horizental=1; horizental<=10; horizental++){
  let a = "";
  for (let vertical=1; vertical<=10; vertical++){
    if (horizental==1 || horizental==10){
      a = a+"*";
    }
    else if(vertical==1 || vertical==10){
      a = a+"*";
    }
    else {
      a = a+" ";
    }
  }
  console.log(a);
}