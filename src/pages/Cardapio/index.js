import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Input, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody} from 'reactstrap'
import Itens from '../../components/MenuItens'
import Tiket from '../../shared/Group.png'
import './styles.css'

function Menu({data}){

    const [value, setValue] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    function handleAddValue(value, valueIncrement){
        console.log(value)
        return(
            setValue(value + valueIncrement)
        )
    }

    function handleLessValue(value, valueDec){
        console.log(value)
        return(
            setValue(value - valueDec)
        )
    }

    function renderItensAll(itens){
        itens = itens.sort(function (a, b) {
            if(a.name > b.name){
                return 1
            }else if(a.name < b.name){
                return -1
            }
            return 0
        })
        return(
            itens.map((item) => {
                return(
                    <Itens item={item.name} itemImg={item.image} qtn={item.qtn} price={item.price} handleAddValue={handleAddValue} handleLessValue={handleLessValue} value={value}></Itens>
                )
            })
        )
    }

    function renderItensMostFamous(itens){
        itens = itens.sort(function (a, b) {
            if(a.fam > b.fam){
                return 1
            }else if(a.fam < b.fam){
                return -1
            }
            return 0
        })
        return(
            itens.slice(0, 5).map((item) => {
                return(
                    <Itens item={item.name} itemImg={item.image} qtn={item.qtn} price={item.price} handleAddValue={handleAddValue} handleLessValue={handleLessValue} value={value}></Itens>
                )
            })
        )
    }

    function handleModal(open){
        return !open
    }

    function Money(value){
        const numBr = new Intl.NumberFormat([], {
            style: 'currency', 
            currency: 'BRL'
        })

        return numBr.format(value)
    }

    return(
        <div className="container-fluid">
            {console.log(data)}
            <div className="row shadow bg-light">
                <Link to={`/bar/${data.id}`} className="col-2 col-md-1 row btn btn-light"><i className="col-12 fa fa-arrow-left text-dark bg-light arrow"></i></Link>
                <h2 className="col-9 col-md-11 ml-4 bg-light nameBar my-2">{data.name}</h2>
            </div>
            <div className="row mt-3 justify-content-center">
                <Input className="col-10 py-4" placeholder="Pesquisar"></Input>
            </div>
            <Card className="container mt-4 px-0 mx-0 justify-content-center">
                <CardHeader className="row m-0 ">
                    <h2 className="col-12 names font-weight-bold">Mais Vendidos</h2>
                </CardHeader>
                <CardBody className="row px-0 mx-0 justify-content-center">
                    {renderItensMostFamous(data.itens)}
                </CardBody>
            </Card>
            <Card className="container mt-4 px-0 mx-0">
                <CardHeader className="row m-0">
                    <h2 className="col-12 names font-weight-bold">Todos</h2>
                </CardHeader>
                <CardBody className="row px-0 mx-0 justify-content-center">
                    {renderItensAll(data.itens)}
                </CardBody>
            </Card>
            <Button className="Reserve" onClick={() => setIsOpen(handleModal(isOpen))}>Fazer Reserva <img src={Tiket} alt="" /></Button>
            <Modal className="modale container bg-white rounded shadow border0" isOpen={isOpen} toggle={() => setIsOpen(handleModal(isOpen))}>
                <ModalHeader className="row bg-light border0" toggle={() => setIsOpen(handleModal(isOpen))}>
                    <h2 className="names font-weight-bold col-3 text-dark">Total</h2>
                    <h2 className="names font-weight-bold col-3 text-dark">{Money(value)}</h2>
                </ModalHeader>
                <ModalBody className="row m-0 p-0 border0 mb-3">
                    <Button className="btn-light py-3 mt-0  text-seconday borderAll col-5">Delivery</Button>
                    <Button className="btn-dark  py-3 mt-0 text-white borderAll col-5 offset-2">Pedir na mesa</Button>
                </ModalBody>
            </Modal>
        </div>  
    )

}

export default Menu