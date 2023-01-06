// Assignment code here
function generatePassword() {
  // get password criteria -- if they need a type of character, then obviously they are allowed.  all allowed by defult
  var canBeLower = true;
  var canBeUpper = true;
  var canBeNumber = true;
  var canBeSpecial = true;
  
  var needsLower = confirm("Do you need at least 1 Lowercase letter?");
  if(!needsLower) {
    canBeLower = confirm("Do you want to allow lowercase letters in your password?");
  }
  var needsUpper = confirm("Do you need at least 1 Uppercase letter?");
  if(!needsUpper) {
    canBeUpper = confirm("Do you want to allow uppercase letters in your password?");
  }
  var needsNumber = confirm("Do you need at least 1 number?");
  if(!needsNumber) {
    canBeNumber = confirm("Do you want to allow numberss in your password?");
  }
  var needsSpecial = confirm("Do you need at least 1 special character?");
  if(!needsSpecial) {
    canBeSpecial = confirm("Do you want to allow special characters in your password?");
  }
   var pwd = '';

  // get password length, repeat the question if # is too small or if text is input
  do {
    var passwordLength = prompt("Enter password length 8-128:");
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
   // if they say no to all, default to allowing only lowercase
   
   if (!canBeLower && !canBeUpper && !canBeNumber && !canBeSpecial) {
    alert("You have not allowed any characters, defaulting all to lowercase");
    canBeLower = true;
  } else {
    var criteria = 'Your Password Criteria:\n';
    
    if (needsLower) {
      criteria += 'Lowercase letters are required.\n';    
    } else if (canBeLower) {
      criteria += 'Lowercase letters are allowed.\n';
    } else {
      criteria += 'Lowercase letters are not allowed.\n';
    }

    if (needsUpper) {
      criteria += 'Uppercase letters are required.\n';    
    } else if (canBeUpper) {
      criteria += 'Uppercase letters are allowed.\n';
    } else {
      criteria += 'Uppercase letters are not allowed.\n';
    }

    if (needsNumber) {
      criteria += 'Numbers are required.\n';    
    } else if (canBeNumber) {
      criteria += 'Numbers are allowed.\n';
    } else {
      criteria += 'Numbers are not allowed.\n';
    }

    if (needsSpecial) {
      criteria += 'Special Characters are required.\n';    
    } else if (canBeSpecial) {
      criteria += 'Special Characters are allowed.\n';
    } else {
      criteria += 'Special Characters are not allowed.\n';
    }
    alert(criteria);

  }
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
  var specialChars = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var allowedChars = '';
  if (canBeLower)
    allowedChars += lowers;
  if (canBeUpper)
    allowedChars += uppers;
  if (canBeNumber)
    allowedChars += nums;
  if (canBeSpecial)
    allowedChars += specialChars;
 
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

  // filling out characters with a selection from all subsets  
  while(pwd.length < passwordLength){
    pwd += allowedChars.charAt(Math.floor(Math.random()*allowedChars.length));
  }

  // log pwd in console
  console.log(pwd);

  // scramble pwd  -- add random character to scrambled string (ss), parse the input string adding all letters to new string except the random letter, loop until all characters have been re-ordered, return ss.
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

