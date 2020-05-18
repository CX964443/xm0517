import { post } from '@/utils/request2'
import url from '../services/api'

export function loginUser (options) {
  return {
    type: 'LOGINUSER',
    payload: post( url.loginUserURL , options),
  }
}

export function registerUser (options) {
  return {
    type: 'REGISTERUSER',
    payload: post( url.registerUserURL , options),
  }
}

export function add (options) {
  return {
    type: 'ADD',
    payload: post( url.addURL , options),
  }
}

export function listWithPage (options) {
  return {
    type: 'LISWITHPAGE',
    payload: post( url.listWithPageURL , options),
  }
}

export function findUser (options) {
  return {
    type: 'FINDUSER',
    payload: post( url.findUserURL , options),
  }
}

