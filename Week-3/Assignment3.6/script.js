function isStrongPassword(password) {
  // Check if the password is at least 8 characters long.
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains the string "password".
  if (password.indexOf("password") !== -1) {
    return false;
  }

  // Check if the password contains at least one uppercase character.
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  return true;
}
console.log(isStrongPassword("Qwerty")); // false - Too short
console.log(isStrongPassword("passwordQwerty")); // false - Contains "passwor
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
console.log(isStrongPassword("Qwerty123")); // true
