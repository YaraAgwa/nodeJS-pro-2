const geocode=require ("./data/data1")
const weather=require("./data/data2")

const country =process.argv[2]
geocode(country,(error,data)=>{
    console.log ("error :" ,error)
    console.log ("data :", data)

    weather(data.latitude,data.longtitude,(error,data)=>{
        console.log ("error :" ,error)
        console.log ("data :", data)
    })

})

 