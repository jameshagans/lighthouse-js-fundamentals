//isEven takes as its parameter a number and returns a Boolean value representing whether or not the number is even.
const isEven  = function (num) {
  return num % 2 === 0;
}


//using the function with a consitional statement 
if(isEven(5)){
  console.log('numer is an even number');
} else{
  console.log('Uneven');
};



const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//you don't need to set your retuen values from functions to vaiables to use them

const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));