/*  

var, let, and const are used to declare variables:

- var: global-scoped, used before ES6, not recommended to use
- let: block-scoped, preferred way of declaring variables in modern JS
- const: block-scoped, used for constants (cannot be reassigned)

*/

let a = 10;
var b = 'test'
{
    let a = 20;
    var b = 'hello'
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)

const c = 'this is a const'

// Error: Assignment to constant variable
// c = 12 