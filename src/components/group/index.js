import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'

function Group({group}){
    
    const History = useHistory()

    function handleMensager(id){
        History.push(`/mensager/${id}`)
    }
    
    if(group === undefined || group === null){
        return(
            <></>
        )
    }else{
        
        const len = group.mensages.length - 1

        return(
            <div className="ml-2 row " onClick={() => handleMensager(group.id)}>
                <div className="col-3 row">
                    <img src={require(`../../${group.thumb}`)} alt={group.name} className="thumbGra"/>
                </div>
                <div className="col-9 row borderB my-3">
                    <h3 className="names font-weight-bold col-12">{group.name}</h3>
                    <p className="textp text-secondary col-12">{group.mensages[len].mensage}</p>
                </div>
            </div>
        )
    }
}

export default Group