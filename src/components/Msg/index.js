import React from 'react'

function Msg({msg, name}){
    if(msg === undefined || msg === null){
        return(
            <></>
        )
    }
    return(
        <div className="col-11 row bg-light rounded mt-3 ml-2">
            <p className="names col-12">{msg}</p>
        </div>
    )
}

export default Msg