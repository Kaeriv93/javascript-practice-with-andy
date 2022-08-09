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


// function fizzBuzz(num){
//     // in this for loop we are starting at 1 and will 
//     //continue until we are less than or equal to num; and we will increment i by 1
//     for(let i = 1; i <= num; i++){
//         //if i is a divividen of 3 and 5 then it will print out fizzbuzz
//         if( i % 3 === 0 && i % 5 === 0){
//             console.log('fizzBuzz')
//         }
//         // if i is divisible by 3 only then it will print out fizz
//         else if(i % 3 === 0){
//             console.log('fizz')
//         // if i is divisible by 5 only then it will print out buzz
//         }else if(i % 5 === 0){
//             console.log('buzz')
//         }
//         // if none of the conditions are met just print out i 
//         else{
//             console.log(i)
//         }
//     }
// }

// console.log(fizzBuzz(21))

// const heroes = ['A-train', 'Maeve', 'Homelander', 'The-Deep', 'Black Noir']

function superpowers(hero){
    const aHero = hero.toLowerCase()
    if(aHero === 'a-train'){
        return 'He has super speed'
    } else if(aHero === 'maeve'){
        return 'She has super strength'
    } else if(aHero === 'homelander'){
        return 'He got super strength, flight, and laser beams'
    } else if(aHero === 'the-deep'){
        return 'He talks to fish'
    } else if(aHero === 'black noir'){
        return 'To be honest we don`t know'
    } else{
        return 'We don`t have information on that hero'
    }
}

console.log(superpowers('Hello'))