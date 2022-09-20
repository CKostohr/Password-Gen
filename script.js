// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//I click the button to generate a password

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length)]
}

function generatePassword() {
//prompted for password criteria.
  var userInput = window.prompt("How long do you need the password?")
//prompted for the length of the password
  var passwordLength = parseInt(userInput)


  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  }
//I choose a length of at least 8 characters and no more than 128 characters.
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length MUST be between 8 and 128 characters!")
    return
  }

//I am presented with a series of prompts for password criteria
  var numbers = window.confirm("Would you like to include numbers in your password?")
  var symbols = window.confirm("would you like to include symbols in your password?")
  var lowercase = window.confirm("Would you like to include lowercase letters in you your password?")
  var uppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []
//I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.
  var shoppingCart = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (numbers === true) {
    shoppingCart.push(numbersList)
  }

  if (symbols === true) {
    shoppingCart.push(symbolsList)
  }

  if (lowercase === true) {
    shoppingCart.push(lowercaseList)
  }

  if (uppercase === true) {
    shoppingCart.push(uppercaseList)
  }

  if (shoppingCart.length === 0) {
    shoppingCart.push(lowercaseList)
  }

  var thisIsWhereMagicHappens = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(shoppingCart)
    var randomChar = getRandomItem(randomList)
    thisIsWhereMagicHappens += randomChar
  }
// a password is generated that matches the selected criteria.
  return thisIsWhereMagicHappens
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
