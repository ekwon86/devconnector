const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  // If input is empty to begin with, initialize to be an empty string with ternary operator
  data.email = !isEmpty(data.email) ? data.email: '';
  data.password = !isEmpty(data.password) ? data.password: '';


  // Check if email is empty
  if(Validator.isEmpty(data.email)) {
    errors.email = 'E-mail field is required';
  }

  // Check if valid email
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Invalid e-mail address';
  }

  // Check if password is empty
  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
