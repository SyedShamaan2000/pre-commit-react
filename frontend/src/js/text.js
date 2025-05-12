// test.js

// This file contains examples of code that might trigger ESLint rules.
// Feel free to modify it to test different configurations.

// Example of a variable that is declared but not used
let unusedVariable

// Example of using == instead of ===
/* eslint-disable-next-line no-constant-condition */
if (1 == '1') {
  console.log('Loose equality')
}

// Example of a missing semicolon
console.log('This line is missing a semicolon')

// Example of using console.log (depending on your config)
console.log('Hello from test.js')

// Example of a potential block-scoped variable issue (if no-var is enabled)
var functionScopedVar = "I'm function scoped"
function exampleFunction() {
  var functionScopedVar = "I'm inside the function"
  console.log(functionScopedVar)
}
exampleFunction()
console.log(functionScopedVar)

// Example of trailing whitespace
console.log('This line has trailing spaces   ')

// Example of too many empty lines

console.log('More code')

// Example of a long line that might exceed your configured line length
const veryLongVariableNameThatExceedsTheMaximumCharacterLimit =
  'This is a very long string to test the line length rule in ESLint.'

// Example of using single quotes instead of double quotes (or vice-versa, depending on your config)
const singleQuotedString = 'This is a single quoted string.'

// Example of object property naming (depending on your style guide)
const myObject = {
  'some-key': 'value',
  anotherKey: 123,
}

// You can add more examples here to test other ESLint rules.
