// Note:
//---------

// a function can return another function
// closure is a combination of function along with lexical environment within which that funcion is declared. 
// in other words closure give you access to the outer scope from its inner scope
// it can access the variables as well as the parameter from the outer scope.
// bundeled function mean function ke andar function jo apka inner function hota hota hai 
// uske pass power hota hei ki woh outer function ki variable or parameter ko access kar sakhta hai.

// Lexical Scope is the ability of a function to access the variable from its inner scope.

// function printFullName(firstname,lastname){
//     function fullName(){
//         console.log(`${firstname} ${lastname}`)
//     }
//     return fullName;
// }

// const result = printFullName('deepak kumar','nayak')
// console.log(result)

// function printFullName(){
//     console.log('hello')
// }

// printFullName()

const a = 20

function accessing(){
    console.log(a)
}

accessing()

