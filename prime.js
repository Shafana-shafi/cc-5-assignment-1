console.log("WELCOME TO CHECK PRIME FUNCTION")
function assert(condition,message){
   if(!condition){
    console.assert(message)
    throw(message);
   }
}
function checkPrime(a){
  assert(typeof a ==='number',"Argument is not a number");
  assert(a>1,"Is not a prime number");
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0)
          return false;
        }console.log("Is a prime number");
        return true;
}
function prime(a){
    assert(typeof a ==='number',"Argument is not a number");
    assert(a>1,"Is not a prime number");
    assert(checkPrime(a),"Is not a prime number");
  }

assert(prime(10))