// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharArray = ["!", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "/", "?", "+", "=", "-", "_", ";", ":", "<", ">", "@", "`", "~", "{", "}", "|"];

function writePassword() {

  // This is where the user chooses the length of the password
  var lengthPassword = prompt("How long would you like your password to be? Please type a number between 8 and 128.");
    var isCorrectLength = false;
    while(isCorrectLength === false){
      if (lengthPassword >= 8 && lengthPassword <= 128){
        isCorrectLength = true;
      }
      else{
        lengthPassword = prompt("That answer is not sufficient. Please type a number between 8 and 128.");
      }
    }

  // This is where the user chooses the uppercase letter to include in the password
  var upperCase = prompt("Please type in an uppercase letter to include in your password.");
  var isUpper = false;
    while(isUpper === false) {
      var forStatement = false;
      for(var i = 0; i < upperCaseArray.length; i++){
        if (upperCase === upperCaseArray[i]){
          forStatement = true;       
        }
      }
      if (forStatement === false){
        upperCase = prompt("That answer is not sufficient. Please type in an uppercase letter.");
      }
      else{
        isUpper = true;
      }
    }

  // This is where the user chooses the lowercase letter to include in the password
  var lowerCase = prompt("Please type in a lowercase letter to include in your password.");
    var isLower = false;
    while(isLower === false) {
      var forStatement = false;
      for(var i = 0; i < lowerCaseArray.length; i++){
        if (lowerCase === lowerCaseArray[i]){
          forStatement = true;       
        }
      }
      if (forStatement === false){
        lowerCase = prompt("That answer is not sufficient. Please type in a lowercase letter.");
      }
      else{
        isLower = true;
      }
    }

    // This is where the user chooses a number to include in the password
  var numberInput = prompt("Please type a number between 0 and 9 to include in your password.");
  var isNumber = false;
    while(isNumber === false) {
      var forStatement = false;
      for(var i = 0; i < numberArray.length; i++){
        if (numberInput === numberArray[i]){
          forStatement = true;       
        }
      }
      if (forStatement === false){
        numberInput = prompt("That answer is not sufficient. Please type in a number between 0 and 9 to include in your password.");
      }
      else{
        isNumber = true;
      }
    }

  // This is where the user chooses a special character to include in the password
    var specialChar = prompt("Please type in a special character from the following list to include in your password: !, #, $, %, ^, &, *, (, ), ., /, ?, +, =, -, _, ;, :, <, >, @, `, ~, {, }, |.");
    var isChar = false;
    while(isChar === false) {
      var forStatement = false;
      for(var i = 0; i < specialCharArray.length; i++){
        if (specialChar === specialCharArray[i]){
          forStatement = true;       
        }
      }
      if (forStatement === false){
        specialChar = prompt("That answer is not sufficient. Please type in a special character from the following list to include in your password: !, #, $, %, ^, &, *, (, ), ., /, ?, +, =, -, _, ;, :, <, >, @, `, ~, {, }, |.");
      }
      else{
        isChar = true;
      }
    }

  function generatePassword(){
    var firstHalf = upperCase.concat(lowerCase).concat(numberInput).concat(specialChar);
    return firstHalf;
  }
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
