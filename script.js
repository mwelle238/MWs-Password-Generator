// Assignment code here
function generatePassword() {
  var needsLower = confirm("Do you need at least 1 Lowercase letter?");
  var needsUpper = confirm("Do you need at least 1 Uppercase letter?");
  var needsNumber = confirm("Do you need at least 1 number?");
  var needsSpecial = confirm("Do you need at least 1 special character?");
  var pwd = '';

  do {
    var passwordLength = prompt("Enter password length 8-128:");
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
  
  console.log(needsLower);
  console.log(needsUpper);
  console.log(needsNumber);
  console.log(needsSpecial);
  console.log(passwordLength);

  var lowers = 'abcdefghijklmnopqrstuvwxyz';
  var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var nums = '0123456789';
  var specialChars = '!@#$%^&*()-_=+?<>.,';
  var allChars = lowers + uppers + nums + specialChars;
  
  console.log(allChars);
  
  for (var i = 0; i < passwordLength; i++){
    pwd += allChars.charAt(Math.floor(Math.random()*allChars.length));
  }

  console.log(pwd);

  
     


  }
 
  return pwd;
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

