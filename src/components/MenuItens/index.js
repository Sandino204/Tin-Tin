import React, { useState } from 'react'
import { CardBody, Button } from 'reactstrap'
import './styles.css'

function MenuItens({item, itemImg, qtn, price, handleAddValue, value, handleLessValue}){
    
    const [qtnt, setQtnt] = useState(qtn)

    function handleMinus(qtn, func){
        let quan = qtn 
        if(quan === 0){
            return quan
        }else{
            func(value, price)
            quan = qtn - 1
            return[quan, value]
        }
    }

    function handleMax(qtn, func){
        func(value, price)
        let quan = qtn + 1
    
        return[quan, value]
    }
    
    function money(value){
        const numBr = new Intl.NumberFormat([], {
            style: 'currency', 
            currency: 'BRL'
        })

        return numBr.format(value)
    }

    return(

        <div className="col-12 row borderB ">
            <img src={require(`../../${itemImg}`)} alt="" className="col-3"/>
            <div className="col-9 row my-4">
                <h2 className="col-12 names">{item}</h2>
                <Button className="btn-light ml-auto text-dark col-1" onClick={() => setQtnt(handleMinus(qtnt, handleLessValue)[0])}>-</Button>
                <p className="text-dark col-1 mt-1">{qtnt}</p>
                <Button className="btn-light text-dark col-1" onClick={() => setQtnt(handleMax(qtnt, handleAddValue)[0])}>+</Button>
                <p className="text-dark ml-auto font-weight-bold mt-2">{money(price)}</p>
            </div>            
        </div>
    )
}

export default MenuItens