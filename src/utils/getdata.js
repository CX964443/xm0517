import request from '../utils/http'
import qs from "qs"

export function post(url,params){
    request({
        url,
        method:"post",
        data:qs.stringify(params)
    }).then(res=>{
        console.log(res)
        return res
    })
}

export function get(url,params){
    request({
        url,
        method:"get",
        data:params
    }).then(res=>{
        return res.data
    })
}