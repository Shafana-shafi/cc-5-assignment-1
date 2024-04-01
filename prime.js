import assert from 'assert';
//This condition checks if a number is prime and returns true if it is a prime number
function isPrime(num) {
  // Pre-conditions
  assert(num > 1, "Argument must be greater than 1");
  assert(typeof num === 'number', "Argument must be a number");
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// Post-conditions positive conditions for isPrime()
assert(isPrime(2), "Is a prime Number");
assert(isPrime(3), "Is a prime Number");
assert(isPrime(4) === false, "Is not a prime number");
assert(isPrime(9) === false, "Is not a  prime number");
assert(isPrime(29),"Is a prime number")
assert(!isPrime(21),"Is not a prime number")
assert.equal(isPrime(99999000001),true,"Is a prime number")
assert.equal(isPrime(67280421310721),true,"Is a prime number")
assert(isPrime(67280421310721),"Is a prime number")
assert(!isPrime(999999999999),"Is not a prime number")
assert(!isPrime(999999000002),"It is not a prime number")
assert.throws(()=>isPrime(-3),Error)
assert.throws(()=>isPrime(0),Error)
//This is a function to generate specific number of  prime numbers staring from 2
function generatePrimeSeries(count){
  assert(typeof count === 'number', "Argument must be a number");
  assert(count > 0, "Argument must be greater than 0");
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
assert.throws(()=>generatePrimeSeries(""),Error);
assert.throws(()=>generatePrimeSeries(-3),Error);
assert.throws(()=>generatePrimeSeries(0),Error);


