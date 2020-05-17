const defaultState = {
  token: '',
}

// 创建我们的 reduce
export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_HOME_NAME':
      return { ...state, token: action.payload.result }
    
    default:
      return state
  }
}

