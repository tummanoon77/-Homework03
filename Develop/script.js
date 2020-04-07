



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








// var arr
var getPasswordOption = [] ;

// alert hello
alert("Hello welcome to secure generate password")
// while
while (getPasswordOption.length !=5){
var pLength = prompt("How many characters will your password be? Enter a number between 8 and 128");

  if (8<pLength && pLength<128){
    getPasswordOption.push(pLength);
    var doWantUpper = confirm ("Do you want uppercase? " );
          
          getPasswordOption.push(doWantUpper);
    var doWantLower = confirm ("Do you want lowercase?  ");
          
          getPasswordOption.push(doWantLower);
    var doWantSymbol = confirm ("Do you want symbol?  ");
          
          getPasswordOption.push(doWantSymbol);
    var doWantNumber = confirm ("Do you want number ? ");
          
          getPasswordOption.push(doWantNumber);
  }else if (pLength<8 || pLength>128){
  alert("please enter a number between 8 and 128" );
 
  }else{
  alert("please enter a number between 8 and 128");
  }
}
console.log(getPasswordOption);
console.log(typeof pLength);

var length = +pLength.value;
console.log(typeof length);
  var randomFunc = {
  lower : getRandomLower ,
  upper :getRandomUpper,
  number : getRandomNumber,
  symbol : getRandomSymbol
};
console.log (randomFunc);

//Generetor functions -
// Characters have 26charactors , lowercaseCode  start at number 97
//uppercaseCode start at number 65
//numbers have 10 numbers, code start at number 48
// var randomSymbol

function getRandomLower(){
  return String.fromCharCode(Math.floor( Math.random()*26)+97);
  }
function getRandomUpper(){
    return String.fromCharCode(Math.floor( Math.random()*26)+65);
    }
function getRandomNumber(){
      return String.fromCharCode(Math.floor( Math.random()*10)+48);
            }
function getRandomSymbol(){
      var randomSymbol = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return  randomSymbol[Math.floor(Math.random()*randomSymbol.length)];
      }    
    console.log (getRandomSymbol());

    
     
    var pLength = i ;
    function generatePassword(){

      if(getPasswordOption=["i","y","y","y","y"] ){



      }
      
      
      
      
      
      }
      
      