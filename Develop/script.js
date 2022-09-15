// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

function generatePassword() {

let userInput = window.prompt("How long do you need the password?")

let passwordLength = parseInt(userInput)


if (isNaN(passwordLength)) {
  window.alert("That's not a number!")
  return
}

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length MUST be between 8 and 128 characters!")
  return
}

let wantsNumbers = window.confirm("Would you like to include numbers in your password?")
let wantsSymbols = window.confirm("would you like to include symbols in your password?")
let wantsLowercase = window.confirm("Would you like to include lowercase letters in you your password?")
let wantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"]
let lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercaseList = []

let optionsCart = []

for (let i = 0; i < lowercaseList.length; i++) {
  uppercaseList [i] = lowercaseList[i].toUpperCase()
}

if (wantsNumbers === true) {
  optionsCart.push(numberList)
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

let generatePassword = ""

for (let i = 0; i < passwordLength; i++) {
  let randomList = getRandomItem(optionsCart)
}

}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
