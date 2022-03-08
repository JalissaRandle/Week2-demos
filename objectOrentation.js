let person = {
    firstName: 'Billy',
    lastName: 'Bob',
    age: 47
}
// console.log(person.firstName)
// console.log(person['firstname'])
// they both give you the first name 

let meal ={
    appitizer : 'cheese stick',
    entree: 'steak',
    dessert: 'cake',
    drink: 'water'
}
// console.log(meal.dessert)

const{appitizer} = meal // we just destructered a item from Meal 
// console.log(appitizer)
const{entree, dessert} = meal

// console.log(entree, dessert)

// const{drink: myFavoriteDrink} = meal
// or const myfavoritedrink = meal.drink
// destructered drink from meal and renamed it from drink into myfavoriteDrink

// for(key in person){
    // console.log(key)
// } // in this case key is the key the item

// // for (key in person){
//     // console.log(person[key])
// }// in this case key becomes a variable because of the [] inside of person ... key is just a place holder 

person.vehicle = 'Ford focus'
// this adds the key vechical with a value of ford focus - it always adds to the end 
// console.log(person)

person.parents = ['Marty', 'Rina']
// console.log(person)

delete person.vehicle
// this deletes vechicle fromt the operations 
// console.log(person)


class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    greeting(){
        console.log(`Hi my name is ${this.name} I am a(n)${this.age} year old ${this.breed}`)
    }
} // this refers to the key that we just gave below

let lassy = new Dog('lassy', 'collie', '18')
let scooby = new Dog('scooby', 'great Dane', 4)
// when typing the new dog values it has to match the order  thats given by constructor 

// scooby.greeting()
// this above allows the information to be put into the greeting function that you just created 

class Puppy extends Dog {
    constructor (name, breed, age, trainingLevel){
        super(name, breed, age)

        this.trainingLevel = trainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }
}

let scrappy = new Puppy ('scrappy', 'great Dane', 2,  0)

scrappy.levelUp(.5)
console.log(scrappy)
// puppy class pulls all infor from dog class but dog class cant pull info from the puppy class 