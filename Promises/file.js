const obj = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let arrayOne = [10,20,30,40,50,60]
        resolve(arrayOne)
        reject('no rollno found')
    },2000)
})


obj.then((rollno)=>{
    //console.log(rollno)
}).catch((error)=>{
    //console.log(error)
})

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log('async task is complete')
        resolve()
    })
})

promiseOne.then(function(){
    //console.log('promise is consumed')
})

//----------------------------------------------
new Promise(function(resolve,reject){
   setTimeout(function(){
    //console.log('Async Task 2')
    reject()
   }) 
}).then(function(){
    //console.log('task resumed')
}).catch(function(){
    //console.log('error')
})

//--------------------------------------------

const promiseThree = new Promise(function(resovle,reject){
    setTimeout(function(){
        resovle({
            username:'deepak',
            gmail : 'deepak@gmail.com'
        })
    },3000)
}).then(function(userInfo){
    //console.log(userInfo)
})

//----------------------------------------------------------

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
            username:'deepak',
            gmail:'deepak@gmail.com'
        })
        }else{
            reject('no data found')
        }
    })
}).then(function(userInfo){
    //console.log(userInfo)
}).catch(function(error){
    //console.log(error)
})

// using arrow function in then and catch.

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
            username:'deepak',
            gmail:'deepak@gmail.com'
        })
        }else{
            reject('no data found')
        }
    })
})

// const result = promiseFive.then((user)=>{
//     return user.username
// }).then((username)=>{   
//     console.log(username)
// }).catch((err)=>{
//     console.log(err)
// })



promiseFive.then(function(user){
    //console.log(user.username)
}).catch(function(err){
    //console.log(err)
})


// promiseFive.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// })

//-------------------------------------------------------

const promiseSix = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'deepak',gmail:'deepak@gmail.com'})
        }else{
            reject('Error JS Went Wrong')
        }
    })
})

// Notes On Async And Await
// the word async used before the function that means the function will return a 
// a promise, so the async word is used or added to function just to tell them that 
// to return a promise rather than directly returning a value

// the keyword await makes javascript wait untill that promise settles 
// and returns its result

async function consumePromise(){
    try {
        const response = await promiseSix
       // console.log(response)
    }catch(err){
        //console.log(err)
    }
    
}
//consumePromise()

// Fetch 
// The fetch API Provides a fetch method and it returns a promise

async function getallUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        //console.log(data)
    }catch(err){
        //console.log(err)
    }

    
}

//getallUsers()

// writting fetch with the help of then and catch
// here there is no need os using await// and async

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{console.log(data)
// }).catch((error)=> console.log(error))


//InterView Questions

// Promise Object is a place holder which will be filled later with a value
// Promise i s a placeholder for a certain period of time until we get a 
// a value from a async operation

// promise is a container for a feature value which we wll get after it get resolved
// promise is an object representing eventual completion or a failure of a 
// asynchronous operation

// promise comes with an impotant feature called promise chaining which help us in 
// handling the callback hell or to get rid from callback hell.

