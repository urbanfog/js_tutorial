// Reverses a string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns true if a string is blank or containing only whitespaces.
String.prototype.blank = function() {
  switch (true) {
    case this.length <= 0:
    case /^\s+$/.test(this):
      return true;
      break;
  }
  return false;
}
    
// Returns the last element of an array.
Array.prototype.last = function() {
  return this[this.length - 1];
}

// Returns the first element of an array.
Array.prototype.first = function () {
  return this[0];
}