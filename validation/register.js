const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // If input is empty to begin with, initialize to be an empty string with ternary operator
  data.name = !isEmpty(data.name) ? data.name: '';
  data.email = !isEmpty(data.email) ? data.email: '';
  data.password = !isEmpty(data.password) ? data.password: '';
  data.password2 = !isEmpty(data.password2) ? data.password2: '';

  // Check length of name
  if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  // Check length of password
  if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  // Check if name is empty
  if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // Check if email is empty
  if(Validator.isEmpty(data.email)) {
    errors.email = 'E-mail field is required';
  }

  // Check if password is empty
  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  // Check if password2 is empty
  if(Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm your password here';
  }

  // Check if passwords equal each other
  if(!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  // Check if valid email
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Invalid e-mail address';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
