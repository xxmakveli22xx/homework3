// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This is the function to generate the Password 
function generatePassword(){
  var passwordSize = charLong;
  var password= "";
  var random = "";
  
   var sizeArry = choice.length;
  
  choice[1];
  choice[0];
  
  for(var i = 0; i < passwordSize; i++){
    
    //choice[Math.floor(Math.random()*sizeArry)];
   // console.log("this is random choice " + choices[Math.floor(Math.random()*sizeArry)]);
   
    random = choice[Math.floor(Math.random()* sizeArry)];

    password += random;
    console.log("this is password "+ password);

 
  }
  
  return  password;
}


function upperFunc(){
 console.log("inside upper func");
 return String.fromCharCode(Math.floor(Math.random()*26) + 65);
 
}

function lowerFunc(){
  console.log("inside lower func");
  return String.fromCharCode(Math.floor(Math.random()*26) +97);
}

function symbolFunc(){
  return; 
}




//This will grab the user data for the password critera
alert("Please enter in the password critera");
var charLong = prompt("How many characters would you like to enter?(8-128)");
 if(charLong >= "8" || charLong <= "128"){
      alert("Password size is "+ charLong + " characters long");
    }else {
      charLong = prompt("Please enter a number of characters between 8-128. ");
    }

var numbers = prompt("Would you like to add numbers to your password? (y/n)");
var upperCase = prompt("Would you like to add upper case letters? (y/n)");
var lowerCase = prompt("Would you like to add lower case letters? (y/n)");
var specialChar = prompt("Would you like to add special characters?(y/n)");
var choice = [];



if(numbers === 'y'){
   numbers = true;
  // choice = choice.concat("numbers");




}
if(upperCase ==='y'){
   upperCase = true;
   choice = choice.push(upperFunc);


}

if(lowerCase ==='y'){
  lowerCase = true;
  choice = choice.push(lowerFunc);

}

if(specialChar ==='y'){
  specialChar = true;
  choice = choice.concat();
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//(Math.floor(Math.random()*26) + 97);
//(math.floor(math.random()*26) + 65);
//(math.floor(math.random()*10) + 48);