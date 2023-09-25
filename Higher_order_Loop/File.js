// Higher Order Loop => for of Loop

const arr = [10,20,30,40,50,60,70,80,90,100]
for(let i of arr){
    //console.log(i)
}

// Maps 

const map = new Map()
map.set('IN','India')
map.set('OD', 'Odisha')
map.set('WB','Westbengal')

//console.log(map)
//console.log(map.keys())

// for(let [key, value]of map()){
//     console.log(key, value)
// }

const myObject = {
    name : 'deepak',
    surname : 'kumar'
}
for(let i in myObject){
   // console.log(i, ":-", myObject[i])
}


const programming = ['javascript','css','ruby','java','python']
for(let i  in programming){
    //console.log(programming[i])
}

// for each Loop for exah is basically used in array

arr.forEach((i)=>{
    //console.log(i)
})

const myCoding = [
    {
        languageName:'javascript',
        fees: 2000,
        isCompleted : true
    },
    {
        languageName:'python',
        fees: 1000,
        isCompleted : false
    },
    {
        languageName:'React',
        fees: 2500,
        isCompleted : true
    }
]

myCoding.forEach((item)=>console.log(item.languageName))

//const result = myCoding.filter((e)=> {
//     if(e.fees> 1000){
//         return e.languageName
//     }
// })

//console.log(result)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const result = books.filter((book)=>{
    return book.publish > 2000;
})

//console.log(result)


const numbers  = [10,20,30,40,50,60,70,80,90,100]
const mapResult = numbers.map((e)=>{
    return e+10;
})

//console.log(mapResult)

const filterResult = numbers.map((num)=>{
    return num+11
}).filter((num)=>{
    return num % 3 ===0;
})

//console.log(filterResult)


const numbersArray = [1,2,3,1,22,34,15,167,189,45,76,34,90,786]
const arayResult = numbersArray.map((num)=>(num+3)).filter((num)=>( num%3 === 0))
//console.log(arayResult)


// reduce
const Total = numbersArray.reduce((acc,curr)=>{
    return acc+ curr
},0)

console.log(Total)