function isPrime(number){ 

    if(number<2) 
     return false;     
    for( let i=2;i<number;i++) 
    
    if(number%i==0) 
        return false; 
    return true; 
    
    } 

    const  arr = [2,3,9,11,8,15,4,17 ]; 

   
   var prime = array.filter(a=>isPrime(a))
   console.log(prime);

   var prime = [];
   arr.forEach(function(a) {
        if(isPrime(a)) prime.push(a);
   });

   arr.forEach(function(a) {
       
   })
        

   console.log(prime);
   