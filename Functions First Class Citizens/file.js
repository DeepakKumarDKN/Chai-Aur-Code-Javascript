// const myName = function(){
//     return "hello"
// }

// const getuserName = function(name, firstname){
//     console.log(name(),firstname)
// }

// getuserName(myName, 'Deepak')

function display(){
    return function userName(){
        console.log('username')
    }
}
display()()