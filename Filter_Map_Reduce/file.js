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
