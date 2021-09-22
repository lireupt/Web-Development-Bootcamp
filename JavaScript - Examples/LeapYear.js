/**
*Function to check if the year is a Leap Year
*Explanation URL: https://www.youtube.com/watch?v=xX96xng7sAE
*/
function isLeap(year) {
     
    //if statement
     //Write your code here.    
     if (year % 4 === 0){
         if (year % 100 === 0){
             if  (year % 400 === 0){
                return "Leap year";
                   }else{
                      return "Not leap year.";}
                        }else{
                           return "Leap year";} 
                             }else{
                                return "Not leap year.";}
 }
 isLeap(1981);