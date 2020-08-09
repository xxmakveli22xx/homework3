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
  
 // this will create a for loop to use Math.random to pick a char out of the array
  for(var i = 0; i < passwordSize; i++){
    random = choice[Math.floor(Math.random()* sizeArry)];
    password += random;
  }
   return  password;
}


//this will create the strings and turn them into arrays
var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppArray = uppCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowArray   = lowerCase.split("");
var num = "01234567890123456789";
var numArray = num.split("");
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var specialArray = special.split("");




//This will grab the user data for the password critera
alert("Please enter in the password critera");
var charLong = prompt("How many characters would you like to enter?(8-128)");
 if(charLong >= 8 && charLong <= 128){
      alert("Password size is "+ charLong + " characters long");
    }else {
      charLong = prompt("Please enter a number of characters between 8-128. ");
    }

var numbers = prompt("Would you like to add numbers to your password? (y/n)");
var upperCase = prompt("Would you like to add upper case letters? (y/n)");
var lowerCase = prompt("Would you like to add lower case letters? (y/n)");
var specialChar = prompt("Would you like to add special characters?(y/n)");
var choice = [];


//if true will add the selection at the end of the array
if(numbers === 'y'){
   numbers = true;
  choice = choice.concat(numArray);

}
if(upperCase ==='y'){
   upperCase = true;
   choice = choice.concat(uppArray);


}

if(lowerCase ==='y'){
  lowerCase = true;
  choice = choice.concat(lowArray);

}

if(specialChar ==='y'){
  specialChar = true;
  choice = choice.concat(special);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





