function generatePassword() {
    var possibleCharacters = [];
    var specialCharacters = ['@', '%', '+', '\\', '/', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
    numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8 and 128 characters");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      return "Please choose a valid number of characters";
    } else if (isNaN(numberOfCharacters)) {
      numberOfCharacters = prompt("Please enter a valid number");
    }
    else {
      alert("Your password will be " + numberOfCharacters + " characters long");
      
    }
  
    special = confirm("Do you want special characters?");
    if (special) {
      alert("Your password will have special characters");
    }
    else {
      alert("Your password will NOT have special characters");
    }
    
    uppercase = confirm("Do you want uppercase characters?");
    if (uppercase) {
      alert("Your password will have uppercase characters");
    }
    else {
      alert("Your password will NOT have uppercase characters");
    }
    
    lowercase = confirm("Do you want lowercase characters?");
    if (lowercase) {
      alert("Your password will have lowercase characters");
    }
    else {
      alert("Your password will NOT have lowercase characters");
    }
  
    numbers = confirm("Do you want to use numbers?");
    if (numbers) {
      alert("Your password will have numbers");
    }
    else {
      alert("Your password will NOT have numbers");
    }
  
    if (special === false && uppercase === false && lowercase === false && numbers === false) {
      return "Please select at least one character type";
    };

    if (special) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
    if (uppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    }
    if (lowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }
    if (numbers) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }
    
    let finalPassword = ""
    for (let i = 0; i < numberOfCharacters; i++) {
      let rng =[Math.floor(Math.random() * possibleCharacters.length)];
      finalPassword = finalPassword + possibleCharacters[rng];
    }
    return finalPassword;
  };
  
  var generateBtn = document.querySelector("#generate");
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  generateBtn.addEventListener("click", writePassword);