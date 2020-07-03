import React from 'react'
import {Card, CardBody, CardImg} from 'reactstrap'

function OurClients({thumb, name, image, id}){
    return(
        <Card className="container" key={id}>
            <CardBody className="Row justify-content-center">
                <div className="col-12 row dflex justify-content-center">
                    <img src={thumb} alt="thumb" className="ml-4"/>
                </div>
                <p className="names col-12 text-center font-weight-bold">{name}</p>
                <CardImg src={image} alt="image" className="col-12"/>
            </CardBody>
        </Card>
    )
}

export default OurClients