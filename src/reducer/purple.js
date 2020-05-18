const defaultState = {
    token: '',
}

// 创建我们的 reduce
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'LOGINUSER':
        return { ...state }
        
        case 'REGISTERUSER':
        return { ...state }

        case 'ADD':
        return { ...state }
        
        case 'LISWITHPAGE':
        return { ...state }
        
        case 'FINDUSER':
        return { ...state }

        default:
        return state
    }
}