// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of your password (between 8 and 128):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return null;
  }

  var includeLowercase = confirm("Include lowercase character?");
  var includeUppercase = confirm("Include uppercase character?");
  var includeNumeric = confirm("Include numeric character?");
  var includeSpecial = confirm("include special character?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected");
    return null;

  }

  var passwordOptions = {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };

  return passwordOptions;

}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) {
    //return an empty string if option are not selected
    return "";
  }
  var availableCharacters = [];

  if (options.includeLowercase) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
  }
  if (options.includeNumeric) {
    availableCharacters = availableCharacters.concat(numericCharacters);
  }
  if (options.includeSpecial) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }

  var passward = "";
  for (var index = 0; index < options.length; index++) {
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    passward += availableCharacters[randomIndex];
  }
  

  return passward;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  if (password) {
    passwordText.value = password;
    alert("Your generated password is: " + password);
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);