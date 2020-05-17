const defaultState = {
    token: '',
}

// 创建我们的 reduce
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'LOGINUSER':
            console.log(action)
        return { ...state }
        
        default:
        return state
    }
}

  