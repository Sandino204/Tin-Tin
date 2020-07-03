import React from 'react'
import { Card, CardHeader, CardBody, CardImg, CardText } from 'reactstrap'

function AmbevAnounce({ambevFoto, ambevA, text }){
    return(
        <div className="row justify-content-center">
            <Card className="container mt-4 rounded bg-light shadow p-0 mb-4">
                <CardBody className="row justify-content-center">
                    <CardImg src={ambevA} alt="Ambev announce" className="col-11 rounded"/>
                </CardBody>
            </Card>
        </div>
    )
}

export default AmbevAnounce