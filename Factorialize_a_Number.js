function factorialize(num) {
    factorial = num;
    for (i = num -1; i >0 ; i = i-1) {
        factorial = factorial*i;
    }
    return factorial;
  }
  
  console.log(factorialize(5));

  //why is this not working on freecodecamp?
  //it works fine for me
  //remember: Only integers greater than or equal to zero will be supplied to the function.

