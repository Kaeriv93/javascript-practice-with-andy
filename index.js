// Variables
// let, const, var
// let and var are interchangable while const is a constant that cannot be changed

//Example
// let a = 10
// console.log(`The initial value of a is: ${a}`)
// a = 15
// ^ we declared a variable named a which was originally assigned as 10
// console.log(`Now the value of a is: ${a}`)

//Functions
// A function is a reusable block of a code
// function firstName(/*parameters are inserted here*/name){
//     return `My name is ${name}`
// }
// console.log(firstName('Andy'))
// console.log(firstName('Vireak'))

// If/else conditionals
// if: if this then do that
// if(conditional){
//     run this block of code
// }
// else is the code that will run if the if conditional is false
// else if <--- another if statement

// function bar(age, name){
//     if(age >= 21){
//         return `You are old enough for the bar you can enter`
//     }else if(name === 'Andy'){
//         return 'You know what, you can come in'
//     }{
//         return 'You are not old enough come back when you are'
//     }
// }
// console.log(bar(18, 'Zack'))

// loops
// for, while - that keeps going until the condition is met
// arrays [] - a list of items

// arrays are a list of items in no particular order.
// arrays can consist of strings and integers
// const colors = ['red','blue','yellow'] /* the length of the colors array is 3 */
// console.log(colors[2])
// in order to access a specific index in the array we have to count from 0. so here if we want red it will be colors[0]

//a for loop is a function or method that will loop through anything until the condition is met
// i <-- index
// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i])
// }
// i is always changing, we start at 0 because that is where the loop begins
// for(let i = 0; i < something; i - 1)

// for(let i = 0; i <= 5; i ++){
//     console.log(i)
// }


function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if( i % 3 === 0 && i % 5 === 0){
            console.log('fizzBuzz')
        }
        else if(i % 3 === 0){
            console.log('fizz')
        }else if(i % 5 === 0){
            console.log('buzz')
        }
        else{
            console.log(i)
        }
    }
}

console.log(fizzBuzz(21))