



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

var getPasswordOption = [] ;
for (var i = 0; i < getPasswordOption.length; i++) {
  console.log(getPasswordOption[i]);

}

alert("Hello welcome to secure generate password")
var pl = pLength ;

var pLength = prompt("How many characters will your password be? Enter a number between 8 and 128");

  if (8<pLength && pLength<128){
    getPasswordOption.push(pLength);
    var doWantUpper = prompt ("Do you want uppercase? Enter yes or no" );
          getPasswordOption.push(doWantUpper);
    var doWantLower = prompt ("Do you want lowercase? Enter yes or no ");
       getPasswordOption.push(doWantLower);
    var doWantSymbol = prompt ("Do you want symbol? Enter yes or no ");
    getPasswordOption.push(doWantSymbol);
    var doWantNumber = prompt ("Do you want number ? Enter yes or no ");
    getPasswordOption.push(doWantNumber);
  }else if (pLength<8 || pLength>128){
  alert("please enter a number between 8 and 128" );
 
  }else{
  alert("please enter a number between 8 and 128");
  }



//Generetor functions -
// Characters have 26charactors , lowercaseCode  start at number 97
//uppercaseCode start at number 65
//numbers have 10 numbers, code start at number 48
// var symbols 

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
