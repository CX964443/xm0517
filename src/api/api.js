import request from '../utils/http'
import qs from "qs"

export function loginUser(params){
    return request({
        url: 'http://api.baxiaobu.com/index.php/home/v1/login',
        method:"post",
        data:qs.stringify(params)
    })
}

export function registerUser(params){
    return request({
        url: 'http://api.baxiaobu.com/index.php/home/v1/register',
        method:"post",
        data:qs.stringify(params)
    })
}

export function add(params){
    return request({
        url: 'https://api.baxiaobu.com/index.php/home/v5/add',
        method:"post",
        data:qs.stringify(params)
    })
}

export function listWithPage(params){
    return request({
        url: 'https://blogs.zdldove.top/Home/Apis/listWithPage',
        method:"post",
        data:qs.stringify(params)
    })
}

export function findUser(params){
    return request({
        url: 'https://api.baxiaobu.com/index.php/home/v5/findUser',
        method:"get",
        data:params
    })
}