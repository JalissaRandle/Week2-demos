let johnHealth = 100
// console.log(typeof(johnHealth))

let johnString = String(johnHealth)

// console.log(Boolean(johnString))

let theWinner ='jamie is the winner.'

let newWinner = theWinner.replace('jamie', 'john')

// console.log(theWinner, newWinner)

// if (newWinner.includes('john')){
//     // console.log('replaced successfuly')
// }

let lower = newWinner.toLowerCase()
// console.log(lower)
let split = lower.split(' ')
// console.log(split)
let kebab = split.join('-')
// console.log(kebab)

// let kebab2 = lower.replaceAll(' ','-')
// console.log(kebab2) ---  (this give you the same answer as above(same function))

function isJohnAlive (){
    if (johnHealth > 0){
        console.log('John is alive')
    } else {
        console.log('John is not alive')
    }
}
// isJohnAlive()

// const surpriseAttack = function(attack){
//     johnHealth -= attack
//     isJohnAlive()
// // }
// surpriseAttack(20)
// // console.log(johnHealth)
// // isJohnAlive()
// surpriseAttack(80)
// // console.log(johnHealth)
// // isJohnAlive()

// => is replacing the word Function, and goes at the end 
const greeting =(person1, person2) => {
    console.log(`${person1} says hello to ${person2}`)
}

// greeting('Ned', 'John')
// make sure that each person is their own string 

function rollDie(){
    let possiblerolls = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possiblerolls.length)
    return possiblerolls[randomNumber]
}
// math.random = gives you a number between 1 and 0  
// math.floor =  rounds any number down to the nearest Whole number 
// math.ceiling rounds anynumeber up to the neareats whole #
// when you type math, make sure it's capital or your function will not work

let roll = rollDie()
// console.log(roll)

const rolltwo = function(){
    let first = rollDie()
    let second = rollDie()
    return first + second

}
const two = rolltwo()
console.log(two)

const two2 = () => rollDie() + rollDie()

const secondTwo = two2 ()
console.log(secondTwo)