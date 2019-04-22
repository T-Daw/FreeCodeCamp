function confirmEnding(str, target) {
    str_arr = str.split(' ');
    str_arr.splice(0,(str_arr.length - 1));
    str_last_word_arr = str_arr[0].split('');
    len_str_last_word_arr = str_last_word_arr.length;
    target_len= target.length;
    last_ltrs= str_last_word_arr.slice((len_str_last_word_arr - target_len));
    last_ltrs_str = last_ltrs.join('');
    if (last_ltrs_str == target) {
     return true;
    }
   else return false;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on"));
  console.log(confirmEnding("Connor", "n"));
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
  console.log(confirmEnding("He has to give me a new name", "name"));
  console.log(confirmEnding("Open sesame", "same"));
  console.log(confirmEnding("Open sesame", "pen"));
  console.log(confirmEnding("Open sesame", "game"));
  console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
  console.log(confirmEnding("Abstraction", "action"));


// FreeCodeCamp Link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
// My code works for all the test scenarios. 
// However, FreeCodeCamp does not keeps on giving error "str_arr is not defined"
