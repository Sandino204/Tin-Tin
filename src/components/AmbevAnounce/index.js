import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText } from 'reactstrap'

function AmbevAnounce({ambevFoto, ambevA, text }){
    return(
        <div className="row justify-content-center">
            <Card className="container mt-4 rounded bg-light shadow p-0 mb-4">
                <CardHeader className="row m-0">
                    <img src={ambevFoto} alt="ambevThumb" className="col-3 col-md-1 rounded-circle "/>
                    <h2 className="col-9 col-md-11 pl-0 mt-3 names">AMBEV</h2>
                </CardHeader>
                <CardBody className="row justify-content-center">
                    <CardImg src={ambevA} alt="Ambev announce" className="col-12"/>
                    <CardText className="centerimg">{text}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default AmbevAnounce