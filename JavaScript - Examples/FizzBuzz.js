/**
 * FizzBuzz Game 
 * Fizz buzz is a group word game for children to teach them about division.[1] 
 * Players take turns to count incrementally, replacing any number divisible by    
 * three with the word "fizz", and any number divisible by five with the word "buzz".
 * 
 * Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 
 */

var outPut = [];
var count = 1;

function fizzBuzz(){
     if(count % 3 === 0 && count % 5 === 0){
           outPut.push("FizzBuzz");
           }
     else if(count % 3 === 0){
           outPut.push("Fizz");
           }          
     else if(count % 5 === 0){
           outPut.push("Buzz");
           }                             
      else{
         outPut.push(count);        
     }
    count++;
     console.log(outPut);           
}
