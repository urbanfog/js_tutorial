(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("urbanfog-palindrome");
let string = prompt("Please enter a string for testing.")

let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome!`);
}
},{"urbanfog-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Reverses a string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processor = function() {
    return this.content.toLowerCase();
  }

  this.letters = function letters() {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }

  this.processedContent = function() {
    return this.letters().toLowerCase();
  }
  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function() {
    return this.content.toUpperCase();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
},{}]},{},[1]);
