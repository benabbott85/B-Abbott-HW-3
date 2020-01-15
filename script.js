
//         var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//         var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//         var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//         var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
        


//         function password() {
//             var totalChar = parseInt(prompt("How many characters do you want your password to be? Choose a number between 8 and 128"))
//             if (isNaN(totalChar) === true) {
//                 alert("Password length must be provided as a number")
//                 return;
//             }
//             if (totalChar < 8) {
//                 alert("Password must be at least 8 characters long")
//                 return;
//             }
//             if (totalChar > 128) {
//                 alert("Password must be between 8 and 128 characters long")
//                 return;
//             }
//             var numLower = confirm("Do you want to include lower case letters?")
//             var numUpper = confirm("Do you want to include upper case letters?")
//             var numChar = confirm("Do you want to include numbers?")
//             var numSpc = confirm("Do you want to include special characters?")
//             if (numLower===false && numUpper===false && numChar===false && numSpc===false) {
//                 alert ("Must select at least one character to generate password")
//                 return;
//             }
//             var passwordOptions = {
//                 totalChar: totalChar, 
//                 numLower: numLower,
//                 numUpper: numUpper,
//                 numChar: numChar,
//                 numSpc: numSpc
//             };
//             return passwordOptions;
//         }
//         // this function will grab a random index out of my arrays
//         function getRandom (arr) {
//             var randIndex = Math.floor(Math.random() * arr.length)
//             var randElement = arr [randIndex]
//             return randElement;
//         }

//         function generatePassword () {
//             var options = password();
//             var result =[];
//             var possibleCharacters = [];
//             var gauranteedCharacters = [];

//             if (options.numSpc) {
//                 possibleCharacters = possibleCharacters.concat(specialCharacters);
//                 gauranteedCharacters.push(getRandom(specialCharacters))
//             }

//             if (options.numChar) {
//                 possibleCharacters = possibleChar.concat(numericCharacters);
//                 gauranteedCharacters.push(getRandom(numericCharacters))
//             }

//             if (options.numLower) {
//                 possibleCharacters = possibleChar.concat(lowerCasedCharacters);
//                 gauranteedCharacters.push(getRandom(lowerCasedCharacters))
//             }

//             if (options.numUpper) {
//                 possibleCharacters = possibleChar.concat(upperCasedCharacters);
//                 gauranteedCharacters.push(getRandom(upperCasedCharacters))
//                 // console.log(guarChar)
//             }


//             for (var i = 0; i<options.length; i++) {
//                 var possibleCharacter = getRandom(possibleCharacters);
//                 result.push(possibleCharacter)
                
//             }
        
//             for ( var i =0; i<gauranteedCharacters.length; i++) {
//                  result[i] = gauranteedCharacters[i];
//             }
//             console.log(result)
//             return result.join("");
            
//         }

//         // Assignment Code
//         var generateBtn = document.querySelector("#generate");
//         var copyBtn = document.querySelector("#copy");


// // Write password to the #password input
//     function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

//     copyBtn.removeAttribute("disabled");
//     copyBtn.focus();
// }

//     function copyToClipboard() {
//         var passwordText = document.querySelector("#password");
//         passwordText.select();
//         document.execCommand("copy");
//         alert("your password" +  passwordText.value + " has been copied!");
  
// //   // BONUS 
// // }

// // // Add event listener to generate button
// //     generateBtn.addEventListener("click", writePassword);
// //     copyBtn.addEventListener("click", copyToClipboard);
    


// //     //    var passwordConfig = password()
// //     // generatePassword(); 
// //     // alert = ("Your password is " + password)

    
var specialCharacters = [ "@", "%", "+", "\\",  "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_","."];
  
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
  
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];
  
  function retrievepasswordOptions() {
    
    var length = parseInt(prompt(
      "How many characters would you like your password to contain?"
    ));
    
    if (isNaN(length) === true) {
      alert("Password length must be provided as a number");
      return;
    }
    
    if (length < 8) {
      alert("Password length must be at least 8 characters");
      return;
    }
    
    if (length > 128) {
      alert("Password length must less than 129 characters");
      return;
    }
    
    var hasSpecialCharacters = confirm(
      "Click OK to confirm including special characters."
    );
    
    var hasNumericCharacters = confirm(
      "Click OK to confirm including numeric characters."
    );
    
    var hasLowerCasedCharacters = confirm(
      "Click OK to confirm including lowercase characters."
    );
    
    var hasUpperCasedCharacters = confirm(
      "Click OK to confirm including uppercase characters."
    );
   
    if (hasSpecialCharacters === false && hasNumericCharacters === false && hasLowerCasedCharacters === false && hasUpperCasedCharacters === false) {
      alert("Must select at least one character type");
      return;
    }
    // Object that will store user input
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
    return passwordOptions;
  }
  //this will get a random element from the array
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }
  // Function to generate password from info that user gave
  function generatePassword() {
    var options = retrievepasswordOptions();
    
    var result = [];
    
    var possibleCharacters = [];
    
    var guaranteedCharacters = [];
    
    // Push random special character to guaranteedCharacters empty array
    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
    
    // Push new random special character to guaranteedCharacters empty array
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
    
    // Push new random lower-cased character to guaranteedCharacters empty array
    if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
   
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    
    }

    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);
     
    }
    // for loop that should pull in at least one guaranteed character
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
   
    console.log(result)
    return result.join("");
  }
  
  var copyBtn = document.querySelector("#copy");
  var generateBtn = document.querySelector("#generate");
 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
  }
  function copyToClipboard() {
    var passwordText = document.querySelector("#password");
    passwordText.select();
    document.execCommand("copy");
    alert(
      "Your password " + passwordText.value + " was copied to your clipboard."
    );
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  // Add event listener to copy button
  copyBtn.addEventListener("click", copyToClipboard);
    
    
