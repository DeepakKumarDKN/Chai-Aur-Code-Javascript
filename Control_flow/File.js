// if 
// Operators to be used for checking condition < , > , <= , >= , ==, ===, != (not equal), 

if( 2 != 3){
    //console.log('Yes 2 is not equal to 3 so the condition is true and if the condition is true this wll get executed')
}


let temprature = 41; 
if(temprature < 50){
    //console.log('less than 50')
}
// console.log(`this one will get executed by any means because if doesnt hae any sory 
// of connection with the if statement`)

// if else 

let age = 20; 
if (age >= 20){
    //console.log('You can apply for driving license')
}else{
    //console.log('You cannot apply for driving license')
}
// console.log('So again 100% this one will get executed hahahaha')

 
// scope 
// if i am using a var then it can be accessible outside the block as well 
// because var is completely global we can access it any where, inside and outside as well
// lets get into an example 


const score = 1101; 
if(score > 200){
    //var playerName = "Subhman Gill"
    //console.log(`The player who score more than 1000 runs is ${playerName}`)
}
//console.log(`The player who score more than 1000 runs is ${playerName}`)

// i can acces the player name outside the block because here i am using var which is a global scope in the next example 
// just try to change the from var to let or const and then see we cannot access it outside the block. 

```
const PlayerScore = 1101; 
if(PlayerScore > 500){
    const playerName = "Subhman Gill"
    console.log('The player who score more than 1000 runs is', playerName)
}

console.log('The player who score more than 1000 runs is', playerName)
```
// i will get error here because of the 48th line as i have declared it 
// inside the block using const instead of comst if i have used it var 
// then i would hae accessed kit withhout getting any error.

// --------------------------------------------------------------------------------

// using and (&&) in the consdition 
let isLoggedin = true; 
let debitCard = true 

if(isLoggedin && debitCard){
    console.log('You can buy courses ')
    console.log(' So here it is checking both the conditions')
}


// --------------------------------------------------------------------------

// using or (||) in the conditions 
let Adharcard = true; 
let voterCard = false 

if(Adharcard || voterCard){
    console.log('You can give vote')
    conole.log('or will check if any one of them it may be adharCard or voterCard')
}