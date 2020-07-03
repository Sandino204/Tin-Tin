import React from 'react'
import {Button} from 'reactstrap'
import './styles.css'
import { Link } from 'react-router-dom'
import Img from '../../shared/pubExemple.jpg'
import Cardapio from '../../shared/Vector.png'
import Map from '../../shared/Vector2.png'


function Pub ({data}){


    if(data === null || data === undefined){
        return(
            <></>
        )
    }else{  
        
        function isPremium(pre){
            if(pre === true){
                return 'Bar Premium' 
            }else{
                return 'Bar Iniciante'
            }
        }

        return(
            <div className="container-fluid ">
                <div className="row shadow bg-light">
                    <Link to="/" className="col-2 col-md-1 row btn btn-light"><i className="col-12 fa fa-arrow-left text-dark bg-light arrow"></i></Link>
                    <h2 className="col-9 col-md-11 ml-4 bg-light nameBar my-2">{data.name}</h2>
                </div>
                <div className="row bg-white mt-3 justify-content-center mb-5">
                    <div className="col-3 row justify-content-center mt-5">
                        <p className="col-12 mb-1 text-center font-weight-bold">Clientes</p>
                        <p className="col-12 text-center ml-4">{data.clients}</p>
                    </div>
                    <div className="col-6 row mt-3 justify-content-center font-weight-bold">
                        <p className="col-12 text-center">{isPremium(data.bar)}</p>
                    </div>
                    <div className="col-3 row mt-5 justify-content-center">
                        <p className="col-12 text-center mb-1 font-weight-bold">Lotação</p>
                        <p className="col-12 text-center ml-4">{data.full}%</p>
                    </div>
                </div>
                <div className="container mb-4">
                    <div className="row justify-content-center">
                        <img src={Img} alt="Imagem do Bar" className="col-12 img-thumbnail shadow"/>
                    </div>
                    <div className="row justify-content-around">
                        <Button className="btn-light shadow rounded col-3 row buttonsPub mt-3 ">
                            <img src={Cardapio} alt="Cardapio"/>
                            <p className="text-dark">Cardapio</p>
                        </Button>
                        <Button className="btn-light shadow rounded col-3 row buttonsPub mt-3 ">
                            <i className="fa fa-user"></i>
                            <p className="text-dark">Entrar no chat</p>
                        </Button>
                        <Button className="btn-light shadow rounded col-3 row buttonsPub mt-3">
                            <img src={Map} alt="Maps"/>
                            <p className="text-dark">Abrir no Maps</p>
                        </Button>
                    </div>
                    <div className="row justify-content-center my-4">
                        <div className="shadow rounded col-11">
                            <p className="mb-1">{data.description1}</p>
            
                            <p>{data.description2}</p>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="col-12 px">Proximos Eventos</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pub