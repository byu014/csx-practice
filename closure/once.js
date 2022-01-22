const once = cb => {
  let output = null;
  return (input) => {
    if(output){
      return output;
    }
    output = cb(input);
    return output;
  }
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});


console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7

/*
Write a function once that accepts a callback as input and returns a function.
When the returned function is called the first time, it should call the callback and return that output.
If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/
