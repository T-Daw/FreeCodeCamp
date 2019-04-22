function findLongestWordLength(str) {

    str_arr = str.split(' ');
    len_arr = [];

    for (i = 0; i < str_arr.length; i++) {
        len_arr.push(str_arr[i].length);
    }
    return console.log(Math.max(...len_arr));
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");


  // FreeCodeCamp Link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
  // My code works for all the test scenarios but FreeCodeCamp does not mark this as correct. 