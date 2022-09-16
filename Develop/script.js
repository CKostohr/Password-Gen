// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

  var userInput = window.prompt("How long do you need the password?")

  var passwordLength = parseInt(userInput)


  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length MUST be between 8 and 128 characters!")
    return
  }

  var wantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var wantsSymbols = window.confirm("would you like to include symbols in your password?")
  var wantsLowercase = window.confirm("Would you like to include lowercase letters in you your password?")
  var wantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var optionsCart = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (wantsNumbers === true) {
    optionsCart.push(numbersList)
  }

  if (wantsSymbols === true) {
    optionsCart.push(symbolsList)
  }

  if (wantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }

  if (wantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }

  var thisIsWhereMagicHappens = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    thisIsWhereMagicHappens += randomChar
  }

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
