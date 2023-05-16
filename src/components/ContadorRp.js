import React from "react";
import { connect } from "react-redux";

const ContadorRp = ()=>{
    return(
        <>
            <h1>Contador</h1>
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        rp:state.rp
    }

}

export default connect(mapStateToProps)(ContadorRp)

