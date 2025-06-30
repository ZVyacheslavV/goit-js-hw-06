'use strict';

class StringBuilder {
  #value;

  constructor(initialValue = '') {
    if (typeof initialValue !== 'string') throw new Error('Not a string input');
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
