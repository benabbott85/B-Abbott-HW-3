
        var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        var spcChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
        


        function password() {
            var totalChar = parseInt(prompt("How many characters do you want your password to be? Choose a number between 8 and 128"))
            if (isNaN(totalChar) === true) {
                alert("Password length must be provided as a number")
                return;
            }
            if (totalChar < 8) {
                alert("Password must be at least 8 characters long")
                return;
            }
            if (totalChar > 128) {
                alert("Password must be between 8 and 128 characters long")
                return;
            }
            var numLower = confirm("Do you want to include lower case letters?")
            var numUpper = confirm("Do you want to include upper case letters?")
            var numChar = confirm("Do you want to include numbers?")
            var numSpc = confirm("Do you want to include special characters?")
            if (numLower===false && numUpper===false && numChar===false && numSpc===false) {
                alert ("Must select at least one character to generate password")
                return;
            }
            var passwordOptions = {
                totalChar: totalChar, 
                numLower: numLower,
                numUpper: numUpper,
                numChar: numChar,
                numSpc: numSpc
            }
            return passwordOptions;
        }
        // this function will grab a random index out of my arrays
        function getRandom (arr) {
            var ranIndex = Math.floor(Math.random() * arr.length)
            var ranElement = arr [ranIndex]
            return ranElement;
        }

        function generatePassword () {
            var options = password();
            var result =[];
            var possibleChar = [];
            var guarChar = [];

            if (options.numSpc) {
                possibleChar = possibleChar.concat(spcChar);
                guarChar.push(getRandom(spcChar))
            }

            if (options.numChar) {
                possibleChar = possibleChar.concat(num);
                guarChar.push(getRandom(num))
            }

            if (options.numLower) {
                possibleChar = possibleChar.concat(lowerChar);
                guarChar.push(getRandom(lowerChar))
            }

            if (options.numUpper) {
                possibleChar = possibleChar.concat(upperChar);
                guarChar.push(getRandom(upperChar))
            }


            for (var i = 0; i<options.length; i++) {
                var posChar = getRandom(possibleChar);
                result.push(posChar)
            }
        
            for ( var i =0; i<guarChar.length; i++) {
                 result[i] = guarChar[i];
            }
            return result.join("");
        }

        // Assignment Code
        var generateBtn = document.querySelector("#generate");
        var copyBtn = document.querySelector("#copy");


// Write password to the #password input
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
        alert("your password" +  passwordText.value + " has been copied!");
  
  // BONUS 
}

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    copyBtn.addEventListener("click", copyToClipboard);
    


    //    var passwordConfig = password()
    // generatePassword(); 
    // alert = ("Your password is " + password)

    

    
    








   