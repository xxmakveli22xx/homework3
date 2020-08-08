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
  var symbols = "!@#$%^&*(){}";
  var sizeArry = choices.length;
  
  
  
  for(var i = 0; i < passwordSize; i++){
    
    choices[Math.floor(Math.random()*sizeArry)];
    console.log("this is random choice " + choices[Math.floor(Math.random()*sizeArry)]);
   
    random = String.fromCharCode((Math.floor(Math.random()*26) +97));

  
    password += random;
    console.log("this is password "+ password);

 
  }
  
  return  password;
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


if(numbers === 'y'){
   numbers = true;

}else {
  numbers = false;
}

if(upperCase ==='y'){
   upperCase = true;

}else {
  upperCase = false;
}

if(lowerCase ==='y'){
  lowerCase = true;

}else {
 lowerCase = false;
}

if(specialChar ==='y'){
  specialChar = true;
  //console.log("inside the true statement "+ specialChar);
}else {
 specialChar = false;
}

//console.log("this is special answer " +specialChar);
// gives us all the true values so we can see which critera is needed
const choices =[{numbers}, {upperCase}, {lowerCase}, {specialChar}].filter (choice => Object.values(choice)[0]);

console.log("True, false choices : ", choices);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//(Math.floor(Math.random()*26) + 97);
//(math.floor(math.random()*26) + 65);
//(math.floor(math.random()*10) + 48);