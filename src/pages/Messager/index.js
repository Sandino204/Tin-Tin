import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import ScrollBar from "react-perfect-scrollbar";
import Msg from '../../components/Msg'
import Smile from '../../shared/Group21.png'
import {Input} from 'reactstrap'
import {Camera} from '../../shared/Group20.png'
import {Arrow} from  '../../shared/Arrow2.png'

function Mensager({texts}){

    const [ms, setMs] = useState('')


    if(texts === undefined || texts === null){
        return(<></>)
    }else{



        function renderAllMsgs(msgs){
            msgs = msgs.sort(function (a, b) {
                if(a.id > b.id){
                    return 1
                }else if(a.fam < b.fam){
                    return -1
                }
                return 0
            })
            return(
                msgs.slice(0, 10).map((msg) => {
                    return(
                        <Msg msg={msg.mensage} name={msg.name}></Msg>
                    )
                })
            )
        }

        function handleMsn(ms){
            texts.mensages.push({
                mensage: ms, 
                name: 'eu',
                id: texts.mensages.length - 1, 
            })
        }

        return(
            <div className="container-fluid cont">
                <div className="row shadow bg-light">
                    <Link to="/" className="col-2 col-md-1 row btn btn-light"><i className="col-12 fa fa-arrow-left text-dark bg-light arrow"></i></Link>
                    <img src={require(`../../${texts.thumb}`)} alt="" className="lala"/>
                    <h2 className="col col-md-11 ml-4 bg-light nameBar my-2 text-justify">{texts.name}</h2>
                </div>
                <div className="row allM">
                    <div className="div mt-auto">
                        {renderAllMsgs(texts.mensages)}
                    </div>
                </div>
                <div className="row inputs shadow">
                    <div className="col-2 row">
                        <img src={Smile} alt="" />
                    </div>
                    <Input type="text" placeholder="Digite..." className="col-8 ml-2" onChange={e => setMs(e.target.value)}/>
                    <div className="col-2 row justify-content-end" onClick={() => handleMsn(ms)}>
                        <img src={require('../../shared/VectorArrow.png')} alt="" className="ml-auto"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Mensager