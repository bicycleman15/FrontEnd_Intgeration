import {SET_ALERT , REMOVE_ALERT} from './types'
import uuid from 'uuid'
import { timeout } from 'q';

export const setAlert = (msg,alertType,timout = 2000) => dispatch => {  
                      //( "msg" , type for colour of msg , timeout in milliseconds)
    const id = uuid.v4();
    dispatch({
        type : SET_ALERT,
        payload : { msg , alertType , id }
    })

    setTimeout( () => dispatch({type : REMOVE_ALERT , payload: id}) , timeout)  // defualt TimeOut for the messages of 2s
}