// Maps
// Duplicates are not allowed
// cannot used for in loop in map as it is not iterable
const map = new Map()
map.set('name','deepak')
map.set('gmail','deepak@gmail.com')
map.set('city','Kolkotta')
map.set('qualification','Btech')

// for(let i of map){
//     console.log(i)
// }

for(let [key, value] of map){
    //console.log(key, ' ', value)
    
}

// Objects 
// fo in loop for objects

const languages = {
    langOne:'Python',
    langTwo: 'Javascript',
    langThree: 'Java',
    langFour: 'C'
}
for(let i in languages){
    //console.log(i, languages[i])
}


// forEach for Array
const coding = ['python','js','c','c++','django','react']

// here i have created an arrow function 
coding.forEach((e)=>{
    //console.log(e)

})

// example without array function 
coding.forEach(function(e){
    //console.log(e)
})


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

Biodata.forEach((e)=>{
    console.log(e.name)
})


Biodata.filter((e)=>{
    if(e.city === 'Mumbai'){
        //console.log(e.name)
    }
})
