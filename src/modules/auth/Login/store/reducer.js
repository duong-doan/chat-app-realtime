import * as types from './constants'

export const initStateAuth = {
    profile: {}
} 

const reducer = (state = initStateAuth, action) => {
    switch(action.type) {
        case types.GET_USER_PROFILE_SUCCESS:
            console.log('reducer', action.payload)
            return state
        
        default: return state
    }
}

export default reducer