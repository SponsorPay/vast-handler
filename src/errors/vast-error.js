import errorMap from './error-map';

function VASTError(code = 'default') {
  var error = errorMap[code];
  this.name = 'VASTError';
  this.message = `${error.node}: ${error.message}`;
  this.stack = (new Error()).stack;
}

VASTError.prototype = Object.create(Error.prototype);
VASTError.prototype.constructor = VASTError;

export default VASTError;
