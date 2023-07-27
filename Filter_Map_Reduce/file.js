const Biodata = [
    {
        name:'deepak',
        username :'deepak_kumar',
        gmail: 'deepak@gmail.com',
        city:'Kolkotta'
    },
    {
        name:'rahul',
        username: 'rahul_krishna',
        gmail: 'rahul@gmail.com',
        city:'Mumbai'
    },
    {
        name:'AlyGoni',
        username:'aly_goni',
        gmail:'alygoni@gmail.com',
        city:'Mumbai'
    }
]

Biodata.filter((e)=>{
    if(e.city === 'Mumbai'){
        //console.log(e.name)
    }
})


const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const result = nums.filter((e)=>{
    //return e % 3 == 0;
})

// console.log(result)

const num_by_four = nums.filter((num) => (num % 4 ==0))
//console.log(num_by_four)

const rslt = nums.map((e)=>{
    if(e % 3 ==0){
        //console.log(e)
    }
})

const abc = nums.forEach((e)=>{
    if(e % 5 === 0){
        // console.log(e)
    }
})

// Map 
const addNumber = [1,2,3,4,5,6,7,8]

const add = addNumber.map((num)=>{
    return num+10
})
console.log(add)

// Map Chaining

const addnum = addNumber.map((num)=>{
    return num+10
}).map((num)=>{
    return num+2
})
//console.log(addnum)

// Using Filter In Chaining
const numdivby2 = addNumber.map((num)=>{
    return num+10
}).map((num)=>{
    return num+2
}).filter((num)=>{
    return num % 2 == 0
})

//console.log(numdivby2)

// Reduce
const reduce = addNumber.reduce((acc, curr)=>{
    return acc+curr
},0)

console.log(reduce)












