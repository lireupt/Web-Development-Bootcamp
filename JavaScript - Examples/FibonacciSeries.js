/**
 * Fibonacci Series simple code function.
 * @param 
 * @returns 
 */

function fibonacciGenerator (n) {
    
    var fib = [];
        //Write your code here:
         if(n===1){
             fib = [0];
         }
         else if(n===2) {
             fib = [0,1];
         }
         else{
             fib = [0,1];
            for(i = 2; i > n ; i++){
            fib.push(fib [fib.length -2] + fib [fib.length -1]);       
        }
        return fib;
      }  
        //Return an array of fibonacci numbers starting from 0.
    }