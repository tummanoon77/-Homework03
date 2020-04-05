



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Generetor functions -
// Characters have 26charactors , lowercaseCode  start at number 97
//uppercaseCode start at number 65
//numbers have 10 numbers, code start at number 48
//specialCharacters 
alert("Hello welcome to secure generate password")
var length = prompt("How many characters will your password be? Enter a number between 8 and 128");
var pl = length ;

if (8<length && length<128){
  alert("Thank you");
}else if (length<8 && length>128){
  alert("please enter a number between 8 and 128" );
 
}else{
  alert("please enter a number between 8 and 128");

}

var charType = prompt("Enter a character type: symbol, number, uppercase, lowercase.");


function getRandomLower(){
  return String.fromCharCode(Math.floor( Math.random()*26)+97);
  }
function getRandomUpper(){
    return String.fromCharCode(Math.floor( Math.random()*26)+65);
    }
function getRandomNumber(){
      return String.fromCharCode(Math.floor( Math.random()*10)+48);
            }
function getRandomSymbol(length){
      var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var randomSymbol = "";
      if (length > 0){
        for (var i=0 ;i<length; i++){
          randomSymbol += symbols.charAt(Math.floor( Math.random() * symbols.length));
        }
      }
      return randomSymbol;
    }

    