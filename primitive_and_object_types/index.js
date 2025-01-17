// Primitive types: nn bb ss u

let a = 10 // number
let b = null // null

let c = BigInt("563") + BigInt("7")// BigInt
let d = true // boolean

let e = "Hello" // string
let f = Symbol("This is a symbol") // symbol

let g = undefined // undefined

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

// prints the type of variable

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

// Non Primitive / Object types:

const dictionary = {
    name: "testname",
    age: 19,
    email: "testmail@gmail.com",
    country: "india",
    married: false
}

console.log(dictionary)
console.log(dictionary['name'])
console.log(dictionary['married'])
console.log(dictionary['phone']) // gives undefined
    
dictionary['phone'] = 9988776655 // adds to dictionary

console.log(dictionary)