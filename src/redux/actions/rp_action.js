export const BUY_RP = "BUY_RP"
export const DONATE_RP = "DONATE_RP"

export const buy_rp_action = (qty)=>{
    return {
        type: "BUY_RP",
        payload: qty
    }
}

export const donate_rp_action = (qty)=>{
    return {
        type: "BUY_RP",
        payload:qty
    }
}        