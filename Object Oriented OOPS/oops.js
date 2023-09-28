const user = {
    username : 'deepak',
    fullname : 'deepak kumar nayak',
    email : 'deepak@gmail.com',

    getUsername : function(){
        console.log(this.username)
    }
}

//console.log(user.getUsername)

function User(username, fullname, gmail){

    this.username = username,
    this.fullname = fullname,
    this.gmail = gmail 

    return this;

}
const userOne = new User('deepak','deepak kumar nayak','deepak@gmail.com')
console.log(userOne)
