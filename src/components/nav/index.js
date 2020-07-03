import React, { useState } from 'react'
import {Nav, Input, Row} from 'reactstrap'
import './styles.css'

function Navi(){

    const [menu, setMenu] = useState(false)

    const [search, setSearch] = useState('')

    function handleMenu(menu){
        menu = !menu
        return menu
    }

    return(
        <div className="container-fluid">
            <Nav className="row justify-content-center shadow">
                <i className="text-center col-2 col-md-1 rounded shadow toggleM bg-light text-dark fa fa-bars" onClick={() => handleMenu(menu)}></i>
                <Input type="text" className="col-10 col-md-11 input-nav bg-light" placeholder="O que você quer fazer hoje?" value={search} onChange={e => setSearch(e.target.value)}></Input>
            </Nav>
        </div>
    )
}

export default Navi