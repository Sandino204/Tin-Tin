import React, { useState } from 'react'
import Nav from '../../components/nav'
import {Button} from 'reactstrap'
import Pubs from '../../components/Pubs'
import {dbPubs, Ambev} from '../../database/db'
import AmbevAnounce from '../../components/AmbevAnounce'
import Arrow2 from '../../shared/Arrow2.png'
import './styles.css'
import { useHistory } from 'react-router-dom'

function Home(){

    const history = useHistory()

    const [value, setValue] = useState(0)

    function handleHome(){
        history.push('/')
    }
    

    function allPubs(data){
        return(
            data.map((pub) => {
                return(
                    <Pubs userThum={pub.thumb} userImg={pub.image} userName={pub.name} userId={pub.id} userDistance={pub.distance}></Pubs>
                )
            })
        )
    }

    // function handleButton(a){
    //     if(a === 'prox' && value !== 1){
    //         return setValue(1)
    //     }else if(a === 'prox' && value === 1){
    //         return setValue(0)
    //     }else if(a === 'pop' && value !== 2){
    //         return setValue(2)
    //     }else if(a === 'pop' && value === 2){
    //         return setValue(0)
    //     }else if(a === 'cheap' && value !== 3){
    //         return setValue(3)
    //     }else if(a === 'cheap' && value === 3){
    //         return setValue(0)
    //     }else if(a === 'music' && value !== 4){
    //         return setValue(4)
    //     }else if(a === 'music' && value === 4){
    //         return setValue(0)
    //     }
    // }

    return (
        <div className="container-fluid m-0 p-0">
            <div className="row shadow mb-3" onClick={() => handleHome()}>
                <div className="col-2 mt-2 mr-0 ml-3">
                    <img src={Arrow2} alt="" className="arrow2"/>
                </div>
                <h3 className=" col-9 mt-2 ml-0">Todos os locais</h3>
            </div>
            <Nav></Nav>
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="col-12 font-weight-bold titlesplaces my-2 mt-4">Baseados em seu perfil</h2>
                        <Pubs userThum={dbPubs[1].thumb} userImg={dbPubs[1].image} userName={dbPubs[1].name} userId={dbPubs[1].id} userDistance={dbPubs[1].distance}> </Pubs>
                    <h2 className="col-12 font-weight-bold titlesplaces my-2 ">Todos</h2>
                    {allPubs(dbPubs)}
                </div>    
            </div>    
        </div>
    )
}

export default Home