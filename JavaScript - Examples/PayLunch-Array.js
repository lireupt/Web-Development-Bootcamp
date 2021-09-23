/**
 * Whos paying the lunch today,
 * Two solutions
 */

//First solution
var names = ["Angela","Helder"];

function whosPaying() {
    
/******Don't change the code above*******/
     
 console.log(names);
    //Write your code here.
 var numberOfPeople = names.length; 
 var numberPositon = Math.floor(Math.random() * numberOfPeople);
 var randomPreson = names[numberPositon];
 return randomPreson + " is going to buy lunch today"
  
/******Don't change the code below*******/    
}

// Second solution  
function whosPaying(names) {
    //Write your code here.
    
 var numberPositon = names[Math.floor(Math.random() *names.length)];
 return numberPositon + " is going to buy lunch today"
 
/******Don't change the code below*******/    
}
