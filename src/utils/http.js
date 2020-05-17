import axios from './request'

let baseURL = ""

let ajax = function(config){
    config.url = baseURL + config.url
    return new Promise((resolve,reject)=>{
        var options = {
            method:config.method,
            headers:{
                "Content-Type":'application/x-www-form-urlencoded',
                // 'Accept':'application/json',
                // 'Content-Type': 'application/json',
            },
            data: config.data
        }
        
        axios(config.url, options).then((res)=>{
            resolve(res)
        }).catch((res)=>{

        })
    })
}
export default ajax