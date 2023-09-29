// const user = {
//     username : 'deepak',
//     fullname : 'deepak kumar nayak',
//     email : 'deepak@gmail.com',

//     getUsername : function(){
//         console.log(this.username)
//     }
// }

//console.log(user.getUsername)

//function User(username, fullname, gmail){

    // this.username = username,
    // this.fullname = fullname,
    // this.gmail = gmail 
    // this.about = function(){
    //     console.log(this)
    // }

    // return this;

// }
// //const userOne = new User('deepak','deepak kumar nayak','deepak@gmail.com')
// //const userTwo = new User('rahul','rahul krishna vaidya','rahul@gmail.com')
//userTwo.about()


// instead of writting function inside the user Object i can also create it outside let's discuss that with an example.

const userData = {
    about:function(){
        console.log(this.fullname)
    }
}


function createUser(name,fullname,gmail,city){
    const user = Object.create(userData)
    user.name = name; 
    user.fullname = fullname; 
    user.gmail = gmail; 
    user.city = city; 
    return user;

}

// const userOne = new createUser('deepak','deepak kumar nayak','deepak@gmail.com','Kolkata')
// console.log(userOne.__proto__)