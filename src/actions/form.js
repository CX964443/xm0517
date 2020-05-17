import { post } from '@/utils/request2'
import api from '@/services/api'

export function getName (options) {
  return {
    type: 'FETCH_HOME_NAME',
    payload: post(api.sampleLogin, options),
  }
}

export function getList (options) {
  return {
    type: 'FETCH_HOME_NAME',
    payload: post(api.sampleList, options),
  }
}
