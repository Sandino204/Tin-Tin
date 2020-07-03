import React, { useState } from 'react'
import Nav from '../../components/nav'
import {Button} from 'reactstrap'
import Pubs from '../../components/Pubs'
import {dbPubs, Ambev} from '../../database/db'
import AmbevAnounce from '../../components/AmbevAnounce'

function Home(){

    const [value, setValue] = useState(0)


    
    function allPubs(data){
        return(
            data.map((pub) => {
                return(
                    <Pubs userThum={pub.thumb} userImg={pub.image} userName={pub.name} userId={pub.id}></Pubs>
                )
            })
        )
    }

    function handleButton(a){
        if(a === 'prox' && value !== 1){
            return setValue(1)
        }else if(a === 'prox' && value === 1){
            return setValue(0)
        }else if(a === 'pop' && value !== 2){
            return setValue(2)
        }else if(a === 'pop' && value === 2){
            return setValue(0)
        }else if(a === 'cheap' && value !== 3){
            return setValue(3)
        }else if(a === 'cheap' && value === 3){
            return setValue(0)
        }else if(a === 'music' && value !== 4){
            return setValue(4)
        }else if(a === 'music' && value === 4){
            return setValue(0)
        }
    }

    return (
        <div className="container-fluid m-0 p-0">
            <Nav></Nav>
            <AmbevAnounce ambevFoto={Ambev.thumb} ambevA={Ambev.anounce} text={'Anuncio novidades AMBEV'}></AmbevAnounce>
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="names col-12">Descubra novos Lugares</h2>
                    <Button className="col-4 rounded shadow bg-light text-dark ml-2 mb-2" onClick={() => handleButton('prox')}>Mais proximo</Button>
                    <Button className="col-4 rounded shadow bg-light text-dark ml-2 mb-2" onClick={() => handleButton('pop')}>Popular</Button>
                    <Button className="col-4 rounded shadow bg-light text-dark ml-2 mb-2" onClick={() => handleButton('cheap')}>Mais barato</Button>
                    <Button className="col-4 ml-2 mb-2 rounded shadow bg-light text-dark" onClick={() => handleButton('music')}>Musica</Button>
                    <p className="col-12">Feito para você</p>
                </div>    
                {allPubs(dbPubs)}
            </div>    
        </div>
    )
}

export default Home