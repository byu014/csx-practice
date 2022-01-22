// ADD CODE HERE
function createFunctionWithInput(input) {
  return function(){
    return input
  }
}

const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'

/*
Create a function createFunctionWithInput that accepts one input and returns a function.
When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.
*/
