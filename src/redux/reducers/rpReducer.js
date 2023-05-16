import { BUY_RP, DONATE_RP } from "../actions/rp_action"

const default_rp ={
    rp:30
}

export const rpReducer = (state = default_rp, action) => {
    switch(action.type){
        case "BUY_RP":{
            return{
                ...state,
                rp: state.rp + action.payload
            }
        }
        case "DONATE_RP":{
            return{
                ...state,
                rp: state.rp - action.payload
            }
        }

        default:return state
    }
}


export default rpReducer