import assert from 'assert';
//This condition checks if a number is prime and returns true if it is a prime number
function isPrime(num) {
  // Pre-conditions
  assert(num > 1, "Number is less than 2");
  assert(typeof num === 'number', "Argument is not a number");
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
//This is a function to generate specific number of  prime numbers staring from 2
function generatePrimeSeries(count){
  assert(typeof count === 'number', "Argument is not a number");
  assert(count > 0, "Count is less than 0");
  let start=2;
  const primesNumbers=[];
  while(primesNumbers.length<count){
   if(isPrime(start)) {
    primesNumbers.push(start);
   }
   start++;
  }
  return primesNumbers;
}
// Post-conditions positive conditions for isPrime()
assert(isPrime(2), "Is not a prime Number");
assert(isPrime(3), "Is not a prime Number");
assert(isPrime(4) === false, "Is a prime number");
assert(isPrime(9) === false, "Is a prime number");
assert(isPrime(29),"Is not a prime number")
//negative conditions that throws exception
assert(isPrime(-3));
assert(isPrime(" "));
//post conditions for generatePrimeSeries
assert.deepStrictEqual(generatePrimeSeries(5),[2,3,5,7,11],"The output of generatePrimeSeries is in correct");
assert.deepStrictEqual(generatePrimeSeries(3),[2,5,7,9,11],"The output of generatePrimeSeries is in correct");
