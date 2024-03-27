let flag=0;
function assert(condition,message){
    if(!flag){
    console.log("WELCOME TO CHECK PRIME FUNCTION")
    }
   if(!condition){
    console.assert(message)
    throw(message);
   }
   flag=1;
}

function checkPrime(a){
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0)
          return false;
        }
        console.log("Is a prime number")
        return true;
}
function prime(a){
    assert(typeof a ==='number',"Argument is not a number");
    assert(a>1,"Is not a prime number");
    assert(checkPrime(a),"Is not a prime number");
  
  }
prime(5);
