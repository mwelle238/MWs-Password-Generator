// Assignment code here
function generatePassword() {
  // get password criteria
  var needsLower = confirm("Do you need at least 1 Lowercase letter?");
  var needsUpper = confirm("Do you need at least 1 Uppercase letter?");
  var needsNumber = confirm("Do you need at least 1 number?");
  var needsSpecial = confirm("Do you need at least 1 special character?");
  var pwd = '';

  do {
    var passwordLength = prompt("Enter password length 8-128:");
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
  
  // have console display criteria
  console.log(needsLower);
  console.log(needsUpper);
  console.log(needsNumber);
  console.log(needsSpecial);
  console.log(passwordLength);

  // define character sets
  var lowers = 'abcdefghijklmnopqrstuvwxyz';
  var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var nums = '0123456789';
  var specialChars = '!@#$%^&*()-_=+?<>.,';
  var allChars = lowers + uppers + nums + specialChars;
  
  /* I will be adding 1 of each of the required characters to the beginning of the pwd string, 
   then filling it with random characters from all sets
   then randomizing the order of the string */
  
  // adding required characters
  if (needsLower)
    pwd += lowers.charAt(Math.floor(Math.random()*lowers.length));
  if (needsUpper)
    pwd += uppers.charAt(Math.floor(Math.random()*uppers.length));
  if (needsNumber)
    pwd += nums.charAt(Math.floor(Math.random()*nums.length));
  if (needsSpecial)
    pwd += specialChars.charAt(Math.floor(Math.random()*specialChars.length));

  while(pwd.length < passwordLength){
    pwd += allChars.charAt(Math.floor(Math.random()*allChars.length));
  }

  // log pwd in console
  console.log(pwd);

  // randomize pwd
  var scramble = function (x) {
    var ss = '';
    var rand = 0;
    while (x.length > 0) {
      tmp = '';
      rand = Math.floor(Math.random()*x.length);
      ss += x.charAt(rand);
      for (var i = 0; i<x.length; i++) {
        if (i != rand) {
          tmp += x.charAt(i);
        }
      }
      x = tmp; 
    }
    console.log(ss);
    return ss;
  }

  return scramble(pwd);
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

