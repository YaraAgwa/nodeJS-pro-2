const request=require("request")
const weather =(latitude,longtitude,callback)=>{
    const url="http:api.weatherapi.com/v1/current.json?key=aee822aadc1a48b28cf221525240103&q= "+ latitude +""+ longtitude
    
    request ({url,json:true},(error,response)=>{

        if (error){
            callback("unable to conect ",undefined)

        }
        else if(response.body.error){
            callback(response.body.error.message,undefined)
        }
        else{
            callback(undefined, response.body.location.name+" "+response.body.current.condition.text +" "+response.body.current.temp_c)
        }

    })
}
module.exports=weather