import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types'

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,    //to show items that only logged in users can see
    loading : true ,            // just to show wheter items are loading from backend
    user : null          // userdata will be put in here    
}

export default function(state = initialState , action) {
    const {type , payload} = action

    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated : true,
                loading : false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                isAuthenticated : false,
                loading : false
            }
        default:
            return state
    }
}