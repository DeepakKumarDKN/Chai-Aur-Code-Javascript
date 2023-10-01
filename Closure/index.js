// Note:
//---------

// a function can return another function

function printFullName(firstname,lastname){
    function fullName(){
        console.log(`${firstname} ${lastname}`)
    }
    return fullName;
}

const result = printFullName('deepak kumar','nayak')
console.log(result)