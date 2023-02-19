// Assignment code here
function generatePassword() {
  // get password criteria -- require/allowed/prohibited for each type
  do {
    var lowerReq = prompt("Lowercase letters: (R)equired, (A)llowed, (P)rohibited");
    if (lowerReq === null) {
      return; //break out of the function early
    }
    lowerReq = lowerReq.toUpperCase();
  } while (lowerReq != 'R' && lowerReq != 'A' && lowerReq != 'P')
  do {
    var upperReq = prompt("Uppercase letters: (R)equired, (A)llowed, (P)rohibited");
    if (upperReq === null) {
      return; //break out of the function early
    }
    upperReq = upperReq.toUpperCase();
  } while (upperReq != 'R' && upperReq != 'A' && upperReq != 'P')
  do {
    var numberReq = prompt("Numbers: (R)equired, (A)llowed, (P)rohibited");
    if (numberReq === null) {
      return; //break out of the function early
    }
    numberReq = numberReq.toUpperCase();
  } while (numberReq != 'R' && numberReq != 'A' && numberReq != 'P')
  do {
    var specialReq = prompt("Special Characters: (R)equired, (A)llowed, (P)rohibited");
    if (specialReq === null) {
      return; //break out of the function early
    }
    specialReq = specialReq.toUpperCase();
  } while (specialReq != 'R' && specialReq != 'A' && specialReq != 'P')

 var pwd = '';

  // get password length, repeat the question if # is too small or if text is input
  do {
    var passwordLength = prompt("Enter password length 8-128:");
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)

  // if they say no to all, default to allowing only lowercase
   if (lowerReq == 'P' && upperReq == 'P' && numberReq == 'P' && specialReq == 'P') {
    alert("You have not allowed any characters, defaulting all to lowercase");
    lowerReq = 'A';
  } else {
    
  }
  // have console display criteria
  //console.log("lower: " + lowerReq);
  //console.log("upper: " + upperReq);
  //console.log("number: " + numberReq);
  //console.log("special: " + specialReq);
  //console.log(passwordLength);

  // define character sets
  var lowers = 'abcdefghijklmnopqrstuvwxyz';
  var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var nums = '0123456789';
  var specialChars = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var allowedChars = '';
  if (lowerReq == 'A' || lowerReq == 'R')
    allowedChars += lowers;
  if (upperReq == 'A' || upperReq == 'R')
    allowedChars += uppers;
  if (numberReq == 'A' || numberReq == 'R')
    allowedChars += nums;
  if (specialReq == 'A' || specialReq == 'R')
    allowedChars += specialChars;
 
  /* I will be adding 1 of each of the required characters to the beginning of the pwd string, 
   then filling it with random characters from all sets
   then randomizing the order of the string */
  
  // adding required characters
  if (lowerReq == 'R')
    pwd += lowers.charAt(Math.floor(Math.random()*lowers.length));
  if (upperReq == 'R')
    pwd += uppers.charAt(Math.floor(Math.random()*uppers.length));
  if (numberReq == 'R')
    pwd += nums.charAt(Math.floor(Math.random()*nums.length));
  if (specialReq == 'R')
    pwd += specialChars.charAt(Math.floor(Math.random()*specialChars.length));

  // filling out characters with a selection from all subsets  
  while(pwd.length < passwordLength){
    pwd += allowedChars.charAt(Math.floor(Math.random()*allowedChars.length));
  }

  // log  unscrambled pwd in console
  console.log(pwd);

  // scramble pwd  -- add random character to scrambled string (ss), parse the input string adding all letters to new string except the random letter, loop until all characters have been re-ordered, return ss.
  var scramble = function (x) {
    var ss = '';
    var rand = 0;
    while (x.length > 0) {
      tmp = '';
      rand = Math.floor(Math.random()*x.length);
      ss += x.charAt(rand);
      x = x.substring(0,rand) + x.substring(rand+1);
      //x = tmp; 
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

