function reverseString(str) {


    str_len = str.length ;
    str_arr = [];
    rev_str = '';

  
    for(i = str_len ; i > -1 ; i = i-1 ) {
      str_arr.push(str[i])
    }
    str_arr.shift();

    for (i = 0 ; i < str_len ; i ++ ) {
      rev_str = rev_str + str_arr[i];
    }
    return rev_str;

  }
console.log(reverseString("hello"));


//Not sure why this does not work on freecodecamp's website. solution works well for me. 
