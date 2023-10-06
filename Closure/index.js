// Note:
//---------

// a function can return another function
// closure is a combination of function along with lexical environment. 
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

// const a = 20

// function accessing(){
//     console.log(a)
// }

// accessing()

// function name(){
//     for(let i=0; i<=5; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*5000)
//     }
// }

// name()


// interview question for closure 
//--------------------------------
//Closure is a combination of a function along with its lexical scope bundeled together is called a closure.
//Each and every function in the javasvript has access to its outer lexical environment, access to the variable 
//and function present in the environment of its parent.

// function outer(surname){
//     function inner(){
//         console.log(name)
//         console.log(surname)
//     }
//     let name = "rahul"
//     return inner
    
// }

// outer()() 
// instead fo writting like this i can also write like

// const close = outer('nayak')
// close()

// or 

// outer()()



// so what i am doing here is i have returned the inner function calling it outside the scope but still it remember the value of name 
// i mean even if i am executing it somewhere outsude the scope but still it remember where the value of name is  actually present and this is due to closure only.

// so in this example i have given a parameter called surname and i am trying it to access i will it behave as a closure still now.?
// yes it will because closure means not just that it can only access its values, it can also access its parameter.

// its also because inner function forms a closure with its outer environment and the parameter also belong to the part of outer environment.

//Q. what if the outer function is nested with some other function will still now the inner funtion has access to that function also


// function parent(){
//     let middleName = "kumar"
//     function outer(surname){
//         let name = "deepak"
//         function inner(){
//             console.log(name)
//             console.log(middleName)
//             console.log(surname)
//         }
//         return inner
        
//     }
//     return outer
// }
//let name = "rahul"

// const close = parent()
// let call = close('nayak')
// call()


//or 

//const close = parent()('nayak')
//close()


// Advantages of closure
// closure helps in data hiding and encapsulation. 
// - lets talk how it helps in data hiding and encapsulation

// data hiding mean supoose we have a variable and we dont want other functions to get access of it that is known as data hiding.

// function Counter(){
//     let count = 0 
//     function incrementCounter(){
//         count++
//         console.log(count)
    
//     }
//     return incrementCounter
// }

// const result = Counter()
// result()
// result()


var name = "deepak"
let middleName = "kumar"
let surname = "nayak"

function getFullName(){
    const position = "fullstack developer"
    console.log(`${name} ${middleName} ${surname} and working as a ${position}`)
}

getFullName()