import { post } from '@/utils/request2'

export function loginUser (options) {
  return {
    type: 'LOGINUSER',
    payload: post('http://api.baxiaobu.com/index.php/home/v1/login', options),
  }
}

export function registerUser (options) {
  return {
    type: 'REGISTERUSER',
    payload: post('http://api.baxiaobu.com/index.php/home/v1/register', options),
  }
}
